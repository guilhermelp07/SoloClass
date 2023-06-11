import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DAFFF9',
        padding: 10
      },
      textInput: {
        width: 270,
        height: 50,
        borderRadius: 5,
        borderColor: '#aaa',
        borderWidth: 2,
        backgroundColor: '#fff',
        margin: 10,
        fontSize: 20,
        paddingLeft: 12
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
        fontSize: 20,
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
        flex: 1,
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
        color: '#459C9C', // color:'#8df',
        fontWeight:'bold',
        margin: 5,
      },
      cardText: {
        margin: 10
      },
      picker: {
        height: 10,
        width: 200,
        backgroundColor:'#eee'
      },
      pickerColor: {
        height: 200,
        width: 200,
        backgroundColor:'#eee'
      },
      itemTitle: {
        margin: 10,
        fontSize: 17,
        height: 30,
        textAlignVertical: 'center'
      },
      modal: {
        backgroundColor: '#fff', //'#DAFFF9',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 30,
        marginTop: 90,
        borderWidth: 2,
        padding: 14,
        borderColor: '#aaa',
        shadowColor: '#000',
        shadowRadius: 10,
        elevation: 14
      },
      containerSoilProfile: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row'
      },
      limitForm: {
        flex: 1,
        flexDirection: 'row',
        margin: 0,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
      },
      soilProfileInput: {
        width: 250,
        height: 45,
        fontSize: 18,
        padding: 7,
        borderWidth: 1,
        borderRadius: 5,
        margin: 4,
        marginTop: 20
      },
      soilProfileNumInput: {
        width: 80,
        height: 40,
        fontSize: 18,
        padding: 7,
        borderWidth: 1,
        borderRadius: 5
      }
});