import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import CSButton from '../../components/CSButton';
import styles from './styles';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import { Colors, IconConst } from '../../constant';
import {
  currencyAddRequest,
  currencySearchRequest,
} from '../../actions/currencyActions';

class SearchCurrency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: '',
      currencyId: '',
      data: [],
    };
    this.arrayholder = [];
  }

  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(currencySearchRequest());
  };

  UNSAFE_componentWillReceiveProps(props) {
    const { currencyData } = props;
    if (currencyData) {
      this.setState({
        data: currencyData,
      });
      this.arrayholder = currencyData;
    }
  }

  searchFilterFunction = text => {
    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.toUpperCase()}   
      ${item.symbol.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({ data: newData, currency: text });
  };

  renderSeparator = () => {
    return <View style={styles.seperator} />;
  };

  onAddClick = () => {
    const { currency, currencyId } = this.state;
    const { dispatch } = this.props;
    if (currency == '') {
      alert('Please add currency');
    } else {
      if (this.props.addedCurrencyData.indexOf(currencyId) > -1) {
        alert('Please add other currency');
      } else {
        dispatch(currencyAddRequest(currencyId));
        this.props.navigation.navigate('Home');
        this.setState({ currency: '' });
      }
    }
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.searchListItemContainer}>
          <Icon size={16} color={Colors.PRIMARY} name="left" />
          <Text
            style={styles.backTxt}
            onPress={() => this.props.navigation.goBack()}>
            {' Back to list'}
          </Text>
        </View>
        <View style={styles.insiderView}>
          <Text style={styles.addCurrencyTxt}>{'Add a Cryptocurrency'}</Text>

          <TextInput
            style={styles.txtInput}
            placeholder="Use a name or ticker symbol..."
            value={this.state.currency}
            onChangeText={currency => this.searchFilterFunction(currency)}
          />

          <CSButton
            btnStyle={styles.customBtn}
            txtStyle={styles.customBtnTxt}
            onPress={() => this.onAddClick()}
            BtnName={'ADD'}
          />
          {this.state.data.length > 0 && (
            <FlatList
              data={this.state.data}
              extraData={this.state}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.listItemView}
                  onPress={() =>
                    this.setState({ currency: item.name, currencyId: item.id })
                  }>
                  <Image
                    style={styles.iconView}
                    source={{
                      uri:
                        IconConst.ICON_BASE_URL +
                        `${item?.id}` +
                        IconConst.ICON_SIZE,
                    }}
                  />
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={this.renderSeparator}
            />
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currencyData: state.currencyReducer.currencySearchRes,
  addedCurrencyData: state.currencyReducer.addedCurrencyData,
});

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchCurrency);
