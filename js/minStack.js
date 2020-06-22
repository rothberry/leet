/**
 * initialize your data structure here.
 */
var MinStack = function () {
  // Creates the stack
  this.stack = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.length > 0) {
    this.stack.pop()
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1]
  }
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.stack.length > 0) {
    return this.stack[0]
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 */
var obj = new MinStack()
obj.push(10)
console.log(obj)
obj.pop()
console.log(obj)
obj.pop()
console.log(obj.top())
var param_3 = obj.top()
obj.push(2)
console.log(obj)
obj.push(1243)
console.log(obj)
obj.push(-124)
console.log(obj)
obj.pop()
console.log(obj)
console.log(obj.top())
console.log(obj.getMin())
