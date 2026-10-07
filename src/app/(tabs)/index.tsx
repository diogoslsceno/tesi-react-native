import { SummaryCard } from "@/components/SummaryCard"
import { styles } from "@/screens/index-style"
import { colors } from "@/styles/colors"
import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons"
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

        <SummaryCard
          total={5}
          textColor={colors.orange}
          title="Pendências"
          subtitle="Para essa semana"
          icon={
            <MaterialCommunityIcons
              name="clipboard-alert"
              color={colors.orange}
              size={24}
            />
          }
        />

        <View style={styles.cardContent}>
          <View style={styles.card}>
            <SummaryCard
              total={2}
              title="Prova"
              textColor={colors.red}
              subtitle="Próximos 15 dias"
              icon={
                <FontAwesome6
                  name="clipboard-question"
                  size={24}
                  color={colors.red}
                />
              }
            />
          </View>

          <View style={styles.card}>
            <SummaryCard
              total={5}
              textColor={colors.primary}
              title="Disciplinas"
              subtitle="Ativas no semestre"
              icon={
                <FontAwesome6
                  name="graduation-cap"
                  color={colors.primary}
                  size={24}
                />
              }
            />
          </View>
        </View>
      </View>
    </View>
  )
}
