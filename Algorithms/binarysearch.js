// binary search work on only sorted arryays.

'use strict'

const binarySearch = (list = [], key = null) => {
    if(list.length ==0 ) return null 
    let min = 0;
    let max = list.length - 1
    let index = null
    
    do{
        index = parseInt((min + max)/2)
        if(key < list[index]) max = index - 1
        if(key > list[index]) min = index + 1
    }while(list[index]!= key && min <= max)

    if( list[index ] == key) return index
    return null
}

const list = [1,2,4,5,6,7];
const key = 7;
console.log(binarySearch(list,key)); // output : 5

const list1 = [7,1,2,4,5,6];
const key1 = 7;
console.log(binarySearch(list1,key1)); // output : null


