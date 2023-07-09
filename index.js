// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    const hqBlockNumber = 42;
    return Math.abs(blockNumber - hqBlockNumber);
}
function distanceFromHqInFeet(blockNumber) {
    const blockInFeet = 264;
    const distanceInBlocks= Math.abs(blockNumber - 42);
    const distanceInFeet = distanceInBlocks * blockInFeet;
    return distanceInFeet;
}
function distanceTravelledInFeet(startBlock, endBlock) {
    const blockInFeet = 264; 
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    const distanceInFeet = distanceInBlocks * blockInFeet;
    return distanceInFeet;
  }
  
  function calculatesFarePrice(start, destination) {
    const blockInFeet = 264; 
    const distanceInFeet = Math.abs(destination - start) * blockInFeet;
  
    if (distanceInFeet <= 400) {
      return 0; 
    } else if (distanceInFeet <= 2000) {
      const chargedFeet = distanceInFeet - 400;
      const farePrice = chargedFeet * 0.02;
      return farePrice;
    } else if (distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
  }
}