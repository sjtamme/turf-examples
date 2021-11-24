const fs = require('fs')
const turf = require('@turf/turf')

var poly1 = {
    "type": "Feature",
    "properties": {
      "fill": "#0f0"
    },
    "geometry": {
      "type": "Polygon",
      "coordinates": [[
        [-105.801742, 39.48565],
        [-105.801742, 39.60491],
        [-105.584762, 39.60491],
        [-105.584762, 39.48565],
        [-105.801742, 39.48565]
      ]]
    }
  }
  var poly2 = {
    "type": "Feature",
    "properties": {
      "fill": "#00f"
    },
    "geometry": {
      "type": "Polygon",
      "coordinates": [[
        [-105.520217, 39.535693],
        [-105.64038, 39.653967],
        [-105.720031, 39.626554],
        [-105.669906, 39.607309],
        [-105.723464, 39.546643],
        [-105.532577, 39.508574],
        [-105.487258, 39.477466],
        [-105.520217, 39.535693]
      ]]
    }
  }
  
  var polygons = {
    "type": "FeatureCollection",
    "features": [poly1, poly2]
  };
  
  var intersection = turf.intersect(poly1, poly2);

  const outFileName = 'intersect.json'
    
    // stringify the GeoJSON and write to file
    fs.writeFile(outFileName, JSON.stringify(polygons), 'utf8', (err) => {
        if (err) throw err
        console.log(outFileName + ' written to file')
    });

