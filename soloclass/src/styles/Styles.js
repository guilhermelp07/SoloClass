import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DAFFF9',
        padding: 10
      },
      logo: {
        fontSize: 50,
        margin: 20,
        marginBottom: 60
      },
      card: {
        height: 340,
        width: 350,
        alignContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 2,
      },
      cardContent: {
        backgroundColor: '#fff',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
      },
      cardImage: {
        padding: 0,
        borderRadius: 5,
        width: 300,
        height: 180
      },
      cardButton: {
        fontSize: 16,
        color:'#8df',
        fontWeight:'bold',
        margin: 10,
      },
      cardText: {
        margin: 10
      }
});