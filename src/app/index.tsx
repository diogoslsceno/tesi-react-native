import { styles } from "@/screens/index-style"
import { Text, View } from "react-native"
export { textSize } from "@/styles/textSize"

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>Minha Rotina</Text>
        <View style={styles.titleContent}>
          <Text style={styles.title}>Olá, estudante!</Text>
          <Text style={styles.subtitle}>Organize sua rotina acadêmica.</Text>
        </View>
      </View>
    </View>
  )
}