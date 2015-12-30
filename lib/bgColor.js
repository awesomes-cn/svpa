var colors = {
  0: "#E25F51",
  1: "#E27851",
  2: "#CA4D94",
  3: "#D44BC3",
  4: "#C727E2",
  5: "#B44BFB",
  6: "#916DFF",
  7: "#747CF9",
  8: "#5186E2",
  9: "#519CE2",
  A: "#51ADE2",
  B: "#51C3E2",
  C: "#5FA6B9",
  D: "#30BB9E",
  E: "#38C387",
  F: "#05B19F",
  G: "#BCB852",
  H: "#dcaf8e",
  I: "#9EAF93",
  J: "#96C726",
  K: "#e58b85",
  L: "#D27777",
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
  X: "#CEDE4B",
  Y: "#FF8A60",
  Z: "#A2887E",
}

var bgColor = function(bgcoloIndex){
  return colors[bgcoloIndex] || colors[0];
}



module.exports = bgColor;
