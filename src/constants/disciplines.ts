import { DisciplineItem } from "@/types/discipline"

export const DISCIPLINES: DisciplineItem[] = [
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

export const AVAILABLE_DISCIPLINES: string[] = [
  "Metodologia Científica",
  "Filosofia",
  "Estatística",
  "Desenvolvimento App",
  "Cálculo I",
  "Algoritmos",
  "Estrutura de Dados I",
]
