
import React, { useContext } from 'react'
import { View,Animated, StyleSheet, Button, Easing } from 'react-native'
import { ThemeContext } from '../context/theme/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

    const { position, opacity, fadeIn, startMovingPosition, fadeOut } = useAnimation()
    const { theme:{ colors, secondary } } = useContext( ThemeContext )


    return (
        <View style={ styles.container }>
            <Animated.View 
                style={{ 
                    ...styles.box,
                    backgroundColor: secondary,
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
                color={ colors.primary }
            />
            <Button 
                title='FadeOut'
                onPress={ fadeOut }
                color={ colors.primary }
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
        width: 100,
        height: 100,
    }
})