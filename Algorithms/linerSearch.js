// linear search algorithm for searching a key in list 
const linearSearch = (list, key) => {
    let output = null
    for( let i = 0;i <= list.length; i++){
        if(list[i] == key){output = i;return i}
    }
    return null
}

const list = [1,2,3,5,6,7,8,9]
const key = 10
console.log(linearSearch(list,key)) //output: null

const list1 = [9,1,2,3,5,6,7,8]
const key1 = 9
console.log(linearSearch(list1,key1)) //output: 0
