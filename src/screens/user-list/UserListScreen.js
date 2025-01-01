import React, { useEffect,useLayoutEffect,useState } from 'react';
import { View, Text, FlatList, Button, ActivityIndicator, TouchableOpacity,Switch ,Image} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/UserSlice';
import UserListItem from '../../components/user-list-item/UserListItem';
import ScreenHeader from '../../components/screen-header/ScreenHeader';


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
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',paddingTop: 20}}>
      <ScreenHeader heading="User List" />
    

      {loading ? (
  // 🟡 Show Loader when loading is true
  <ActivityIndicator size="large" color="#0000ff" />
) : error ? (
  // 🔴 Show Retry Button when there's an error
  <TouchableOpacity onPress={() => dispatch(fetchUsers())} style={{alignItems: 'center',flex:1,justifyContent:'center'}}>
    <Image source={require('../../assets/images/retry-image.png')} style={{width: 50, height: 50}} />
    <Text style={{color: 'red', marginTop: 10}}>Failed to load users. Tap to retry.</Text>
  </TouchableOpacity>
) : users.length < 1 ? (
  // 🟢 Show "No users available" if loading & error are false, but users array is empty
  <Text style={{textAlign: 'center'}}>No users available</Text>
) : (
  // ✅ Display the User List if everything is fine
  <View style={{flex: 1, width: '100%'}}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
      <Text>Sort by name</Text>
      <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabledName ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={sortByName}
          value={isEnabledName}
        />
      </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
      <Text>Sort by email</Text>
      <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabledEmail ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={sortByEmail}
          value={isEnabledEmail}
        />
      </View>
      </View>
    <FlatList
      data={usersList}
      keyExtractor={(item) => item.email}
      renderItem={({item, index}) => (
        <UserListItem 
          name={item.name.first} 
          email={item.email} 
          onPress={() => navigation.navigate('UserDetail', {user: item})} 
          id={index} 
          imgUrl={item.picture.medium} 
          phone={item.phone} 
        />
      )}
    />
  </View>
)}

    </View>
    // <TouchableOpacity onPress={()=>navigation.navigate('UserDetail')} style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor
    // :'red'
    // }}> 
    //   <Text style={{color:'yellow'}}>UserListScreen</Text></TouchableOpacity>
  );
};
export default UserListScreen;
