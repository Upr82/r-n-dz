import { StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, FZ, FW } from '../tokens';
import { Button } from '../components/button/button'

export default function HomeScreen() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../../assets/main_img.png')}

                />
            </View>
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
        backgroundColor: Colors.black,
        alignItems: 'center'
    },
    content: {
        paddingHorizontal: 30,
        marginBottom: 9,
        marginTop: 'auto'
    },
    title: {
        fontSize: FZ.fz34,
        fontWeight: FW.fw600,
        lineHeight: 44,
        textAlign: "center",
        color: Colors.white
    },
    text: {
        marginTop: 8,
        marginBottom: 24,
        fontSize: FZ.fz14,
        fontWeight: FW.fw400,
        lineHeight: 24,
        textAlign: "center",
        color: Colors.gray
    },
    imageContainer: {
        position: 'absolute',
        bottom: '33%',
        flex: 1
    },
    image: {
        resizeMode: 'contain',
    }

});