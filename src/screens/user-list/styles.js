import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
  },
  errorContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    fontSize: 18,
    fontWeight: '400',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
  sortContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  retryImage: {
    width: 100,
    height: 100,
  },
  emptyContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default styles;