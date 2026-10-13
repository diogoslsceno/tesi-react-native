import { colors } from "@/styles/colors"
import {
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons"
import { File, Paths } from "expo-file-system"
import * as ImagePicker from "expo-image-picker"
import { useEffect, useState } from "react"
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { styles } from "./style"

const profilePhoto = require("../../../assets/images/profile-photo.png")

const PROFILE_IMAGE_FILENAME = "profile-photo-custom.jpg"

function getPersistedImagePath(): string {
  return new File(Paths.document, PROFILE_IMAGE_FILENAME).uri
}

function hasPersistedImage(): boolean {
  try {
    const file = new File(Paths.document, PROFILE_IMAGE_FILENAME)
    return file.exists
  } catch {
    return false
  }
}

export function ProfileCard() {
  const [profileImageUri, setProfileImageUri] = useState<string | null>(null)

  useEffect(() => {
    if (hasPersistedImage()) {
      setProfileImageUri(getPersistedImagePath())
    }
  }, [])

  const handlePickImage = async () => {
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

      if (result.canceled) {
        return
      }

      const selectedUri = result.assets[0].uri
      const sourceFile = new File(selectedUri)
      const destFile = new File(Paths.document, PROFILE_IMAGE_FILENAME)

      await sourceFile.copy(destFile, { overwrite: true })
      setProfileImageUri(destFile.uri + "?" + Date.now())
    } catch (error) {
      Alert.alert(
        "Erro",
        "Não foi possível selecionar a imagem. Tente novamente."
      )
    }
  }

  const imageSource = profileImageUri ? { uri: profileImageUri } : profilePhoto

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Image source={imageSource} style={styles.headerAvatar} />
              <Text style={styles.headerTitle}>Minha Rotina</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.headerIcon}>
              <Ionicons
                name="notifications-outline"
                size={20}
                color={colors.text.secundary}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.profile}>
            <View style={styles.profileImageWrapper}>
              <Image source={imageSource} style={styles.profileImage} />
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.cameraButton}
                onPress={handlePickImage}
              >
                <View style={styles.cameraInner}>
                  <FontAwesome name="camera" size={14} color={colors.primary} />
                </View>
              </TouchableOpacity>
            </View>

            <Text style={styles.profileTitle}>Estudante Universitário</Text>
            <Text style={styles.profileSubtitle}>Sistemas de Informação</Text>

            <View style={styles.semester}>
              <MaterialCommunityIcons
                name="school-outline"
                size={14}
                color={colors.primary}
              />
              <Text style={styles.semesterText}>2º/2026</Text>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.settingsButton}
            onPress={() => {}}
          >
            <Ionicons name="settings-outline" size={20} color={colors.white} />
            <Text style={styles.settingsText}>Configurações</Text>
          </TouchableOpacity>

          <View style={styles.disciplineCard}>
            <View style={styles.disciplineDecoration} />
            <View style={styles.disciplineIcon}>
              <MaterialCommunityIcons
                name="book"
                size={24}
                color={colors.white}
              />
            </View>
            <View style={styles.disciplineInfo}>
              <Text style={styles.cardLabel}>Disciplinas Ativas</Text>
              <Text style={styles.disciplineTotal}>6</Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.text.secundary}
              style={styles.arrow}
            />
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <View style={[styles.statDecoration, styles.greenDecoration]} />
              <View style={[styles.statIcon, styles.greenIcon]}>
                <FontAwesome6
                  name="circle-check"
                  size={18}
                  color={colors.green}
                />
              </View>
              <Text style={[styles.statTotal, styles.greenTotal]}>24</Text>
              <Text style={styles.statLabel}>{"Atividades\nConcluídas"}</Text>
            </View>

            <View style={styles.statCard}>
              <View style={[styles.statDecoration, styles.redDecoration]} />
              <View style={[styles.statIcon, styles.redIcon]}>
                <FontAwesome6
                  name="circle-exclamation"
                  size={18}
                  color={colors.red}
                />
              </View>
              <Text style={[styles.statTotal, styles.redTotal]}>3</Text>
              <Text style={styles.statLabel}>{"Pendências\nAtuais"}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default ProfileCard
