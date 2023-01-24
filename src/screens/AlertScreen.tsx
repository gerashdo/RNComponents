import React from 'react'
import { Alert, Button } from 'react-native';
import { View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';

export const AlertScreen = () => {
    
    const createTwoButtonAlert = () =>
        Alert.alert('Alert', 'Mensaje del alert', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);

  return (
    <View style={ styles.globalMargin }>
        <HeaderTitle title='Alert'/>
        <Button 
            title='Start alert'
            onPress={ () => createTwoButtonAlert() }
        />
    </View>
  )
}
