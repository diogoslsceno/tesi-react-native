import { ActivityPriorityType } from "@/components/activityList"
import { Button } from "@/components/button"
import { useActivities } from "@/contexts/ActivitiesContext"
import { colors } from "@/styles/colors"
import { Feather, FontAwesome6, Ionicons } from "@expo/vector-icons"
import { router, useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react"
import {
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import { styles } from "./style"

const MOCK_DISCIPLINES = [
  "Metodologia Científica",
  "Filosofia",
  "Estatística",
  "Desenvolvimento App",
  "Cálculo I",
  "Algoritmos",
  "Estrutura de Dados I",
]

export function ActivityCard() {
  const { id } = useLocalSearchParams<{ id?: string; mode?: string }>()
  const { getActivityById, updateActivity, addActivity } = useActivities()

  const existingActivity = id ? getActivityById(id) : undefined
  const isEditing = Boolean(id && existingActivity)

  const [title, setTitle] = useState("")
  const [selectedDiscipline, setSelectedDiscipline] = useState("")
  const [deliveryDate, setDeliveryDate] = useState("")
  const [selectedPriority, setSelectedPriority] = useState("Média")
  const [observations, setObservations] = useState("")

  const [isDisciplineModalOpen, setIsDisciplineModalOpen] = useState(false)
  const [isDateModalOpen, setIsDateModalOpen] = useState(false)

  useEffect(() => {
    if (existingActivity) {
      setTitle(existingActivity.title)
      setSelectedDiscipline(existingActivity.discipline)
      setDeliveryDate(existingActivity.deadline)
      setSelectedPriority(existingActivity.priority || "Média")
      setObservations(existingActivity.description || "")
    }
  }, [existingActivity])

  const handleGoBack = () => {
    if (isEditing && id) {
      router.replace({ pathname: "/activity-details", params: { id } })
    } else {
      router.replace("/(tabs)/activity")
    }
  }

  const handleDateChange = (text: string) => {
    const cleaned = text.replace(/[^0-9]/g, "")
    let formatted = cleaned

    if (cleaned.length > 2) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`
    }
    if (cleaned.length > 4) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4, 8)}`
    }

    setDeliveryDate(formatted)
  }

  const handleSelectQuickDate = (daysToAdd: number) => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + daysToAdd)

    const day = String(targetDate.getDate()).padStart(2, "0")
    const month = String(targetDate.getMonth() + 1).padStart(2, "0")
    const year = targetDate.getFullYear()

    setDeliveryDate(`${month}/${day}/${year}`)
    setIsDateModalOpen(false)
  }

  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert(
        "Campo obrigatório",
        "Por favor, informe o título da atividade."
      )
      return
    }

    if (!selectedDiscipline) {
      Alert.alert("Campo obrigatório", "Por favor, selecione uma disciplina.")
      return
    }

    if (isEditing && id) {
      updateActivity(id, {
        title: title.trim(),
        discipline: selectedDiscipline,
        deadline: deliveryDate.trim() || "Em breve",
        priority: selectedPriority as ActivityPriorityType,
        description: observations.trim(),
      })

      Alert.alert(
        "Atividade Atualizada!",
        `A atividade "${title}" foi atualizada com sucesso.`,
        [
          {
            text: "OK",
            onPress: () => {
              router.replace({ pathname: "/activity-details", params: { id } })
            },
          },
        ]
      )
      return
    }

    const isUrgent = selectedPriority === "Alta"
    addActivity({
      title: title.trim(),
      summary: observations.trim() || undefined,
      discipline: selectedDiscipline,
      deadline: deliveryDate.trim() || "Em breve",
      disciplineIconName: "book",
      statusType: isUrgent ? "urgente" : "proxima",
      statusLabel: isUrgent ? "Urgente" : "Próxima",
      categories: ["Pendentes"],
      isCompleted: false,
      actionText: "Ver detalhes",
      priority: selectedPriority as ActivityPriorityType,
      description: observations.trim(),
      studyTip:
        "Mantenha o foco e organize seu tempo para concluir esta atividade com êxito.",
    })

    Alert.alert(
      "Atividade Salva!",
      `A atividade "${title}" para a disciplina "${selectedDiscipline}" foi registrada com sucesso.`,
      [
        {
          text: "OK",
          onPress: () => {
            router.replace("/(tabs)/activity")
          },
        },
      ]
    )
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView
        showsVerticalScrollIndicator={true}
        contentContainerStyle={[styles.content, { paddingBottom: 120 }]}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.headerButton}
            onPress={handleGoBack}
            accessibilityLabel="Voltar"
          >
            <Ionicons name="arrow-back" size={24} color={colors.primary} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Minha Rotina</Text>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.headerButton}
            accessibilityLabel="Notificações"
          >
            <Ionicons
              name="notifications-outline"
              size={22}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.screenTitleContainer}>
          <Text style={styles.screenTitle}>
            {isEditing ? "Editar atividade" : "Nova atividade"}
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Título da atividade</Text>
            <TextInput
              placeholder="Ex.: Lista de Exercícios 3"
              placeholderTextColor={colors.text.muted}
              value={title}
              onChangeText={setTitle}
              style={styles.input}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Disciplina</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.selectTrigger}
              onPress={() => setIsDisciplineModalOpen(true)}
            >
              <Text
                style={
                  selectedDiscipline
                    ? styles.selectValue
                    : styles.selectPlaceholder
                }
              >
                {selectedDiscipline || "Selecione uma disciplina"}
              </Text>
              <Ionicons
                name="chevron-down"
                size={20}
                color={colors.text.secundary}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Data de entrega</Text>
            <View style={styles.dateInputContainer}>
              <TextInput
                placeholder="mm/dd/yyyy"
                placeholderTextColor={colors.text.muted}
                value={deliveryDate}
                onChangeText={handleDateChange}
                keyboardType="numeric"
                maxLength={10}
                style={[styles.input, styles.dateInput]}
              />
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.dateIconContainer}
                onPress={() => setIsDateModalOpen(true)}
              >
                <Feather
                  name="calendar"
                  size={20}
                  color={colors.primary}
                  style={{ color: colors.text.primary }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Prioridade</Text>
            <View style={styles.priorityContainer}>
              {["Baixa", "Média", "Alta"].map((priorityOption) => {
                const isSelected = selectedPriority === priorityOption

                return (
                  <TouchableOpacity
                    key={priorityOption}
                    activeOpacity={0.75}
                    onPress={() => setSelectedPriority(priorityOption)}
                    accessibilityRole="radio"
                    accessibilityState={{ selected: isSelected }}
                    style={[
                      styles.priorityButton,
                      isSelected && styles.priorityButtonActive,
                    ]}
                  >
                    <Text
                      style={[
                        styles.priorityText,
                        isSelected && styles.priorityTextActive,
                      ]}
                    >
                      {priorityOption}
                    </Text>
                  </TouchableOpacity>
                )
              })}
            </View>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Observações</Text>
            <TextInput
              placeholder="Adicione detalhes, links ou observações importantes sobre esta atividade..."
              placeholderTextColor={colors.text.muted}
              value={observations}
              onChangeText={setObservations}
              multiline
              numberOfLines={4}
              style={[styles.input, styles.inputMultiline]}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            text={isEditing ? "Salvar alterações" : "Salvar atividade"}
            color={colors.primary}
            icon={
              <FontAwesome6 name="floppy-disk" size={18} color={colors.white} />
            }
            onPress={handleSave}
          />
        </View>
      </ScrollView>

      <Modal
        visible={isDisciplineModalOpen}
        animationType="slide"
        transparent
        onRequestClose={() => setIsDisciplineModalOpen(false)}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={styles.modalOverlay}
          onPress={() => setIsDisciplineModalOpen(false)}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Selecione a Disciplina</Text>
              <TouchableOpacity onPress={() => setIsDisciplineModalOpen(false)}>
                <Text style={styles.modalCloseText}>Fechar</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={MOCK_DISCIPLINES}
              keyExtractor={(item) => item}
              renderItem={({ item }) => {
                const isSelected = selectedDiscipline === item
                return (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={[
                      styles.disciplineItem,
                      isSelected && styles.disciplineItemActive,
                    ]}
                    onPress={() => {
                      setSelectedDiscipline(item)
                      setIsDisciplineModalOpen(false)
                    }}
                  >
                    <Text
                      style={[
                        styles.disciplineText,
                        isSelected && styles.disciplineTextActive,
                      ]}
                    >
                      {item}
                    </Text>
                    {isSelected && (
                      <Ionicons
                        name="checkmark"
                        size={20}
                        color={colors.primary}
                      />
                    )}
                  </TouchableOpacity>
                )
              }}
            />
          </View>
        </TouchableOpacity>
      </Modal>

      <Modal
        visible={isDateModalOpen}
        animationType="slide"
        transparent
        onRequestClose={() => setIsDateModalOpen(false)}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={styles.modalOverlay}
          onPress={() => setIsDateModalOpen(false)}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Selecionar Data de Entrega</Text>
              <TouchableOpacity onPress={() => setIsDateModalOpen(false)}>
                <Text style={styles.modalCloseText}>Fechar</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.fieldLabel}>Seleção rápida:</Text>
            <View style={styles.quickDateContainer}>
              <TouchableOpacity
                style={styles.quickDateChip}
                onPress={() => handleSelectQuickDate(0)}
              >
                <Text style={styles.quickDateChipText}>Hoje</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.quickDateChip}
                onPress={() => handleSelectQuickDate(1)}
              >
                <Text style={styles.quickDateChipText}>Amanhã</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.quickDateChip}
                onPress={() => handleSelectQuickDate(7)}
              >
                <Text style={styles.quickDateChipText}>Em 7 dias</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.quickDateChip}
                onPress={() => handleSelectQuickDate(15)}
              >
                <Text style={styles.quickDateChipText}>Em 15 dias</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </KeyboardAvoidingView>
  )
}

export default ActivityCard
