import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    info: {
      width: '90%',
      alignSelf: 'center',
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 10,
      margin: 10,
      borderWidth: 0.5,
      borderColor: 'gray',
      boxShadow: '3px 3px 3px 1px rgba(82,82,82,0.75)',
    }, infoText: {
      fontSize: 16, // Standard font size
      fontWeight: '400', // Regular weight for balance
      color: '#333', // Dark gray text for readability
      lineHeight: 22, // Proper line height for easier reading
    },
    label: {
      fontWeight: 'bold', // Make the label bold for distinction
      color: '#4CAF50', // Color to highlight the label part
    },
  });
  export default styles;
