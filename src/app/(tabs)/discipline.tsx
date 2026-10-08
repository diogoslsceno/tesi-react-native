import { SummaryCard } from "@/components/SummaryCard"
import { styles } from "@/screens/index-style"
import { Text, View } from "react-native"
export { textSize } from "@/styles/textSize"

export default function Disciplines() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>Minha Rotina</Text>
        <View style={styles.titleContent}>
          <Text style={styles.titlePrimary}>Minhas Disciplinas</Text>
        </View>

        <SummaryCard title="Banco de Dados II" subtitle="Prof. Roberto Silva" />
      </View>
    </View>
  )
}
