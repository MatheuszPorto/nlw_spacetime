import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="bg-pink-400 flex-1 itens-center justify-center">
      <Text className="text-zinc-50 text-6xl m-auto">Hello World</Text>
      <StatusBar style="auto" translucent />
    </View>
  );
}
