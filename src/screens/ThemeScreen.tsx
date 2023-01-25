import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/theme/ThemeContext'
import { styles } from '../theme/appTheme'

export const ThemeScreen = () => {

  const { setDarkMode, setLightMode } = useContext( ThemeContext )

  return (
    <View style={{ 
        ...styles.globalMargin,
        }}>
        <HeaderTitle title='Theme'/>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 10,
        }}>
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
            >Dark</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={ 0.8 }
            style={{
              width: 160,
              height: 50,
              backgroundColor: 'green',
              borderRadius: 10,
              justifyContent: 'center',
            }}
            onPress={ () => setLightMode() }
          >
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 22,
              }}
            >Light</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
