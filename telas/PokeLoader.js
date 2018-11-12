import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';



class Pokeloader extends React.Component{
    render(){
        return(
    
        <View>
            <Image 
            style={styles.fundo}
            source={{uri: 'https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif'}}
            />
        </View>

          

    
        );
    }
}
const styles = StyleSheet.create({  
    fundo: {
        flex: 2,
        width: '100%', 
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});



export default Pokeloader;