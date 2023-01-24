import React, { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false)

  return (
    <View style={ styles.globalMargin }>
        <HeaderTitle title='Modal'/>
        <Button 
            title='Abrir modal'
            onPress={ () => setIsVisible( true ) }
        />

        <Modal
            animationType='fade'
            visible={ isVisible }
            transparent={ true }
        >
            {/* Background */}
            <View style={{ 
                flex: 1, 
                backgroundColor:"rgba(0,0,0,0.2)",
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                {/* Content */}
                <View style={{ 
                    backgroundColor: "white",
                    padding: 20,
                    borderRadius: 20,
                    shadowOffset: {
                        width: 0,
                        height: 10
                    },
                    shadowOpacity: 0.1,
                    elevation: 10,
                    shadowRadius: 10
                }}>
                    <Text style={{ marginBottom: 20, fontSize: 30, fontWeight: 'bold' }}>This is the modal</Text>
                    <Text style={{ marginBottom: 20 }}>Cuerpo de este modal</Text>
                    <Button 
                        title='Cerrar'
                        onPress={ () => setIsVisible( false ) }
                    />
                </View>
            </View>

        </Modal>
    </View>
  )
}
