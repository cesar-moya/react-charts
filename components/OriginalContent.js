import React, { Component } from 'react';
import {
  Image,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Alert,
} from 'react-native';
import { MonoText } from '../components/StyledText';

export class OriginalContent extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  _onPress_ShowAlert() {
    Alert.alert('on showalert function!');
  }

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer} >
        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
          </TouchableOpacity>
        </View>

        <View style={{ margin: 5 }}>
          <Button
            onPress={() => {
              Alert.alert('inline function');
            }}
            title='PresionaME'
            color='green'
          />
        </View>

        <View style={{ margin: 5 }}>
          <Button
            onPress={this._onPress_ShowAlert}
            title='External func'
            color='green'
          />
        </View>

        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>

        <TouchableNativeFeedback
          onPress={this._onPressButton}
          background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>

        <Text>Lorem ipsu m dolor sit amet, consectetur adipiscing elit. Ut vestibulum risus ut enim condimentum gravida. Nunc vitae augue sed orci vehicula gravida. Maecenas ut ipsum mi. Maecenas a nunc porta, suscipit enim a, ultrices nisi. Pellentesque rhoncus vestibulum sapien, vel tincidunt nisi mollis eget. Phasellus eu mauris vestibulum, vestibulum quam ut, mollis diam. Proin sit amet ante suscipit, fermentum enim at, sollicitudin dolor.Aenean dapibus tempus nisi, vitae maximus purus pulvinar vitae. Donec vestibulum nisl eu justo suscipit, at consectetur libero aliquam. Integer at ultricies ipsum, sit amet consequat dolor. In ullamcorper sit amet dui id tempor. Sed blandit nibh sit amet mi porta dignissim. Morbi semper vehicula massa, vel porttitor ante interdum dignissim. Duis luctus ut enim eget molestie.Aliquam luctus sapien tincidunt risus viverra, sed pharetra sapien iaculis. Pellentesque quis tristique velit. Morbi pretium mi non vulputate malesuada. Sed nec sem eros. Morbi nec risus consectetur, cursus urna vel, tempus diam. Nulla fringilla feugiat vestibulum. Ut quis turpis quis erat auctor venenatis sed ac nunc.Integer ut turpis semper, congue sem in, lobortis sem. Aenean pulvinar ultrices orci, eu aliquet enim aliquam non. Vestibulum quis commodo orci. Mauris facilisis, elit a accumsan auctor, odio orci suscipit nibh, at sagittis est ex vel felis. Donec augue tellus, facilisis non lorem eget, hendrerit sagittis felis. Donec ac faucibus purus. Duis vel odio at arcu volutpat feugiat vel eu nulla. Nunc lacinia bibendum dapibus. Suspendisse dapibus venenatis risus bibendum posuere. Phasellus dictum in est ultricies pellentesque. Suspendisse laoreet laoreet ex, placerat semper odio molestie eu. In diam leo, tempor a tristique et, pellentesque eu est. Donec sodales eros malesuada, dictum turpis ac, cursus tortor. Morbi eu dolor molestie, pretium turpis quis, interdum ex. Donec viverra ex nec felis imperdiet hendrerit. Donec rhoncus eu arcu non hendrerit. Donec rhoncus eu arcu non hendrerit.Donec rhoncus eu arcu non hendrerit.Donec rhoncus eu arcu non hendrerit.Donec rhoncus eu arcu non hendrerit.Donec rhoncus eu arcu non hendrerit.Donec rhoncus eu arcu non hendrerit.Donec rhoncus eu arcu non hendrerit.</Text>

        {this._maybeRenderDevelopmentModeWarning()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    padding: 4,
    // flex: 1,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
