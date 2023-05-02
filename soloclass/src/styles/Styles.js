import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DAFFF9',
        padding: 10
      },
      detailContainer: {
        flex:1,
        backgroundColor:'#DAFFF9',
        alignItems: 'center'
      },
      detailsHeader: {
        alignItems: 'center',
        padding: 10,
        height: 300
      },
      soilDetails: {
        flex: 0,
        width:350,
        alignItems: 'center',
        alignContent: 'center',
        margin: 10,
        padding: 5,
        borderWidth: 3,
        borderColor: '#459C9C',
        backgroundColor: '#ffc'
      },
      attribute: {
        fontSize: 22,
        fontWeight:'bold',
        width: '100%',
        marginTop: 5,
        marginBottom: 5
      },
      logo: {
        fontSize: 50,
        margin: 20,
        marginBottom: 60
      },
      title: {
        margin: 10,
        fontSize: 26,
        fontWeight: 'bold'
      },
      image: {
        padding: 0,
        margin: 10,
        width: 350,
        height: 200,
        borderWidth: 3,
        borderColor: '#459C9C',
        borderRadius: 12
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