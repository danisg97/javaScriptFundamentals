// Operadores condicionales en Javascript.

let year = 2018;

if (year == 2018) {
  alert( "That's correct!" );
  alert( "You're so smart!" );
}

if (year < 2018) {
  alert( 'Too early...' );
} else if (year > 2018) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}

// Ternary operator ‘?’.
let age = prompt('How old are you?', '');

// IF example.

let accessAllowed;
if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

// ? example
let accessAllowed2 = (age > 18) ? true : false;

alert(accessAllowed2);

// Multiple '?'.
let age2 = prompt('age?', 18);

let message = (age2 < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
