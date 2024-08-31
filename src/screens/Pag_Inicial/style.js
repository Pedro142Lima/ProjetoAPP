import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    //Controle
    controle: {
        height: '100%',
        width: '100%'
    },
     background: {
        height: 450,
        width:'auto'
     },
     frei: {
        height: 180,
        width: 180,
        
     },
     alinhamento: {
        alignItems:'center',
        marginTop: 50
     },
     botao: {
        marginTop: 80,
        height: 90,
        width: 250,
        borderRadius: 12,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF8D00',
    
     },
     footer: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#182754',
        height: 110,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
     }
     }
    )


export default styles;