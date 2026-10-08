import { Button } from "@/components/button"
import { colors } from "@/styles/colors"
import { View } from "react-native"

function login() {
  console.log("Quero ir para casa")
}

export default function Activity() {
  return (
    <View
      style={{
        marginTop: 100,
        flex: 1,
      }}
    >
      <View
        style={{
          paddingHorizontal: 24,
        }}
      >
        <Button
          text="Salvar atividades"
          color={colors.primary}
          onPress={login}
        />
      </View>
    </View>
  )
}