import { styles } from "./style"
import { colors } from "@/styles/colors"
import { AntDesign, Feather, FontAwesome6, Ionicons } from "@expo/vector-icons"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"

const profilePhoto = require("../../../assets/images/profile-photo.png")

export function ProfileCard() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image source={profilePhoto} style={styles.headerAvatar} />
            <Text style={styles.headerTitle}>Minha Rotina</Text>
          </View>
          <TouchableOpacity activeOpacity={0.7} style={styles.headerIcon}>
            <Ionicons
              name="notifications"
              size={20}
              color={colors.text.secundary}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.profile}>
          <View style={styles.profileImageWrapper}>
            <Image source={profilePhoto} style={styles.profileImage} />
            <TouchableOpacity activeOpacity={0.8} style={styles.cameraButton}>
              <View style={styles.cameraInner}>
                <Feather name="camera" size={14} color={colors.primary} />
              </View>
            </TouchableOpacity>
          </View>

          <Text style={styles.profileTitle}>Estudante Universitário</Text>
          <Text style={styles.profileSubtitle}>
            Sistema de Informação kkkkk
          </Text>

          <View style={styles.semester}>
            <FontAwesome6
              name="graduation-cap"
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
            <AntDesign name="book" size={24} color={colors.white} />
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
      </ScrollView>
    </View>
  )
}

export default ProfileCard
