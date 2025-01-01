import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import InfoDisplay from '../../components/info-display/InfoDisplay';
import ScreenHeader from '../../components/screen-header/ScreenHeader';
import styles from './styles';

const UserDetailScreen = ({route}) => {
  const {user} = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', padding: 20}}>
      <ScreenHeader heading="User Details" />
      <Image
        source={{uri: user.picture.large}}
        style={styles.image}
      />
    <InfoDisplay label="Name" info={user.name.first + ' ' + user.name.last} />
    <InfoDisplay label="Email" info={user.email} />
    <InfoDisplay label="Phone" info={user.phone} />
      {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color:'red'}}>UserDetailScreen</Text>
      </View> */}
    </View>
  );
};


export default UserDetailScreen;
