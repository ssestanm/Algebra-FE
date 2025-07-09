`use strict`;

/*
let i = 3;
while (i < 20) {
  if (i % 9 === 0) console.log(i);
  i++;
}

let var1 = 0;
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    var1++;
  }
}
console.log(var1);
*/

let firstname = `Leonard`;
let surName = `Pocrncic`;
let fullName = firstname.concat(` `).concat(surName);
console.log(fullName);

let z = 2,
  y = 10;
const x = z === 2 ? y : 5;
console.log(x);

let x2;
if (z === 2) x2 = y;
else x2 = 5;
console.log(x2);

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(`${i} je paran broj.`);
  else console.log(`${i} je neparan broj.`);
}
