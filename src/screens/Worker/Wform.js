import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native'
import React,{useState, useContext, useEffect} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import profileContext from '../../../component/context/profileContext';

const Wform = ({navigation}) => {
  const context = useContext (profileContext);
  const {addProfile, profiles} = context;
 
const [profile, setProfile]= useState ({price:"", name:"", email:"", phone:"", postal:"", skills:"", description:""})
  const Handleclick = () =>{

          addProfile(profile.price, profile.name, profile.email, profile.phone, profile.postal, profile.skills, profile.description)

  }

 
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postal, setPostal] = useState("");
  const [price, setPrice] = useState("");
  const [skills, setSkills] = useState("");
  const [description, setDescription] = useState("");

  //useEffect(() => {
 

   // getProfile()
    
 // }, [])
  return (
    <LinearGradient
    colors={['#E0ACBC', '#F1D9E0', 'transparent']}
    style={styles.container}
    start={{ x: 0, y: 0.5 }}
    end={{ x: 0, y: 0.9 }}
  >
    <View>
    <View>
    <Text style={styles.PubT}>Publish Your Profile</Text>
    </View>
    <View style={styles.marg}>
    <View style={styles.CliePut}>
          <TextInput
            style={styles.ClPut}
            autoCapitalize="none"
            autoCorrect={false}
           maxLength = {15}
           value={name}
          onChange={setProfile}
            placeholder="Enter Your name"
            onChangeText={(setProfile) => setName (setProfile)} 
            
          />
        </View>

        <View style={styles.CliePut}>
          <TextInput
            style={styles.ClPut}
            autoCapitalize="none"
            autoCorrect={false}
            maxLength = {25}
            value={email}
            onChange={setProfile}
            placeholder="Enter Your email"
            onChangeText={(text) => setEmail (text)} 
            
          />
        </View>

        <View style={styles.CliePut}>
          <TextInput
            style={styles.ClPut}
            autoCapitalize="none"
            autoCorrect={false}
            value={phone}
            maxLength = {12}
            onChange={setProfile}
            placeholder="Enter Your phone"
            onChangeText={(text) => setPhone (text)} 
          />
        </View>
        <View style={styles.CliePut}>
        <TextInput
          style={styles.ClPut}
          keyboardType='number-pad'
          autoCapitalize="none"
          autoCorrect={false}
          value={price}
          onChange={setProfile}
          maxLength = {9}
          placeholder="Enter Your price"
          onChangeText={(text) => setPrice (text)} 
          
        />
      </View>
        <View style={styles.CliePut}>
        <TextInput
          style={styles.ClPut}
          autoCapitalize="none"
        keyboardType='number-pad'
          autoCorrect={false}
          value={postal}
          maxLength = {7}
          onChange={setProfile}
          placeholder="Enter Your Postal Code"
          onChangeText={(text) => setPostal (text)} 
         
        />
      </View>

        <View style={styles.CliePut}>
          <TextInput
            style={styles.ClPutt}
            multiline
            numberOfLines={4}
            autoCapitalize="none"
            autoCorrect={false}
            value={description}
            onChange={setProfile}
            maxLength = {50}
            placeholder="Tell About Yourself"
            onChangeText={(text) => setDescription (text)} 
           
          />
          </View>
          <View style={styles.CliePut}>
          <TextInput
            style={styles.ClPutt}
         
            autoCapitalize="none"
            autoCorrect={false}
            value={skills}
            onChange={setProfile}
            maxLength = {50}
            placeholder="Tell About skills"
            onChangeText={(text) => setSkills (text)} 
         
          />
           <View style={styles.Logbt}>
         
          <Button 
          onPress={Handleclick}
        
          title="Publish" color="#008000" />
        </View>
          </View>
         
        <Button 
        onPress={() => navigation.navigate("Profile")}
      
        title="Publish 2" color="#008000" />
        </View>
        </View>
      <View>
      <FlatList 
   
      keyExtractor={item => item._id}
     
      
      showsHorizontalScrollIndicator={false}
      data={profiles}
      renderItem={({item})=> {
         
          return (  
            <View>
            <Text> {item.price} </Text>
            <Text> {item.name} </Text>
            <Text> {item.email} </Text>
            <Text> {item.phone} </Text>
            <Text> {item.postal} </Text>
            <Text> {item.skills} </Text>
            <Text> {item.description} </Text>
           
           
           
            </View>
          )}}
       />
       
            
             </View>
      
    
      
    
    </LinearGradient>
  )
}


const styles = StyleSheet.create({

  CliePut:{
   
    paddingHorizontal: 10,
   
   
  },
  marg:{
marginTop:40,

  },
  PubT:{
textAlign: 'center',
fontSize: 24,
fontWeight: 'bold',
color: 'green',
marginTop: 40,
  },
  ClPut:{
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 20,
   height:40,
  },
  ClPutt:{
    marginTop: 20,
    borderWidth: 1,
    borderColor: "green",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  Logbt:{
    paddingHorizontal: 50,
    paddingVertical: 15,
  },
})
export default Wform;
