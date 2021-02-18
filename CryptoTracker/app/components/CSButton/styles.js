import { StyleSheet, Dimensions } from 'react-native';
let Window = Dimensions.get('window');
import { Colors } from '../../constant';

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 4,
  },

  btnTxt: {
    fontSize: 14,
    color: Colors.WHITE,
    paddingHorizontal: 50,
    paddingVertical: 10,
    fontWeight: 'bold',
  },
});

export default styles;
