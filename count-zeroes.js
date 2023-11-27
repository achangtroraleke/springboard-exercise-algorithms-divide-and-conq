function countZeroes(arr) {
    let firstZero = findFirstZero(arr)
    if(firstZero === -1) return 0;
    return arr.length = firstZero
}

function findFirstZero(arr, low = 0, high = arr.length - 1){
    if(high >= low) {
        let mid = Math.floor((high - low) /2);
        if((mid === 0 || arr[mid] === 1) &&  arr[mid] === 0){
            return mid;
        }else if( arr[mid]===1){
            return findFirstZero(arr,mid +1, high)
        }
        return findFirstZero(arr, low, mid -1)
    }
    return -1;
}

module.exports = countZeroes