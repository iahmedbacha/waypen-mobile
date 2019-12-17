import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { Asset } from 'expo-asset';

const editor = require('../../dist/editor.html');

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: null,
      isHTMLFileLoaded: false
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.setState({words: navigation.getParam('text').content.split(' ')});
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


  onMessage = (event) => {
    this.props.navigation.navigate('Test', {
      data: event.nativeEvent.data
    });
  }

  // generating the script to be injected into the webview
  run() {
    var script = `words = [`;
    for (let i = 0; i < this.state.words.length; i++) {
      script += `"${this.state.words[i]}"` + (i < this.state.words.length - 1 ? `,` : ``);
    }
    script += `];`;
    return script;
  }

  render() {
    if (!this.state.isHTMLFileLoaded) {
      return null;
    }
    const { localUri } = this.HTMLFile;
    const run = this.run();
    setTimeout(() => {
      this.webref.injectJavaScript(run);
    }, 25);
    return (
      <WebView
        ref={r => (this.webref = r)}
        originWhitelist={['*']}
        onMessage={event => this.onMessage(event)}
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