
import React, { useContext, useState } from 'react'
import { Switch } from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
    isOn: boolean;
    onChange: ( value: boolean ) => void
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {

  const { theme:{ colors } } = useContext( ThemeContext )

  const [ isEnabled, setIsEnabled ] = useState( isOn )
  const toggleSwitch = () => {
      setIsEnabled( !isEnabled )
      onChange( !isEnabled )
  };

  return (
    <Switch
        trackColor={{ false: '#767577', true: colors.primary }}
        thumbColor='#f4f3f4'
        // ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={ isEnabled }
    />
  )
}
