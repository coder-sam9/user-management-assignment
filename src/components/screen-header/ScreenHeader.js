import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
const ScreenHeader = ({heading}) => {
  return (
    <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            {heading}
          </Text>
        </View>
  )
}

export default ScreenHeader

