# Rotina Acadêmica — Contexto Geral do Repositório

> **Conversa de referência:** `agy resume 0746f4b5-6b12-4b29-9de3-738906f89e8d`

---

## Visão Geral

Aplicativo mobile acadêmico desenvolvido em **React Native + Expo + TypeScript** com **Expo Router** para navegação. O objetivo é permitir que estudantes organizem disciplinas, atividades e prazos de forma visual e intuitiva.

- **Stack:** React Native 0.86.3 · Expo SDK 57 · TypeScript 6 · Expo Router 57
- **Pacote gestor:** Bun (`bun.lock` presente) — usar `bunx` para comandos de CLI
- **Fontes:** Manrope (300–700) via `@expo-google-fonts/manrope`
- **Ícones:** `@expo/vector-icons` (AntDesign, Feather, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons)

---

## Estrutura de Pastas

```
rotina-academica/
├── assets/
│   └── images/
│       ├── profile-photo.png        # Foto de perfil usada no cabeçalho
│       └── activitiesList.png       # Referência visual da tela Atividades
│
├── src/
│   ├── app/
│   │   ├── _layout.tsx              # Root Stack — carrega fontes e registra rotas
│   │   ├── index.tsx                # Redirect para /(tabs)
│   │   ├── new-activity.tsx         # Redirect para /(tabs)/activity?form=true
│   │   └── (tabs)/
│   │       ├── _layout.tsx          # Navegador de abas com 4 telas
│   │       ├── index.tsx            # Tela Início
│   │       ├── discipline.tsx       # Tela Disciplinas
│   │       ├── activity.tsx         # Tela Atividades e Prazos / Nova Atividade
│   │       └── profile.tsx          # Tela Perfil
│   │
│   ├── components/
│   │   ├── activitiesList/          # ⭐ Listagem "Atividades e Prazos"
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── activityCard/            # Formulário "Nova Atividade"
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── profileCard/             # Card completo da tela Perfil
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── DisciplineCard/          # Card de disciplina (tela Início e Disciplinas)
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
│   │   ├── SummaryCard/             # Card de resumo numérico (tela Início)
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── SearchBar/               # Barra de pesquisa (tela Disciplinas)
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── button/                  # Botão primário reutilizável
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   └── loading/                 # Spinner de carregamento
│   │       └── index.tsx
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
Carrega as fontes Manrope e declara o Stack raiz:

| Rota            | Destino                                         |
|-----------------|-------------------------------------------------|
| `index`         | Redirect para `/(tabs)`                        |
| `(tabs)`        | Navegador de abas                               |
| `new-activity`  | Redirect para `/(tabs)/activity?form=true`     |

### Abas — `src/app/(tabs)/_layout.tsx`
4 abas com barra de navegação inferior:

| Aba         | Arquivo            | Ícone                          |
|-------------|--------------------|---------------------------------|
| Início      | `index.tsx`        | `Ionicons / home-outline`       |
| Disciplinas | `discipline.tsx`   | `AntDesign / book`              |
| Atividades  | `activity.tsx`     | `MaterialCommunityIcons / clipboard-text-outline` |
| Perfil      | `profile.tsx`      | `MaterialIcons / person-outline` |

### Tela Atividades — `src/app/(tabs)/activity.tsx`
Renderiza dois componentes distintos com base em parâmetros de URL:

```ts
// ?form=true ou ?form=new ou ?mode=new  → exibe ActivityCard (formulário)
// sem parâmetros                         → exibe ActivitiesList (listagem)
```

> **Navegação do botão "+" (listagem → formulário):**
> ```ts
> router.push("/(tabs)/activity?form=true")
> ```
>
> **Navegação do botão Voltar (formulário → listagem):**
> ```ts
> router.replace("/(tabs)/activity")
> // router.replace remove ?form=true do histórico,
> // garantindo retorno à listagem, não à tela anterior.
> ```

---

## Design System

### `src/styles/colors.ts`

```ts
colors.primary           // #004AC6  — Azul principal
colors.info              // #2563EB  — Azul dos filtros ativos
colors.red               // #BA1A1A  — Vermelho
colors.green             // #006E2F  — Verde
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
colors.text.darkRed      // #93000A
colors.text.secundaryTranslucent      // rgba(67,70,85,0.5)
colors.text.secundaryOpacity30        // rgba(67,70,85,0.3)

