const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const batteryTotaller = (total, batteryBatch) => total + batteryBatch
//let total = 0
//totalBatteries = batteryBatches.reduce(batteryBatch => total + batteryBatch, 0)
//let totalBatteries = [1, 2, 3].reduce(function(total, element){ return element * 2 + total}, 0)
let totalBatteries = batteryBatches.reduce(batteryTotaller, 0)