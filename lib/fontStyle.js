var fonts ={
  abduction: {
    path: 'Abduction.ttf',
    name: 'abduction'
  },
  adisport: {
    path: 'ADISPORT.TTF',
    name: 'adisport'
  },
  aura: {
    path: 'Aura-Regular.ttf',
    name: 'aura'
  },
  bladrmf: {
    path: 'bladrmf.ttf',
    name: 'bladrmf'
  },
  caricature: {
    path: 'caricature.ttf',
    name: 'caricature'
  },
  cityscape: {
    path: 'cityscape_font.ttf',
    name: 'cityscape'
  },
  collage: {
    path: 'Collage_annonymus.ttf',
    name: 'collage'
  },
  commonv23di: {
    path: 'Commonv23di.ttf',
    name: 'commonv23di'
  },
  d3cubism: {
    path: 'D3Cubism.ttf',
    name: 'd3cubism'
  },
  fh0905: {
    path: 'FH0905.TTF',
    name: 'fh0905'
  },
  graffonti: {
    path: 'graffonti_3d_drop__fontvir_us_.ttf',
    name: 'graffonti'
  },
  guardianpi: {
    path: 'guardianpi.ttf',
    name: 'guardianpi'
  },
  kingthings: {
    path: 'Kingthings_Extortion.ttf',
    name: 'kingthings'
  },
  movie: {
    path: 'Movie_Filmstrip.ttf',
    name: 'movie'
  },
  sketch: {
    path: 'Sketch_Block.ttf',
    name: 'sketch'
  },
  snowcaps: {
    path: 'SNOWCAPS.TTF',
    name: 'snowcaps'
  },
  spincycle: {
    path: 'spincycle_ot.otf',
    name: 'spincycle'
  },
  terminator: {
    path: 'terminator_real_nfi.ttf',
    name: 'terminator'
  },
  thickhead: {
    path: 'Thickhead_Dark.ttf',
    name: 'thickhead'
  },
  urban: {
    path: 'UrbanJungleDEMO.ttf',
    name: 'urban'
  },
  vpsgdh: {
    path: 'VPSGDH.TTF',
    name: 'vpsgdh'
  },
  willywonka: {
    path: 'WillyWonka.ttf',
    name: 'willywonka'
  }
}

var fontStyle = function(name){
  return  fonts[name] || {
    path: 'deault',
    name: 'deault'
  }
}



module.exports = {
  fontStyle: fontStyle,
  fonts: fonts
};
