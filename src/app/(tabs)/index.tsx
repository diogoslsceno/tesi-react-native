import { default as CardDiscipline } from "@/components/CardDiscipline";
import DisciplineCard from "@/components/DisciplineCard";
import { SummaryCard } from "@/components/SummaryCard";
import { styles } from "@/screens/index-style";
import { colors } from "@/styles/colors";
import {
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.label}>Minha Rotina</Text>
          <View style={styles.titleContent}>
            <Text style={styles.title}>Olá, Estudante!</Text>
            <Text style={styles.subtitle}>Organize sua rotina acadêmica</Text>
          </View>

          <SummaryCard
            total={3}
            textColor={colors.orange.Primary}
            title="Pendências"
            subtitle="Para esta semana"
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
                title="Prova"
                subtitle="Próximo 15 dias"
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
                title="Disciplina"
                subtitle="Ativas no semestre"
                icon={
                  <FontAwesome6
                    name="graduation-cap"
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
              <CardDiscipline
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
              <CardDiscipline
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
              <DisciplineCard
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

          <View>
            <View>
              <DisciplineCard
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
  );
}
