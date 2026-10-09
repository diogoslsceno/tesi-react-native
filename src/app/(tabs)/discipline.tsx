import { Button } from "@/components/Button";
import { colors } from "@/styles/colors";
import { View } from "react-native";

export default function Dsiscipline() {
    return (
        <View style={{
            marginTop: 100,
            flex: 1,
        }}>
            <View style={{
                paddingHorizontal: 24,
            }}>
                <Button text="Salvar atividade" color={colors.primary}/>
            </View>
        </View>
    )
}