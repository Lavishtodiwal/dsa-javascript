function linearSearch(arr,target){
    let i=0;
    while(i<arr.length){
        if(arr[i] == target){
            return i;
        }
        i++;
    }
    return -1;
}

console.log(linearSearch([10,20,30,40,50,60],30))