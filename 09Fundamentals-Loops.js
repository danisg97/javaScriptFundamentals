// Loops en Javascript.

// Basic while loop.
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

// Basic do...while loop.
i = 0;
do {
  alert( i );
  i++;
} while (i < 3);

// Basic for loop.
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}

// Breaking the loop.
let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );

// Continue the loop.
for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}
