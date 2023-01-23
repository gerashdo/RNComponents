
import React, { useState } from 'react'
import { Switch } from 'react-native';

interface Props {
    isOn: boolean;
    onChange: ( value: boolean ) => void
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {

    const [ isEnabled, setIsEnabled ] = useState( isOn )
    const toggleSwitch = () => {
        setIsEnabled( !isEnabled )
        onChange( !isEnabled )
    };

  return (
    <Switch
        trackColor={{ false: '#767577', true: '#39D481' }}
        thumbColor='#f4f3f4'
        // ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={ isEnabled }
    />
  )
}
