import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';

const GamesWebView = () => {
  return (
    <WebView
      source={{
        uri:
          'https://games.cdn.famobi.com/html5games/s/sudoku-classic/v230/?fg_domain=play.famobi.com&fg_aid=A1000-1&fg_uid=562b648b-7d87-4752-a310-dfdcc656cdba&fg_pid=4638e320-4444-4514-81c4-d80a8c662371&fg_beat=406&original_ref=https%3A%2F%2Fhtml5games.com%2F',
      }}
    />
  );
};

export default GamesWebView;
