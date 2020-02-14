import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class ToDo extends Component {
  state = {
    isEditing: false,
    isCompleted: false,
    toDoValue: '', // edit할 경우 해당 텍스트를 복사해 state에 저장
  };
  render() {
    const {isCompleted, isEditing, toDoValue} = this.state;
    const {text} = this.props;

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
                styles.input,
                styles.text,
                isCompleted ? styles.completedText : styles.uncompletedText,
              ]}
              value={toDoValue}
              multiline={true}
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
            <TouchableOpacity onPressOut={this._finishEditing}>
              <View style={styles.actionContainer}>
                <Text style={styles.actionChecked}>✓</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.action}>
            <TouchableOpacity onPressOut={this._startEditing}>
              <View style={styles.actionContainer}>
                <Text style={styles.actionText}>✏️</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
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
    this.setState(prevState => {
      return {
        isCompleted: !prevState.isCompleted,
        // 전의 boolean 값과 반대로 toggle
        // 완료되지 않은 상태에서 누르면 완료되고, 완료된 상태에서 누르면 완료되지 않은 상태로 돌아감
      };
    });
  };

  _startEditing = () => {
    const {text} = this.props;
    this.setState({
      isEditing: true,
      toDoValue: text, // 편집을 시작하면 props에서 text를 가져와서 이를 state에 저장
    });
  };

  _finishEditing = () => {
    this.setState({
      isEditing: false,
    });
  };
}

const styles = StyleSheet.create({
  container: {
    width: width - 70,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  column: {},
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'red',
    borderWidth: 4,
    marginRight: 15,
    marginLeft: 5,
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
  },
  completedText: {
    color: '#ddd',
    textDecorationLine: 'line-through',
  },
  uncompletedText: {
    color: '#353535',
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width / 2,
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
    marginVertical: 10,
  },
});
