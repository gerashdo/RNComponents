import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/theme/ThemeContext'
import { styles } from '../theme/appTheme'

export const ThemeScreen = () => {

  const { setDarkMode } = useContext( ThemeContext )

  return (
    <View style={ styles.globalMargin }>
        <HeaderTitle title='Theme'/>

        <TouchableOpacity
          activeOpacity={ 0.8 }
          style={{
            width: 160,
            height: 50,
            backgroundColor: 'green',
            borderRadius: 10,
            justifyContent: 'center',
          }}
          onPress={ () => setDarkMode() }
        >
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 22,
            }}
          >Light/Dark</Text>
        </TouchableOpacity>
    </View>
  )
}
