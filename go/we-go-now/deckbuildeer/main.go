package main

// import "fmt"

func main() {
	// var card string = "Ace of Spades"
	// card := "Ace of Spades"
	// card := newCard()
	// cards := []string{newCard(), newCard()}
	// cards.print()
	// hand, remainingDeck := deal(cards, 3)
	// fmt.Println("hand", hand)
	// fmt.Println("remin", remainingDeck)
	// cards.saveToFile("my_cards")
	// cards := newDeckFromFile("my_cards")
	// cards.print()
	cards := newDeck()
	cards.shuffle()
	cards.print()
	
	// badCards := newDeckFromFile("ghjkl")
	// badCards.print()

}
