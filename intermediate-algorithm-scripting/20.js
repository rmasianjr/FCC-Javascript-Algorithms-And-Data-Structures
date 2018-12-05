/*
link: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person
*/

/* Make a Person */

var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  var firstName = firstAndLast.split(' ')[0];
  var lastName = firstAndLast.split(' ')[1];
  var fullName = firstAndLast;

  this.getFullName = function() {
    return fullName;
  };
  this.setFullName = function(firstAndLast) {
    firstName = firstAndLast.split(' ')[0];
    lastName = firstAndLast.split(' ')[1];
    fullName = firstAndLast;
  };
  this.getFirstName = function() {
    return firstName;
  };
  this.setFirstName = function(first) {
    firstName = first;
    fullName = first + ' ' + lastName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.setLastName = function(last) {
    lastName = last;
    fullName = firstName + ' ' + last;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
