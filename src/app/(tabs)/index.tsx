import CourseCard from "@/components/CourseCard"
import { SummaryCard } from "@/components/SummaryCard"
import TaskCard from "@/components/TaskCard"
import { useProfile } from "@/contexts/ProfileContext"
import { styles } from "@/screens/index-style"
import { colors } from "@/styles/colors"
import {
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"

export default function Index() {
  const { imageSource } = useProfile()

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Image source={imageSource} style={styles.headerAvatar} />
              <Text style={styles.headerTitle}>Minha Rotina</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.notificationButton}
              accessibilityRole="button"
              accessibilityLabel="Notificações"
            >
              <Ionicons
                name="notifications-outline"
                size={22}
                color={colors.primary}
              />
              <View style={styles.notificationBadge} />
            </TouchableOpacity>
          </View>
          <View style={styles.titleContent}>
            <Text style={styles.title}>Olá, Estudante!</Text>
            <Text style={styles.subtitle}>Organize sua rotina acadêmica</Text>
          </View>

          <SummaryCard
            total={3}
            textColor={colors.orange.Primary}
            title="Pendências"
            subtitle="Para esta semana"
            decorationColor={colors.background.orange}
            icon={
              <MaterialCommunityIcons
                name="clipboard-alert"
                color={colors.orange.Primary}
                size={24}
              />
            }
          />

          <View style={styles.cardContent}>
            <View style={styles.card}>
              <SummaryCard
                total={2}
                textColor={colors.red}
                title="Provas"
                subtitle="Próximos 15 dias"
                decorationColor={colors.background.red}
                icon={
                  <FontAwesome6
                    name="clipboard-question"
                    color={colors.red}
                    size={24}
                  />
                }
              />
            </View>

            <View style={styles.card}>
              <SummaryCard
                total={5}
                textColor={colors.primary}
                title="Disciplinas"
                decorationColor={colors.background.blue}
                subtitle="Ativas no semestre"
                icon={
                  <MaterialCommunityIcons
                    name="school"
                    size={24}
                    color={colors.primary}
                  />
                }
              />
            </View>
          </View>

          <View style={styles.headerContent}>
            <Text style={styles.sectionTitle}>Próximas atividades</Text>
            <TouchableOpacity>
              <Text style={styles.actionText}>Ver mais</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.cardContent}>
            <View style={styles.card}>
              <TaskCard
                alertTitle="Pendente"
                dataTitle="Hoje, 23:59"
                title="Trabalho Prático de SO"
                subTitle="Sistemas Operacionais"
                textColor={colors.orange.segondary}
                colorBackgroud={colors.background.red}
              />
            </View>
          </View>

          <View style={styles.headerContent}>
            <View style={styles.card}>
              <TaskCard
                alertTitle="Em 3 dias"
                dataTitle="25 out"
                title="Lista de Exercícios 4"
                subTitle="Cálculo Diferencial e Integral III"
                textColor={colors.text.segondary}
                colorBackgroud={colors.background.primary}
              />
            </View>
          </View>

          <View style={styles.headerContent}>
            <Text style={styles.sectionTitle}>Disciplinas do semestre</Text>
          </View>

          <View style={styles.headerContent}>
            <View style={styles.card}>
              <CourseCard
                title="Engenharia de Software"
                teacher="Prof. João Silva"
                time="Segundas, 19:00 - 20:40"
                room="Sala 204 - Bloco B"
                borderColor={colors.primary}
                icon={
                  <Ionicons
                    name="code-slash-outline"
                    size={24}
                    color={colors.icon.gray}
                  />
                }
                teacherIcon={
                  <Ionicons
                    name="person-outline"
                    size={24}
                    color={colors.text.segondary}
                  />
                }
                timeIcon={
                  <Ionicons
                    name="time-outline"
                    size={24}
                    color={colors.text.segondary}
                  />
                }
                roomIcon={
                  <Ionicons
                    name="location-outline"
                    size={24}
                    color={colors.text.segondary}
                  />
                }
              />
            </View>
          </View>

          <View style={styles.headerContent}>
            <View style={styles.card}>
              <CourseCard
                title="Banco de Dados"
                teacher="Profa. Marina Silva"
                time="Ter, Qui 10:00 - 12:00"
                room="Lab 4, Bloco B"
                borderColor={colors.green}
                icon={
                  <FontAwesome
                    name="server"
                    size={24}
                    color={colors.icon.gray}
                  />
                }
                teacherIcon={
                  <Ionicons
                    name="person-outline"
                    size={24}
                    color={colors.text.segondary}
                  />
                }
                timeIcon={
                  <Ionicons
                    name="time-outline"
                    size={24}
                    color={colors.text.segondary}
                  />
                }
                roomIcon={
                  <Ionicons
                    name="location-outline"
                    size={24}
                    color={colors.text.segondary}
                  />
                }
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
