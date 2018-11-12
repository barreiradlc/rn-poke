import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Header } from 'native-base';

/* variáveis */
/* var fundo = require('./assets/landing.jpg') */

export default class Search extends React.Component {
  render() {
    return (
      <View >                
      <Header
      searchBar
      rounded
      >
      
      
      </Header>
      <View style={styles.container}>
      <Text>Search</Text>        
      </View>
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
  