import React from 'react';
import { 
  StyleSheet, Text, 
  View, Image, TextInput, 
  Dimensions, TouchableOpacity } from 'react-native';
import { WebView } from "react-native-webview";
import { FloatingAction } from "react-native-floating-action";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const actions = [
    {
      text: "MSG",
      icon: require("./assets/msg.png"),
      name: "bt_msg",
      position: 1
    }
  ];

export default class DetailNews extends React.Component {

  constructor(props) {
    super(props);
    this.title = props.route.params.title;
    this.detail = props.route.params.detail;
    this.image = props.route.params.image;
  }

  render() {
    return (
        <View style={styles.container}>        
            <WebView
                style={{flex: 1}}
                originWhitelist={['*']}
                source={{uri: this.detail}}
                style={{ marginTop: 20 }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
            />
            <FloatingAction
            actions={actions}
            onPressItem={name => {
                if(name === 'bt_msg') {
                this.navigation.navigate('MSG');
                }
            }}
            />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row'
  },

  simpleInput: {
    width: width - 40,
    marginTop: 30,
    height: 40, 
    borderColor: '#FF80AB', 
    paddingHorizontal: 10,
    borderWidth: 1
  },


  buttonText: {
    color: 'white'
  }
});
