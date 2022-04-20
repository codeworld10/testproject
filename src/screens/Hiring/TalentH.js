import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, {useState} from 'react'

const TalentH = () => {
    const [postal, setPostal] = useState("")
    const [skill, setSkill] = useState("")
  return (
    <View>
    <View style={styles.Tcolor}>
    <View style={styles.TalentP}>
          <TextInput
            style={styles.TalUp}
            keyboardType='number-pad'
            autoCapitalize="none"
            autoCorrect={false}
            value={postal}
            placeholder="Enter Your Postal Code"
            onChangeText={(actualdata) => setPostal(actualdata)}
          />
        </View>

        <View style={styles.TalentP}>
          <TextInput
            style={styles.TalUp}
            autoCapitalize="none"
            autoCorrect={false}
            value={skill}
            placeholder="Choose Skill"
            onChangeText={(actualdata) => setSkill(actualdata)}
          />
        </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
   Tcolor:{
backgroundColor: '#E0ACBC',
paddingVertical: 30,
   },
   
    TalentP:{
paddingHorizontal: 10,
    },
    TalUp:{
        borderWidth: 1,
        borderColor: "green",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 20,
        height: 40,
        backgroundColor: 'white'
    },

})
export default TalentH

