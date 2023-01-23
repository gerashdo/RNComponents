
import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme'

interface Props {
    title: string;
}

export const HeaderTitle = ({ title }: Props) => {
    const { top } = useSafeAreaInsets()

    return (
        <View>
            <Text style={{ 
                ...styles.title,
                marginTop: top,
                marginBottom: 15
            }}>{ title }</Text>
        </View>
    )
}
