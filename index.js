// Code your solution in this file!
// let blocks = 50;
// function distanceFromHqInBlocks(blocks) {
//      distanceFromHqInBlocks = blocks - 8;

//     distanceFromHqInBlocks();
//     }

// let blocks = 50;
// function distanceFromHqInBlocks(blocks) {
//      return (Math.abs(blocks - 42));
//    }
//    distanceFromHqInBlocks(34);

// function distanceFromHqInFeet(blocks) {
//     return (Math.abs(blocks * 264));
//    }
//    distanceFromHqInFeet(50);

   
let distance;


function distanceFromHqInBlocks(blocks) {
    distance = (Math.abs(blocks - 42));
    return distance;
  }
  distanceFromHqInBlocks(34);

function distanceFromHqInFeet(blocks) {
    distance = (Math.abs(blocks - 42));
   return (Math.abs(distance * 264));
  }

function distanceTravelledInFeet(start, destination){
   let totalBlocks = (destination - start);
    return (Math.abs((totalBlocks * 264)));
}
    distanceTravelledInFeet(43, 48);
    
calculatesFarePrice()

function calculatesFarePrice(destination, start) {
    let distance = distanceTravelledInFeet(destination, start);
    if (distance < 400) {
        return 0;
    }
    else if (distance > 400 && distance <= 2000) {
        return ((distance - 400) * 2) / 100;
    }
    else if (distance > 2500) {
        return "cannot travel that far";
    }

    else {
        return 25;
    }
}
calculatesFarePrice()