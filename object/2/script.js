function isEmpty(obj) {
    let isEmpty = true;

    for (let prop in obj) {
        isEmpty = false;
    }

    return isEmpty;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false