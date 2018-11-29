import dataShip from "../containers/Counter/shiplayout";

const newDataShip = JSON.parse(JSON.stringify(dataShip));

const initialState = {
  cells: Array.apply(null, { length: 100 }).map(Number.call, Number),
  cellColors: Array(100).fill("lightblue"),
  layout: JSON.parse(JSON.stringify(dataShip)),
  countShip: 5,
  winFlag: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIRE": {            
			const idx = action.payload;
			const x = Math.floor(idx / 10);
			const y = idx - x * 10;
			console.log("x=" + x + " y=" + y);
			
			const newColors = [...state.cellColors];
			const newLayout = [...state.layout];
			let newCountShip = state.countShip;
			let newWinFlag = false;
			if (newCountShip === 0) {
				alert("YOU WON!!!!!!!!!!");
			}

			let resultSheep = null;
			state.layout.map(ship => {
					 console.log(ship.ship+ " isDestroyed "+ ship.isDestroyed)	
				if (!ship.isDestroyed) {
								
					for (let i = 0; i < ship.positions.length; i++) {
						console.log ("стреляли уже" + ship.positions[i][2]);
						if ((ship.positions[i][0] === x)&&(ship.positions[i][1] === y)&&(ship.positions[i][2] === 0)) {
							ship.positions[i][2] = 1;
							newColors[idx] = "red";						
							ship.alive--;
							resultSheep = ship;
							console.log(ship.ship + " alive:" + ship.alive);
							if (ship.alive === 0) {
								console.log("painting black ...... " + resultSheep.ship);								
								console.log("=================countSheep===== " + newCountShip);
								resultSheep.positions.map(position => {
									const num = position[0] * 10 + position[1];
									newColors[num] = "black";
								});
								newCountShip--;
								if (newCountShip === 0) {
									newWinFlag = true;
								}
								resultSheep.isDestroyed = true;
								console.log(resultSheep.ship + " isDestroyed: " + resultSheep.isDestroyed);
							}
						}
					}
				}
			});
			if (resultSheep) {
			newLayout[resultSheep.index] = resultSheep;
			} else {
			newColors[idx] =
			state.cellColors[idx] === "lightblue"
				? "grey"
				: state.cellColors[idx] === "black"
				? "black"
				: state.cellColors[idx] === "red"
				? "red"
				: "grey";
			}
			return {
				...state,
			cellColors: newColors,
			layout: newLayout,
			countShip: newCountShip,
			winFlag: newWinFlag
			};
		}
		case "NEWGAME": {
			const newLayout = JSON.parse(JSON.stringify(dataShip));
			return{
				...state,
				cellColors: Array(100).fill("lightblue"),
				layout: newLayout,
				countShip: 5,
				winFlag: false
			}
		}
		}
	return state;
};

export default reducer;






 