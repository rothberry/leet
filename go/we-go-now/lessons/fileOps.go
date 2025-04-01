package main

import (
	"io"
	"log"
	"os"
)

// file to open should be in command line
// go run main.go fileOps.go myFile.txt
func fileOps() {
	file, err := os.Open(os.Args[1])
	if err != nil {
		log.Fatal(err)
	}
	io.Copy(os.Stdout, file)
}
