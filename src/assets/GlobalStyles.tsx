import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    input: {
      backgroundColor: '#fff',
      outlineStyle: 'none',
      outline:'none'
    },
    marginBottom: {
      marginBottom: 8,
    },
    container: {
      backgroundColor: '#111',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      color: 'white',
      fontWeight:'bold',
      textAlign:'center',
      marginBottom: 24,
      fontSize: 24,
    },
    questionMark: {
      width: 150,
      height: 150,
      borderRadius: 75,
      
      elevation: 5,
      shadowColor: '#000000',
      shadowOffset: {
        width: 8,
        height: 8,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      position: 'absolute',
      top: 90,
      backgroundColor: '#8F7535',
      padding: 24,
      borderBottomWidth: 8,
      borderBottomColor: '#3A3329',
      borderLeftWidth: 8,
      borderLeftColor: '#645136',
    },
    suggestionBox: {
      width: '80%',
    },
    input: {
      height: 40,
      borderWidth: 1,
      padding: 10,
      width: '100%',
      backgroundColor: 'white',
      borderRadius: 4,
      borderColor: '#888',
      fontWeight: 'bold',
      color: '#000',
    },
    suggestMeText: {
      color: '#ffffff',
      fontWeight: 'bold'
    },
    suggestionButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      borderRadius: 4,
      marginBottom: 8,
      borderBottomWidth: 2,
      borderBottomColor: '#ffffff',
  
    },
    suggestionButtonText: {
      color: 'white',
      fontWeight:'bold',
      textTransform: 'uppercase',
      fontFamily:'sans-serif'
    },
    bottom: {
      position: 'absolute',
      bottom: 24,
    }
  });

  export default styles
