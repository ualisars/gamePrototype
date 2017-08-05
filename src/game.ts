import {canvas} from './config/map';

import {
  units,
  currentlyChosenUnit
} from './store/unitsStore';

import {
  chooseUnit,
  assignMoveToPosition,
  createUnit,
  unitsHaveToMove,
  rotateUnit // test
} from './units/unitActions';

let infantry = createUnit('Infantry',200, 40, 100, 50, 3);
console.log('infantry', infantry);
let cavalry = createUnit('Cavalry', 100, 80, 50, 60, 5);
let heavyInfantry = createUnit('HeavyInfantry', 300, 180, 100, 120, 2);

canvas.addEventListener('click', (e) => {
  let x = e.offsetX; // get X
  let y = e.offsetY; // get Y
  console.log('Position x', e.offsetX); // get X
  console.log('Position y', e.offsetY); // get Y
  chooseUnit(units, x, y);
});

// set onClickListener for right mouse event
canvas.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  let x = e.offsetX; // get X
  let y = e.offsetY; // get Y
  if(currentlyChosenUnit) {
    assignMoveToPosition(currentlyChosenUnit, x, y); //assign unit's next x and y position
    currentlyChosenUnit.assignAngle();
    rotateUnit(currentlyChosenUnit);
    // console.error('x:', currentlyChosenUnit.centerX, 'y:', currentlyChosenUnit.centerY, 'destX:', currentlyChosenUnit.moveToX, 'destY:', currentlyChosenUnit.moveToY);
    // console.error('Unit angle in degree :', currentlyChosenUnit.angleInDegree);
    // console.error('Unit angle in radians :', currentlyChosenUnit.angleInRadian);
    console.log('Unit:' ,currentlyChosenUnit.x, currentlyChosenUnit.y);
    console.log('center:', currentlyChosenUnit.centerX, currentlyChosenUnit.centerY);
  }
});


//setInterval(unitsHaveToMove, 300);
