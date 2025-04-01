package main

import "fmt"

func evenodd() {

	// create a slice of ints 0 => 10
	// iter and print out even or odd

	nums := []int{}

	for i := 0; i <= 10; i++ {
		nums = append(nums, i)
	}
	fmt.Println(nums)
	for _, num := range nums {
		if num%2 != 0 {
			fmt.Println(num, "is odd")
		} else {
			fmt.Println(num, "is even")
		}
	}
}
