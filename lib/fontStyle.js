var fonts =[
  {
    name: 'SinCycle',
    path: 'spincycle_ot.otf',
    stroke: 0
  }
]

var fontStyle = function(fontIndex){
  return colors[fontIndex] || fonts[0];
}



module.exports = fontStyle;
