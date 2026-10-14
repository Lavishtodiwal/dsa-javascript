function linearSearch(arr, target){
    let last =-1;
    for(let i =0;i<arr.length;i++){
        if(arr[i] == target){
            last = i;
        }
    }
    return last;
}
console.log(linearSearch([10,50,30,40,50,60,50,80],50));