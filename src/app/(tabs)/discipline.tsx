import DisciplineCard from "@/components/DisciplineCard";
import SearchBar from "@/components/SearchBar";
import { styles } from "@/components/SearchBar/style";
import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from 'react';
import { Image, ScrollView, Text, View } from "react-native";

const profilePhoto = require("../../../assets/images/profile-photo.png");

export default function Discipline() {

const [searchQuery, setSearchQuery] = useState<string>('');
  return (
    <ScrollView>
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
            teacher="Prof. Roberto Silva"    
            time="Seg / Qua - 10:00"    
            room="Laboratório 401"            
            borderColor={colors.primary}
            pendings="2 Pendentes"
            badgeColor={colors.background.orange}
            pendingsColor={colors.text.red}
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
              <Ionicons       
                name="location-outline"             
                size={18}                    
                color={colors.primary}
              />                             
            }                                
          />                                 
        </View>                              
      </View>                                
    
      <View style={styles.headerContent}>          
        <View style={styles.card}>                 
          <DisciplineCard                          
            title="Probabilidade e Estatística"                 
            teacher="Profa. Maria Costa"          
            time="Ter / Qui - 08:00"          
            room="Sala 205"                  
            borderColor={colors.primary}
            badgeColor={colors.background.orange}
            pendingsColor={colors.text.red}             
            pendings="1 Pendentes"                 
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
              <Ionicons             
                name="location-outline"                   
                size={18}                          
                color={colors.primary}             
              />                                   
            }                                      
          />                                       
        </View>                                    
      </View>                                      

      <View style={styles.headerContent}>         
        <View style={styles.card}>                
          <DisciplineCard                         
            title="Psicologia Aplicada"   
            teacher="Prof. Carlos Lima"         
            time="sex - 14:00"         
            room="Auditorio 112"                 
            borderColor={colors.green}
            badgeColor={colors.background.green}
            pendingsColor={colors.text.green}          
            pendings="Em dia"                
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
              <Ionicons             
                name="location-outline"                  
                size={18}                         
                color={colors.primary}            
              />                                  
            }                                     
          />                                      
        </View>                                   
      </View>                                     
      
      <View style={styles.headerContent}>         
        <View style={styles.card}>                
          <DisciplineCard                         
            title="Engenharia de Solftware"           
            teacher="Profa. Ana Santos"         
            time="Seg / Qua - 14:00"         
            room="Laboratório 3"                 
            borderColor={colors.primary}            
            pendings="1 Pendentes"
            pendingsColor={colors.text.red}
            badgeColor={colors.background.orange}                
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
              <Ionicons             
                name="location-outline"                  
                size={18}                         
                color={colors.primary}            
              />                                  
            }                                     
          />                                      
        </View>                                   
      </View>                                     





    </View>
    </ScrollView>
  )
}
