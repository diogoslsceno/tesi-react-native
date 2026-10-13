import { ActivityItem } from "@/components/activityList"
import { activitiesRepository } from "@/database/activitiesRepository"
import { useSQLiteContext } from "expo-sqlite"
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"

interface ActivitiesContextData {
  activities: ActivityItem[]
  completeActivity: (id: string) => Promise<void>
  toggleCompleteActivity: (id: string) => Promise<void>
  updateActivity: (id: string, updated: Partial<ActivityItem>) => Promise<void>
  addActivity: (activity: Omit<ActivityItem, "id">) => Promise<void>
  deleteActivity: (id: string) => Promise<void>
  getActivityById: (id: string) => ActivityItem | undefined
  refreshActivities: () => Promise<void>
}

const ActivitiesContext = createContext<ActivitiesContextData>(
  {} as ActivitiesContextData
)

interface ActivitiesProviderProps {
  children: ReactNode
}

export function ActivitiesProvider({ children }: ActivitiesProviderProps) {
  const db = useSQLiteContext()
  const [activities, setActivities] = useState<ActivityItem[]>([])

  const refreshActivities = useCallback(async () => {
    try {
      const data = await activitiesRepository.getAll(db)
      setActivities(data)
    } catch (error) {
      console.error("Erro ao carregar atividades do SQLite:", error)
    }
  }, [db])

  useEffect(() => {
    refreshActivities()
  }, [refreshActivities])

  const completeActivity = useCallback(
    async (id: string) => {
      const current = activities.find((a) => a.id === id)
      if (!current || current.isCompleted) return

      try {
        await activitiesRepository.toggleComplete(db, current)
        await refreshActivities()
      } catch (error) {
        console.error("Erro ao marcar atividade como concluída:", error)
      }
    },
    [activities, db, refreshActivities]
  )

  const toggleCompleteActivity = useCallback(
    async (id: string) => {
      const current = activities.find((a) => a.id === id)
      if (!current) return

      try {
        await activitiesRepository.toggleComplete(db, current)
        await refreshActivities()
      } catch (error) {
        console.error("Erro ao alternar conclusão no SQLite:", error)
      }
    },
    [activities, db, refreshActivities]
  )

  const updateActivity = useCallback(
    async (id: string, updated: Partial<ActivityItem>) => {
      try {
        await activitiesRepository.update(db, id, updated)
        await refreshActivities()
      } catch (error) {
        console.error("Erro ao atualizar atividade no SQLite:", error)
      }
    },
    [db, refreshActivities]
  )

  const addActivity = useCallback(
    async (newActivityData: Omit<ActivityItem, "id">) => {
      const newActivity: ActivityItem = {
        ...newActivityData,
        id: String(Date.now()),
      }

      try {
        await activitiesRepository.create(db, newActivity)
        await refreshActivities()
      } catch (error) {
        console.error("Erro ao cadastrar atividade no SQLite:", error)
      }
    },
    [db, refreshActivities]
  )

  const deleteActivity = useCallback(
    async (id: string) => {
      try {
        await activitiesRepository.delete(db, id)
        await refreshActivities()
      } catch (error) {
        console.error("Erro ao excluir atividade no SQLite:", error)
      }
    },
    [db, refreshActivities]
  )

  const getActivityById = useCallback(
    (id: string) => activities.find((a) => a.id === id),
    [activities]
  )

  return (
    <ActivitiesContext.Provider
      value={{
        activities,
        completeActivity,
        toggleCompleteActivity,
        updateActivity,
        addActivity,
        deleteActivity,
        getActivityById,
        refreshActivities,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  )
}

export function useActivities() {
  return useContext(ActivitiesContext)
}
