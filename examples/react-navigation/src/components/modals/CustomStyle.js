import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Modalize from 'react-native-modalize';
import faker from 'faker';

export class CustomStyle extends React.PureComponent {

  modal = React.createRef();

  renderContent = () => (
    <View style={s.content}>
      <Text style={s.content__heading}>Article title</Text>
      <Text style={s.content__paragraph}>{faker.lorem.paragraphs(3)}</Text>
    </View>
  )

  onClosed = () => {
    const { onClosed } = this.props;

    if (onClosed) {
      onClosed();
    }
  }

  openModal = () => {
    if (this.modal.current) {
      this.modal.current.open();
    }
  }

  render() {
    return (
      <Modalize
        ref={this.modal}
        onClosed={this.onClosed}
        style={s.modal}
        overlayStyle={s.overlay}
        handleStyle={s.handle}
        handlePosition="inside"
        adjustToContentHeight
      >
        {this.renderContent()}
      </Modalize>
    );
  }
}

const s = StyleSheet.create({
  content: {
    padding: 15,
  },

  content__heading: {
    marginVertical: 10,

    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },

  content__paragraph: {
    fontSize: 15,
    fontWeight: '200',
    lineHeight: 22,
    color: '#666',
  },

  modal: {
    margin: 20,

    backgroundColor: '#cac9dd',
    borderRadius: 20,

    shadowOpacity: 0,
  },

  overlay: {
    backgroundColor: 'rgba(41, 36, 107, 0.9)',
  },

  handle: {
    width: 150,

    backgroundColor: '#b0afbc',
  },
});