colors.background.primary    // #FAF8FF — Fundo geral
colors.background.card       // #FFFFFF
colors.background.gray       // #E7E7F3
colors.background.blue       // #EDEDF9
colors.background.red        // #FFDBCD
colors.background.badgeRedLight    // #FFDAD6
colors.background.badgeOrangeLight // #FFEDE6
colors.background.green      // #6BFF8F
colors.background.badgeOrange      // rgba(188,72,0,0.1)
colors.background.dashedAdd        // rgba(243,243,254,0.5)

colors.status.urgent         // #BA1A1A  — Faixa/badge urgente
colors.status.urgentBg       // #FFDAD6
colors.status.urgentText     // #93000A
colors.status.next           // #BC4800  — Faixa próxima
colors.status.nextBg         // #BC4800
colors.status.nextText       // #FFFFFF
colors.status.nextDark       // #943700
colors.status.completed      // #006E2F  — Faixa concluída
colors.status.completedBg    // #6BFF8F
colors.status.completedText  // #007432

colors.icon.blue             // #2563EB
colors.icon.gray             // #737686
```

### `src/styles/fontFamily.ts`

```ts
fontFamily.light     // Manrope_300Light
fontFamily.regular   // Manrope_400Regular
fontFamily.medium    // Manrope_500Medium
fontFamily.semiBold  // Manrope_600SemiBold  (alias: semibold)
fontFamily.bold      // Manrope_700Bold
```

> ⚠️ Existe o typo `fontFamily.semibol` em `SearchBar/style.ts` — não replicar em novos arquivos.

### `src/styles/textSize.ts`

```ts
textSize.title.primary    // 28
textSize.title.secundary  // 22
textSize.title.segundary  // 18
textSize.label            // 22
textSize.button           // 18
textSize.subtitle.primary    // 16
textSize.subtitle.secundary  // 12
textSize.dashboard.title     // 16
textSize.dashboard.subtitle  // 14
```

---

## Componentes

### `ActivitiesList` — `src/components/activitiesList/`
Tela principal de "Atividades e Prazos".

**Responsabilidades:**
- Cabeçalho com avatar, "Minha Rotina" e ícone de notificações
- Título e subtítulo da tela
- Filtros horizontais com scroll: Todas · Pendentes · Em andamento · Concluídas
- Lista de cartões de atividades com:
  - Faixa colorida lateral (status)
  - Badge de status com ícone
  - Prazo no canto superior direito
  - Título, descrição e divisor
  - Disciplina com ícone + ação ("Ver detalhes" / "Entregue")
- Área com borda tracejada e botão "+" circular azul
- Estado vazio por filtro

**Tipos exportados:**
```ts
ActivityFilterType  // "Todas" | "Pendentes" | "Em andamento" | "Concluídas"
ActivityStatusType  // "urgente" | "proxima" | "concluida"
ActivityItem        // interface completa do item de atividade
```

**Dados:** Temporários (mock) — sem persistência ainda. A integração com estado compartilhado está pendente.

**Navegação do botão "+":**
```ts
router.push("/(tabs)/activity?form=true")
```

---

### `ActivityCard` — `src/components/activityCard/`
Formulário de criação de atividade ("Nova Atividade").

**Campos:**
- Título (TextInput)
- Disciplina (Modal com FlatList)
- Data de entrega (TextInput + Modal com seleção rápida)
- Prioridade (Baixa / Média / Alta)
- Observações (TextInput multiline)
- Botão "Salvar atividade"

**Disciplinas mock:** `["Cálculo I", "Algoritmos", "Estrutura de Dados I"]`

**Navegação de retorno (botão ←):**
```ts
router.replace("/(tabs)/activity")
// replace garante que ?form=true seja removido do histórico
```

---

### `ProfileCard` — `src/components/profileCard/`
Tela completa de Perfil com avatar, dados do estudante, estatísticas e botão de configurações.

---

### `DisciplineCard` — `src/components/DisciplineCard/`
Card de disciplina expandido usado na tela de Disciplinas e na tela Início.

Props: `title`, `teacher`, `time`, `room`, `borderColor`, `pendings`, `teacherIcon`, `timeIcon`, `roomIcon`

---

### `CardDiscipline` — `src/components/CardDiscipline/`
Card simplificado/legado com badge de status e data. Ainda em uso na tela Início em versões anteriores. Props: `title`, `subTitle`, `dataTitle`, `alertTitle`, `textColor`, `colorBackgroud`.

---

### `TaskCard` — `src/components/TaskCard/`
Card compacto de tarefa usado na tela Início (seção "Próximas atividades").

Props: `title`, `subTitle`, `dataTitle`, `alertTitle`, `textColor`, `colorBackgroud`

---

### `CourseCard` — `src/components/CourseCard/`
Card de curso/disciplina com destaque visual. Usado na tela Início.

---

### `SummaryCard` — `src/components/SummaryCard/`
Card de resumo numérico (pendências, provas, disciplinas) com ícone, total e subtítulo.

Props: `total`, `title`, `subtitle`, `icon`, `textColor`

---

### `SearchBar` — `src/components/SearchBar/`
Barra de pesquisa com ícone à esquerda. Usada na tela de Disciplinas.

Props: `value`, `placeholder`, `onChangeText`

> ⚠️ `SearchBar/style.ts` contém estilos de layout de tela (header, screenContainer, etc.) além dos estilos próprios da barra. Isso é um debt técnico — não replicar em novos componentes.

---

### `Button` — `src/components/button/`
Botão primário com cor de fundo configurável e suporte a ícone.

Props: `text`, `color`, `icon`, + todas as `TouchableOpacityProps`

---

### `Loading` — `src/components/loading/`
Spinner simples exibido durante o carregamento de fontes.

---

## Estado e Persistência

> **Não há camada de estado global** (Context, Redux, Zustand, etc.) implementada ainda.

- Os dados de atividades em `ActivitiesList` são **mock temporários** (`INITIAL_ACTIVITIES`).
- O formulário `ActivityCard` salva apenas com `Alert` — sem persistência real.
- A integração entre formulário e listagem (dados reais) é uma **funcionalidade pendente**.

---

## Telas Pendentes / Próximas Etapas

| Tela                     | Status         | Observação                                              |
|--------------------------|----------------|---------------------------------------------------------|
| Início                   | ✅ Implementada | Dados mock                                              |
| Disciplinas              | 🔨 Em progresso | SearchBar integrada, cards em desenvolvimento           |
| Atividades e Prazos      | ✅ Implementada | Filtros funcionais, dados mock                          |
| Nova Atividade           | ✅ Implementada | Sem persistência real                                   |
| Perfil                   | ✅ Implementada | Dados mock                                              |
| Detalhes da Atividade    | ❌ Pendente     | Botão "Ver detalhes" exibe Alert por ora               |
| Estado global de dados   | ❌ Pendente     | Atividades não persistem entre formulário e listagem    |

---

## Comandos Úteis

```bash
# Iniciar servidor de desenvolvimento
npx expo start

