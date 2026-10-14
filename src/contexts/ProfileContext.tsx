import { File, Paths } from "expo-file-system"
import * as ImagePicker from "expo-image-picker"
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"
import { Alert, ImageSourcePropType } from "react-native"

const defaultProfilePhoto = require("../../assets/images/profile-photo.png")
const PROFILE_IMAGE_FILENAME = "profile-photo-custom.jpg"
const CLEANUP_FLAG_FILENAME = ".profile-photo-cleaned-v1"

interface ProfileContextData {
  profileImageUri: string | null
  imageSource: ImageSourcePropType
  updateProfilePhoto: () => Promise<void>
  removeProfilePhoto: () => Promise<void>
  clearOldCustomPhoto: () => Promise<void>
}

const ProfileContext = createContext<ProfileContextData>(
  {} as ProfileContextData
)

interface ProfileProviderProps {
  children: ReactNode
}

function getFileInDocuments(filename: string): File | null {
  try {
    if (Paths && Paths.document) {
      return new File(Paths.document, filename)
    }
  } catch (error) {
    console.warn(
      `Não foi possível acessar Paths.document para ${filename}:`,
      error
    )
  }
  return null
}

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [profileImageUri, setProfileImageUri] = useState<string | null>(null)

  const clearOldCustomPhoto = useCallback(async () => {
    try {
      const file = getFileInDocuments(PROFILE_IMAGE_FILENAME)
      if (file && file.exists) {
        file.delete()
      }
    } catch (error) {
      console.warn("Aviso ao limpar foto personalizada antiga:", error)
    } finally {
      setProfileImageUri(null)
    }
  }, [])

  useEffect(() => {
    async function initProfilePhoto() {
      try {
        const flagFile = getFileInDocuments(CLEANUP_FLAG_FILENAME)
        const photoFile = getFileInDocuments(PROFILE_IMAGE_FILENAME)

        if (!flagFile || !flagFile.exists) {
          if (photoFile && photoFile.exists) {
            try {
              photoFile.delete()
            } catch (err) {
              console.warn("Falha ao deletar arquivo antigo:", err)
            }
          }

          if (flagFile) {
            try {
              flagFile.create()
            } catch (err) {
              console.warn("Não foi possível criar flag de limpeza:", err)
            }
          }
          setProfileImageUri(null)
          return
        }

        if (photoFile && photoFile.exists) {
          setProfileImageUri(photoFile.uri)
        } else {
          setProfileImageUri(null)
        }
      } catch (error) {
        console.warn("Erro ao inicializar foto de perfil:", error)
        setProfileImageUri(null)
      }
    }

    initProfilePhoto()
  }, [])

  const updateProfilePhoto = useCallback(async () => {
    try {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync()

      if (!permissionResult.granted) {
        Alert.alert(
          "Permissão necessária",
          "É necessário permitir o acesso à galeria para alterar a foto de perfil."
        )
        return
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      })

      if (result.canceled || !result.assets || result.assets.length === 0) {
        return
      }

      const selectedUri = result.assets[0].uri
      const destFile = getFileInDocuments(PROFILE_IMAGE_FILENAME)

      if (!destFile) {
        throw new Error("Diretório de documentos indisponível")
      }

      const sourceFile = new File(selectedUri)
      await sourceFile.copy(destFile, { overwrite: true })

      if (destFile.exists) {
        setProfileImageUri(destFile.uri + "?" + Date.now())
      } else {
        setProfileImageUri(null)
      }
    } catch (error) {
      console.error("Erro ao atualizar foto de perfil:", error)
      Alert.alert(
        "Erro",
        "Não foi possível salvar a imagem selecionada. Tente novamente."
      )
    }
  }, [])

  const removeProfilePhoto = useCallback(async () => {
    await clearOldCustomPhoto()
  }, [clearOldCustomPhoto])

  const imageSource: ImageSourcePropType = profileImageUri
    ? { uri: profileImageUri }
    : defaultProfilePhoto

  return (
    <ProfileContext.Provider
      value={{
        profileImageUri,
        imageSource,
        updateProfilePhoto,
        removeProfilePhoto,
        clearOldCustomPhoto,
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}

export function useProfile() {
  const context = useContext(ProfileContext)
  if (!context) {
    throw new Error("useProfile deve ser usado dentro de um ProfileProvider")
  }
  return context
}
