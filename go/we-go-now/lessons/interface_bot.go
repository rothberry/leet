package main

import "fmt"

/* an interface is the honorary type that contain functions with the correct args and return 
cannot create values out of an interfece type

interfaces are 
- NOT generic types
- 'implicit'
- a contract to help us manage types

*/

type bot interface {
	getGreeting() string
	// getBotVersion() float64
}

type englishBot struct{}
type spanishBot struct{}

func interface_bot() {
	eb := englishBot{}
	sb := spanishBot{}
	printGreeting(eb)
	printGreeting(sb)
}

func (englishBot) getGreeting() string {
	// very custom logic for generating the english string
	return "Hi There!"
}

func (spanishBot) getGreeting() string  {
	return "Hola!"
}

func printGreeting(b bot) {
	fmt.Println(b.getGreeting())	
}
