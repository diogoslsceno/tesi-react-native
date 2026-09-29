# Tópicos Especiais em Sistemas de Informação (TESI)

Repositório dedicado aos materiais, códigos e práticas desenvolvidos na disciplina, com foco em desenvolvimento móvel multiplataforma utilizando **React Native**.

---

## 📱 Projeto em Destaque: Rotina Acadêmica

O aplicativo **Rotina Acadêmica** é um projeto prático desenvolvido no contexto da disciplina para auxiliar estudantes universitários da **Faculdade de Sistemas de Informação** na gestão, organização e acompanhamento do seu dia a dia acadêmico (disciplinas, rotinas de estudo e atividades).

---

## 🚀 Sobre a Disciplina e Tecnologias

* **Curso:** Sistemas de Informação
* **Disciplina:** Tópicos Especiais em Sistemas de Informação (TESI)
* **Professor:** Keventon Guimarães
* **Tecnologia Principal:** [React Native](https://reactnative.dev) (Framework open-source mantido pela Meta)
* **Ecossistema:** [Expo](https://expo.dev) (SDK 57) com [Expo Router](https://docs.expo.dev/router/introduction/) (navegação baseada em arquivos)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Tipagem estrita e escalabilidade)
* **Objetivo:** Desenvolvimento de aplicações nativas para Android e iOS usando uma base de código única e moderna em JavaScript/TypeScript.

---

## 🛠️ Stack Tecnológica & Dependências Chave

| Tecnologia | Versão | Função |
| :--- | :--- | :--- |
| **Expo** | `~57.0.25` | Plataforma e conjunto de ferramentas para React Native |
| **React Native** | `0.86.3` | Framework para apps móveis nativos |
| **React** | `19.2.3` | Biblioteca de interfaces reativas |
| **Expo Router** | `~57.0.23` | Roteamento declarativo baseado em sistema de arquivos |
| **TypeScript** | `~6.0.3` | Tipagem estática e suporte avançado no desenvolvimento |

---

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

1. **[Node.js](https://nodejs.org)** (versão LTS recomendada: 20 ou superior).
2. **Git** para versionamento de código.
3. **Dispositivo Físico ou Emulador:**
   - **Dispositivo Físico:** Aplicativo **Expo Go** instalado via [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) (Android) ou [Apple App Store](https://apps.apple.com/app/expo-go/id982107779) (iOS).
   - **Ambiente Emulado:** Android Studio (com emulador configurado) e/ou Xcode (disponível no macOS).

---

## 💻 Como Executar o Projeto

### 1. Clonar o Repositório

```bash
git clone git@github.com:diogoslsceno/tesi-react-native.git
cd rotina-academica
```

*(Ou utilize a URL HTTPS se preferir: `https://github.com/diogoslsceno/tesi-react-native.git`)*

### 2. Instalar as Dependências

```bash
npm install
```

### 3. Iniciar o Servidor de Desenvolvimento

Execute o Metro Bundler do Expo:

```bash
npx expo start
```

### 4. Abrir o Aplicativo

Após iniciar o servidor, selecione uma das opções exibidas no terminal:

- Pressione **`a`** para abrir no emulador **Android**.
- Pressione **`i`** para abrir no simulador **iOS** (macOS).
- Pressione **`w`** para abrir no navegador **Web**.
- **Dispositivo físico:** Abra o aplicativo **Expo Go** e escaneie o código QR exibido no terminal.

---

## 🧰 Comandos Úteis do Projeto

| Comando | Descrição |
| :--- | :--- |
| `npx expo start` | Inicia o servidor Metro em modo de desenvolvimento |
| `npx expo start --android` | Inicia o app diretamente no ambiente Android |
| `npx expo start --ios` | Inicia o app diretamente no ambiente iOS |
| `npx expo start --web` | Inicia o app na versão Web |
| `npx tsc --noEmit` | Valida todos os tipos do TypeScript sem gerar arquivos de saída |
| `npx expo install <pacote>` | **Obrigatório:** Instala dependências compatíveis com o Expo SDK 57 |

> [!IMPORTANT]
> **Atenção:** Em projetos gerenciados pelo Expo, sempre utilize `npx expo install <nome-do-pacote>` em vez de `npm install <nome-do-pacote>` ao adicionar bibliotecas nativas, garantindo versões homologadas e compatíveis com o SDK 57.

---

## 📂 Estrutura de Diretórios

```text
rotina-academica/
├── assets/             # Imagens, ícones, splash screen e assets visuais
├── src/
│   └── app/            # Telas e rotas do aplicativo (Expo Router)
│       ├── _layout.tsx # Layout raiz e pilha de navegação (Stack)
│       ├── index.tsx   # Tela inicial / boas-vindas
│       └── ...         # Telas adicionais e fluxos da aplicação
├── app.json            # Configurações globais e metadados do Expo
├── package.json        # Dependências e scripts do projeto
├── tsconfig.json       # Configuração do TypeScript e path aliases (@/* -> ./src/*)
└── AGENTS.md           # Diretrizes e boas práticas de desenvolvimento
```

---

## 💡 Como Iniciar um Novo Projeto Expo do Zero

Caso deseje criar um novo projeto do zero utilizando o template oficial do Expo:

```bash
npx create-expo-app@latest --template
```

---

## 🔗 Links Úteis e Documentação

* [Documentação Oficial do Expo](https://docs.expo.dev/)
* [Guia do Expo Router](https://docs.expo.dev/router/introduction/)
* [Documentação Oficial do React Native](https://reactnative.dev)
* [TypeScript Handbook](https://www.typescriptlang.org/docs/)
* [Node.js](https://nodejs.org)
