import noUiSlider from 'nouislider';
import wNumb from 'wnumb';
import Gator from 'gator';
import RangeService from './classes/RangeService.js';
import RangeRender from './classes/RangeRender.js';

const selectors = {
  component: '[data-component="range"]',
  slider: '[data-range="slider"]',
  input: '[data-range="input"]',
};

const rangeComponent = (node) => {
  const sliderNode = node.querySelector(selectors.slider);
  const [inputFromNode, inputToNode] = Array.from(node.querySelectorAll(selectors.input));
  const sliderOptions = node.dataset.options ? JSON.parse(node.dataset.options) : {};
  const valueSpan = node.querySelector('[data-range="value"]'); 

  const {
    start, min, max, step, suffix
  } = sliderOptions;

  const normalizedConnectProp = start.length > 1 ? true : 'lower';

  const slider = noUiSlider.create(sliderNode, {
    start,
    range: { min, max },
    connect: normalizedConnectProp,
    step,
    format: wNumb({
      decimals: 0,
      thousand: ' ',
      suffix,
    }),
  });

  Gator(node).on('input', selectors.input, ({ target }) => {
    const { type } = target.dataset;

    RangeRender.maskedInput({
      inputNode: target,
      value: target.value,
    });

    RangeService.updateSlider({
      slider,
      type,
      value: +target.value,
    });
  });

  slider.on('update', (values, handle) => {
    const normalizedHandleType = handle === 0 ? 'from' : 'to';
    const value = values[handle];
    valueSpan ? valueSpan.innerHTML = value : '';

    RangeRender.inputsValues({
      type: normalizedHandleType,
      value,
      inputFromNode,
      inputToNode,
    });
  });

  slider.on('start', (values, handle) => {
    const normalizedHandleType = handle === 0 ? 'from' : 'to';

    RangeRender.inputsStates({
      type: normalizedHandleType,
      state: 'focused',
      inputFromNode,
      inputToNode,
    });
  });

  slider.on('end', (values, handle) => {
    const normalizedHandleType = handle === 0 ? 'from' : 'to';

    RangeRender.inputsStates({
      type: normalizedHandleType,
      state: 'default',
      inputFromNode,
      inputToNode,
    });
  });
};

export default rangeComponent;
