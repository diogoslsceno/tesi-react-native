# Resumo do Contexto e Estratégia de Merge (Branch: `perfilPreliminar`)

Este documento contém o resumo técnico das alterações realizadas na reorganização das telas de **Atividades** e **Perfil**, bem como o guia passo a passo para integração (merge) com a branch `main` e a resolução de conflitos com as alterações de outros desenvolvedores.

---

# Parte 1: Resumo Portável para IA (Context Sync)

## Contexto da Sessão & Estado do Código (Branch: `perfilPreliminar`)

### 🎯 Objetivo Concluído
Reorganização e modularização das telas de **Atividades** e **Perfil** no aplicativo Expo / React Native (`rotina-academica`), isolando componentes visuais e estados das rotas do Expo Router e removendo estilos obsoletos da pasta `src/screens/`.

---

### 📂 Estrutura de Arquivos Atualizada

```text
src/
├── app/
│   └── (tabs)/
│       ├── activity.tsx   # Rota Expo Router (renderiza apenas <ActivityCard />)
│       └── profile.tsx    # Rota Expo Router (renderiza apenas <ProfileCard />)
│
├── components/
│   ├── activityCard/
│   │   ├── index.tsx      # Componente modular ActivityCard (com formulário, estados e modais)
│   │   └── style.ts       # Estilos específicos do ActivityCard
│   │
│   └── profileCard/
│       ├── index.tsx      # Componente modular ProfileCard (cabeçalho, foto, estatísticas)
│       └── style.ts       # Estilos específicos do ProfileCard
│
└── screens/
    └── index-style.ts     # Preservado intacto (activity-style.ts e profile-style.ts foram removidos)
```

---

### 🛠️ Modificações Realizadas

1. **`ActivityCard` (`src/components/activityCard/`)**
   - **`index.tsx`**: Contém o formulário de cadastro de nova atividade (`title`, `selectedDiscipline`, `deliveryDate`, `selectedPriority`, `observations`), modais de seleção de disciplina e data rápida, e navegação via `router.back()`.
   - **`style.ts`**: Contém todas as regras de `StyleSheet` isoladas do componente.
   - **`src/app/(tabs)/activity.tsx`**: Simplificado para exportar a rota que renderiza `<ActivityCard />`.

2. **`ProfileCard` (`src/components/profileCard/`)**
   - **`index.tsx`**: Contém o layout completo de perfil acadêmico (foto em `assets/images/profile-photo.png`, dados do estudante, semestre `2º/2026`, botão de configurações, card de disciplinas ativas e estatísticas de atividades).
   - **`style.ts`**: Contém todas as regras de `StyleSheet` isoladas do perfil.
   - **`src/app/(tabs)/profile.tsx`**: Simplificado para exportar a rota que renderiza `<ProfileCard />`.

3. **Limpeza de Arquivos Obsoletos**
   - Removidos: `src/screens/activity-style.ts` e `src/screens/profile-style.ts`.

4. **Preservação de Escopo**
   - Todos os componentes compartilhados (`Button`, `SummaryCard`, `Loading`, `DisciplineCard`), arquivos de estilo global (`colors.ts`, `fontFamily.ts`, `textSize.ts`) e o layout principal (`_layout.tsx`) **NÃO** foram alterados.

---

### ✅ Validação Técnica
- **TypeScript**: `npx tsc --noEmit` executado com **0 erros**.
- **Gerenciador de Pacotes**: `npm` / `npx` (o repositório não possui `bun.lock`).

---

# Parte 2: Estratégia de Merge e Resolução de Conflitos

Quando dois desenvolvedores trabalham em paralelo com escopos de pastas bem delimitados, a integração costuma ser direta, mas requer atenção em arquivos que atuam como "pontes de integração" (como rotas e dependências).

Como você irá realizar o **merge da sua branch primeiro** na `main`, a sua etapa de publicação será limpa. O trabalho de integração com o trabalho do seu colega acontecerá quando ele atualizar a branch dele ou quando a branch dele for integrada na `main`.

