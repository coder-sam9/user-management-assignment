import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './styles';

const UserListItem = ({ name, email, onPress, id, imgUrl, phone }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: imgUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.infoText}>Email: {email}</Text>
        <Text style={styles.infoText}>Phone: {phone}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserListItem;


