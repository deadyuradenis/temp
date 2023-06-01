class RangeService {
  static removeLetters(value) {
    return value.replace(/\D/g, '');
  }

  static updateSlider(props) {
    const { slider, type, value } = props;

    if (type === 'from') {
      slider.set([value, null]);
    }

    if (type === 'to') {
      slider.set([null, value]);
    }
  }
}

export default RangeService;
