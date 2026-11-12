# Rotina Acadêmica (TESI): Contexto Geral do Repositório

---

## Visão Geral

Aplicativo mobile acadêmico desenvolvido em **React Native + Expo + TypeScript** com **Expo Router** para navegação. O objetivo é permitir que estudantes organizem disciplinas, atividades e prazos de forma visual e intuitiva.

* **Stack:** React Native 0.86.3 · Expo SDK 57 · TypeScript 6 · Expo Router 57 · expo-sqlite (Banco local) · expo-file-system / expo-image-picker
* **Gerenciador de pacotes:** npm (`package-lock.json` presente)
* **Fontes:** Manrope (300 a 700) via `@expo-google-fonts/manrope`
* **Ícones:** `@expo/vector-icons` (AntDesign, Feather, FontAwesome, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons)

---

## Estrutura de Pastas

```
tesi-react-native/
├── assets/
│   └── images/
│       ├── profile-photo.png        # Avatar padrão utilizado como fallback em todas as telas
│       ├── geral.png                # Mockup de referência visual unificado das telas do app
│       ├── icon.png                 # Ícone principal do aplicativo
│       ├── splash-icon.png          # Imagem de splash screen
│       ├── favicon.png              # Favicon para versão Web
│       └── android-icon-*.png       # Ícones adaptativos do Android
│
├── docs/
│   └── CONTEXT.md                   # Documentação arquitetural e contexto geral do projeto
│
├── src/
│   ├── app/
│   │   ├── _layout.tsx              # Root Stack com SQLiteProvider, ActivitiesProvider e ProfileProvider
│   │   ├── index.tsx                # Redirect inicial para /(tabs)
│   │   ├── new-activity.tsx         # Redirect para /(tabs)/activity?form=true
│   │   ├── activity-details.tsx     # Rota da tela de Detalhes da Atividade
│   │   └── (tabs)/
│   │       ├── _layout.tsx          # Navegador de abas inferiores (4 telas)
│   │       ├── index.tsx            # Tela Início
│   │       ├── discipline.tsx       # Tela Minhas Disciplinas
│   │       ├── activity.tsx         # Tela Atividades e Prazos / Formulário de Atividade
│   │       └── profile.tsx          # Tela Perfil
│   │
│   ├── components/
│   │   ├── activityList/            # Listagem "Atividades e Prazos" com filtros por categoria
│   │   ├── activityCard/            # Formulário "Nova Atividade" e "Editar Atividade"
│   │   ├── activityDetails/         # Visualização completa de "Detalhes" da atividade
│   │   ├── profileCard/             # Tela completa de Perfil do estudante e estatísticas
│   │   ├── DisciplineCard/          # Card detalhado de disciplina na aba Disciplinas
│   │   ├── CourseCard/              # Card compacto de disciplina na aba Início
│   │   ├── TaskCard/                # Card compacto de próxima atividade na aba Início
│   │   ├── SummaryCard/             # Card numérico de resumo com decoração circular translúcida
│   │   ├── SearchBar/               # Barra de busca reutilizável
│   │   ├── button/                  # Botão de ação primário
│   │   └── loading/                 # Indicador de carregamento inicial
│   │
│   ├── constants/
│   │   └── disciplines.ts           # Dados estáticos das disciplinas e lista para seleção
│   │
│   ├── contexts/
│   │   ├── ActivitiesContext.tsx    # Estado global reativo de atividades integrado ao SQLite
│   │   └── ProfileContext.tsx       # Estado global reativo da foto de perfil com persistência local
│   │
│   ├── database/
│   │   ├── initializeDatabase.ts    # Criação de tabela em modo WAL e seed inicial transacional
│   │   └── activitiesRepository.ts  # Operações CRUD parametrizadas no SQLite
│   │
│   ├── screens/
│   │   ├── index-style.ts           # Estilos da tela Início
│   │   └── discipline-style.ts      # Estilos da tela Minhas Disciplinas
│   │
│   ├── styles/
│   │   ├── colors.ts                # Paleta de cores centralizada
│   │   ├── fontFamily.ts            # Tokens da família tipográfica Manrope
│   │   └── textSize.ts              # Tokens de tamanhos tipográficos
│   │
│   └── types/
│       ├── activity.ts              # Tipagens e interfaces de atividades
│       └── discipline.ts            # Tipagens e interfaces de disciplinas
```

