let age = prompt('Age');

if (!(age >= 14 && age <= 90)) {
    alert('Ok');
} else {
    alert('!Ok');
}

if (age < 14 || age > 90) {
    alert('Ok');
} else {
    alert('!Ok');
}