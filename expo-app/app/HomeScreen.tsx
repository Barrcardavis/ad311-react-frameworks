import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Welcome to my Expo App</Text>
      <Button title="Go to About" onPress={() => router.push('/AboutScreen')} />
    </View>
  );
}
