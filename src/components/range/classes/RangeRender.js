import RangeService from './RangeService.js';

class RangeRender {
  static inputsValues(props) {
    const {
      inputFromNode, inputToNode, type, value,
    } = props;

    const inputNode = type === 'from' ? inputFromNode : inputToNode;

    inputNode.value = value;
    inputNode.dispatchEvent(new Event('change'));
    inputNode.size = inputNode.value.length;
  }

  static inputsStates(props) {
    const {
      inputFromNode, inputToNode, type, state,
    } = props;

    const inputNode = type === 'from' ? inputFromNode : inputToNode;
    const fieldNode = inputNode.parentElement;
    inputNode.size = inputNode.value.length;
   
    if (state === 'focused') {
      fieldNode.classList.add('_focused');
    }

    if (state === 'default') {
      fieldNode.classList.remove('_focused');
    }
  }

  static maskedInput(props) {
    const { inputNode, value } = props;
    const normalizedValue = RangeService.removeLetters(value);
    inputNode.value = normalizedValue;
    inputNode.size = inputNode.value > 0 ? inputNode.value.length : 1;
  }
}

export default RangeRender;
