import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#4CAF50', // Background color
        paddingVertical: 20, // Increased vertical padding for better space
        paddingHorizontal: 20, // Horizontal padding
        borderBottomWidth: 4, // Thicker bottom border for more emphasis
        borderColor: '#388E3C', // Matching border color
        alignItems: 'center', // Center the text horizontally
        justifyContent: 'center', // Center the text vertically
        marginBottom: 20, // Adds space below the header
        shadowColor: '#000', // Shadow color
        shadowOffset: { width: 0, height: 4 }, // Shadow direction
        shadowOpacity: 0.1, // Slight shadow opacity
        shadowRadius: 6, // Shadow blur radius
        elevation: 5, // Android shadow
        borderRadius: 10, // Rounded corners for a softer look
      },
    headerText: {
        color: 'white', // White text color for contrast
        fontSize: 30, // Larger font size for a bolder statement
        fontWeight: 'bold', // Bold text to stand out
        textAlign: 'center', // Center the text
        letterSpacing: 1, // Space between letters for clarity
        textShadowColor: '#000', // Shadow color for better visibility
        textShadowOffset: { width: 1, height: 1 }, // Slight shadow for depth
        textShadowRadius: 3, // Soft shadow blur
        fontFamily: 'Arial', // A clean, standard font style
      },
});
export default styles;