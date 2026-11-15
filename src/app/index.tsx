import { StyleSheet, View, Text, Button } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Одно из самых вкусных кофе в городе!
                </Text>
                <Text style={styles.text}>
                    Свежие зёрна, настоящая арабика и бережная обжарка
                </Text>
                <Button title='Начать'></Button>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    content: {
        paddingHorizontal: 30,
        marginBottom: 9,
        marginTop: 'auto'
    },
    title: {
        fontSize: 34,
        fontWeight: "600",
        fontStyle: "normal",
        lineHeight: 44,
        textAlign: "center",
        color: "#FFFFFF"
    },
    text: {
        marginTop: 8,
        marginBottom: 24,
        fontSize: 14,
        fontWeight: "400",
        fontStyle: "normal",
        lineHeight: 24,
        textAlign: "center",
        color: "#A9A9A9"
    },
    
});