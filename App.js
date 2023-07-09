import react from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './Components/Task';
import { useState } from 'react';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaksItems] =useState([]);



  const handleSetTask = () => {
    Keyboard.dismiss();
    setTaksItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaksItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>

          {
            taskItems.map((items, index) => {
             return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}> 
                <Task  text={items} />
              </TouchableOpacity>
             )
            })
          }
          

        </View>
      </View>

      {/*Writiing a task */}

      <KeyboardAvoidingView 
      behavior={Platform.OS == 'ios' ? "padding" : "height" }
      style = {styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder='Write a task' value={task} onChangeText={text=>setTask(text)} />

        <TouchableOpacity onPress={() => handleSetTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
        

      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C1ECE4',
   
  },

taskWrapper:{
  paddingTop: 60,
  paddingHorizontal: 20,
},
sectionTitle:{
  fontSize: 24,
  fontWeight: 'bold',
  
},
items:{
  marginTop: 30,
},

writeTaskWrapper:{
  position: 'absolute',
  bottom: 20,
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around'
},
input: {
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: '#fff',
  width: 250,
  borderRadius: 60,
  borderColor: '#C0C0C0',
  borderWidth: 2,


},
addWrapper: {
  width: 60,
  height: 60,
  backgroundColor: '#fff',
  justifyContent:'center',
  alignItems: 'center',
  borderRadius: 60,
  borderColor: '#C0C0C0',
  borderWidth: 2,

},
addText: {
  fontSize: 20,

},

});

