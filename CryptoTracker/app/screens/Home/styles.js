import { StyleSheet } from 'react-native';
import { Colors } from '../../constant';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  headerView: {
    height: 100,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.PRIMARY,
  },

  headerTxt: {
    fontSize: 20,
    color: Colors.WHITE,
  },

  headerImg: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },

  insiderView: {
    flex: 1,
    justifyContent: 'center',
  },

  addTxt: {
    fontSize: 16,
    marginBottom: 50,
    color: Colors.PRIMARY,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  seperator: {
    borderBottomWidth: 0.3,
    borderColor: Colors.GREY,
  },
});

export default styles;
