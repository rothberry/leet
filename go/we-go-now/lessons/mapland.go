package main

import "fmt"

/* Diff between MAP and STRUCTS
Maps: 
- All keys must be the same type
- All values must be the same type
- Keys are indexed
- REFERENCE TYPE

Structs:
- Values can be different types
- keys don't support indexing
- VALUE TYPE

*/

func mapland() {
	// var colors map[string]string
	// colors := make(map[string]string)

	colors := map[string]string{
		"red":   "#ff0000",
		"green": "#ff1234",
	}

	colors["white"] = "#ffffff"

	// delete(colors, "white")
	fmt.Println(colors)

}

func printMap(c map[string]string) {
	for key, value := range c {
		fmt.Println("Hex for  ", key, "is", value)
	}
}
