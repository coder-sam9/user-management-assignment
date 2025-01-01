import React, { useEffect,useLayoutEffect,useState } from 'react';
import { View, Text, FlatList, Button, ActivityIndicator, TouchableOpacity,Switch ,Image} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/UserSlice';
import UserListItem from '../../components/user-list-item/UserListItem';
import ScreenHeader from '../../components/screen-header/ScreenHeader';
import styles from './styles';

const UserListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);
  const [usersList, setUsersList] = useState(users);
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  
  useEffect(() => {
    setUsersList(users); // Keep usersList updated with the latest fetched users
  }, [users]);
  
const [isEnabledName, setIsEnabledName] = useState(false);
const [isEnabledEmail, setIsEnabledEmail] = useState(false);

// Sorting by Name
const sortByName = () => {
  setIsEnabledName(true);  // Enable Name Sorting
  setIsEnabledEmail(false); // Disable Email Sorting
  setUsersList([...usersList].sort((a, b) => a.name.first.localeCompare(b.name.first)));
};

// Sorting by Email
const sortByEmail = () => {
  setIsEnabledEmail(true); // Enable Email Sorting
  setIsEnabledName(false); // Disable Name Sorting
  setUsersList([...usersList].sort((a, b) => a.email.localeCompare(b.email)));
};

  return (
    <View style={styles.container}>
      {(!loading || !error) && <ScreenHeader heading="User List" />}
      
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.loadingText}>Fetching the data, please wait</Text>
        </View>
      ) : error ? (
        <TouchableOpacity onPress={() => dispatch(fetchUsers())} style={styles.errorContainer}>
          <Image source={require('../../assets/images/retry-image.png')} style={styles.retryImage} />
          <Text style={styles.errorText}>Failed to load users. Tap to retry.</Text>
        </TouchableOpacity>
      ) : users.length < 1 ? (
        <Text style={styles.emptyText}>No users available</Text>
      ) : (
        <View style={styles.listContainer}>
          <View style={styles.sortContainer}>
            <View style={styles.switchContainer}>
              <Text>Sort by name</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabledName ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={sortByName}
                value={isEnabledName}
              />
            </View>
            <View style={styles.switchContainer}>
              <Text>Sort by email</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabledEmail ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={sortByEmail}
                value={isEnabledEmail}
              />
            </View>
          </View>
          <FlatList
            data={usersList}
            keyExtractor={(item) => item.email}
            renderItem={({ item, index }) => (
              <UserListItem
                name={item.name.first.trim()}
                email={item.email.trim()}
                onPress={() => navigation.navigate('UserDetail', { user: item })}
                id={index}
                imgUrl={item.picture.medium}
                phone={item.phone}
              />
            )}
          />
        </View>
      )}
    </View>
  );
};

export default UserListScreen;
