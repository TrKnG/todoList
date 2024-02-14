import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/task';
import { useState } from 'react';


export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null)

  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      {/*Bugün yapılacaklar*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>
        Bugün yapılacaklar 

        </Text>
        <View style={styles.items}>
          {/*Yapılacaklar burada*/}
          {
            taskItems.map((item, index) => {
             return (
              <TouchableOpacity key= {index} onPress={() => completeTask(index)}>
                <Task  text ={item} />
              </TouchableOpacity>
             ) 
             
            })
          }

        </View>

      </View>

      {/*Yapılacaklar burada girilir !*/}
      <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "height" : "padding"}
      style = {styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Yapılacak iş gir'} value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>

            <Text style={styles.addText}>
              +
            </Text>

          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
  fontSize: 24,
  fontWeight: 'bold',
},
  items:{
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom:60,
    width: '%100',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 300,
  },
  addWrapper: {
    position: 'relative',
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    left: 20,
    right:0,
  },
  addText: {

  },
});
