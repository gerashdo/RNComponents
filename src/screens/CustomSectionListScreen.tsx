import React from 'react'
import { SectionList, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { styles } from '../theme/appTheme';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin",]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", ]
    }
];

export const CustomSectionListScreen = () => {
  return (
    <View style={{ ...styles.globalMargin, flex: 1 }}>
        <SectionList 
            sections={ casas }
            renderItem={ ({ item }) => <Text>{item}</Text> }
            keyExtractor={ ( item, index ) => item + index }
            ListHeaderComponent={ () => <HeaderTitle title='Section list'/>}
            ListFooterComponent={ () => (
                <View style={{ marginBottom: 70 }}>
                    <HeaderTitle title={ `Casas: ${casas.length}` } />
                </View>
            )}
            stickySectionHeadersEnabled // android

            renderSectionHeader={ ({ section }) => (
                <View style={{ backgroundColor: 'white' }}>
                    <HeaderTitle title={ section.casa }/>
                </View>
            )}
            renderSectionFooter={ ({ section }) => <HeaderTitle title={ `Total: ${section.data.length}` } />} 
            SectionSeparatorComponent={ () => <ItemSeparator /> }
            ItemSeparatorComponent={ () => <ItemSeparator /> }
        />
    </View>
  )
}
