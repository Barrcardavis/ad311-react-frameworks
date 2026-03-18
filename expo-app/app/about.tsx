import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function About() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>About This App</Text>
      <Button title="Back to Home" onPress={() => router.push('/')} />
    </View>
  );
}
