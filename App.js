import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleClick() {
    console.log("state: ", this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
          />
        </View>

        <TouchableHighlight
          style={[styles.signUpButtonContainer, styles.signupButton]}
          onPress={() => console.log(this.state)}
        >
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#192a56"
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    borderBottomWidth: 1,
    width: 260,
    height: 46,
    marginBottom: 20,
    borderBottomWidth: 1
  },
  input: {
    height: 50,
    flex: 1,
    textAlign: "center"
  },
  signUpButtonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 260,
    borderRadius: 15
  },
  signupButton: {
    backgroundColor: "#718093"
  },
  signUpText: {
    color: "#FFFFFF"
  }
});
