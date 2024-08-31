import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    //Controle
    controle: {
        height: '100%',
        width: '100%',
        flexDirection: 'column'
    
    },
    background: {
       height: 450,
       width: '100%',
       transform: [{ scaleY: -1 }],
     },
     faixa: {
       flex: 1,
       justifyContent: 'flex-end', // Isso força o contêiner a alinhar os filhos ao fundo
       alignItems: 'center',
     },
    
     background_scanner: {
       height: 450,
       width: '100%',
     },
     quadrado: {
       height: 250,
       width: 250,
     },
     txt_quadrado: {
       alignItems: 'center',
       paddingTop: 40,
       gap: 30,
       backgroundColor: 'rgba(000, 000, 000, 0.4)',
       height: '100%'
     },
     }
    )


export default styles;