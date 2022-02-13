let login = prompt('Login');

if (login === 'Admin')
{
    let password = prompt('Password');
    if (password === 'I am boss')
    {
        alert('Hi');
    } else if (password === null || pass === '') {
        alert('Cancel');
    } else {
        alert('Wrong password');
    }
} else if (login === null || login === '') {
    alert('Cancel');
} else {
    alert('I don\'t know you');
}