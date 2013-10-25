window.Calculator = {
  current: 0,

  add: function() {
    sum = this.current;
    for (var i = 0, len = arguments.length; i < len; i++) {
      sum += arguments[i];
    };
    this.current = sum;
    return sum;
  },

  substract: function() {
    result = this.current;
    for (var i = 0, len = arguments.length; i < len; i++) {
      result -= arguments[i];
    };
    this.current = result;
    return result;
  }

};