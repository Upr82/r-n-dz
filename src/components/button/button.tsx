import {
    Text, Pressable, PressableProps, StyleSheet,
    Animated, View,
    GestureResponderEvent
} from 'react-native';
import React, { useEffect } from 'react';
import { Colors, FZ, FW, Radius } from '../../tokens';



export function Button({ title, ...props }: PressableProps & { title: string }) {

    const animatedValue = new Animated.Value(0);
    const color = animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [Colors.orange, Colors.orangeDark]
    });

    const fadeIn = (e: GestureResponderEvent) => {
        Animated.timing(animatedValue, {
                toValue: 100,
                duration: 100,
                useNativeDriver: false
            }
        ).start();
        props.onPressIn && props.onPressIn(e);
    }
    const fadeOut = (e: GestureResponderEvent) => {
        Animated.timing(animatedValue, {
                toValue: 0,
                duration: 100,
                useNativeDriver: false
            }
        ).start();
        props.onPressIn && props.onPressIn(e);
    }


    return (
        <Pressable
            {...props}
            onPressIn={fadeIn} onPressOut={fadeOut}
        >
            <Animated.View style={{...styles.button, backgroundColor: color}}>
                <Text style={styles.text}>{title}</Text>
            </Animated.View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 62,
        borderRadius: Radius.r16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: Colors.white,
        fontSize: FZ.fz16,
        fontWeight: FW.fw600
    }
});