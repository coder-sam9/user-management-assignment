import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const InfoDisplay = ({label,info}) => {
  return (
    <View style={styles.info}>
      <Text style={styles.infoText}>
        <Text style={styles.label}>{label}: </Text>
        {info}
      </Text>
    </View>
  );
};

export default InfoDisplay;


