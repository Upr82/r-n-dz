import { Text, Pressable, PressableProps, StyleSheet } from 'react-native';
import { Colors, FZ, FW, Radius } from '../../tokens';



export function Button({ title, ...props }: PressableProps & { title: string }) {

    return (
        <Pressable 
            style={styles.button}
            {...props}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 62,
        backgroundColor: Colors.orange,
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