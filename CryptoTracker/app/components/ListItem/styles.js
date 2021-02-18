import { StyleSheet } from 'react-native';
import { Colors } from '../../constant';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    paddingHorizontal: 24,
    flexGrow: 1,
    justifyContent: 'space-between',
  },

  iconStyle: {
    height: 40,
    width: 40,
    borderRadius: 15,
    marginRight: 20,
  },

  currencyName: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  priceTxt: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  flexDirRow: {
    flexDirection: 'row',
  },

  swipeContainer: {
    backgroundColor: Colors.SECONDARY,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    width: 60,
  },

  touchableContainer: {
    display: 'flex',
    height: '100%',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
  },
});

export default styles;
