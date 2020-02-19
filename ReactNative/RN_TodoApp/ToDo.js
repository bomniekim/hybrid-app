import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';

const {width, height} = Dimensions.get('window');

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      toDoValue: props.text, // edit할 경우 해당 텍스트를 복사해 state에 저장
    };
  }
  static propTypes = {
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    uncompleteToDo: PropTypes.func.isRequired,
    completeToDo: PropTypes.func.isRequired,
    updateToDo: PropTypes.func.isRequired,
  };
  state = {};
  render() {
    const {isEditing, toDoValue} = this.state;
    const {text, id, deleteTodo, isCompleted} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <TouchableOpacity onPress={this._toggleCompleteTodo}>
            <View
              style={[
                styles.circle,
                isCompleted ? styles.completedCircle : styles.uncompletedCircle,
              ]}
            />
            {/* 스타일을 배열로 작성해 여러 개를 줄 수 있음 */}
          </TouchableOpacity>
          {isEditing ? (
            <TextInput
              style={[
                styles.text,
                styles.input,
                isCompleted ? styles.completedText : styles.uncompletedText,
              ]}
              autoCorrect={false}
              value={toDoValue}
              multiline={true}
              onChangeText={this._controlInput}
              onBlur={this._finishEditing} // 편집이 완료되지 않은 상태에서 칸 밖을 클릭하면 편집 전 상태로 종료
            />
          ) : (
            <Text
              style={[
                styles.text,
                isCompleted ? styles.completedText : styles.uncompletedText,
              ]}>
              {text}
            </Text>
          )}
        </View>

        {isEditing ? (
          <View style={styles.action}>
            {/* 수정할 때의 모드 */}
            <TouchableOpacity onPressOut={this._finishEditing}>
              <View style={styles.actionContainer}>
                <Text style={styles.actionChecked}>✓</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.action}>
            {/* 수정하지 않을 때의 모드 */}
            <TouchableOpacity onPressOut={this._startEditing}>
              <View style={styles.actionContainer}>
                <Text style={styles.actionText}>✏️</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPressOut={() => deleteTodo(id)}>
              <View style={styles.actionContainer}>
                <Text style={styles.actionText}>❌</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }

  _toggleCompleteTodo = () => {
    const {isCompleted, uncompleteToDo, completeToDo, id} = this.props;
    if (isCompleted) {
      uncompleteToDo(id);
    } else {
      completeToDo(id);
    }
  };

  // _toggleCompleteTodo = () => {
  //   this.setState(prevState => {
  //     return {
  //       isCompleted: !prevState.isCompleted,
  //       // 전의 boolean 값과 반대로 toggle
  //       // 완료되지 않은 상태에서 누르면 완료되고, 완료된 상태에서 누르면 완료되지 않은 상태로 돌아감
  //     };
  //   });
  // };

  _startEditing = () => {
    this.setState({
      isEditing: true,
    });
  };

  _finishEditing = () => {
    const {toDoValue} = this.state;
    const {id, updateToDo} = this.props;
    updateToDo(id, toDoValue);
    this.setState({
      isEditing: false,
    });
  };

  _controlInput = text => {
    this.setState({toDoValue: text});
  };
}

const styles = StyleSheet.create({
  container: {
    width: width - 70,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width / 1.5,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'red',
    borderWidth: 4,
    marginRight: 15,
    marginLeft: 10,
  },
  completedCircle: {
    borderColor: '#bbb',
  },
  uncompletedCircle: {
    borderColor: '#8BBCFF',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 23,
    marginVertical: 15,
    width: width / 2,
    paddingTop: 5,
  },
  completedText: {
    color: '#ddd',
    textDecorationLine: 'line-through',
  },
  uncompletedText: {
    color: '#353535',
  },
  action: {
    flexDirection: 'row',
  },
  actionContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    // marginVertical: 10,
    // marginHorizontal: 10,
    // 아이콘이 아닌 근처를 클릭해도 감지할 수 있도록 padding을 주는 것
    // backgroundColor: 'tomato',
  },
  actionChecked: {
    fontSize: 30,
  },
  actionText: {},
  input: {
    width: width / 2,
    marginVertical: 15,
    paddingBottom: 5,
  },
});
