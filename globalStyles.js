import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff0f5",
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItens: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
  title: {
    fontWeight: "bold",
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 35,
    color: '#f17ea1',
  },
  texto: {
    color: '#fff',
    fontSize: 20,
  },
  imagem: {
    width: '25%',
    height: '19%',
    justifyContent: 'center',
    alignItens: 'center',
    alignSelf: 'center',
    paddingTop: 50,
  },
  viewInput: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    borderColor: '#fff',
    borderStyle:"solid",
    borderWidth: 2,
    borderRadius: 9,
  },
  botao:{
    backgroundColor:'#f17ea1',
    width: 200,
    borderRadius: 15,
    marginTop: 20,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  escolha:{
    width:200, 
    color:"#fff",
  },
  bordaEscolha:{
    borderColor:"#f17ea1",
    borderStyle:"solid",
    borderRadius:9,
  }
});