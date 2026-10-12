import { useActivities } from "@/contexts/ActivitiesContext"
import { colors } from "@/styles/colors"
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons"
import { router } from "expo-router"
import { useState } from "react"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"

const profilePhoto = require("../../../assets/images/profile-photo.png")

export type ActivityFilterType =
  "Todas" | "Pendentes" | "Em andamento" | "Concluídas"

export type ActivityStatusType = "urgente" | "proxima" | "concluida"

export type ActivityPriorityType = "Baixa" | "Média" | "Alta"

export interface ActivityItem {
  id: string
  title: string
  summary?: string
  description: string
  deadline: string
  discipline: string
  disciplineIconName: "book" | "grid" | "code"
  statusType: ActivityStatusType
  statusLabel: string
  categories: ("Pendentes" | "Em andamento" | "Concluídas")[]
  isCompleted?: boolean
  actionText?: string
  priority?: ActivityPriorityType
  studyTip?: string
}

const FILTERS: ActivityFilterType[] = [
  "Todas",
  "Pendentes",
  "Em andamento",
  "Concluídas",
]

export function ActivitiesList() {
  const [selectedFilter, setSelectedFilter] =
    useState<ActivityFilterType>("Todas")
  const { activities } = useActivities()

  const filteredActivities = activities.filter((activity) => {
    if (selectedFilter === "Todas") {
      return true
    }
    return activity.categories.includes(
      selectedFilter as "Pendentes" | "Em andamento" | "Concluídas"
    )
  })

  const handleAddActivity = () => {
    router.push("/(tabs)/activity?form=true")
  }

  const handleViewDetails = (activity: ActivityItem) => {
    router.push(`/activity-details?id=${activity.id}`)
  }

  const renderDisciplineIcon = (
    iconName: ActivityItem["disciplineIconName"]
  ) => {
    switch (iconName) {
      case "book":
        return <AntDesign name="book" size={16} color={colors.text.secundary} />
      case "grid":
        return (
          <MaterialCommunityIcons
            name="calculator-variant-outline"
            size={16}
            color={colors.text.secundary}
          />
        )
      case "code":
        return <Ionicons name="code" size={16} color={colors.text.secundary} />
      default:
        return (
          <Ionicons
            name="document-text-outline"
            size={16}
            color={colors.text.secundary}
          />
        )
    }
  }

  const renderStatusBadge = (statusType: ActivityStatusType, label: string) => {
    switch (statusType) {
      case "urgente":
        return (
          <View
            style={[styles.badge, { backgroundColor: colors.status.urgentBg }]}
          >
            <Feather
              name="alert-triangle"
              size={12}
              color={colors.status.urgentText}
            />
            <Text
              style={[styles.badgeText, { color: colors.status.urgentText }]}
            >
              {label}
            </Text>
          </View>
        )
      case "proxima":
        return (
          <View
            style={[styles.badge, { backgroundColor: colors.status.nextBg }]}
          >
            <Ionicons name="time-outline" size={13} color={colors.white} />
            <Text style={[styles.badgeText, { color: colors.status.nextText }]}>
              {label}
            </Text>
          </View>
        )
      case "concluida":
        return (
          <View
            style={[
              styles.badge,
              { backgroundColor: colors.status.completedBg },
            ]}
          >
            <Ionicons
              name="checkmark-circle"
              size={14}
              color={colors.status.completedText}
            />
            <Text
              style={[styles.badgeText, { color: colors.status.completedText }]}
            >
              {label}
            </Text>
          </View>
        )
    }
  }

  const getStripeColor = (statusType: ActivityStatusType) => {
    switch (statusType) {
      case "urgente":
        return colors.status.urgent
      case "proxima":
        return colors.status.next
      case "concluida":
        return colors.status.completed
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image source={profilePhoto} style={styles.headerAvatar} />
            <Text style={styles.headerTitle}>Minha Rotina</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.headerIcon}
            accessibilityLabel="Notificações"
          >
            <Ionicons
              name="notifications-outline"
              size={22}
              color={colors.text.secundary}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.screenTitle}>Atividades e Prazos</Text>
          <Text style={styles.screenSubtitle}>
            Acompanhe suas entregas e mantenha sua rotina em dia.
          </Text>
        </View>

        <View style={styles.filtersContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filtersScroll}
          >
            {FILTERS.map((filter) => {
              const isSelected = selectedFilter === filter
              return (
                <TouchableOpacity
                  key={filter}
                  activeOpacity={0.75}
                  onPress={() => setSelectedFilter(filter)}
                  style={[
                    styles.filterChip,
                    isSelected && styles.filterChipActive,
                  ]}
                  accessibilityRole="button"
                  accessibilityState={{ selected: isSelected }}
                >
                  <Text
                    style={[
                      styles.filterChipText,
                      isSelected && styles.filterChipTextActive,
                    ]}
                  >
                    {filter}
                  </Text>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
        </View>

        <View style={styles.cardsContainer}>
          {filteredActivities.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyTitle}>
                Nenhuma atividade encontrada
              </Text>
              <Text style={styles.emptySubtitle}>
                Não há atividades cadastradas para o filtro "{selectedFilter}".
              </Text>
              <TouchableOpacity
                style={styles.emptyResetButton}
                activeOpacity={0.7}
                onPress={() => setSelectedFilter("Todas")}
              >
                <Text style={styles.emptyResetButtonText}>
                  Ver todas as atividades
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            filteredActivities.map((activity) => {
              const isCompleted = activity.isCompleted
              return (
                <View key={activity.id} style={styles.card}>
                  <View
                    style={[
                      styles.cardStripe,
                      { backgroundColor: getStripeColor(activity.statusType) },
                    ]}
                  />

                  <View style={styles.cardInner}>
                    <View style={styles.cardTopRow}>
                      {renderStatusBadge(
                        activity.statusType,
                        activity.statusLabel
                      )}
                      <Text style={styles.cardDeadline}>
                        {activity.deadline}
                      </Text>
                    </View>

                    <Text style={styles.cardTitle}>{activity.title}</Text>

                    <Text style={styles.cardDescription}>
                      {activity.summary || activity.description}
                    </Text>

                    <View style={styles.cardDivider} />

                    <View style={styles.cardFooter}>
                      <View style={styles.cardDiscipline}>
                        {renderDisciplineIcon(activity.disciplineIconName)}
                        <Text style={styles.cardDisciplineText}>
                          {activity.discipline}
                        </Text>
                      </View>

                      {isCompleted ? (
                        <Text style={styles.cardActionTextCompleted}>
                          {activity.actionText || "Entregue"}
                        </Text>
                      ) : (
                        <TouchableOpacity
                          activeOpacity={0.7}
                          onPress={() => handleViewDetails(activity)}
                        >
                          <Text style={styles.cardActionText}>
                            {activity.actionText || "Ver detalhes"}
                          </Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                </View>
              )
            })
          )}
        </View>

        <View style={styles.addCardContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.addButton}
            onPress={handleAddActivity}
            accessibilityLabel="Adicionar nova atividade"
          >
            <Ionicons name="add" size={28} color={colors.white} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default ActivitiesList
