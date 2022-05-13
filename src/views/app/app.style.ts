import { StyleSheet } from "react-native";

const appStyles = StyleSheet.create({
  bannerContainer: {
    width: '96%',
    height: 500,
    marginHorizontal: '2%',
    marginBottom: 10,
    backgroundColor: '#CDCDCD',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ADADAD',
  },
  container: {
    padding: 25,
    backgroundColor: '#f5f5f5',
    flex: 1
  },
  card:{
    width: 400,
    height: 300,
    borderRadius: 15,
    backgroundColor: '#EDEDED',
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#CDCDCD',
    justifyContent:'center',
    alignItems:'center',
  },
  cardBorder:{
    position: 'absolute',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#CDCDCD',
  },
  cardBorderFocused:{
    borderWidth: 5,
    borderColor: '#007CFA',
  },
  cardImage:{
    width: 400,
    height: 300,
    borderRadius: 15,
    overflow: 'hidden',
  },
  cardTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#99999F',
    margin: 10,
    position: 'absolute',
    bottom: 10,
    left: 20
  },
  swimlaneContainer:{
    marginVertical: 10,
  },
  laneTitleContainer:{
    height: 50
  },
  laneTitle:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    margin: 10
  }
});

export default appStyles;