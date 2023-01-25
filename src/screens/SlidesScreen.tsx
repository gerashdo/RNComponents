import { StackScreenProps } from '@react-navigation/stack';
import React, { useRef, useState } from 'react'
import { Animated, Dimensions, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { ImageSourcePropType, Text, View } from 'react-native'

import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';

import { RootStackParamList, Navigator } from '../navigator/Navigator';
import { useAnimation } from '../hooks/useAnimation';

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

interface Props extends StackScreenProps<RootStackParamList,'SlidesScreen'>{}

const { width: windowWidth } = Dimensions.get('window')

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

export const SlidesScreen = ({ navigation }:Props) => {

    const [activeIndex, setActiveIndex] = useState(0)
    const isVisible = useRef( false )
    const { opacity, fadeIn } = useAnimation()
    // const navigator = useNavigation<StackScreennProp<RootStackParamList>>()

    const renderItem = ( item: Slide ) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    padding: 40,
                }}
            >
                <Image 
                    source={ item.img }
                    style={{
                        width: 350,
                        height: 400,
                        resizeMode: 'center',
                    }}
                />
                <Text style={ styles.title }>{ item.title }</Text>
                <Text style={ styles.subtitle }>{ item.desc }</Text>
            </View>
        )
    }

    const showEndButton = ( index: number ) => {
        if( index === items.length - 1 && isVisible.current === false ){
            isVisible.current = true
            fadeIn()
        }
    }

  return (
    <SafeAreaView
        style={{
            flex: 1
        }}
    >
        <Carousel 
            data={ items }
            renderItem={ ({ item }) => renderItem( item ) }
            sliderWidth={ windowWidth }
            itemWidth={ windowWidth }
            layout='default'
            onSnapToItem={ ( index ) => {
                setActiveIndex( index )
                showEndButton( index )
            }}
        />
        <View style={{
            flexDirection: 'row',
            justifyContent: isVisible.current ? 'space-between' : 'center',
            alignItems: 'center',
            marginHorizontal: 20,
        }}>
            <Pagination 
                activeDotIndex={ activeIndex }
                dotsLength={ items.length }
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    backgroundColor: 'green'
                }}
            />
            {
                isVisible.current && (
                    <Animated.View style={{ opacity }}>
                        <TouchableOpacity
                            style={{
                                paddingHorizontal: 5,
                                paddingVertical: 10,
                                backgroundColor: 'green',
                                borderRadius: 10,
                                width: 140,
                                height: 50,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            activeOpacity={ 0.8 }
                            onPress={ () => navigation.navigate( 'HomeScreen' )}
                            >
                            <Text style={{
                                color: 'white',
                                fontSize: 20,
                                fontWeight: 'bold',
                            }}>Entrar</Text>
                            <Icon 
                                name='chevron-forward-outline'
                                color="white"
                                size={ 30 }
                                />
                        </TouchableOpacity>
                    </Animated.View>
                )
            }
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'green'
    },
    subtitle:{
        fontSize: 16
    }
})
