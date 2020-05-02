import React from 'react';
import { 
  StyleSheet,
  View, 
  Dimensions, FlatList, Text} from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import NewsRow from './NewsRow';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class News extends React.Component {

  constructor(props){
    super(props);
    this.navigation = props.navigation;
    this.state = {
      news: []
    }
  }

  componentDidMount(){
    console.log('componentDidMount');
    fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=h2bUbNEIADVdaiFARTbcP0pLzotJW5P1")
    .then(response => response.json())
    .then((responseJson)=> {
      console.log('My News');
      this.setState({
        news: responseJson.results
      })
    })
    .catch(error => console.log(error)) //to catch the errors if any
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.state.news}
          renderItem={
            ({item}) => <NewsRow
            section={item.section}
            nypt={item.nytdsection}
            image={item.media.type}
            title={item.title}
            detail={item.url}
            navigation={this.navigation}
            date = {item.published_date}
          />
          }
          >
        </FlatList>
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

  list: {
    
  }
});
