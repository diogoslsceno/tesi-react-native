import { ActivityItem, ActivityStatusType } from "@/components/activitiesList"
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react"

const INITIAL_ACTIVITIES: ActivityItem[] = [
  {
    id: "1",
    title: "Elaboração do Artigo de Metodologia Científica",
    summary:
      "O artigo deve conter no mínimo 5 páginas e no máximo 10 páginas, abordando o tema escolhido na aula anterior.",
    description:
      "O artigo deve conter no mínimo 5 páginas e no máximo 10 páginas, abordando o tema escolhido na aula anterior.\n\nÉ obrigatório o uso das normas ABNT atualizadas (margens, espaçamento, citações diretas e indiretas). A estrutura deve conter:\n\nIntrodução\n\nDesenvolvimento Teórico\n\nMetodologia Aplicada\n\nConsiderações Finais\n\nReferências (Mínimo de 3 fontes acadêmicas)\n\nO envio deve ser feito exclusivamente em formato PDF através do portal do aluno.",
    deadline: "24 Out, 23:59",
    discipline: "Metodologia Científica",
    disciplineIconName: "book",
    statusType: "urgente" as ActivityStatusType,
    statusLabel: "Urgente",
    categories: ["Pendentes"],
    isCompleted: false,
    actionText: "Ver detalhes",
    priority: "Alta",
    studyTip:
      "Comece esta atividade com antecedência para evitar atrasos na formatação ABNT.",
  },
  {
    id: "2",
    title: "Seminário de ética",
    summary:
      "Preparar slides e roteiro para a apresentação final da disciplina de Ética Profissional.",
    description:
      "Preparar slides e roteiro para a apresentação final da disciplina de Ética Profissional.",
    deadline: "Hoje, 23:59",
    discipline: "Filosofia",
    disciplineIconName: "book",
    statusType: "urgente" as ActivityStatusType,
    statusLabel: "Urgente",
    categories: ["Pendentes"],
    isCompleted: false,
    actionText: "Ver detalhes",
    priority: "Alta",
    studyTip: "Organize os pontos principais da apresentação com antecedência.",
  },
  {
    id: "3",
    title: "Exercícios de probabilidade",
    summary:
      "Lista 4 - Distribuição Normal e Teorema do Limite Central. Entregar em PDF.",
    description:
      "Lista 4 - Distribuição Normal e Teorema do Limite Central. Entregar em PDF.",
    deadline: "Amanhã, 10:00",
    discipline: "Estatística",
    disciplineIconName: "grid",
    statusType: "proxima" as ActivityStatusType,
    statusLabel: "Próxima",
    categories: ["Pendentes", "Em andamento"],
    isCompleted: false,
    actionText: "Ver detalhes",
    priority: "Média",
    studyTip:
      "Revise os conceitos de distribuição normal antes de resolver os exercícios.",
  },
  {
    id: "4",
    title: "Projeto mobile",
    summary: "Implementação da interface principal e integração com API REST.",
    description:
      "Implementação da interface principal e integração com API REST.",
    deadline: "Ontem",
    discipline: "Desenvolvimento App",
    disciplineIconName: "code",
    statusType: "concluida" as ActivityStatusType,
    statusLabel: "Concluída",
    categories: ["Concluídas"],
    isCompleted: true,
    actionText: "Entregue",
    priority: "Média",
    studyTip: "Documente o processo de integração para futuras referências.",
  },
]

interface ActivitiesContextData {
  activities: ActivityItem[]
  completeActivity: (id: string) => void
  toggleCompleteActivity: (id: string) => void
  updateActivity: (id: string, updated: Partial<ActivityItem>) => void
  addActivity: (activity: Omit<ActivityItem, "id">) => void
  deleteActivity: (id: string) => void
  getActivityById: (id: string) => ActivityItem | undefined
}

const ActivitiesContext = createContext<ActivitiesContextData>(
  {} as ActivitiesContextData
)

interface ActivitiesProviderProps {
  children: ReactNode
}

export function ActivitiesProvider({ children }: ActivitiesProviderProps) {
  const [activities, setActivities] =
    useState<ActivityItem[]>(INITIAL_ACTIVITIES)

  const completeActivity = useCallback((id: string) => {
    setActivities((prev) =>
      prev.map((activity) => {
        if (activity.id !== id) return activity
        return {
          ...activity,
          isCompleted: true,
          statusType: "concluida" as ActivityStatusType,
          statusLabel: "Concluída",
          actionText: "Entregue",
          categories: ["Concluídas"],
        }
      })
    )
  }, [])

  const toggleCompleteActivity = useCallback((id: string) => {
    setActivities((prev) =>
      prev.map((activity) => {
        if (activity.id !== id) return activity
        if (activity.isCompleted) {
          const isUrgent = activity.priority === "Alta"
          return {
            ...activity,
            isCompleted: false,
            statusType: (isUrgent
              ? "urgente"
              : "proxima") as ActivityStatusType,
            statusLabel: isUrgent ? "Urgente" : "Próxima",
            actionText: "Ver detalhes",
            categories: ["Pendentes"],
          }
        }
        return {
          ...activity,
          isCompleted: true,
          statusType: "concluida" as ActivityStatusType,
          statusLabel: "Concluída",
          actionText: "Entregue",
          categories: ["Concluídas"],
        }
      })
    )
  }, [])

  const updateActivity = useCallback(
    (id: string, updated: Partial<ActivityItem>) => {
      setActivities((prev) =>
        prev.map((activity) => {
          if (activity.id !== id) return activity
          return {
            ...activity,
            ...updated,
          }
        })
      )
    },
    []
  )

  const addActivity = useCallback(
    (newActivityData: Omit<ActivityItem, "id">) => {
      const newActivity: ActivityItem = {
        ...newActivityData,
        id: String(Date.now()),
      }
      setActivities((prev) => [newActivity, ...prev])
    },
    []
  )

  const deleteActivity = useCallback((id: string) => {
    setActivities((prev) => prev.filter((activity) => activity.id !== id))
  }, [])

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
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  )
}

export function useActivities() {
  return useContext(ActivitiesContext)
}
