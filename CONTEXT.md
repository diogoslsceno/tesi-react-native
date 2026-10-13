# Rotina Acadêmica — Contexto Geral do Repositório

---

## Visão Geral

Aplicativo mobile acadêmico desenvolvido em **React Native + Expo + TypeScript** com **Expo Router** para navegação. O objetivo é permitir que estudantes organizem disciplinas, atividades e prazos de forma visual e intuitiva.

- **Stack:** React Native 0.86.3 · Expo SDK 57 · TypeScript 6 · Expo Router 57 · expo-sqlite (Banco local)
- **Pacote gestor:** npm (`package-lock.json` presente)
- **Fontes:** Manrope (300–700) via `@expo-google-fonts/manrope`
- **Ícones:** `@expo/vector-icons` (AntDesign, Feather, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons)

---

## Estrutura de Pastas

```
rotina-academica/
├── assets/
│   └── images/
│       ├── profile-photo.png        # Foto de perfil usada nos cabeçalhos
│       ├── inicio.png               # Referência visual da tela Início
│       ├── activitiesList.png       # Referência visual da tela Atividades
│       └── detalhesTela.png         # Referência visual da tela Detalhes da Atividade
│
├── src/
│   ├── app/
│   │   ├── _layout.tsx              # Root Stack — SQLiteProvider + ActivitiesProvider
│   │   ├── index.tsx                # Redirect para /(tabs)
│   │   ├── new-activity.tsx         # Redirect para /(tabs)/activity?form=true
│   │   ├── activity-details.tsx     # Rota da tela de Detalhes da Atividade
│   │   └── (tabs)/
│   │       ├── _layout.tsx          # Navegador de abas com 4 telas
│   │       ├── index.tsx            # Tela Início
│   │       ├── discipline.tsx       # Tela Disciplinas
│   │       ├── activity.tsx         # Tela Atividades e Prazos / Nova Atividade / Edição
│   │       └── profile.tsx          # Tela Perfil
│   │
│   ├── components/
│   │   ├── activityList/            # Listagem "Atividades e Prazos"
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── activityCard/            # Formulário "Nova Atividade" / "Editar Atividade"
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── activityDetails/         # Tela completa "Detalhes da Atividade"
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── profileCard/             # Card completo da tela Perfil
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── DisciplineCard/          # Card de disciplina expandido
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── CardDiscipline/          # Card simplificado de disciplina (legado)
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── CourseCard/              # Card de curso (tela Início)
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── TaskCard/                # Card de tarefa resumido (tela Início)
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── SummaryCard/             # Card de resumo numérico (Início: Pendências, Provas, Disciplinas)
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── SearchBar/               # Barra de pesquisa (tela Disciplinas)
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── button/                  # Botão primário reutilizável
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   └── loading/                 # Spinner de carregamento de fontes
│   │       └── index.tsx
│   │
│   ├── contexts/
│   │   └── ActivitiesContext.tsx    # Contexto reativo alimentado pelo SQLite
│   │
│   ├── database/                    # Camada do Banco de Dados Local (SQLite)
│   │   ├── initializeDatabase.ts    # Inicialização, tabelas e seed automático
│   │   └── activitiesRepository.ts  # Consultas SQL e operações CRUD
│   │
│   ├── screens/
│   │   └── index-style.ts           # Estilos da tela Início
│   │
│   └── styles/
│       ├── colors.ts                # Paleta de cores centralizada
│       ├── fontFamily.ts            # Tokens de fontes
│       └── textSize.ts              # Tokens de tamanhos de texto
```

---

## Roteamento (Expo Router)

### Root Stack — `src/app/_layout.tsx`
Carrega as fontes Manrope, engloba a árvore no `SQLiteProvider` (com `initializeDatabase`), depois no `ActivitiesProvider` e declara o Stack raiz:

| Rota               | Destino                                                      |
|--------------------|--------------------------------------------------------------|
| `index`            | Redirect para `/(tabs)`                                     |
| `(tabs)`           | Navegador de abas                                            |
| `new-activity`     | Redirect para `/(tabs)/activity?form=true`                  |
| `activity-details` | Tela de consulta e ações de Detalhes da Atividade selecionada|

### Abas — `src/app/(tabs)/_layout.tsx`
4 abas com barra de navegação inferior:

| Aba         | Arquivo            | Ícone                                            |
|-------------|--------------------|--------------------------------------------------|
| Início      | `index.tsx`        | `Ionicons / home-outline`                        |
| Disciplinas | `discipline.tsx`   | `AntDesign / book`                               |
| Atividades  | `activity.tsx`     | `MaterialCommunityIcons / clipboard-text-outline`|
| Perfil      | `profile.tsx`      | `MaterialIcons / person-outline`                 |

