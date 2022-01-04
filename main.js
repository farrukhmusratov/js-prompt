var firstName = prompt('Ismingizni kiriting');
console.log(firstName);

var surName = prompt('Familyangizni kiriting');
console.log(surName);

var age = prompt('Yoshingizni kiriting');
console.log(age);

var dateOfBirth = prompt('tug\'ilgan sanangizni kiriting');
console.log(dateOfBirth);

var phoneNumber = prompt('telefon raqamingizni kiriting');
console.log(phoneNumber);

var placeOfStudy = prompt('O\'qish joyingiz');
console.log(placeOfStudy);

var textBook = prompt('Qanday kitoblar o\'qib turasiz');
console.log(textBook);

var city = prompt('Yashash joyingizni kiriting');
console.log(city);


var plan = prompt('Kelajakdagi Maqsadingiz');
console.log(plan);


var information = [
    "Ismingiz:" + " "  + firstName + "\n" +
    "Familyangiz:" + " "  + surName + "\n" +
    "Yoshingiz:" + " "  + age + " " + "da" + "\n" +
    "Tug'ilgan sanangiz:" + " "  + dateOfBirth + " " + "\n" +
    "Telefon Raqamingiz:" + " "  + phoneNumber + "\n" +
    "sizning Yashash Mansilingiz:" + " "  + city + "\n" +
    "O'qish joyingiz:" + " "  + placeOfStudy + "\n" +
    "O'qigan kitoblaringiz:" + " "  + textBook + "\n" +
    "Sizning Maqsadingiz:" + " "  + plan + "\n" 
]

console.log(information);

alert(information)