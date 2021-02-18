import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Alert,
} from 'react-native';

import styles from './styles';
import { Colors } from '../../constant';
import ApiConstants from '../../api/ApiConstants';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/Feather';

export default function ListItem({ item, index, props, onRemoveClick }) {
  const [price, setPrice] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPrice(item.market_data.price_usd);
    setPercentage(item.market_data.percent_change_usd_last_24_hours);
    const interval = setInterval(() => {
      loadData(item.id);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const renderLeftActions = (item, index) => {
    return (
      <View style={styles.swipeContainer} onPress={() => {}}>
        <TouchableOpacity
          onPress={() => onRemoveClick(item?.id)}
          style={styles.touchableContainer}>
          <Animated.View>
            <Text>{'Delete'}</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  };

  const loadData = id => {
    const url =
      ApiConstants.BASE_URL +
      ApiConstants.SEARCH +
      '/' +
      `${id}` +
      ApiConstants.CURRENCY_METRIC;

    fetch(url)
      .then(res => res.json())
      .then(json => {
        setPrice(json.data.market_data.price_usd);
        setPercentage(json.data.market_data.percent_change_usd_last_24_hours);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Swipeable
      key={index}
      overshootRight={false}
      renderRightActions={() => renderLeftActions(item, index)}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => alert(item?.name)}>
        <View style={styles.flexDirRow}>
          <Image
            style={styles.iconStyle}
            source={{
              uri:
                ApiConstants.ICON_BASE_URL +
                `${item?.id}` +
                ApiConstants.ICON_SIZE,
            }}
          />
          <View>
            <Text style={styles.currencyName}>{item?.name}</Text>
            <Text>{item?.symbol}</Text>
          </View>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Text style={styles.priceTxt}>{' $' + price.toFixed(2)}</Text>
          <View style={styles.flexDirRow}>
            {percentage > 0 ? (
              <Icon name="trending-up" size={20} color={Colors.GREEN_PRIMARY} />
            ) : (
              <Icon name="trending-down" size={20} color={Colors.RED} />
            )}
            <Text
              style={{
                color: percentage > 0 ? Colors.GREEN_PRIMARY : Colors.RED,
                marginLeft: 10,
              }}>
              {percentage.toFixed(2)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
}
