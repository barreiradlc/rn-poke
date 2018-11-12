import React from 'react';
import { StyleSheet, View } from 'react-native';
import Landing from './telas/Landing';
import Search from './telas/Search';

/* variáveis */
/* var fundo = require('./assets/landing.jpg') */


export default class App extends React.Component {
  state = {
    currentScreen: "landing" 
  }
  renderScreen = () => {
    if(this.state.currentScreen === "landing") {
      return(
        <Landing switchScreen={this.switchScreen} />
      )
    }
    else if(this.state.currentScreen === "search") {
      return(
        <Search />
      )
    }
  }

  switchScreen = (currentScreen) => {
    this.setState({currentScreen})
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
