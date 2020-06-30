//  * Definition for a binary tree node.
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = (root) => {

  const dfs = (root, min, max) => {
    if (!root) {
      return true
    }
  
  }
}

// console.log(isValidBST([2, 1, 3]))
// console.log(isValidBST([5, 1, 4, null, null, 3, 6]))

const first = new TreeNode(2)
first.left = 1
first.right = 3
console.log(first)

const second = new TreeNode(5)
second.left = 1
second.right = 4
second.right.left = 3
second.right.right = 3
console.log(JSON.stringify(second))
