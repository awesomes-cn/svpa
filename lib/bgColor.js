var colors = {
  0: "#E25151",
  1: "#E27851",
  2: "#E251A4",
  3: "#E251D0",
  4: "#CD51E2",
  5: "#A751E2",
  6: "#7551E2",
  7: "#515AE2",
  8: "#5186E2",
  9: "#519CE2",
  A: "#51ADE2",
  B: "#51C3E2",
  C: "#51DFE2",
  D: "#51E2C4",
  E: "#51E2A3",
  F: "#51E29D",
  G: "#51E277",
  H: "#58E251",
  I: "#8AE251",
  J: "#B6E251",
  K: "#C1E251",
  L: "#E2D751",
  M: "#E2CC51",
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
  X: "#F7C000",
  Y: "#FF8A60",
  Z: "#A2887E",
}


var bgColor = function(hash){
  return colors[hash[hash.length - 1].toUpperCase()];
}



module.exports = bgColor;
