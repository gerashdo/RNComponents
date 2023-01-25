
import React, { useState } from 'react'
import { ActivityIndicator, Animated, Image, ImageStyle, StyleProp, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation';

interface Props {
    uri: string;
    style: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style = {} }: Props) => {

    const [isLoading, setIsLoading] = useState(true)

    const { fadeIn, opacity } = useAnimation()

    const onLoadEnd = () => {
        fadeIn()
        setIsLoading( false )
    }

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {
                isLoading && 
                    <ActivityIndicator 
                        style={{
                            position: 'absolute' // Centrar el loading
                        }}
                        color="gray"
                        size={ 30 }
                    />
            }
            <Animated.Image 
                source={{ uri }}
                style={{
                    ...style as any,
                    // width: '100%',
                    // height: 400,
                    opacity
                }}
                onLoadEnd={ onLoadEnd }
            />
        </View>
    )
}
