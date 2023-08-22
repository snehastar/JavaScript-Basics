//speed limit is 70
//after that for every 5km/sec increase in speed there will be a 1point
// 70-75 -> 1 point, 76-80 -> 2 points
// if more than 12 points then licence will be suspended
function checkSpeed(speed) {
  if (speed <= 74) {
    console.log("OK");
    return;
  } else {
    let a = speed - 75;
    let b = a / 5;
    let points = b + 1;
    if (points > 12) console.log("Licence Suspended");
    else console.log("Point: " + points);
  }
}

checkSpeed(50);
checkSpeed(70);
checkSpeed(73);
checkSpeed(74);
checkSpeed(75);
checkSpeed(80);
checkSpeed(120);
checkSpeed(130);
checkSpeed(180);
checkSpeed(300);

//better way to write
function checkSpeedBetter(speed) {
  const speedlimt = 70;
  const kmPerPoint = 5;
  if (speed < speedlimt + kmPerPoint) {
    console.log("OK");
  }
  const points = Math.floor((speed - speedlimt) / kmPerPoint);
  if (points > 12) console.log("Licence Suspended");
  else console.log("Point: " + points);
}

checkSpeedBetter(50);
checkSpeedBetter(70);
checkSpeedBetter(73);
checkSpeedBetter(74);
checkSpeedBetter(75);
checkSpeedBetter(80);
checkSpeedBetter(120);
checkSpeedBetter(130);
checkSpeedBetter(180);
checkSpeedBetter(300);
