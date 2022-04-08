import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, SafeAreaView, Image, Button, Dimensions, View
} from 'react-native';

import header from './assets/header.png';
import MainView from './src/views/MainView';
import EstacioView from './src/views/EstacioView';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <Image source={header} style={styles.header} ></Image>
        <Text style={styles.title}>Consoles</Text>
      </View>
      <View style={styles.detailsView}>
        <Text style={styles.productName}>Xbox Series X</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Image style={styles.icon} source={{ uri: 'https://arquivosbordados.com/wp-content/uploads/2021/10/embroidery-design-logo_753eeb22-e242-4204-bf27-f3012cc27322-1.jpg' }}></Image>
        <Text style={styles.sonyName}>Sony</Text>
      </View>
      <View>
        <Text style={styles.productDescription}>Lorem ipsum dolor sit amet conseqt adiscipli elit. Lorem ipsum dolor sit amet conseqt adiscipli elit.Lorem ipsum dolor sit amet conseqt adiscipli elit.Lorem ipsum dolor sit amet conseqt adiscipli elit.Lorem ipsum dolor sit amet conseqt adiscipli elit.</Text>
      </View>
      <View>
        <Text style={styles.productPrice}>R$ 4.0000,00</Text>
      </View>
      <View style={styles.cartArea}>
        <Button
          title="Adicionar ao carrinho"
          color="#007AFF"
          accessibilityLabel="Adicionar ao carrinho"
        />
        <MainView />
        <EstacioView />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  detailsView: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headerView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    height: 350,
    borderBottomColor: '#007AFF',
    borderBottomWidth: 5,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1a42a7',
    paddingTop: 40,
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
  },
  productName: {
    fontSize: 30,
    paddingLeft: 10,
    fontWeight: 'bold',
    color: '#1a42a7',
    width: '100%',
  },
  icon: {
    width: 32,
    height: 32,
  },
  sonyName: {
    fontSize: 15,
    color: '#6b5b95',
    marginLeft: 20,
    lineHeight: 10,
    paddingTop: 10,
  },
  detailsContainer: {
    padding: 20,
    flexDirection: 'row'
  },
  productDescription: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 15,
    color: '#6b5b95',
    textAlign: 'justify',
  },
  productPrice: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    fontSize: 30,
    color: '#106510',
    fontWeight: 'bold',
  },
  cartArea: {
    padding: 20
  }
});
