import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { Asset } from 'expo-asset';

const editor = require('../../dist/editor.html');

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['this', 'is', 'another', 'text'],
      isHTMLFileLoaded: false
    };
  }

  componentDidMount() {
    this.HTMLFile = Asset.fromModule(editor)

    if (!this.HTMLFile.localUri) {
      Asset.loadAsync(editor).then(() => {
        this.HTMLFile = Asset.fromModule(editor);
        this.setState({ isHTMLFileLoaded: true });
      });
    }
    else {
      this.setState({ isHTMLFileLoaded: true });
    }
  }

  onMessage(event) {
    alert(event.nativeEvent.data);
  }

  // generating the script to be injected into the webview
  injectedJavaScript() {
    var words = 'words = [';
    for (let i = 0; i < this.state.words.length; i++) {
      words += '"' + this.state.words[i] + '"' + (i < this.state.words.length - 1 ? ',' : '');
    }
    words += '];';
    return words;
  }

  render() {
    if (!this.state.isHTMLFileLoaded) {
      return null;
    }
    const { localUri } = this.HTMLFile;
    return (
      <WebView
        originWhitelist={['*']}
        allowFileAccess={true}
        source={
          Platform.OS === 'android'
            ? {
              uri: localUri.includes('ExponentAsset')
                ? localUri
                : 'file:///android_asset/' + localUri.substr(9)
            }
            : editor}
        style={{marginTop: 20}}
        onMessage={this.onMessage}
        injectedJavaScript={this.injectedJavaScript()}
      />
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default Editor;