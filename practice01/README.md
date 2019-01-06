## Bigger words

Build a function that takes in a string and an array of strings. The function should output an array of strings that are longer than the single input string.

- Write a function that takes two parameters
	- Parameter 1 - A string
	- Parameter 2 - An array of strings
- The function should output all the words from the input array (parameter 2) that are longer than the input string (parameter 1)
- Example:
	- `var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];`
	- `biggerWords('whales', myArray);`
	- Output - `['reptile', 'mammoth', 'turtles']`

	pseudo code:

	create a function that has two parameters, a string, and array of strings
		create container to store array parameter string
		create container to store boolean from string compare
		create return array container

			for each item in array
				store array string into container 
				use the compare function to get if first param string is true or false
				if true do nothing
				if false, add array string to the return array 

		When done, return the return array with larger string lengths

		Create second function that compares the two strings that takes in to parameters of strings
			create container to store length of first string
			create container to store length of second string
				if the first string is longer return true
				if second string is longer return false

		
