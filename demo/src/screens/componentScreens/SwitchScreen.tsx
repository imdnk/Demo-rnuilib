import React, {Component} from 'react';
import {Text, View, Switch, Colors} from 'react-native-ui-lib'; //eslint-disable-line


class SwitchScreen extends Component {
  state = {
    value1: true,
    value2: false,
    value3: true,
    value4: false,
    value5: false,
  };

  render() {
    return (
      <View flex bottom padding-20>
        <View flex center>
          <Switch testID="switch" value={this.state.value1} onValueChange={(value1: boolean) => this.setState({value1})} style={{marginBottom: 20}}/>
          <Switch
            onColor={Colors.purple30}
            offColor={Colors.purple60}
            value={this.state.value2}
            onValueChange={(value2: boolean) => this.setState({value2})}
            style={{marginBottom: 20}}
          />
          <Switch
            width={80}
            height={38}
            thumbSize={34}
            value={this.state.value3}
            onValueChange={(value3: boolean) => this.setState({value3})}
            style={{marginBottom: 20}}
          />
          <Switch
            width={30}
            height={4}
            thumbSize={12}
            onColor={Colors.grey20}
            offColor={Colors.grey60}
            thumbColor={Colors.grey10}
            value={this.state.value4}
            onValueChange={(value4: boolean) => this.setState({value4})}
            style={{marginBottom: 20}}
          />
          <View row marginB-20>
            <Text text70 centerV>Disabled: </Text>
            <Switch
              disabled
              value={this.state.value5}
              onValueChange={(value5: boolean) => this.setState({value5})}
              style={{marginRight: 10}}
            />
            <Switch
              disabled
              value={!this.state.value5}
              onValueChange={(value5: boolean) => this.setState({value5})}
            />
          </View>
        </View>
        <Text text40 grey10>
          Switch
        </Text>
      </View>
    );
  }
}

export default SwitchScreen;
