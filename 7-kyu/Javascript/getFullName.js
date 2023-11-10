// 7kyu
// FIXME: Get Full Name
// https://www.codewars.com/kata/597c684822bc9388f600010f

// DESCRIPTION:
// The code provided is supposed return a person's Full Name given their first and last names.

// But it's not working properly.

// Notes
// The first and/or last names are never null, but may be empty.

// Task
// Fix the bug so we can all go home early.

class Dinglemouse {
    /**
     * Constructs a new instance of Person class with given first and last name.
     * 
     * @param {string} firstName - The first name of the person.
     * @param {string} lastName - The last name of the person.
     */
    constructor(firstName, lastName) {
        this.firstname = firstName;
        this.lastName = lastName;
    }

    /**
     * Returns full name by concatenating the first and last name.
     * Leading and trailing whitespaces are trimmed.
     * 
     * @returns {string} The full name of the person.
     */
    getFullName() {
        return (this.firstname + " " + this.lastName).trim();
    }
}
