import { Stack } from "expo-router";
import {
    useFonts, 
    Manrope_300Light, 
    Manrope_400Regular, 
    Manrope_500Medium, 
    Manrope_600SemiBold 
} from "@expo-google-fonts/manrope"
import { View, Text} from "react-native";
import { Loading } from "@/components/Loading";

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        Manrope_300Light, 
        Manrope_400Regular, 
        Manrope_500Medium, 
        Manrope_600SemiBold
    });

    if(!fontsLoaded) {
        return (
            <View style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
            }}>  
                <Loading/>
                <Text>Carregando dados...</Text>
            </View>   
        );
    }

    return (
        <Stack screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="two-screem" />
        </Stack>
    );
}