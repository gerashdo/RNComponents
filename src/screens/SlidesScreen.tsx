import React, { useState } from 'react'
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { ImageSourcePropType, Text, View } from 'react-native'

import Carousel, { Pagination } from 'react-native-snap-carousel';

import { HeaderTitle } from '../components/HeaderTitle'

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const { width: windowWidth, height: windowHeight } = Dimensions.get('window')

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

export const SlidesScreen = () => {

    const [activeIndex, setActiveIndex] = useState(0)

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
            }}
        />
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
