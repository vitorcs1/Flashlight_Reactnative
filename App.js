import React, {useState, useEffect} from "react";
import {View, StyleSheet,Image,TouchableOpacity} from 'react-native';
import Torch from "react-native-torch";
import RNShake from 'react-native-shake'

const app = ()=>{
  const [toggle, setToggle] = useState(false);
  const handleOnPress = ()=> setToggle(oldToggle => !oldToggle);

  useEffect(()=>{
    Torch.switchState(toggle);
  },[toggle]);

  useEffect(()=>{
    const subscription = RNShake.addListener(()=>{
      setToggle(oldToggle => !oldToggle);
    })

    return () => subscription.remove();
  },[])

  return <View style={toggle ? style.containerLigth:style.container}>

    <TouchableOpacity onPress={handleOnPress}>


        <Image 
        style={ toggle ? style.lightingOn:style.lightingOff} 
        source={toggle ? require('./assets/icons/eco-light-off') : require('./assets/icons/eco-light.png')}/>

        <Image 
        style={ style.dioLogo} 
        source={toggle ? require('./assets/icons/logo-dio.png') : require('./assets/icons/logo-dio-white.png')}/>

      </TouchableOpacity>

    </View>
};

export default app;

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'black',
    alignItems: "center",
    justifyContent: "center",
  },
  containerLigth:{
    flex:1,
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center",
  },
  lightingOn:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
    tintColor: 'white',
  },
  dioLogo:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});