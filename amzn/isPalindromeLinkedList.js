// Singly-linked lists are already defined with this interface:
const ListNode = (val, next) => {
  this.value = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const createLL = (array) => {
	// return array.reduce((acc, cur) => {
	// 	console.log({ acc, cur })
	// 	return ListNode(acc)
	// })

  return array.reduce((acc, curr) => {
    if (acc == null) {
      acc = ListNode(curr);
  
    } else {
      acc = ListNode(curr, acc);
    }
    return acc;
  }, null);

}

const isPalindromeLinkedList = (l) => {
	let curNode = l
	while (curNode !== null) {
		console.log(curNode.value)

		curNode = curNode.next
	}
}

// const l1 = createLL([0,1,0])
const linkedList = {
	value: 0,
	next: {
		value: 1,
		next: {
			value: 0,
			next: null,
		},
	},
}

console.log(createLL([0, 1, 0]))
