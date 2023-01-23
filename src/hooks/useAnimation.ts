import { useRef } from "react"
import { Animated } from "react-native"



export const useAnimation = () => {
  
    const opacity = useRef( new Animated.Value(0) ).current
    const position = useRef( new Animated.Value(-100) ).current

    const fadeIn = () => {
        Animated.timing( opacity, {
            useNativeDriver: true,
            toValue: 1,
            duration: 300,
        }).start()

        
    }

    const fadeOut = () => {
        Animated.timing( opacity, {
            useNativeDriver: true,
            toValue: 0,
            duration: 300,
        }).start()
    }

    const startMovingPosition = ( initPosition: number, duration: number = 300 ) => {

        position.setValue( initPosition )

        Animated.timing( position, {
            toValue: 0,
            duration,
            useNativeDriver: true,
            // easing: Easing.bounce
        }).start()
    }

    return {
        opacity,
        position,
        fadeIn,
        fadeOut,
        startMovingPosition,
    }
}
