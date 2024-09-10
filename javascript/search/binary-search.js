function binarySearch(arr, target){
    let low = 0;
    let high = arr.length - 1;  
    while (low <= high){

        const mid = Math.floor((low + high) / 2);
        const guess = arr[mid];
        
        if(guess === target){
            return mid;
        }

        if(guess > target){
            high = mid - 1;  
        }

        if(guess < target){
            low = mid + 1;   
        }
    }

    return -1;  
}
