package main

import (
	"os"
	"testing"
)

/*
Test funcs PascalCase
the `t *testing.T` is the testing placeholder for what we are testing
*/
func TestNewDeck(t *testing.T) {
	d := newDeck()
	first, last := "Ace of Spades", "Four of Clubs"
	if len(d) != 16 {
		t.Errorf("Default Deck needs 16 cards, but got %v", len(d))
	}
	if d[0] != first {
		t.Errorf("First card should of %v, but got %v", first, d[0])
	}
	if d[len(d)-1] != last {
		t.Errorf("Last card should of %v, but got %v", last, d[len(d)-1])
	}
}

func TestFileOps(t *testing.T) {
	/*
		startup: Delete any files with name _decktesting
		create deck
		=> save to file "_decktesting"
		=> file created
		=> attempt to load
		=> crash?

		needs CLEANUP ON TESTING
	*/
	testfilename := "_decktesting"
	os.Remove(testfilename)
	d := newDeck()
	d.saveToFile(testfilename)

	loadedDeck := newDeckFromFile(testfilename)

	if len(loadedDeck) != 16 {
		t.Errorf("Expected Deck needs 16 cards, but got %v", len(loadedDeck))
	}

	os.Remove(testfilename)

}
