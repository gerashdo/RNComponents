
import React, { useState } from 'react'
import { Switch, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const SwitchScreen = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
        <HeaderTitle title='Switches' />
        <Switch
            trackColor={{ false: '#767577', true: '#39D481' }}
            thumbColor='#f4f3f4'
            // ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
      />
    </View>
  )
}
