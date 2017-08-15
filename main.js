'use strict'
function main(arr,num){
    var count = 0;
    arr.forEach(function(elem){
        if(elem === num){
            count ++;
        }
    })
    return count;
}
var number = 1;
var array = [1,3,7,1,4];
console.log('Array:'+ array + '\n' +'Number:' + number + '\n' + main(array,number));