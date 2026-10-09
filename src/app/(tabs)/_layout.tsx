import { colors } from '@/styles/colors';
import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
       tabBarActiveTintColor: colors.primary,
        headerShown: false,
        
        }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <Ionicons size={28} name='home-outline' color={color} />,
        }}
      />
      <Tabs.Screen
        name="discipline"
        options={{
          title: 'Disciplina',
          tabBarIcon: ({ color }) => <AntDesign size={24} name="book" color={color} />,
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: 'Atividades',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="clipboard-text-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <MaterialIcons size={32} name="person-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}
