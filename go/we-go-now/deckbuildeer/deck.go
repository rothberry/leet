package main

import (
	"fmt"
	"math/rand"
	"os"
	"strings"
	"time"
)

// create a new type of dck
// is a slice of string with our custom functionality
type deck []string

/* doesn't neeed the reciever */
func newDeck() deck {

	cards := deck{}

	cardSuits := []string{"Spades", "Hearts", "Diamonds", "Clubs"}
	cardValues := []string{"Ace", "Two", "Three", "Four"}
	for _, suit := range cardSuits {
		for _, value := range cardValues {
			// fmt.Println(value, "of", suit)
			cards = append(cards, value+" of "+suit)
		}
	}
	return cards
}

/*
reciever

	any var of type deck, gets the print func
	d => is the deck instance, usually just uses the first letter of the type
*/
func (d deck) print() {
	for i, card := range d {
		fmt.Println(i, card)
	}
}

/* Why not use receiver here/ */
func deal(d deck, handsize int) (deck, deck) {
	return d[:handsize], d[handsize:]
}

func (d deck) shuffle() {
	// RNG!!!!
	source := rand.NewSource(time.Now().UnixNano())
	r := rand.New(source)

	for i := range d {
		newPosition := r.Intn(len(d) - 1)
		// newPosition := rand.Intn(len(d) - 1)
		// then one line swap
		d[i], d[newPosition] = d[newPosition], d[i]
	}
}

func (d deck) toString() string {
	return strings.Join([]string(d), ",")
}

func (d deck) saveToFile(filename string) error {
	return os.WriteFile(filename, []byte(d.toString()), 0666)
}

func newDeckFromFile(filename string) deck {
	byteSliceFromFile, err := os.ReadFile(filename)
	if err != nil {
		fmt.Println("tis errrrrrr: ", err)
		os.Exit(1)
	}
	// fmt.Println(byteSliceFromFile)
	s := strings.Split(string(byteSliceFromFile), ",")
	return s
}
