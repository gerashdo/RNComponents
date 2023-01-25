
import React, { useState } from 'react'
import { ActivityIndicator, Image, StyleSheet } from 'react-native'
import { FlatList, Text, View } from 'react-native'
import { FadeInImage } from '../components/FadeInImage'
import { HeaderTitle } from '../components/HeaderTitle'

export const InfiniteScreen = () => {

    const [numbers, setNumbers] = useState([0,1,2,3,4,5])

    const renderItem = ( item: number ) => {
        return (
            <FadeInImage 
                uri={ `https://picsum.photos/id/${ item }/400/500` }
                style={{
                    width: '100%',
                    height: 400
                }}
            />
        )
    }

    const loadMore = () => {
        const newArray: number[] = []
        for (let index = 0; index < 5; index++) {
            newArray[index] = numbers.length + index ;
        }
        setNumbers([ ...numbers, ...newArray ])
    }

  return (
    <View>
        <FlatList 
            data={ numbers }
            keyExtractor={ ( item ) => item.toString() }
            renderItem={ ({ item }) => renderItem( item ) }

            ListHeaderComponent={ () => <HeaderTitle title='Infinite scroll'/>}
            onEndReachedThreshold={ 0.5 }
            onEndReached={ loadMore }
            ListFooterComponent={ () => (
                <View style={{ height: 100, width: '100%', justifyContent: 'center' }}>
                    <ActivityIndicator size={ 40 } color="gray" />
                </View>
            )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    textItem: {
        backgroundColor: 'green',
        height: 150,
    }
})
