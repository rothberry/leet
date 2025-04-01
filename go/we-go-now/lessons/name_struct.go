package main

import "fmt"

type person struct {
	firstName string
	lastName  string
	contactInfo
}

type contactInfo struct {
	email string
	zip   int
}

func nameStruct() {
	// alex := person{firstName: "alexx", lastName: "butthole"}
	// fmt.Println(alex)
	// fmt.Printf("%+v", alex)
	// fmt.Println("")

	jim := person{
		firstName: "JIM",
		lastName:  "Butthole",
		contactInfo: contactInfo{
			email: "jim@jim.com",
			zip:   90909,
		},
	}
	jim.print()
	// &var => give me the memory or the pointer of this var
	// jimPointer := &jim
	// fmt.Println(jimPointer)
	// jimPointer.updateName("bungus")
	// jimPointer.print()

	// if we define the func with the *type, go will automatically do the pointing
	jim.updateName("JIMMMEH")
	jim.print()

	// slice gotchassss
	mySlice := []string{"hi", "there", "butch"}
	updateSliceGotcha(mySlice)
	fmt.Println(mySlice)
}

/* 
	! VALUE TYPES * use pointers to change thse things ina func
	int
	float
	string
	bool
	structs

	! REFERENCE TYPES * Don't worry about the pointers with thesee
	slices
	maps
	channels
	pointers
	functions
*/

/* won't actually update
pass by value lang
passing as a receiver, go will copy that value into a new location

	* turn ADDRESS into VALUE 	with *ADDRESS
	* turn VALUE into 	ADDRESS with &VALUE
*/
// *type => it means we're working with a pointer to a person
func (pointerToPerson *person) updateName(newFirstName string) {
	// ! p will ref a copy
	// ! p.firstName = newFirstName
	// *pointer => give me the value at this smemory address
	(*pointerToPerson).firstName = newFirstName
}

func updateSliceGotcha(s []string) {
	s[0] = "BYE"
}
func (p person) print() {
	fmt.Printf("%+v", p)
	fmt.Println("")
}

