/* Write an efficient program for printing k largest elements in an array. Elements in array can be in any order.

For example, if given array is [1, 23, 12, 9, 30, 2, 50] and you are asked for the largest 3 elements i.e. k = 3 then your program should print 50, 30 and 23.
*/

const getKLargestElements = (arr, k) => {
  // start with an unsorted arr
  // return arr of length k of max values in desc order
  //
  //   if ( a > b ) return -1
  //   if ( a < b ) return 1
  // })
  // return arr.slice(0, k)

  return customSort(arr).slice(0, k)
}

// [1, 23, 12, 9, 30, 2, 50]
// [50, 23, 12, 9, 23 , 2, x]
// [50, 30, 12, 9, x, 2, x]
const customSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        // console.log('one', arr[i], arr[j])
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        // console.log('two', arr[i], arr[j])
      }
    }
  }
  console.log(arr)
  return arr
}
console.log(getKLargestElements([1, 23, 12, 9, 30, 2, 50], 3))