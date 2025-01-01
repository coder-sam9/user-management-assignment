# User Management App

This project is a **User Management App** built using **React Native** with the following features:

1. **User List Screen:** Displays a list of users fetched from an external API.
2. **User Detail Screen:** Provides detailed information about a selected user.
3. **Sorting Functionality:** Allows sorting users by name or email.
4. **State Management:** Implemented using **Redux Toolkit**.
5. **API Handling:** Managed using **Redux-Thunk**.
6. **Error Handling:** Includes a retry button for API errors.
7. **Navigation:** Powered by **React Navigation**.
8. **Responsive Design:** Styled with **StyleSheet** for adaptability across devices.

## Setup Instructions

### Prerequisites
Make sure you have the following tools installed:
- **Node.js** (LTS version)
- **React Native CLI**
- **Android Studio** (for Android development) or **Xcode** (for iOS development)

### Installation Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/coder-sam9/user-management-assignment.git
   cd user-management-assignment
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   # OR
   yarn install
   ```

3. **Run the App:**

#### For Android:
```bash
npm run android
# OR
yarn android
```

#### For iOS:
```bash
npm run ios
# OR
yarn ios
```

4. **Start the Metro Bundler:**
```bash
npm start
# OR
yarn start
```

5. **Access the App:**
   - On Android, the app will launch in your emulator or connected device.
   - On iOS, the app will launch in the iOS Simulator.

## API Integration
- The app fetches user data from [Random User API](https://randomuser.me/api/?results=10).
- Error states are handled gracefully with retry options.

## Folder Structure
```
src/
├── components/       # Reusable UI components
├── screens/          # App screens (UserList, UserDetail)
├── redux/            # Redux state management
│   ├── slices/       # State slices
│   ├── store.js      # Redux store
├── assets/           # Images and assets
└── App.js            # Entry point
```

## Troubleshooting
- Ensure your development environment is correctly set up as per the [React Native Environment Setup Guide](https://reactnative.dev/docs/environment-setup).
- Check for any errors in the terminal and follow the suggested fixes.

## Contributions
Feel free to fork this repository, create a new branch, and submit a pull request.

## License
This project is licensed under the **MIT License**.

For further inquiries or support, please contact the repository owner.

---

Thank you for checking out this project! Ensure all prerequisites are met for a smooth experience.
