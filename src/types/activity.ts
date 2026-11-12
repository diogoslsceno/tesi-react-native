export type ActivityFilterType =
  | "Todas"
  | "Pendentes"
  | "Em andamento"
  | "Concluídas"

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
