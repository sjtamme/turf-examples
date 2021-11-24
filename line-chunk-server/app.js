const fs = require('fs')
const turf = require('@turf/turf')

var line = {
    "type": "Feature",
    "properties": {},
    "geometry": {
        "type": "LineString",
        "coordinates": [
            [
                -86.8753,
                40.4167
            ],
            [
                -86.28524780273438,
                40.250184183819854
            ],
            [
                -85.98587036132812,
                40.17887331434696
            ],
            [
                -85.97213745117188,
                40.08857859823707
            ],
            [
                -85.77987670898438,
                40.15578608609647
            ],
            [
                -85.1394,
                41.0793
            ]
        ]
    }
};

var result = turf.lineChunk(line, 25, {
    units: 'miles'
});

result.features.forEach(function (ft, ind) {
    ft.properties.stroke = (ind % 2 === 0) ? 'red' : 'blue';
});

const outFileName = 'linechunk.json'


fs.writeFile(outFileName, JSON.stringify(result), 'utf8', (err) => {
    if (err) throw err
    console.log(outFileName + ' written to file')
});