### Tela Atividades — `src/app/(tabs)/activity.tsx`
Alterna entre visualizações com base em parâmetros de rota:

```ts
// ?form=true || ?form=new || ?mode=new || ?mode=edit → exibe ActivityCard (formulário)
// sem parâmetros                                      → exibe ActivitiesList (listagem)
```

---

## Design System

### `src/styles/colors.ts`

```ts
colors.primary           // #004AC6  — Azul principal
colors.info              // #2563EB  — Azul de destaque / botões de ação
colors.infoLight         // #B4C5FF  — Azul claro (ícone dica de estudo)
colors.red               // #BA1A1A  — Vermelho para alertas e prazos
colors.green             // #006E2F  — Verde para ações concluídas
colors.white             // #FFFFFF
colors.border            // #C3C6D7
colors.borderLight       // #E1E2ED
colors.borderLightTranslucent  // rgba(225,226,237,0.3)

colors.orange.Primary    // #BC4800
colors.orange.segondary  // #7D2D00

colors.text.primary      // #191B23
colors.text.secundary    // #434655  (alias: segondary)
colors.text.muted        // #6B7280
colors.text.green        // #007432
colors.text.orangeDark   // #943700
colors.text.red          // #93000A  (texto alta prioridade)
colors.text.darkRed      // #93000A

colors.background.primary          // #FAF8FF — Fundo geral da aplicação
colors.background.card             // #FFFFFF
colors.background.gray             // #E7E7F3
colors.background.blue             // #EDEDF9 — Decoração translúcida Disciplinas
colors.background.red              // #FFDBCD — Decoração translúcida Provas
colors.background.badgeRedLight    // #FFDAD6
colors.background.badgeOrangeLight // #FFEDE6
colors.background.green            // #6BFF8F

colors.status.urgent         // #BA1A1A
colors.status.urgentBg       // #FFDAD6
colors.status.urgentText     // #93000A
colors.status.completed      // #006E2F
colors.status.completedBg    // #6BFF8F
colors.status.completedText  // #007432
```

### `src/styles/fontFamily.ts`

```ts
fontFamily.light     // Manrope_300Light
fontFamily.regular   // Manrope_400Regular
fontFamily.medium    // Manrope_500Medium
fontFamily.semiBold  // Manrope_600SemiBold  (alias: semibold)
fontFamily.bold      // Manrope_700Bold
```

---

## Componentes Principais

### `ActivitiesList` — `src/components/activityList/`
Tela principal de "Atividades e Prazos".
- **Resumo vs Descrição:** Exibe `activity.summary` abaixo do título (com fallback para `activity.description`), preservando textos compactos nos cartões.
- **Filtros Funcionais:** Todas · Pendentes · Em andamento · Concluídas.
- **Navegação para Detalhes:** O botão "Ver detalhes" navega para `/activity-details?id=${activity.id}`.
- **Botão "+":** Abre o formulário via `router.push("/(tabs)/activity?form=true")`.

### `ActivityDetails` — `src/components/activityDetails/`
Tela completa de "Detalhes da Atividade", fiel ao mockup `detalhesTela.png`.
- **Cabeçalho:** Botão de voltar, título "Detalhes" centralizado e menu de opções (três pontos).
- **Badges:** Cápsulas de status (*Pendente* / *Concluída*) e prioridade (*! Alta Prioridade*).
- **Cards de Disciplina e Entrega:** Lado a lado com ícones temáticos e destaque de data em vermelho.
- **Card "Dica de Estudo":** Fundo azul (`#2563EB`) com ícone de lâmpada em `#B4C5FF`.
- **Card "Descrição da Tarefa":** Exibe `activity.description` na íntegra, respeitando quebras de linha e estrutura acadêmica.
- **Ações Fixas Inferiores:** Barra fixa com os botões "MARCAR COMO CONCLUÍDA" (alterna status) e "EDITAR ATIVIDADE" (abre formulário pré-preenchido).
- **Menu de Opções:** Modal nativo para edição rápida, alternância de conclusão ou exclusão segura com confirmação.

### `ActivityCard` — `src/components/activityCard/`
Formulário dinâmico para criação e edição de atividades.
- **Modos:** Suporta criação de nova atividade e edição de atividade existente quando recebe o parâmetro `id`.
- **Navegação de Retorno Confiável:**
  - Na criação: botão de voltar e salvamento executam `router.replace("/(tabs)/activity")`, garantindo retorno à listagem sem desempilhar para "Início".
  - Na edição: botão de voltar e salvamento executam `router.replace({ pathname: "/activity-details", params: { id } })`, retornando diretamente para a tela de detalhes da atividade atualizada.

