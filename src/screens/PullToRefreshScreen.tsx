import React, { useState } from 'react'
import { RefreshControl, ScrollView, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const PullToRefreshScreen = () => {

    const [refreshing, setRefreshing] = useState(false)
    const [data, setData] = useState('')

    const onRefresh = () => {
        setRefreshing( true )

        setTimeout(() => {
            setData('Hello world')
            setRefreshing( false )
        }, 1000);
    }

  return (
    <ScrollView
        refreshControl={
            <RefreshControl 
                refreshing={ refreshing }
                onRefresh={ onRefresh }
                progressViewOffset={ 40 }
                progressBackgroundColor='green'
                style={{ backgroundColor: 'green' }}
                tintColor='white'
                colors={[ 'red', 'orange', 'yellow' ]}
            />
        }
    >
        <View style={ styles.globalMargin }>
            <HeaderTitle title='Pull to refresh'/>
            <HeaderTitle title={ data }/>
        </View>
    </ScrollView>
  )
}
