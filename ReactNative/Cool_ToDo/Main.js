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

import AsyncStorage from '@react-native-community/async-storage';

import LinearGradient from 'react-native-linear-gradient';
import uuidv1 from 'uuid/v1';
import ToDo from './ToDo';

const {height, width} = Dimensions.get('window');

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      addToDo: '',
      loadedToDos: false,
      toDos: {},
    };
  }

  componentDidMount = () => {
    this._loadToDos();
  };
  render() {
    const {addToDo, loadedToDos, toDos} = this.state; // 구조분해할당
    // if (!loadedToDos) {
    //   return <Text>Loading..</Text>;
    //   // 후에 splash screen으로 업데이트
    // }

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
            onSubmitEditing={this._newAddToDo}
          />
          <ScrollView contentContainerStyle={styles.toDos}>
            {/* {toDos.map(todo=> <ToDo/>)} */}
            {/* array를 이용해 대량의 데이터를 다뤘다면 map()을 사용했겠지 */}
            {Object.values(toDos)
              .reverse()
              .map(toDo => (
                // reverse: object가 저장되는 순간 맨 위로 오게끔
                <ToDo
                  key={toDo.id}
                  deleteTodo={this._deleteToDo}
                  uncompleteToDo={this._uncompleteToDo}
                  completeToDo={this._completeToDo}
                  updateToDo={this._updateToDo}
                  {...toDo}
                />
              ))}
          </ScrollView>
        </View>
      </LinearGradient>
    );
  }

  _addToDo = text => {
    this.setState({
      addToDo: text, // 파라미터로 받아온 props인 text
    });
  };

  _loadToDos = async () => {
    try {
      const toDos = await AsyncStorage.getItem('toDos');
      // getItem이 끝날 때까지 function을 처리하지 말고 기다려!
      const parsedToDos = JSON.parse(toDos); // string -> object로 변환
      this.setState({
        loadedToDos: true,
        toDos: parsedToDos,
      });
    } catch (err) {
      console.log(err);
    }
  };

  _newAddToDo = () => {
    const {addToDo} = this.state;
    if (addToDo !== '') {
      this.setState(prevState => {
        const ID = uuidv1(); // npm install uuid --save
        const addToDoObj = {
          [ID]: {
            // 데이터의 관리를 용이하게 하기 위해 array 대신 object로 만들어 사용
            id: ID,
            isCompleted: false,
            text: addToDo,
            createdAt: Date.now(),
          },
        };

        const newState = {
          ...prevState,
          addToDo: '', // add To Do 칸을 비워줌
          toDos: {
            ...prevState.toDos,
            ...addToDoObj,
          },
        };
        this._saveToDos(newState.toDos);
        return {...newState};
      });
    }
  };

  _deleteToDo = id => {
    this.setState(prevState => {
      const toDos = prevState.toDos;
      delete toDos[id];
      const newState = {
        ...prevState,
        ...toDos,
      };
      this._saveToDos(newState.toDos);
      return {...newState};
    });
  };

  _uncompleteToDo = id => {
    this.setState(prevState => {
      const newState = {
        ...prevState,
        toDos: {
          ...prevState.toDos,
          [id]: {
            ...prevState.toDos[id],
            isCompleted: false,
          },
        },
      };
      this._saveToDos(newState.toDos);
      return {...newState};
    });
  };
  _completeToDo = id => {
    this.setState(prevState => {
      const newState = {
        ...prevState,
        toDos: {
          ...prevState.toDos,
          [id]: {
            ...prevState.toDos[id],
            isCompleted: true,
          },
        },
      };
      this._saveToDos(newState.toDos);
      return {...newState};
    });
  };

  _updateToDo = (id, text) => {
    this.setState(prevState => {
      const newState = {
        ...prevState,
        toDos: {
          ...prevState.toDos,
          [id]: {
            ...prevState.toDos[id],
            text: text,
          },
        },
      };
      this._saveToDos(newState.toDos);
      return {...newState};
    });
  };

  _saveToDos = newToDos => {
    const saveToDos = AsyncStorage.setItem('toDos', JSON.stringify(newToDos));
    // toDos는 식별자 key
    // AsyncStorage에는 string만 저장할 수 있으므로 object인 newToDos를 string으로 바꾸어주는 작업 필요
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
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 20,
    fontFamily: 'Cafe24Oneprettynight',
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
    fontSize: 20,
    fontFamily: 'Cafe24Oneprettynight',
  },
  toDos: {
    alignItems: 'center',
  },
});
