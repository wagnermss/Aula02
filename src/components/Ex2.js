import { View, StyleSheet } from 'react-native'
import React from 'react'

const Ex2 = () => {
    return (
        <View style={styles.container}> 
            <View style={styles.componentefilho}/>
        </View>
      )
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      componentefilho: {
        width: 50,
        height: 50,
        backgroundColor: 'red', 
      },
    });
    

export default Ex2