import DisciplineCard from "@/components/DisciplineCard"
import SearchBar from "@/components/SearchBar"
import { styles } from "@/components/SearchBar/style"
import { useProfile } from "@/contexts/ProfileContext"
import { colors } from "@/styles/colors"
import { Ionicons } from "@expo/vector-icons"
import { useMemo, useState } from "react"
import { Image, ScrollView, Text, View } from "react-native"

interface DisciplineItem {
  id: string
  title: string
  teacher: string
  time: string
  room: string
  pendings: string
  isUpToDate?: boolean
}

const DISCIPLINES: DisciplineItem[] = [
  {
    id: "1",
    title: "Banco de Dados II",
    teacher: "Prof. Roberto Silva",
    time: "Seg / Qua - 10:00",
    room: "Laboratório 401",
    pendings: "2 Pendentes",
  },
  {
    id: "2",
    title: "Probabilidade e Estatística",
    teacher: "Prof. Maria Costa",
    time: "Ter / Qui - 08:00",
    room: "Sala 205",
    pendings: "1 Pendente",
  },
  {
    id: "3",
    title: "Psicologia Aplicada",
    teacher: "Prof. Carlos Lima",
    time: "Sex - 14:00",
    room: "Auditorio 112",
    pendings: "Em dia",
    isUpToDate: true,
  },
  {
    id: "4",
    title: "Engenharia de Software",
    teacher: "Prof. Ana Santos",
    time: "Seg / Qua - 14:00",
    room: "Laboratório 3",
    pendings: "3 Pendentes",
  },
]

export default function Discipline() {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const { imageSource } = useProfile()

  const filteredDisciplines = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    if (!query) return DISCIPLINES
    return DISCIPLINES.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.teacher.toLowerCase().includes(query) ||
        item.room.toLowerCase().includes(query)
    )
  }, [searchQuery])

  return (
    <ScrollView>
      <View style={styles.screenContainer}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image source={imageSource} style={styles.headerAvatar} />
            <Text style={styles.headerTitle}>Minha Rotina</Text>
          </View>
          <Ionicons
            name="notifications-outline"
            size={22}
            color={colors.primary}
          />
        </View>

        <View style={styles.titleContent}>
          <Text style={styles.mainTitle}>Minhas Disciplinas</Text>
          <SearchBar
            onChangeText={setSearchQuery}
            placeholder="Buscar disciplina, professor ou sala..."
            value={searchQuery}
          />
        </View>

        {filteredDisciplines.map((item) => (
          <View key={item.id} style={styles.headerContent}>
            <View style={styles.card}>
              <DisciplineCard
                title={item.title}
                teacher={item.teacher}
                time={item.time}
                room={item.room}
                borderColor={item.isUpToDate ? colors.green : colors.primary}
                badgeColor={
                  item.isUpToDate
                    ? colors.background.green
                    : colors.background.orange
                }
                pendingsColor={
                  item.isUpToDate ? colors.text.green : colors.text.red
                }
                pendings={item.pendings}
                teacherIcon={
                  <Ionicons
                    name="person-outline"
                    size={16}
                    color={colors.text.segondary}
                  />
                }
                timeIcon={
                  <Ionicons
                    name="time-outline"
                    size={18}
                    color={colors.primary}
                  />
                }
                roomIcon={
                  <Ionicons
                    name="location-outline"
                    size={18}
                    color={colors.primary}
                  />
                }
              />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}
