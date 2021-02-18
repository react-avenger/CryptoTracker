import { StyleSheet } from 'react-native';
import { Colors } from '../../constant';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 24,
  },

  backTxt: {
    color: Colors.PRIMARY,
    fontWeight: 'bold',
  },

  insiderView: {
    flex: 1,
    justifyContent: 'center',
  },

  addCurrencyTxt: {
    fontSize: 20,
    color: Colors.BLACK,
    marginVertical: 20,
    fontWeight: 'bold',
  },

  txtInput: {
    borderColor: Colors.BLACK,
    borderWidth: 0.5,
    borderRadius: 4,
    paddingHorizontal: 10,
  },

  customBtn: {
    alignSelf: 'flex-end',
    marginTop: 10,
    backgroundColor: Colors.SECONDARY,
  },

  customBtnTxt: {
    color: Colors.BLACK,
    opacity: 0.5,
  },

  seperator: {
    borderBottomWidth: 0.3,
    borderColor: Colors.GREY,
  },

  searchListItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  listItemView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },

  iconView: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginRight: 10,
  },
});

export default styles;
