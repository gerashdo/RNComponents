
import React, { useRef } from 'react'
import { View,Animated, StyleSheet, Button, Easing } from 'react-native'

export const Animation101Screen = () => {

    const opacity = useRef( new Animated.Value(0) ).current
    const top = useRef( new Animated.Value(-100) ).current

    const fadeIn = () => {
        Animated.timing( opacity, {
            useNativeDriver: true,
            toValue: 1,
            duration: 300,
        }).start()

        Animated.timing( top, {
            toValue: 0,
            duration: 800,
            useNativeDriver: true,
            easing: Easing.bounce
        }).start()
    }

    const fadeOut = () => {
        Animated.timing( opacity, {
            useNativeDriver: true,
            toValue: 0,
            duration: 300,
        }).start()
    }

    return (
        <View style={ styles.container }>
            <Animated.View 
                style={{ 
                    ...styles.box,
                    opacity,
                    transform: [{
                        translateY: top,
                    }]
                }}
            />
            <Button 
                title='FadeIn'
                onPress={ fadeIn }
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