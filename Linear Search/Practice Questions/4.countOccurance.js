function linearSearch(arr, target){
    let count =0;
    for(let i =0;i<arr.length;i++){
        if(arr[i] == target){
            count++;
        }
    }
    return count;
}
console.log(linearSearch([10,50,30,40,50,60,50,80],50));