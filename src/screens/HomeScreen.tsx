import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native'

export const HomeScreen = () => {
  return (
    <View>
        <Text>
            Home Screen
            <Icon name='settings' size={ 30 } color="black" />
        </Text>
    </View>
  )
}
