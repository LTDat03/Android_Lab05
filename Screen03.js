import { Text,View,Image,TouchableOpacity,StyleSheet,Pressable } from 'react-native';
import {SetStateAction, useState} from 'react'

export default function Screen03({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.productCard}>
        <View>
          <Image source={require('./assets/vs_red.png')}
                style={{width:100,height:120}}/>
        </View>
        <View style={styles.productInfo}>
          <Text style={styles.productText}>Điện Thoại Vsmart Joy 3</Text>
          <Text style={styles.productText}>Hàng chính hãng</Text>
          <Text style={styles.productText}>Màu: <Text style={styles.fontText}> đỏ </Text> </Text>
          <Text style={styles.productText}>Cung cấp bởi <Text style={styles.fontText}>Tiki Tradding</Text></Text>
          <Text style={[styles.productText,{fontWeight:'700',fontSize:18}]}>1.790.000 đ</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.chooseColorText}>Chọn một màu bên dưới:</Text>
        <View style={styles.chooseColor}>
          <Pressable style={[styles.button,{backgroundColor:'#C5F1FB'}]}>
          </Pressable>
          <Pressable style={[styles.button,{backgroundColor:'#F30D0D'}]}>      
          </Pressable>
          <Pressable style={[styles.button,{backgroundColor:'#000000'}]}>    
          </Pressable>
          <Pressable style={[styles.button,{backgroundColor:'#234896'}]}>    
          </Pressable>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.buttonText}>XONG</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
  },
  productCard:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal: 10,
    backgroundColor:'#FFFFFF'
  },
  productInfo:{
    justifyContent:'center',
    gap: 2,

  },
  productText:{
    fontSize:15,
    fontWeight:'400'
  },
  content:{
    flex:4,
    backgroundColor:"#C4C4C4",
    justifyContent:'space-between',
    paddingVertical:10,
  },
  chooseColorText:{
    fontSize:18,
    fontWeight:'400',
    paddingLeft:10,
  },
  button:{
    alignItems:'center',
    justifyContent:'center',
    height:80,
    width:85,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  chooseColor:{
    alignItems:'center',
    justifyContent:'space-between',
    gap: 15,
  },
  btn:{
    backgroundColor:'#1952E294',
    borderRadius:10,
    borderWidth:1,
    width:'90%',
    borderColor:'#CA1536',
    alignItems: 'center',
    justifyContent:'center',
    height:44,
  },
  buttonText:{
    fontSize:20,
    fontWeight:'700',
    color:'#F9F2F2',
  },
  footer:{
    alignItems:'center',
    justifyContent:'center'
  },
  fontText:{
    fontWeight:'700'
  }
})
