package main

import (
	"fmt"
	"net/http"
	"time"
)

func statusChecker() {
	links := []string{
		"google.com",
		"stackoverflow.com",
		"golang.org",
	}

	c := make(chan string)

	// Synchronus http requests
	for _, link := range links {
		// `go` will launch the `checkLink`func as it's own routine
		// makes the function asynchronius

		go checkLink(link, c)
	}

	// for i := 0; i < len(links); i++ {
	// 	fmt.Println(<-c)
	// }

	// range of the chan will wait until the channel changes
	for l := range c {
		// is that we never ever try to access the same variable from a different child routine.
		// Wherever possible, we only share information with a child routine, or a new Go routine that we create by passing it in as an argument,
		go func(link string) {
			time.Sleep(5 * time.Second)
			checkLink(link, c)
		}(l)
		// go checkLink(<-c, c)
	}

}

func checkLink(link string, c chan string) {
	_, err := http.Get("http://" + link)
	if err != nil {
		fmt.Println(link, "Baad", err)
		c <- link
		return
	}
	fmt.Println(link, "is oup")
	c <- link
}

/* CONCURRENCY IS NOT PARALLELISM
Concurrency:
- we can have nultiple threads executing code
- scheduler running routines effeciently
- if one thread blocks, another one is picked up and worked on

Parallelissm
- Multiple threads executed at the exact same time
- Reqs multiple CPUs
*/
