const data = [{
    "shipTypes": {
      "carrier": { "size": 5, "count": 1 },
      "battleship": { "size": 4, "count": 1 },
      "cruiser": { "size": 3, "count": 1 },
      "submarine": { "size": 3, "count": 1 },
      "destroyer": { "size": 2, "count": 1 },
    },
    "layout": [
      { alive: 5, index: 0, "isDestroyed": false,"ship": "carrier", "positions": [[2,9,0], [3,9,0], [4,9,0], [5,9,0], [6,9,0]] },
      { alive: 4, index: 1, "isDestroyed": false,"ship": "battleship", "positions": [[5,2,0], [5,3,0], [5,4,0], [5,5,0]] },
      { alive: 3, index: 2, "isDestroyed": false,"ship": "cruiser", "positions": [[8,1,0], [8,2,0], [8,3,0]] },
      { alive: 3, index: 3, "isDestroyed": false,"ship": "submarine", "positions": [[3,0,0], [3,1,0], [3,2,0]] },
      { alive: 2, index: 4, "isDestroyed": false,"ship": "destroyer", "positions": [[0,0,0], [1,0,0]] }
    ]
}];

const dataShip = [
    { alive: 5, "isDestroyed": false,"ship": "carrier", "positions": [[2,9,0], [3,9,0], [4,9,0], [5,9,0], [6,9,0]] },
    { alive: 4, "isDestroyed": false,"ship": "battleship", "positions": [[5,2,0], [5,3,0], [5,4,0], [5,5,0]] },
    { alive: 3, "isDestroyed": false,"ship": "cruiser", "positions": [[8,1,0], [8,2,0], [8,3,0]] },
    { alive: 3, "isDestroyed": false,"ship": "submarine", "positions": [[3,0,0], [3,1,0], [3,2,0]] },
    { alive: 2, "isDestroyed": false,"ship": "destroyer", "positions": [[0,0,0], [1,0,0]] }
  ]

// data[0].layout[0].positions[][]


//   state = {
//     "layout": [
//         { "positions": [[2,9], [3,9], [4,9], [5,9], [6,9]] },
//         { "positions": [[5,2], [5,3], [5,4], [5,5]] },
//         { "positions": [[8,1], [8,2], [8,3]] },
//         { "positions": [[3,0], [3,1], [3,2]] },
//         { "positions": [[0,0], [1,0]] }
//       ]
//   }

//   state.layout[1].positions[1][1]

  export default dataShip

  