function Check(login, pass) {
    if (login.lenght < 4) {
        alert('Слишком маленький логин');
    }
    else if (login.lenght > 12) {
        alert('Слишком длинный логин');
    }

    if (pass.lenght < 6) {
        alert('Слишком маленький пароль');
    }
    else if (pass.lenght > 16) {
        alert('Слишком длинный пароль');
    }
}

try {
    document.getElementById('In').addEventListener('click', async function() {
        const Login = document.getElementById('Login').value;
        const Pass = document.getElementById('Pass').value;
        
        Check(Login, Pass);

        const response = await fetch('https://pocketwin777-default-rtdb.europe-west1.firebasedatabase.app/Data.json', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name: Login,
                Pass: Pass
            })
        });

        if (!response.ok) {
            alert('Неизвестная ошибка входа');
        }
        else {
            alert('Успешный вход!');
        }
    });
}
catch {}

try {
    document.getElementById('Reg').addEventListener('click', function() {});
}
catch {}