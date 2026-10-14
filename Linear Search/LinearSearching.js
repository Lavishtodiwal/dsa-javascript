
function LinerSearching(arr, target) {
    let count =0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == target) {
            count++;
            return i;
        }
    }
    return -1;
}
console.log(LinerSearching([1, 2, 6, 4, 5, 6, 7, 8, 10,6], 6));
console.log(count)