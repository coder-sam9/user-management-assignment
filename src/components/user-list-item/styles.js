import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      backgroundColor: '#fff', // Consistent white background
      marginHorizontal: '5%',
      marginVertical: '2%',
      borderRadius: 12,
      padding: 15,
      borderWidth: 0.8,
      boxShadow: '3px 3px 3px 1px rgba(82, 82, 82, 0.75)', 
    },
    image: {
      width: 55,
      height: 55,
      borderRadius: 27.5, // Perfectly round image
      marginRight: 15,
      borderWidth: 1,
      borderColor: '#ddd',
      alignSelf: 'center',
    },
    info: {
      justifyContent: 'center',
      width: '75%',
    },
    name: {
      fontSize: 18,
      fontWeight: '600',
      color: '#333', // Dark text for readability
      marginBottom: 5,
    },
    infoText: {
      fontSize: 14,
      color: '#555', // Lighter text for secondary info
      marginBottom: 3,
    },
  });
  export default styles;