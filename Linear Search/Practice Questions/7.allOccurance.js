function linearSearch(arr, target){
    let all =[];
    for(let i =0;i<arr.length;i++){
        if(arr[i] == target){
            all.push(i);
        }
    }
    return all
}
console.log(linearSearch([10,50,30,40,50,60,50,80],50));