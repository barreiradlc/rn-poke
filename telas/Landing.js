import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button } from 'native-base';

/* variáveis */
var fundo = require('../assets/landing.jpg')


export default class App extends React.Component {
  render() {
    return (
      
        
        <ImageBackground 
          source={fundo}
          style={styles.estiloFundo}
          >

          <View style={styles.view}>
            <Text style={styles.titulo}>Início</Text>

            <Button
              block={true}
              style={styles.bot}
              onPress={() => this.props.switchScreen("search")}
              
            >
            <Text style={styles.botTexto}>Vamula</Text>
            </Button>
          </View>


        </ImageBackground>
        
      
    );
  }
}

const styles = StyleSheet.create({
  
  /* botao */
  bot:{
    margin: 10,
  },
  botTexto:{
    color: '#fff',
  },

  /* containers */
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },


  estiloFundo: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },

  

  titulo: {
    color: '#555',
    fontSize:   30,
    alignItems: 'center',
  }

});
