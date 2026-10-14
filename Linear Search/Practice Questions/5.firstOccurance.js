function linearSearch(arr, target){
    for(let i =0;i<arr.length;i++){
        if(arr[i] == target){
            return i;
        }
    }
    return -1
}
console.log(linearSearch([10,50,30,40,50,60,50,80],50));