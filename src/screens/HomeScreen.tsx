import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatList, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface MenuItem {
    name: string,
    icon: string,
    component: string,   
}

const menuItems = [
    {
        name: 'Animation 101',
        icon: 'albums-outline',
        component: 'Animation101Screen'
    },
    {
        name: 'Animation 102',
        icon: 'copy-outline',
        component: 'Animation102Screen'
    }

]

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets()

    const renderMenuItem = ( item: MenuItem ) => {
        return (
            <View>
                <Text>{ item.name } - { item.icon }</Text>
            </View>
        )
    }

    const renderListHeader = () => {
        return (
            <View>
                <Text style={{ 
                    ...styles.title,
                    marginBottom: 15
                }}>Opciones de menú</Text>
            </View>
        )
    }

    const renderSeparator = () => {
        return (
            <View 
                style={{
                    borderBottomWidth: 2,
                    marginVertical: 5,
                    opacity: 0.4
                }}
            />
        )
    }

  return (
    <View
        style={{ 
            marginTop: top + 10, 
            ...styles.globalMargin 
        }}
    >
        <FlatList 
            data={ menuItems }
            renderItem={ ({ item }) => renderMenuItem( item )}
            keyExtractor={ ( item ) => item.name }
            ListHeaderComponent={ renderListHeader }
            ItemSeparatorComponent={ renderSeparator }
        />
    </View>
  )
}
