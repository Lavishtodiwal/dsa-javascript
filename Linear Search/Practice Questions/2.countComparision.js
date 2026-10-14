function LinearSearch(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count++;
        if (arr[i] == target) {
            return count;
        }
    }
    return count;
}

console.log(LinearSearch([10, 20, 30, 40, 50, 60], 130));