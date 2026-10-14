
# Linear Searching

Linear Searching is an algorithm that check  elements one by one until the required element is found or array ends

## Steps:

1. Array or target element lo.


2. First index se loop start kro. 
3. Current element ko target se comapre kro.

4. Match hone pr index return kro 
5. Match na milne pr next element check karna 
  6. Poora array check hone pr agr element na mile to -1 return karna
```javascript  
function LinerSearching(arr, target) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}
console.log(LinerSearching([1, 2, 3, 4, 5, 6, 7, 8, 10], 6));  
```