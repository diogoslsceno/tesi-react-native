import { useActivities } from "@/contexts/ActivitiesContext"
import { colors } from "@/styles/colors"
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons"
import { router, useLocalSearchParams } from "expo-router"
import { useState } from "react"
import {
  Alert,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { styles } from "./style"

export function ActivityDetails() {
  const { id } = useLocalSearchParams<{ id?: string }>()
  const insets = useSafeAreaInsets()
  const { getActivityById, toggleCompleteActivity, deleteActivity } =
    useActivities()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const activity = id ? getActivityById(id) : undefined

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back()
    } else {
      router.replace("/(tabs)/activity")
    }
  }

  const handleToggleComplete = () => {
    if (!activity) return
    toggleCompleteActivity(activity.id)
  }

  const handleEdit = () => {
    if (!activity) return
    setIsMenuOpen(false)
    router.push({
      pathname: "/(tabs)/activity",
      params: { form: "true", mode: "edit", id: activity.id },
    })
  }

  const handleDelete = () => {
    if (!activity) return
    setIsMenuOpen(false)
    Alert.alert(
      "Excluir Atividade",
      `Deseja realmente excluir a atividade "${activity.title}"?`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => {
            deleteActivity(activity.id)
            handleBack()
          },
        },
      ]
    )
  }

  if (!activity) {
    return (
      <View
        style={[
          styles.container,
          { paddingTop: insets.top, paddingBottom: insets.bottom },
        ]}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={handleBack}
            accessibilityLabel="Voltar"
          >
            <Ionicons name="arrow-back" size={24} color={colors.text.primary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Detalhes</Text>
          <View style={styles.headerButton} />
        </View>

        <View style={styles.notFoundContainer}>
          <Text style={styles.notFoundTitle}>Atividade não encontrada</Text>
          <Text style={styles.notFoundSubtitle}>
            A atividade selecionada não pôde ser carregada ou foi removida.
          </Text>
          <TouchableOpacity
            style={styles.primaryActionButton}
            onPress={handleBack}
          >
            <Text style={styles.primaryActionButtonText}>
              VOLTAR PARA A LISTA
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const isCompleted = !!activity.isCompleted
  const priority = activity.priority || "Alta"

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={handleBack}
          activeOpacity={0.7}
          accessibilityRole="button"
          accessibilityLabel="Voltar"
        >
          <Ionicons name="arrow-back" size={24} color={colors.text.primary} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Detalhes</Text>

        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => setIsMenuOpen(true)}
          activeOpacity={0.7}
          accessibilityRole="button"
          accessibilityLabel="Menu de opções"
        >
          <Ionicons
            name="ellipsis-vertical"
            size={20}
            color={colors.text.primary}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.badgesRow}>
          {isCompleted ? (
            <View
              style={[
                styles.badge,
                { backgroundColor: colors.status.completedBg },
              ]}
            >
              <Ionicons
                name="checkmark-circle"
                size={13}
                color={colors.status.completedText}
              />
              <Text
                style={[
                  styles.badgeText,
                  { color: colors.status.completedText },
                ]}
              >
                Concluída
              </Text>
            </View>
          ) : (
            <View
              style={[
                styles.badge,
                { backgroundColor: colors.background.gray },
              ]}
            >
              <Ionicons
                name="ellipsis-horizontal-circle-outline"
                size={13}
                color={colors.text.secundary}
              />
              <Text
                style={[styles.badgeText, { color: colors.text.secundary }]}
              >
                Pendente
              </Text>
            </View>
          )}

          {priority === "Alta" && (
            <View
              style={[
                styles.badge,
                { backgroundColor: colors.status.urgentBg },
              ]}
            >
              <MaterialCommunityIcons
                name="exclamation-thick"
                size={12}
                color={colors.status.urgentText}
              />
              <Text
                style={[styles.badgeText, { color: colors.status.urgentText }]}
              >
                Alta Prioridade
              </Text>
            </View>
          )}

          {priority === "Média" && (
            <View
              style={[
                styles.badge,
                { backgroundColor: colors.background.badgeOrangeLight },
              ]}
            >
              <Ionicons
                name="information-circle-outline"
                size={12}
                color={colors.orange.Primary}
              />
              <Text
                style={[styles.badgeText, { color: colors.orange.Primary }]}
              >
                Média Prioridade
              </Text>
            </View>
          )}

          {priority === "Baixa" && (
            <View
              style={[
                styles.badge,
                { backgroundColor: colors.background.blue },
              ]}
            >
              <Ionicons
                name="information-circle-outline"
                size={12}
                color={colors.info}
              />
              <Text style={[styles.badgeText, { color: colors.info }]}>
                Baixa Prioridade
              </Text>
            </View>
          )}
        </View>

        <Text style={styles.title}>{activity.title}</Text>

        <View style={styles.infoCardsRow}>
          <View style={styles.infoCard}>
            <View style={styles.infoCardHeader}>
              <MaterialCommunityIcons
                name="book"
                size={14}
                color={colors.info}
              />
              <Text style={styles.infoCardLabel}>DISCIPLINA</Text>
            </View>
            <Text style={styles.infoCardValue}>{activity.discipline}</Text>
          </View>

          <View style={styles.infoCard}>
            <View style={styles.infoCardHeader}>
              <MaterialCommunityIcons
                name="calendar"
                size={14}
                color={colors.info}
              />
              <Text style={styles.infoCardLabel}>ENTREGA</Text>
            </View>
            <Text style={styles.infoCardValueRed}>{activity.deadline}</Text>
          </View>
        </View>

        <View style={styles.tipCard}>
          <View style={styles.tipIconContainer}>
            <Ionicons name="bulb" size={24} color={colors.infoLight} />
          </View>
          <View style={styles.tipTextContainer}>
            <Text style={styles.tipTitle}>Dica de Estudo</Text>
            <Text style={styles.tipDescription}>
              {activity.studyTip ||
                "Comece esta atividade com antecedência para evitar atrasos na entrega."}
            </Text>
          </View>
        </View>

        <View style={styles.descriptionCard}>
          <View style={styles.descriptionHeader}>
            <Ionicons name="menu-outline" size={18} color={colors.info} />
            <Text style={styles.descriptionTitle}>Descrição da Tarefa</Text>
          </View>

          <View style={styles.divider} />

          <Text style={styles.descriptionText}>{activity.description}</Text>
        </View>
      </ScrollView>

      <View
        style={[
          styles.fixedActionsContainer,
          { paddingBottom: Math.max(insets.bottom, 12) },
        ]}
      >
        <TouchableOpacity
          style={[
            styles.primaryActionButton,
            isCompleted && { backgroundColor: colors.green },
          ]}
          onPress={handleToggleComplete}
          activeOpacity={0.8}
          accessibilityRole="button"
        >
          <Ionicons name="checkmark-circle" size={18} color={colors.white} />
          <Text style={styles.primaryActionButtonText}>
            {isCompleted ? "CONCLUÍDA (DESMARCAR)" : "MARCAR COMO CONCLUÍDA"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryActionButton}
          onPress={handleEdit}
          activeOpacity={0.8}
          accessibilityRole="button"
        >
          <Ionicons name="pencil" size={14} color={colors.text.secundary} />
          <Text style={styles.secondaryActionButtonText}>EDITAR ATIVIDADE</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={isMenuOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setIsMenuOpen(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsMenuOpen(false)}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Opções da Atividade</Text>

            <TouchableOpacity
              style={styles.modalItem}
              onPress={handleEdit}
              activeOpacity={0.7}
            >
              <Ionicons name="pencil" size={18} color={colors.text.primary} />
              <Text style={styles.modalItemText}>Editar atividade</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalItem}
              onPress={() => {
                setIsMenuOpen(false)
                handleToggleComplete()
              }}
              activeOpacity={0.7}
            >
              <Ionicons
                name={
                  isCompleted
                    ? "refresh-circle-outline"
                    : "checkmark-circle-outline"
                }
                size={20}
                color={colors.text.primary}
              />
              <Text style={styles.modalItemText}>
                {isCompleted ? "Marcar como pendente" : "Marcar como concluída"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalItem}
              onPress={handleDelete}
              activeOpacity={0.7}
            >
              <MaterialIcons
                name="delete-outline"
                size={20}
                color={colors.red}
              />
              <Text style={styles.modalItemTextDanger}>Excluir atividade</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  )
}

export default ActivityDetails