# Verificar tipagem TypeScript
npx tsc --noEmit

# Verificar saúde das dependências
npx expo-doctor

# Corrigir versões incompatíveis de pacotes
npx expo install --fix

# Instalar pacote com versão compatível com o SDK
npx expo install <pacote>
```

---

## Histórico de Branches

| Branch              | Conteúdo                                                    |
|---------------------|-------------------------------------------------------------|
| `main`              | Branch principal — estado atual do projeto                  |
| `tela-incial`       | Primeira versão da tela inicial e layout de abas            |
| `Tela-incial-2.0`   | CourseCard, TaskCard, SearchBar e refinamentos de disciplina|
| `perfilPreliminar`  | Modularização de ProfileCard e ActivityCard                 |

---

## Decisões Arquiteturais Relevantes

1. **Formulário dentro das abas**: `ActivityCard` é renderizado dentro de `/(tabs)/activity?form=true` para preservar a barra de navegação inferior. Não usa rota Stack separada.

2. **`router.replace` no retorno do formulário**: Garante que o parâmetro `?form=true` seja removido do histórico e o usuário sempre retorne à listagem — não à tela anterior no histórico.

3. **Paleta centralizada**: Toda cor deve vir de `src/styles/colors.ts`. Nunca usar hex direto nos componentes.

4. **Sem `ios/` ou `android/`**: Projeto usa Continuous Native Generation. Configurações nativas vão em `app.json` e config plugins.

5. **`fontFamily.semibold` vs `fontFamily.semiBold`**: Ambos existem em `fontFamily.ts` e apontam para o mesmo valor. Prefer `semiBold` em novos arquivos.
