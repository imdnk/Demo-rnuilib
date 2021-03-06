import React, {Component} from 'react';
import {ScrollView, StyleSheet, Alert} from 'react-native';
import {Colors, Typography, View, Text, TextField, TextArea, Modal, Button, Keyboard} from 'react-native-ui-lib'; //eslint-disable-line
const KeyboardAwareInsetsView = Keyboard.KeyboardAwareInsetsView;

const richText = require('../../../assets/icons/richText.png');
const dropDown = require('../../../assets/icons/chevronDown.png');
const star = require('../../../assets/icons/star.png');
const LONG_TEXT =
  'Concept, edition and design direction for the editorial piece “La Forma Bruta” by the photographer' +
  'Martín Bollati. In this piece';
const transformPrice = value => {
  let cleanValue;
  let priceText = '';
  if (value) {
    [cleanValue] = value.match(/^(?:(?:-?(?:0|\d{1,9}))(?:\.\d{0,2})?)|-/) || [''];
    priceText = cleanValue;
  }
  return priceText;
};
const INPUT_SPACING = 10;

export default class InputsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
      customExpandableValue: 'Custom Expandable'
    };
  }

  onChangeText = text => {
    let message = '';
    if (text === '') {
      message = 'This field is mandatory';
    }
    if (text === 'Zzz') {
      message = 'Please enter a valid text';
    }
    this.setState({error: message});
  };

  onPressInfo = () => {
    Alert.alert('Info button pressed');
  };

  onPress = () => {
    this.setState({customExpandableValue: 'New Value'}, () => {
      this.input.toggleExpandableModal(false);
    });
  };

  renderExpandable = () => {
    return (
      <Modal visible animationType={'slide'}>
        <View flex bg-orange70 center>
          <Text marginB-20 text50>
            Do Whatever you want here
          </Text>
          <Button label="Close Me" onPress={this.onPress}/>
        </View>
      </Modal>
    );
  };

  render() {
    return (
      <View flex>
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
          getTextInputRefs={() => [this.noUnderline, this.hugeText]}
        >
          <TextField
            text70
            containerStyle={{marginBottom: INPUT_SPACING}}
            floatingPlaceholder
            placeholder="FloatingPlaceholder"
            onChangeText={this.onChangeText}
            floatOnFocus
          />

          <TextField
            text70
            containerStyle={{marginBottom: INPUT_SPACING}}
            floatingPlaceholder
            placeholder="placeholder"
            helperText="helperText"
            value="disabled with value"
            maxLength={100}
            showCharacterCounter
            editable={false}
            disabledColor={Colors.grey70}
          />

          <TextField
            text70
            containerStyle={{marginBottom: INPUT_SPACING}}
            floatingPlaceholder
            placeholder="With helperText"
            helperText="this is an helper text"
            onChangeText={this.onChangeText}
          />

          <TextField
            text70
            containerStyle={{marginBottom: INPUT_SPACING}}
            floatingPlaceholder
            placeholder="Multiline & helperText"
            multiline
            helperText="this is an helper text"
          />

          <TextField
            text70
            containerStyle={{marginBottom: INPUT_SPACING}}
            title="title"
            placeholder="Character counter & error"
            maxLength={3}
            showCharacterCounter
            onChangeText={this.onChangeText}
          />

          <TextField
            text70
            containerStyle={{marginBottom: INPUT_SPACING}}
            title="Title"
            titleStyle={{fontSize: Typography.text70.fontSize}}
            placeholder="Multiline & titleStyle"
            multiline
            maxLength={150}
            showCharacterCounter
            onChangeText={this.onChangeText}
            autoCapitalize="words"
          />

          <TextField
            text70
            containerStyle={{marginBottom: INPUT_SPACING}}
            floatingPlaceholder
            placeholder="Character counter & expandable"
            expandable
            maxLength={20}
            showCharacterCounter
          />

          <TextField
            text70
            containerStyle={{marginBottom: INPUT_SPACING}}
            floatingPlaceholder
            placeholderTextColor={Colors.cyan30}
            floatingPlaceholderColor={Colors.cyan30}
            placeholder="Underline colors & error"
            onChangeText={this.onChangeText}
            error={this.state.error}
            underlineColor={{focus: Colors.purple50, error: Colors.orange60}}
            errorColor={Colors.orange60}
          />

          <TextField
            text40
            containerStyle={{marginBottom: INPUT_SPACING}}
            placeholder="Write something.."
            hideUnderline
          />

          <TextField
            text30
            containerStyle={{marginBottom: INPUT_SPACING}}
            placeholder="Write something.."
            centered
            hideUnderline
          />

          <TextField
            text70
            containerStyle={{marginBottom: INPUT_SPACING}}
            placeholder="Share your story"
            value={
              'Share Your Story exists to provide spaces to hear people\'s stories, in order to inspire us to' +
              'live better ones ourselves.'
            }
            multiline
          />

          <TextField
            text70
            containerStyle={{marginBottom: INPUT_SPACING}}
            floatingPlaceholder
            placeholder="Tell us about yourself"
            value={LONG_TEXT}
            expandable
          />

          <TextField
            containerStyle={{marginBottom: INPUT_SPACING}}
            ref={r => (this.input = r)}
            placeholder="placeholder"
            expandable
            value={this.state.customExpandableValue}
            renderExpandable={this.renderExpandable}
          />

          <TextField
            text70
            containerStyle={{marginBottom: INPUT_SPACING}}
            floatingPlaceholder
            placeholder="With price transformer"
            value={this.state.value}
            transformer={transformPrice}
          />

          <TextField
            text70
            containerStyle={{marginBottom: INPUT_SPACING}}
            title="Title"
            placeholder="With right icon"
            rightIconSource={star}
            useTopErrors
            validate={'required'}
            errorMessage="Please fill this input"
          />

          <TextField
            text70
            containerStyle={{marginBottom: INPUT_SPACING}}
            floatingPlaceholder
            placeholder="With right button"
            rightButtonProps={{
              iconSource: richText,
              onPress: this.onPressInfo,
              accessibilityLabel: 'TextField Info',
              iconColor: Colors.red30
            }}
            useTopErrors
            validate={'required'}
            errorMessage="Please fill this input"
          />

          <TextField
            text70
            containerStyle={{marginBottom: INPUT_SPACING, width: 210}}
            floatingPlaceholder
            placeholder="Multiline & right button"
            multiline
            rightButtonProps={{iconSource: richText, onPress: this.onPressInfo}}
          />

          <TextField
            text70
            containerStyle={{marginBottom: INPUT_SPACING}}
            floatingPlaceholder
            placeholder="Expandable & right icon"
            expandable
            rightIconSource={dropDown}
          />

          <Text grey10 marginB-5>
            Text Area
          </Text>
          <View
            style={{
              height: 150,
              borderWidth: 1,
              marginBottom: INPUT_SPACING,
              padding: 10,
              borderColor: Colors.grey60
            }}
          >
            <TextArea placeholder="Write something.."/>
          </View>

          <TextField
            text50
            floatingPlaceholder
            placeholder="Big Title Text"
            containerStyle={{marginBottom: INPUT_SPACING}}
            helperText="this is an helper text"
          />
          <TextField
            text20
            placeholder="Huge Text"
            containerStyle={{marginBottom: INPUT_SPACING}}
            ref={input => (this.hugeText = input)}
          />

          <TextField
            text70
            placeholder="No Underline"
            containerStyle={{marginBottom: INPUT_SPACING}}
            ref={input => (this.noUnderline = input)}
            hideUnderline
          />

          <TextField
            text10
            placeholder="Centered"
            centered
            containerStyle={{marginBottom: INPUT_SPACING}}
            // hideUnderline
          />
        </ScrollView>
        <KeyboardAwareInsetsView/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 25
  },
  title: {
    ...Typography.text20
  },
  header: {
    ...Typography.text60,
    marginVertical: 20
  }
});
