let actualAge = 18;
let drinkingAgeLimit = 18;
let fullName = "Josef Nový";

if (actualAge >= drinkingAgeLimit) {
  console.log(`${fullName} už může pít alkohol.`);
} else {
  console.log(
    `${fullName} nemůže ještě pít alkohol. Chybí mu ještě ${
      drinkingAgeLimit - actualAge
    } rok/let.`
  );
}