---

## Roteamento (Expo Router)

### Root Stack (`src/app/_layout.tsx`)
Carrega as fontes Manrope, inicializa o banco `rotina_academica.db` via `SQLiteProvider`, provê os contextos globais `ActivitiesProvider` e `ProfileProvider`, fixa o `StatusBar` no estilo escuro e declara as rotas principais:

| Rota               | Destino                                                       |
|--------------------|---------------------------------------------------------------|
| `index`            | Redireciona para `/(tabs)`                                    |
| `(tabs)`           | Navegador de abas inferiores                                  |
| `new-activity`     | Redireciona para `/(tabs)/activity?form=true`                 |
| `activity-details` | Tela de consulta e ações de detalhes da atividade selecionada |

### Abas (`src/app/(tabs)/_layout.tsx`)
Barra de navegação inferior com 4 abas:

| Aba         | Arquivo          | Ícone                                             |
|-------------|------------------|---------------------------------------------------|
| Início      | `index.tsx`      | `Ionicons / home-outline`                         |
| Disciplinas | `discipline.tsx` | `AntDesign / book`                                |
| Atividades  | `activity.tsx`   | `MaterialCommunityIcons / clipboard-text-outline` |
| Perfil      | `profile.tsx`    | `MaterialIcons / person-outline`                  |

---

## Estado Global e Persistência

### 1. Atividades e SQLite (`ActivitiesContext.tsx` + `src/database/`)
* **Banco de Dados:** `rotina_academica.db` gerenciado pelo `expo-sqlite`.
* **Inicialização Segura:** `initializeDatabase.ts` habilita `PRAGMA journal_mode = WAL`, cria a tabela `activities` se não existir e executa o seed inicial dentro de uma transação atômica (`db.withTransactionAsync`) com `INSERT OR IGNORE`.
* **Operações Disponíveis no `useActivities()`:**
  * `activities`: lista reativa ordenada por conclusão e urgência.
  * `addActivity(newActivity)`: insere nova atividade no SQLite e sincroniza o estado.
  * `updateActivity(id, updated)`: atualiza registro existente no SQLite.
  * `deleteActivity(id)`: remove registro do SQLite.
  * `completeActivity(id)` e `toggleCompleteActivity(id)`: alternam o status entre pendente e concluída.
  * `getActivityById(id)`: busca atividade pelo identificador.

### 2. Foto de Perfil (`ProfileContext.tsx`)
* **Fonte Única de Verdade:** compartilha `imageSource`, `profileImageUri`, `updateProfilePhoto` e `removeProfilePhoto` entre todas as telas (`Início`, `Disciplinas`, `Atividades` e `Perfil`).
* **Persistência em Sistema de Arquivos:** armazena a foto escolhida na galeria (`expo-image-picker`) localmente no diretório de documentos do aplicativo (`Paths.document`) via `expo-file-system`, usando `assets/images/profile-photo.png` como fallback padrão.

---

## Status das Funcionalidades

| Módulo / Tela            | Status         | Observação                                                      |
|--------------------------|----------------|-----------------------------------------------------------------|
| Início                   | ✅ Implementado | Resumo numérico com decoração circular, próximas tarefas e cursos|
| Minhas Disciplinas       | ✅ Implementado | Busca funcional em tempo real por disciplina, professor ou sala |
| Atividades e Prazos      | ✅ Implementado | Filtros por categoria e navegação direta para criação e detalhes|
| Nova / Editar Atividade  | ✅ Implementado | Validação de campos, limite de caracteres e persistência SQLite |
| Detalhes da Atividade    | ✅ Implementado | Badges de prioridade, dica de estudo, descrição e exclusão      |
| Perfil                   | ✅ Implementado | Troca de foto em tempo real e card de atividades concluídas     |
