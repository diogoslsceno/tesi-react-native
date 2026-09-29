import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function TwoScreen() {
    return (
        <View>  
            <Text>Segunda Tela</Text>
            <Button title="Voltar para a tela anterior" 
                onPress={() => {
                    router.back();
                }}
            />
        </View>
    );
}