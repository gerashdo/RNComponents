
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { FlatList, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'

export const InfiniteScreen = () => {

    const [numbers, setNumbers] = useState([0,1,2,3,4,5])

    const renderItem = ( item: number ) => {
        return (
            <Text style={ styles.textItem }>{ item }</Text>
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
