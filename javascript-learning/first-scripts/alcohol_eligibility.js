let age = 2;
let drinkingAgeLimit = 18;
let fullName = "Josef Nový";

if (age >= drinkingAgeLimit) {
  console.log(`${fullName} už může pít alkohol.`);
} else {
  console.log(
    `${fullName} nemůže pít alkohohol. Chybí mu: ${
      drinkingAgeLimit - age
    } rok/let.`
  );
}
