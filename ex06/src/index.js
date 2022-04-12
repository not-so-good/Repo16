function firstName(firstName) {
    return firstName.toUpperCase();
}

function lastName(lastName) {
    return lastName.toLowerCase();
}

console.log(firstName("sanjin"));
console.log(lastName("SULJANOVIC"));

exports.firstName = firstName;
exports.lastName = lastName;