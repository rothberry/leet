function countStrings(s) {
    // Write your code here
    // console.log(s)
    let len = s.length
    let arr = s.split("")
    let i = 0
    let count = 0
    // if (arr[0] === arr[len - 1]) {
    //     count++
    // }
    while (i < len) {
        // shift s to the left
        let movingLetter = arr.shift()
        arr.push(movingLetter)
        if (arr[0] === arr[len - 1]) {
            // console.log(arr[0], arr[len - 1])
            count++
        }
        i++
    }

    return count
}