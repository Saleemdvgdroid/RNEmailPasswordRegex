import React,{useState} from 'react';
import { StyleSheet, View,TextInput,TouchableOpacity,Text} from 'react-native';

export default function App() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [showEmail,setShowEmail] = useState(false);
  const [showPassword,setShowPassword] = useState(false);
  const onEmailChange = email =>{
    if(showEmail){
      setShowEmail(false);
    }
    setEmail(email);
  }

  const onPasswordChange = password =>{
    if(showPassword){
      setShowPassword(false);
    }
    setPassword(password);
  }

  const validateEntry = (isPassword = false) =>{
    if(isPassword){
      const reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      if(!reg.test(password))
      setShowPassword(true)
      return;
    }
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (!reg.test(email)){
          setShowEmail(true)
        }
  }

  const hitLogin = () =>{
    validateEntry();
    validateEntry(true);
  }

  return (
    <View style={styles.container}>
      <TextInput style = {styles.textInput} 
                 value = {email} 
                 onChangeText = {e => onEmailChange(e)} 
                 onBlur = {()=>validateEntry()}/>
      <Text style={showEmail?styles.errorText : styles.hideError}>Invalid email</Text>

      <TextInput secureTextEntry  
                 style = {styles.textInput} 
                 value = {password} 
                 onChangeText = {e => onPasswordChange(e)}
                 onBlur = {()=> validateEntry(true)}/>
      <Text style={showPassword?styles.errorText : styles.hideError}>Invalid password</Text>
      <TouchableOpacity style = {styles.buttonStyle} onPress = {()=>hitLogin()}>
        <Text style = {{textAlign:'center'}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  textInput:{
    marginTop:30,
    padding:10,
    width:'100%',
    borderColor:'#ccc',
    borderWidth:1,
    borderRadius: 5
  },
  buttonStyle:{
    marginTop:30,
    width:'100%',
    padding:10,
    borderColor:'#ccc',
    borderWidth:1,
    borderRadius: 7,
    backgroundColor:'#cecece'
  },
  errorText:{
    fontSize:18,
    color:'red',
    padding:10,
    height:36
  },
  hideError:{
    display:'none'
  }
});
