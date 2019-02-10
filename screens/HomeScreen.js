import React from 'react';
import {
  Image,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
  Alert,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import {Blink} from '../components/Blink';
import {PizzaTranslator} from '../components/PizzaTranslator';
import { OriginalContent } from '../components/OriginalContent';
import { FlatListBasics } from '../components/FlatListBasics';
import { SectionListBasics } from '../components/SectionListBasics';
import { NetworkingBasics } from '../components/NetworkingBasics';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <NetworkingBasics></NetworkingBasics>
      // <SectionListBasics></SectionListBasics>
      // <FlatListBasics></FlatListBasics>
    );
  }
}

const styles = StyleSheet.create({
  test: {
    backgroundColor: '#fff',
  },
  
});
