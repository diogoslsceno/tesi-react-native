import { type SQLiteDatabase } from "expo-sqlite"

export async function initializeDatabase(db: SQLiteDatabase) {
  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS activities (
      id TEXT PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      summary TEXT,
      description TEXT NOT NULL,
      deadline TEXT NOT NULL,
      discipline TEXT NOT NULL,
      disciplineIconName TEXT NOT NULL,
      statusType TEXT NOT NULL,
      statusLabel TEXT NOT NULL,
      categories TEXT NOT NULL,
      isCompleted INTEGER NOT NULL DEFAULT 0,
      actionText TEXT,
      priority TEXT,
      studyTip TEXT
    );
  `)

  const countResult = await db.getFirstAsync<{ count: number }>(
    "SELECT COUNT(*) as count FROM activities;"
  )

  if (countResult && countResult.count === 0) {
    const initialActivities = [
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
        statusType: "urgente",
        statusLabel: "Urgente",
        categories: JSON.stringify(["Pendentes"]),
        isCompleted: 0,
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
        statusType: "urgente",
        statusLabel: "Urgente",
        categories: JSON.stringify(["Pendentes"]),
        isCompleted: 0,
        actionText: "Ver detalhes",
        priority: "Alta",
        studyTip:
          "Organize os pontos principais da apresentação com antecedência.",
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
        statusType: "proxima",
        statusLabel: "Próxima",
        categories: JSON.stringify(["Pendentes", "Em andamento"]),
        isCompleted: 0,
        actionText: "Ver detalhes",
        priority: "Média",
        studyTip:
          "Revise os conceitos de distribuição normal antes de resolver os exercícios.",
      },
      {
        id: "4",
        title: "Projeto mobile",
        summary:
          "Implementação da interface principal e integração com API REST.",
        description:
          "Implementação da interface principal e integração com API REST.",
        deadline: "Ontem",
        discipline: "Desenvolvimento App",
        disciplineIconName: "code",
        statusType: "concluida",
        statusLabel: "Concluída",
        categories: JSON.stringify(["Concluídas"]),
        isCompleted: 1,
        actionText: "Entregue",
        priority: "Média",
        studyTip: "Documente o processo de integração para futuras referências.",
      },
    ]

    for (const item of initialActivities) {
      await db.runAsync(
        `INSERT INTO activities (
          id, title, summary, description, deadline, discipline, disciplineIconName,
          statusType, statusLabel, categories, isCompleted, actionText, priority, studyTip
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
        item.id,
        item.title,
        item.summary,
        item.description,
        item.deadline,
        item.discipline,
        item.disciplineIconName,
        item.statusType,
        item.statusLabel,
        item.categories,
        item.isCompleted,
        item.actionText,
        item.priority,
        item.studyTip
      )
    }
  }
}
