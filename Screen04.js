import { Text,View,Image,TouchableOpacity,StyleSheet } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react'


function Screen04({navigation}) {
 const [rating, setRating] = useState(0); 
  
  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => setRating(i)}>
          <Icon
            name={i <= rating ? 'star' : 'star-o'} 
            size={25}
            color="#E0E41A" 
            style={styles.star}
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <View style={{flex:1,alignItems:'center'}}>
        <Image source={require('./assets/vs_red_1.png')}   
              style={styles.productImage}/>
      </View>
      <View style={{flex:1}}>
        <View style={styles.session}>
          <Text style={styles.nameProduct}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
          <View style={[styles.row,{justifyContent:'space-between'}]}>
            <View style={styles.starsContainer}>{renderStars()}</View>
            <Text style={styles.reviewText}>(Xem 828 đánh giá)</Text>
          </View>
          <View style={[styles.row,{paddingVertical:5}]}>
            <Text style={styles.price}>1.790.000 đ</Text>
            <Text style={styles.oldPrice}>1.790.000 đ</Text>
          </View>
          <View style={[styles.row,{paddingVertical:5}]}>
            <Text style={styles.priceGuarantee}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
            <AntDesign name="questioncircleo" size={20} color="black"  />
          </View>
          <View style={{alignItems:'center',paddingTop:10}}>
            <TouchableOpacity style={styles.colorButton}
            onPress={() => navigation.navigate("Screen03")}> 
              <Text style={styles.nameProduct}>4 MÀU-CHỌN MÀU</Text>
              <AntDesign name="right" size={10} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems:'center',marginBottom:10}}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.textButton}>CHỌN MUA</View>
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
    backgroundColor:"#FFFFFF",
  },
  session:{
    flex:1,
    justifyContent:'center',
    marginHorizontal:20
  },
  productImage:{
    width:300,
    height:'100%',
    resizeMode:'contain',
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
  }, 
  nameProduct:{
    fontSize:15,
    fontWeight:'400',
  },  
  price:{
    fontSize:18,
    fontWeight:'700',
    paddingRight:50,
  },  
  oldPrice:{
    fontSize:15,
    textDecorationLine:'line-through',
    color:'rgba(0, 0, 0, 0.58)',
    fontWeight:'700',
  },
  priceGuarantee:{
    fontSize:12,
    color:'#FA0000',
    fontWeight:'bold',
    textAlign:'center',
    paddingRight:10,
  },  
  colorButton:{
    borderRadius:10,
    borderColor:"hsba(0, 0%, 0%, 0.46)",
    borderWidth:1,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-evenly',
    height:34,
    width:'90%',
  },
  button:{
    backgroundColor:'#CA1536',
    height:44,
    width:'90%',
    borderRadius:10,
    borderWidth:1,
    justifyContent:'center',
  },
  textButton:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'700',
    color:'#F9F2F2',
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  star: {
    marginHorizontal: 3,
  },
  reviewText:{
    fontSize:15,
    fontWeight:'400'
  },
});

export default Screen04;