import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default function App() {

  const IButtonPress = () => {
    Alert.alert('Заголовок', 'Сообщение', [
      {
        text: 'Ok',
        onPress: () => {}
      },
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel'
      }
    ]);
  }


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={IButtonPress}
      >
        <Text style={styles.label}>Я кнопка</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#3478f6',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  }
});
