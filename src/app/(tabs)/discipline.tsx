import DisciplineCard from "@/components/DisciplineCard";
import SearchBar from "@/components/SearchBar";
import { styles } from "@/components/SearchBar/style";
import { colors } from "@/styles/colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from 'react';
import { Image, Text, View } from "react-native";

const profilePhoto = require("../../../assets/images/profile-photo.png");

export default function Discipline() {

const [searchQuery, setSearchQuery] = useState<string>('');
  return (
    <View style={styles.screenContainer}>

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={profilePhoto} style={styles.headerAvatar}/>
          <Text style={styles.headerTitle}>Minha Rotina</Text>
        </View>
        <Ionicons name="notifications-outline" size={24} color={colors.text.secundary} />
      </View>

      <View style={styles.titleContent}>
          <Text style={styles.mainTitle}>Minhas Disciplinas</Text>                                                                                                                
        <SearchBar 
          onChangeText={setSearchQuery}
          placeholder="Buscar disciplina, professor ou sala..."
          value={searchQuery}
        />
      </View> 

      <View style={styles.headerContent}>                                                                                                                      
        <View style={styles.card}>           
          <DisciplineCard                    
            title="Banco de Dados"           
            teacher="Profa. Marina Silva"    
            time="Ter, Qui 10:00 - 12:00"    
            room="Lab 4, Bloco B"            
            borderColor={colors.green}
            pendings="2 Pendentes"
            teacherIcon={                    
              <Ionicons                      
                name="person-outline"        
                size={16}                    
                color={colors.text.segondary}
              />                             
            }                                
            timeIcon={                       
              <Ionicons                      
                name="time-outline"          
                size={18}                    
                color={colors.primary}
              />                             
            }                                
            roomIcon={                       
              <MaterialCommunityIcons        
                name="door-open"             
                size={18}                    
                color={colors.primary}
              />                             
            }                                
          />                                 
        </View>                              
      </View>                                
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </View>
  )
}
