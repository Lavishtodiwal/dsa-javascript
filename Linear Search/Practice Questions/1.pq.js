function LinearSearching(arr,target){
    for(let i = 0;i<arr.length;i++){
        if(arr[i] == target){
            return true;
        }
    }
    return false;
}

console.log(LinearSearching([10, 20, 30, 40, 50],30))