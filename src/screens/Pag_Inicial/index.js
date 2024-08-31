import React from 'react';
import { View , Text, Image, TouchableOpacity, ImageBackground} from 'react-native'
import styles from './style';
export default function Pag_Inicial(){


    const [fontLoaded] = useFonts({
        Montserrat_700Bold
    })

    if(!fontLoaded) {
        return null;
    }



    return(
        <View style={styles.controle}>
            <View style={styles.faixa}>
             <ImageBackground 
        source={require('../../../public/assets/images/novaWave.png')} 
        style={styles.background} 
      >
       
        <View style= {styles.alinhamento}>
                <Image source={require('../../../public/assets/images/logoFrei.png')} style={styles.frei}/>

                <Text style={{fontFamily: 'Montserrat_700Bold',color: '#fff', fontSize: 30, textAlign: 'center', width: 320, marginTop: 30,}}>Seja bem-vindo a Feira das Profissões 2024!</Text>

                
        </View>
             </ImageBackground>

             <TouchableOpacity style={styles.botao}>
                <Text style={{textAlign: 'center', fontFamily: 'Montserrat_700Bold', fontSize: 40, color: '#fff',}}>Começar</Text>
             </TouchableOpacity> 


            </View>

         <View style={styles.footer}> 
                    <Text style={{textAlign: 'center', fontFamily: 'Montserrat_700Bold', fontSize: 30, color: '#fff',}}>INSF</Text>

                    <Text style={{textAlign: 'center', fontFamily: 'Montserrat_300Light', fontSize: 15, color: '#fff',}}>2024 C</Text>
         </View>
        </View>

        
    );
}