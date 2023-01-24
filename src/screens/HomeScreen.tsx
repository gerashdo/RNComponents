import React from 'react'
import { FlatList, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { ListMenuItem } from '../components/ListMenuItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';


export const HomeScreen = () => {


  return (
    <View
        style={ styles.globalMargin }
    >
        <FlatList 
            data={ menuItems }
            renderItem={ ({ item }) => <ListMenuItem menuItem={ item } />}
            keyExtractor={ ( item ) => item.name }
            ListHeaderComponent={ <HeaderTitle title='Opciones de menú' /> }
            ItemSeparatorComponent={ () => <ItemSeparator /> }
        />
    </View>
  )
}
