import React from 'react';
import { StyleSheet, View } from 'react-native';
import Landing from './telas/Landing';
import Search from './telas/Search';

/* variáveis */
/* var fundo = require('./assets/landing.jpg') */


export default class App extends React.Component {
  state = {
    currentScreen: "search" 
  }
  renderScreen = () => {
    if(this.state.currentScreen === "landing") {
      return(
        <Landing />
      )
    }
    else if(this.state.currentScreen === "search") {
      return(
        <Search />
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderScreen()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  
  /* containers */
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  

});
