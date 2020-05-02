import React from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';

export default class NewsRow extends React.Component {

  constructor(props){
    super(props);
    this.navigation = props.navigation;
  }

  onItemClick = () => {
    console.log('onItemClick');
    this.navigation.navigate('Article', {
      detail: this.props.detail
    })
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onItemClick}>
        <View style={styles.row}>
        <Image style={styles.picture} source={{ uri: this.props.image }} />
          <View style={{width: 250}} >
            <Text style={styles.primaryText}>
              {this.props.section}>{this.props.nypt}
            </Text>
            <Text style={styles.secondaryText}>
              {this.props.title}
            </Text>
          </View>
          <View style={styles.icon}>
            <Text style={styles.date}>
              {this.props.date}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  row: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 12 ,
    borderBottomWidth:1,
    borderBottomColor:'grey'  
  },
  picture: { width: 50, height: 50, borderRadius: 25, marginRight: 18 },
  primaryText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
    marginBottom: 4,
  },
  secondaryText: { color: 'grey' },

  icon: {
    borderBottomWidth:1,
    borderBottomColor:'grey'  ,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  date : {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 30
  }
});
