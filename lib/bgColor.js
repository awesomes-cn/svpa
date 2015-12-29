var colors = {
  0: "#E25151",
  1: "#E27851",
  2: "#CA4D94",
  3: "#BB43AC",
  4: "#C727E2",
  5: "#9E34E6",
  6: "#7551E2",
  7: "#5257A2",
  8: "#5186E2",
  9: "#519CE2",
  A: "#51ADE2",
  B: "#51C3E2",
  C: "#4E8D9E",
  D: "#30BB9E",
  E: "#38C387",
  F: "#05B19F",
  G: "#4B9C61",
  H: "#dcaf8e",
  I: "#86947C",
  J: "#7EA722",
  K: "#e58b85",
  L: "#A25D5D",
  M: "#C37E57",
  N: "#E2BB51",
  O: "#E2B551",
  P: "#E2A551",
  Q: "#E28F51",
  R: "#F26091",
  S: "#9572CF",
  T: "#7884CD",
  U: "#5B95F9",
  V: "#48C2F9",
  W: "#52BC89",
  X: "#779E48",
  Y: "#FF8A60",
  Z: "#A2887E",
}


var bgColor = function(bgcoloIndex){
  return colors[bgcoloIndex] || colors[0];
}



module.exports = bgColor;
