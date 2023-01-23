import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MenuItem } from '../interfaces/appInterfaces';
import { ListMenuItem } from '../components/ListMenuItem';



const menuItems: MenuItem[] = [
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
            renderItem={ ({ item }) => <ListMenuItem menuItem={ item } />}
            keyExtractor={ ( item ) => item.name }
            ListHeaderComponent={ renderListHeader }
            ItemSeparatorComponent={ renderSeparator }
        />
    </View>
  )
}
