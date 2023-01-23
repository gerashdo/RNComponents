
import React from 'react'
import { Animated, PanResponder, StyleSheet } from 'react-native'
import { View } from 'react-native'
import { useRef } from 'react';

export const Animation102Screen = () => {

  const pan = useRef( new Animated.ValueXY() ).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ], { useNativeDriver: false }),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: false }, // Back to zero
      ).start();
    },
  });


  return (
    <View style={ styles.container }>
        <Animated.View
            { ...panResponder.panHandlers }
            style={[ pan.getLayout(), styles.box, ]}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
    box: {
        backgroundColor: 'green',
        width: 100,
        height: 100
    }
})