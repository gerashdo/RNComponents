import React from 'react'
import { FlatList, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { ListMenuItem } from '../components/ListMenuItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';


export const HomeScreen = () => {

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
        style={ styles.globalMargin }
    >
        <FlatList 
            data={ menuItems }
            renderItem={ ({ item }) => <ListMenuItem menuItem={ item } />}
            keyExtractor={ ( item ) => item.name }
            ListHeaderComponent={ <HeaderTitle title='Opciones de menú' /> }
            ItemSeparatorComponent={ renderSeparator }
        />
    </View>
  )
}
