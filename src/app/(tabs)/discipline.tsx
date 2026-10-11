import CourseCard from "@/components/CourseCard";
import { profilePhoto } from "@/components/profileCard/index";
import SearchBar from "@/components/SearchBar";
import { styles } from "@/components/SearchBar/style";
import { colors } from "@/styles/colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useState } from 'react';
import { Image, Text, View } from "react-native";

export default function Discipline() {

const [searchQuery, setSearchQuery] = useState<string>('');
  return (
    <View style={styles.screenContainer}>

      <View style={styles.headerLeft}>
        <Image source={profilePhoto} style={styles.headerAvatar}/>
        <Text style={styles.headerTitle}>Minha Rotina</Text>
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
          <CourseCard                    
            title="Banco de Dados"           
            teacher="Profa. Marina Silva"    
            time="Ter, Qui 10:00 - 12:00"    
            room="Lab 4, Bloco B"            
            borderColor={colors.green}       
            icon={                           
              <FontAwesome                   
                name="server"                
                size={24}                    
                color={colors.icon.gray}     
              />                             
            }                                
            teacherIcon={                    
              <Ionicons                      
                name="person-outline"        
                size={24}                    
                color={colors.text.segondary}
              />                             
            }                                
            timeIcon={                       
              <Ionicons                      
                name="time-outline"          
                size={24}                    
                color={colors.text.segondary}
              />                             
            }                                
            roomIcon={                       
              <Ionicons                      
                name="location-outline"      
                size={24}                    
                color={colors.text.segondary}
              />                             
            }                                
          />                                 
        </View>                              
      </View>                                
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </View>
  )
}
