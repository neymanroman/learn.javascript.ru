// 1
let n = +prompt('Number', 10);

outer:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++)
    {
        if (i % j == 0)
        {
            continue outer;
        }
    }

    alert(i);
}

// 2
let n = +prompt('Number', 10);

for (let i = 2; i <= n; i++) {
    
    let skip = false;
    for (let j = 2; j < i; j++)
    {
        if (i % j == 0)
        {
            skip = true;
            break;
        }
    }

    if (!skip)
    {
        alert(i);
    }
}