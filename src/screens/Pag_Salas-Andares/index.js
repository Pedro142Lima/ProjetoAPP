import React from 'react';
import { View , Text, Image, ImageBackground, } from 'react-native'
import styles from './styles';

export default function Pag_Salas_Andares(){


    return(
        <View style={styles.controle}>

        
        <ImageBackground   source={require('../../../public/assets/images/BackgroundScanner.png')} style={styles.background_scanner}>
      <View style={styles.txt_quadrado}>
            <Text style={{fontSize: 30, fontFamily: 'Montserrat_700Bold', color: '#fff'}}>Validação de entrada</Text>

            <Image source={require('../../../public/assets/images/Quadrado_leitor.png')} style={styles.quadrado}/>
      </View>
        </ImageBackground>

          <View style={styles.faixa}>
             <ImageBackground  source={require('../../../public/assets/images/novaWave.png')} style={styles.background}>
             <View>
             </View>
            </ImageBackground>
          </View>

        </View>

        
    );
}
