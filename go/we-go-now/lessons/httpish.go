package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

type logWriter struct{}

func httpish() {
	resp, err := http.Get("http://google.com")
	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(1)
	}

	/*
		response is actually a Response struct
		struct: Status, StatusCode, Body: io.ReadCloser...
			io.ReadCloser interface:
				Reader, Closer
					Reader:
						Read([]byte) (int, error)
	*/

	// bs := make([]byte, 99999)
	// resp.Body.Read(bs)
	// fmt.Println(string(bs))

	// Copy(Destination(Writer), Source(Reader))
	// io.Copy(os.Stdout, resp.Body)
	lw := logWriter{}
	io.Copy(lw, resp.Body)

}

func (logWriter) Write(bs []byte) (int, error) {
	fmt.Println(string(bs))
	fmt.Println("Log WRITERR", len(bs))

	return len(bs), nil
}

/*
	Reader interface
	Source => Reader => []byte

	Writer
	[]btye => Writer => Output
*/
