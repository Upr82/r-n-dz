import { Text, Pressable, StyleSheet } from 'react-native';
import { Colors, FZ, FW, Radius } from '../../tokens';

type Props = {
    title: string,
}

export function Button ({title}: Props) {

    return (
        <Pressable style={styles.button}>
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