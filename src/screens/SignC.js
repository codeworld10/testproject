import { StyleSheet, Text, View, Image, TextInput,  TouchableOpacity, ScrollView, Button } from 'react-native'
import React,{useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const SignC = ({navigation}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  return (
    <LinearGradient
    colors={['#E0ACBC', '#F1D9E0', 'transparent']}
    style={styles.container}
    start={{ x: 0, y: 0.5 }}
    end={{ x: 0, y: 0.9 }}
  >
    <ScrollView>
      <View style={styles.CliT}>
        <View style={styles.Cchild}>
          <Image
            style={styles.ChiLogo}
            source={require("../../assets/logo.png")}
          />
        </View>
        <View style={styles.ClimG}>
          <Image
            style={styles.CIcOn}
            source={require("../../assets/tltS.png")}
          />
        </View>

        <View style={styles.CliePut}>
          <TextInput
            style={styles.ClPut}
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            placeholder="Enter Your Name"
            onChangeText={(actualdata) => setName(actualdata)}
          />
        </View>

        <View style={styles.CliePut}>
          <TextInput
            style={styles.ClPut}
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            placeholder="Enter Your Email Address"
            onChangeText={(actualdata) => setEmail(actualdata)}
          />
        </View>

        <View style={styles.CliePut}>
          <TextInput
            style={styles.ClPut}
            keyboardType='number-pad'
            autoCapitalize="none"
            autoCorrect={false}
            value={phone}
            placeholder="Enter Your Phone"
            onChangeText={(actualdata) => setPhone(actualdata)}
          />
        </View>

        <View style={styles.CliePut}>
          <TextInput
            style={styles.ClPut}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            placeholder="Enter Your Password"
            onChangeText={(actualdata) => setPassword(actualdata)}
          />
        </View>
        <View>
        <View style={styles.CbtN}>
        <Button style={styles.btnSign} title="Sign Up" color="#008000" />
      </View>
        </View>
        <TouchableOpacity>
            <Text style={styles.CsGn}>
             Already Have An Account?
              <Text
                onPress={() => navigation.navigate("Talent Login")}
                style={styles.CenL}
              >
                Login
              </Text>
            </Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
 
  Cchild:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ChiLogo:{
    width: 75,
    height: 88,
    marginTop: 40,
  },
  ClimG:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  CIcOn:{
    width: 190,
    height: 175,
    marginTop: 50,
    paddingVertical: 10,
  },
  CliePut:{
   
    paddingHorizontal: 10,
   
  },
  ClPut:{
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 20,
    height: 40,
  },
 
  CbtN:{
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  CsGn:{
    color: "#008000",
    textAlign: "center",
    fontSize: 15,
    paddingBottom: 15,
    
  },
  CenL:{
    color: "#FF0099",
    textAlign: "center",
    margin: 5,
    fontWeight: 'bold',
  }
})

export default SignC