### `SummaryCard` — `src/components/SummaryCard/`
Cards numéricos da tela Início.
- **Decoração Circular:** Suporta a prop `decorationColor`, renderizando um círculo translúcido suave no canto superior direito (`top: -20, right: -20, width: 80, height: 80`), posicionado atrás do conteúdo (`zIndex: 0`).
- **Simetria e Altura Uniforme:** Quando decorado, adota `height: 147` e `justifyContent: "space-between"` (baseado no `statCard` do Perfil), garantindo alturas rigorosamente idênticas entre "Provas" e "Disciplinas".
- **Isolamento de "Pendências":** O cartão "Pendências" mantém suas dimensões e visual originais sem decoração.

### Cabeçalho da Tela Início — `src/app/(tabs)/index.tsx`
- Cabeçalho alinhado com `justifyContent: "space-between"`.
- À direita: botão com sino azul (`Ionicons name="notifications"`) e indicador circular vermelho de notificação pendente (`notificationBadge`).

---

## Estado Global e Persistência (SQLite)

Camada de contexto reativa em `src/contexts/ActivitiesContext.tsx` integrada ao banco SQLite local (`expo-sqlite`):
- Provedor Raiz: `SQLiteProvider` (`databaseName="rotina_academica.db"`, `onInit={initializeDatabase}`).
- Provedor de Estado: `ActivitiesProvider` (consome `useSQLiteContext()`).
- Repositório SQL: `src/database/activitiesRepository.ts`.
- Hook: `useActivities()`.
- **Métodos disponíveis:**
  - `activities`: Lista completa reativa de atividades lidas do SQLite.
  - `completeActivity(id)`: Alterna/marca status no banco para concluída.
  - `toggleCompleteActivity(id)`: Alterna no SQLite entre pendente e concluída, atualizando categorias e badges.
  - `updateActivity(id, updated)`: Executa UPDATE SQL com os campos alterados.
  - `addActivity(newActivity)`: Executa INSERT SQL com nova atividade.
  - `deleteActivity(id)`: Executa DELETE SQL da atividade por ID.
  - `getActivityById(id)`: Recupera a atividade correspondente por ID.
  - `refreshActivities()`: Recarrega as atividades do SQLite sob demanda.

---

## Status das Telas

| Tela                     | Status         | Observação                                                  |
|--------------------------|----------------|-------------------------------------------------------------|
| Início                   | ✅ Implementada | Cabeçalho com sino, cards simétricos com círculos decorativos|
| Disciplinas              | ✅ Implementada | SearchBar integrada, cards refinados                        |
| Atividades e Prazos      | ✅ Implementada | Filtros funcionais, exibe `summary` das atividades          |
| Nova Atividade / Edição  | ✅ Implementada | Integrada ao `ActivitiesContext` e navegação corrigida      |
| Perfil                   | ✅ Implementada | Foto, dados do estudante e estatísticas                     |
| Detalhes da Atividade    | ✅ Implementada | Fiel a `detalhesTela.png`, exibe `description` completa     |
| Estado global de dados   | ✅ Implementado | `ActivitiesContext` ativo no `RootLayout`                   |
| Banco de dados local     | ✅ Implementado | `expo-sqlite` com tabelas, seed automático e CRUD completo  |

---

## Decisões Arquiteturais Relevantes

1. **Separação de Resumo e Descrição:** `activity.summary` é utilizado nos cartões da listagem para manter o layout limpo e conciso, enquanto `activity.description` armazena o conteúdo detalhado exibido exclusivamente na tela de Detalhes.
2. **`router.replace` na navegação do formulário:** Substitui o estado atual na pilha de navegação ao voltar ou salvar, prevenindo desempilhamento incorreto para a aba "Início".
3. **Composição em `SummaryCard`:** Decorações visuais são ativadas via prop opcional sem quebrar a flexibilidade do componente para uso simples (como no cartão de Pendências).
4. **Sem código nativo manual:** Gerenciamento nativo exclusivo via Expo CNG (`app.json`).
5. **Paleta Centralizada:** Consumo estrito dos tokens de `src/styles/colors.ts`.
6. **Persistência Nativa com SQLite (`expo-sqlite`):** Banco relacional embutido e local no app (`rotina_academica.db`), inicializado via `SQLiteProvider` com modo WAL e criação automática de tabelas/seed na primeira execução, garantindo que o banco sobe automaticamente ao rodar o projeto.
