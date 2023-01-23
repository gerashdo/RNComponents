
import React, { useRef } from 'react'
import { View,Animated, StyleSheet, Button, Easing } from 'react-native'
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

    const { position, opacity, fadeIn, startMovingPosition, fadeOut } = useAnimation()

    return (
        <View style={ styles.container }>
            <Animated.View 
                style={{ 
                    ...styles.box,
                    opacity,
                    transform: [{
                        translateY: position,
                    }]
                }}
            />
            <Button 
                title='FadeIn'
                onPress={ () =>{ 
                    fadeIn() 
                    startMovingPosition( -100 )
                }}
            />
            <Button 
                title='FadeOut'
                onPress={ fadeOut }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        backgroundColor: 'purple',
        width: 100,
        height: 100,
    }
})