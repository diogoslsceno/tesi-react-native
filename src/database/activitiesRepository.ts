import {
  ActivityItem,
  ActivityPriorityType,
  ActivityStatusType,
} from "@/components/activityList"
import { type SQLiteDatabase } from "expo-sqlite"

interface ActivityRow {
  id: string
  title: string
  summary: string | null
  description: string
  deadline: string
  discipline: string
  disciplineIconName: "book" | "grid" | "code"
  statusType: ActivityStatusType
  statusLabel: string
  categories: string
  isCompleted: number
  actionText: string | null
  priority: ActivityPriorityType | null
  studyTip: string | null
}

function mapRowToActivity(row: ActivityRow): ActivityItem {
  let categories: ("Pendentes" | "Em andamento" | "Concluídas")[] = [
    "Pendentes",
  ]
  try {
    categories = JSON.parse(row.categories)
  } catch {
    categories = ["Pendentes"]
  }

  return {
    id: row.id,
    title: row.title,
    summary: row.summary || undefined,
    description: row.description,
    deadline: row.deadline,
    discipline: row.discipline,
    disciplineIconName: row.disciplineIconName,
    statusType: row.statusType,
    statusLabel: row.statusLabel,
    categories,
    isCompleted: Boolean(row.isCompleted),
    actionText: row.actionText || undefined,
    priority: row.priority || undefined,
    studyTip: row.studyTip || undefined,
  }
}

export const activitiesRepository = {
  async getAll(db: SQLiteDatabase): Promise<ActivityItem[]> {
    const rows = await db.getAllAsync<ActivityRow>(
      "SELECT * FROM activities ORDER BY isCompleted ASC, id DESC;"
    )
    return rows.map(mapRowToActivity)
  },

  async create(db: SQLiteDatabase, activity: ActivityItem): Promise<void> {
    await db.runAsync(
      `INSERT INTO activities (
        id, title, summary, description, deadline, discipline, disciplineIconName,
        statusType, statusLabel, categories, isCompleted, actionText, priority, studyTip
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
      activity.id,
      activity.title,
      activity.summary || null,
      activity.description,
      activity.deadline,
      activity.discipline,
      activity.disciplineIconName,
      activity.statusType,
      activity.statusLabel,
      JSON.stringify(activity.categories),
      activity.isCompleted ? 1 : 0,
      activity.actionText || null,
      activity.priority || null,
      activity.studyTip || null
    )
  },

  async update(
    db: SQLiteDatabase,
    id: string,
    updated: Partial<ActivityItem>
  ): Promise<void> {
    const current = await db.getFirstAsync<ActivityRow>(
      "SELECT * FROM activities WHERE id = ?;",
      id
    )
    if (!current) return

    const currentActivity = mapRowToActivity(current)
    const merged: ActivityItem = {
      ...currentActivity,
      ...updated,
    }

    await db.runAsync(
      `UPDATE activities SET
        title = ?,
        summary = ?,
        description = ?,
        deadline = ?,
        discipline = ?,
        disciplineIconName = ?,
        statusType = ?,
        statusLabel = ?,
        categories = ?,
        isCompleted = ?,
        actionText = ?,
        priority = ?,
        studyTip = ?
      WHERE id = ?;`,
      merged.title,
      merged.summary || null,
      merged.description,
      merged.deadline,
      merged.discipline,
      merged.disciplineIconName,
      merged.statusType,
      merged.statusLabel,
      JSON.stringify(merged.categories),
      merged.isCompleted ? 1 : 0,
      merged.actionText || null,
      merged.priority || null,
      merged.studyTip || null,
      id
    )
  },

  async delete(db: SQLiteDatabase, id: string): Promise<void> {
    await db.runAsync("DELETE FROM activities WHERE id = ?;", id)
  },

  async toggleComplete(
    db: SQLiteDatabase,
    activity: ActivityItem
  ): Promise<ActivityItem> {
    const newIsCompleted = !activity.isCompleted
    const isUrgent = activity.priority === "Alta"
    const newStatusType: ActivityStatusType = newIsCompleted
      ? "concluida"
      : isUrgent
        ? "urgente"
        : "proxima"
    const newStatusLabel = newIsCompleted
      ? "Concluída"
      : isUrgent
        ? "Urgente"
        : "Próxima"
    const newActionText = newIsCompleted ? "Entregue" : "Ver detalhes"
    const newCategories: ("Pendentes" | "Em andamento" | "Concluídas")[] =
      newIsCompleted ? ["Concluídas"] : ["Pendentes"]

    await db.runAsync(
      `UPDATE activities SET
        isCompleted = ?,
        statusType = ?,
        statusLabel = ?,
        actionText = ?,
        categories = ?
      WHERE id = ?;`,
      newIsCompleted ? 1 : 0,
      newStatusType,
      newStatusLabel,
      newActionText,
      JSON.stringify(newCategories),
      activity.id
    )

    return {
      ...activity,
      isCompleted: newIsCompleted,
      statusType: newStatusType,
      statusLabel: newStatusLabel,
      actionText: newActionText,
      categories: newCategories,
    }
  },
}
