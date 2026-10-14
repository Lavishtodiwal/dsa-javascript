function linearSearch(arr, target){
    let even =[];
    for(let i =0;i<arr.length;i++){
        if(arr[i] % 2==0){
            even.push(i);
        }
    }
    return even;
}
console.log(...linearSearch([10,50,30,40,50,60,50,80],50));