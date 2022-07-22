console.log('in this challenge we learn how we can delete an element from the array')

let arr=[24,65,58,96,30]
let position=3;
for (let i = position; i < arr.length-1; i++) {
    arr[i]=arr[i+1]
   
    
}
arr.length=arr.length-1
console.log(arr)