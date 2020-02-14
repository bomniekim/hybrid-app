import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import ToDo from './ToDo';

const {height, width} = Dimensions.get('window');

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      addToDo: '',
    };
  }
  render() {
    const {addToDo} = this.state; // 구조분해할당

    return (
      <LinearGradient colors={['#FAF4C0', '#8BBCFF']} style={styles.container}>
        <Text style={styles.title}>Cool To Do</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder={'Add to do'}
            value={addToDo}
            onChangeText={this._addToDo}
            placeholderTextColor={'#999'}
            // returnKeyType={"done"}
            autoCorrect={false}
          />
          <ScrollView contentContainerStyle={styles.toDos}>
            <ToDo text={"Hello I'm ToDo"}></ToDo>
          </ScrollView>
        </View>
      </LinearGradient>
    );
  }

  _addTodo = text => {
    this.setState({
      addToDo: text, // 파라미터로 받아온 props인 text
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f23657',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 35,
    fontWeight: '100',
    marginTop: 30,
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    flex: 1,
    width: width - 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgb(50, 50, 50)',
        shadowOpacity: 0.5,
        shadowOffset: {
          height: -1,
          width: 0,
        },
      },
      android: {
        elevation: 10,
      },
    }),
  },
  input: {
    padding: 16,
    borderBottomColor: '#bbb',
    // borderBottomWidth: StyleSheet.hairlineWidth
    borderBottomWidth: 1,
    fontSize: 18,
  },
  toDos: {
    alignItems: 'center',
  },
});
