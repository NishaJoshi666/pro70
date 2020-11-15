import React from 'react';
import { Text, View,TextInput,StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStoryScreens extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Story Hub',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

<TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TextInput
          style={styles.storyinput}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    inputBox: {
      marginTop: 50,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      outline: 'none',
    },
    storyInput: {
      marginTop: 50,
      width: '500',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      outline: 'none',
    },

  });  