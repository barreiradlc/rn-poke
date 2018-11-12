import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

/* variáveis */
/* var fundo = require('./assets/landing.jpg') */

export default class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>                
            <Text>Search</Text>        
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