---

## 🛠️ Passo a Passo Executivo

### Passo 1: Consolidar e Salvar as Suas Alterações na Sua Branch
Antes de trocar de branch, garanta que seu ambiente de trabalho está 100% limpo e commitado.

```bash
# 1. Verifique o estado atual
git status

# 2. Adicione os arquivos criados e modificados
git add src/components/activityCard/ src/components/profileCard/ src/app/\(tabs\)/activity.tsx src/app/\(tabs\)/profile.tsx

# 3. Confirme a remoção dos arquivos antigos de estilo
git rm src/screens/activity-style.ts src/screens/profile-style.ts

# 4. Faça o commit com mensagem clara
git commit -m "refactor: modulariza telas e componentes de ActivityCard e ProfileCard"

# 5. Envie para o repositório remoto
git push origin perfilPreliminar
```

---

### Passo 2: Mergear a sua Branch na `main`
Como você é o primeiro a fazer a integração na `main`, a integração será um *Fast-Forward* ou um *Merge Commit* limpo.

```bash
# 1. Alterne para a branch main
git checkout main

# 2. Atualize a main com o remoto
git pull origin main

# 3. Realize o merge da sua branch
git merge perfilPreliminar

# 4. Valide a compilação e tipos após o merge
npx tsc --noEmit

# 5. Envie a main atualizada para o servidor
git push origin main
```

---

### Passo 3: Cenário de Integração do Colega (Resolução Segura)

Quando seu colega for integrar a branch dele na `main` (ou quando você for ajudar a resolver o merge da branch dele), o ideal é trazer as alterações da `main` atualizada para a branch dele antes de finalizar o PR.

#### A. Atualizar a branch do colega com a `main`:
```bash
git checkout branch-do-colega
git pull origin main
```

#### B. Se houver conflitos no Git:
O Git indicará quais arquivos possuem conflito (geralmente arquivos compartilhados como `package.json`, `_layout.tsx` ou registradores de rotas).

1. **Inspeção de Conflitos:**
   Abra os arquivos com conflito. O Git marca os conflitos com a sintaxe:
   ```tsx
   <<<<<<< HEAD (Sua main com ActivityCard/ProfileCard)
   import { ActivityCard } from "@/components/activityCard"
   =======
   import { ColegaComponent } from "@/components/colegaComponent"
   >>>>>>> branch-do-colega
   ```

2. **Regra de Ouro para Preservar 100% dos Escopos:**
   - **Nunca escolha "Accept Current" ou "Accept Incoming" cegamente.**
   - Para arquivos como `_layout.tsx`, **combine ambas as partes**: mantenha os imports do seu colega E os seus imports.
   - Para arquivos como `package.json`, **mantenha as dependências adicionadas por ambos**.
   - Para arquivos na pasta `components/activityCard` ou `components/profileCard`: como o seu colega não mexeu nessas pastas, o Git preservará 100% dos seus arquivos automaticamente.
   - Para arquivos das telas do seu colega: o Git preservará 100% dos arquivos dele automaticamente.

3. **Finalização do Merge:**
   ```bash
   # Valide se nenhum tipo ou import ficou quebrado
   npx tsc --noEmit

   # Marque os conflitos resolvidos
   git add .

   # Conclua o commit de merge
   git commit -m "merge: integra branch main e resolve conflitos de rotas/dependencias"

   # Envie a branch atualizada
   git push origin branch-do-colega
   ```

---

### 🛡️ Boas Práticas de Segurança
1. **Verificação de Tipos:** Sempre execute `npx tsc --noEmit` antes e depois de resolver qualquer conflito.
2. **`git status` Constante:** Certifique-se de não deixar arquivos temporários não rastreados no processo.
3. **Backup de Branch:** Antes de resolver conflitos complexos, você pode criar uma cópia de segurança local da branch (`git branch backup-perfil-preliminar`).
