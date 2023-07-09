import react from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = (props) => {
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>

            </View>
            <View style={styles.circle}></View>
           
        </View>

    )
}

const styles = StyleSheet.create({
item: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
},
itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
},
square: {
    width: 24,
    height: 24,
    backgroundColor: '#C1ECE4',
    borderRadius: 5,
    opacity: 0.8,
    marginRight: 10,
},
itemText: {
    maxWidth: '80%',
},
circle: {
    height: 14,
    width: 14,
    borderRadius: 7,
    borderWidth: 3,
    borderColor: '#5A96E3',
},
});

export default Task;