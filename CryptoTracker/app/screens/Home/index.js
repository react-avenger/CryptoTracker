import React, { PureComponent } from 'react';
import { View, Text, Image, SafeAreaView, FlatList, Alert } from 'react-native';
import ListItem from '../../components/ListItem';
import { connect } from 'react-redux';
import styles from './styles';
import ApiConstants from '../../api/ApiConstants';
import { currencyRemoveRequest } from '../../actions/currencyActions';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listCurrencyData: [],
    };
  }

  componentDidMount = () => {
    const { navigation, addedCurrencyData } = this.props;
    this.focusView = navigation.addListener('focus', () => {
      if (addedCurrencyData.length == 0) {
        this.setState({ listCurrencyData: [] });
      }
    });
    if (addedCurrencyData.length >= 0) {
      this.loadData(addedCurrencyData);
    }
  };

  UNSAFE_componentWillReceiveProps(props) {
    const { addedCurrencyData } = props;
    if (addedCurrencyData.length > 0) {
      this.loadData(addedCurrencyData);
    } else {
      this.setState({ listCurrencyData: [] });
    }
  }

  loadData = async addedCurrencyData => {
    var loadedCurrencyData = [];
    addedCurrencyData.map(async (currencyId, index) => {
      const url =
        ApiConstants.BASE_URL +
        ApiConstants.SEARCH +
        '/' +
        `${currencyId}` +
        ApiConstants.CURRENCY_METRIC;

      const res = await fetch(url);
      const response = await res.json();
      loadedCurrencyData.push(response.data);
      if (addedCurrencyData.length - 1 == index) {
        this.setState({
          listCurrencyData: loadedCurrencyData,
        });
      }
    });
  };

  renderSeparator = () => {
    return <View style={styles.seperator} />;
  };

  onRemoveClick = index => {
    const { dispatch } = this.props;
    Alert.alert(
      'Are you sure?',
      'You want to remove this currency?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
        },
        {
          text: 'OK',
          onPress: () => {
            dispatch(currencyRemoveRequest(index));
            this.componentDidMount();
          },
        },
      ],
      { cancelable: false },
    );
  };

  render() {
    const { listCurrencyData } = this.state;
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.headerView}>
          <Text style={styles.headerTxt}>{'CryptoTracker Pro'}</Text>
          <Image
            style={styles.headerImg}
            source={{ uri: ApiConstants.HOME_IMAGE }}
          />
        </View>

        <View style={styles.insiderView}>
          {listCurrencyData.length > 0 && (
            <FlatList
              data={listCurrencyData}
              extraData={this.state}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <ListItem
                  item={item}
                  index={index}
                  props={this.props}
                  onRemoveClick={id => this.onRemoveClick(id)}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={this.renderSeparator}
            />
          )}
          <Text
            style={styles.addTxt}
            onPress={() => this.props.navigation.navigate('SearchCurrency')}>
            {'+ Add a Cryptocurrency'}
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
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
)(Home);
