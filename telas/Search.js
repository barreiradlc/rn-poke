import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Header, Item, Icon, Input} from 'native-base';
import Pokeloader from './PokeLoader';
import SearchBody from './SearchBody';
import axios from 'axios';
/* variáveis */
/* var fundo = require('./assets/landing.jpg') */

export default class Search extends React.Component {
  state = {
    pokemonSearch: '',
    onCall: true,
  }
  
  pokeSearch = () => {
    this.setState({onCall: true});

    axios.get("https://pokeapi.co/api/v2/pokemon/" +this.state.pokemonSearch.toLowerCase())
    .then(function(response){
      console.log(response.data)
    })
  }
  renderBody = () => {
    if (this.state.onCall) {
      return(
        <Pokeloader />
      )
    }
    else {
      return(
        <SearchBody />
      )
    }
  } 
  
  render() {
    return (
      
      <View style={styles.container}>
      <Header
      style={styles.header}
      searchBar
      rounded
      >
      
      <Item>
        <Icon name="ios-search" onPress={this.pokeSearch}/>
        <Input 
        value={this.state.pokemonSearch}
        placeholder='pesquisar'
        onChangeText={(pokemonSearch)=>this.setState({pokemonSearch})}
        />  
      </Item>
      

      </Header>
      {this.renderBody()}
      </View>
      );
    }
  }
  
  const styles = StyleSheet.create({  
    /* header */
    header: {
      marginTop: 25,
    },
    
    /* containers */
    container: {
    flex: 1,
      
    },
  });
  