let Data;
let CheckData;
let PersonalId;

function Check(login, pass) {
    if (login.lenght < 4) {
        alert('Слишком маленький логин');
        return false;
    }
    else if (login.lenght > 12) {
        alert('Слишком длинный логин');
        return false;
    }

    if (pass.lenght < 6) {
        alert('Слишком маленький пароль');
        return false;
    }
    else if (pass.lenght > 16) {
        alert('Слишком длинный пароль');
        return false;
    }

    else {
        return true;
    }
}

try {
    document.getElementById('In').addEventListener('click', function() {
        const Login = document.getElementById('Login').value;
        const Pass = document.getElementById('Pass').value;

        CheckData = Check(Login, Pass);

        if (CheckData === true) {
            fetch(`https://pocketwin777-default-rtdb.europe-west1.firebasedatabase.app/Data.json?orderBy="Name"&equalTo="${Login}"`)
                .then(response => response.json())
                .then(data => {
                    // const result = Object.values(data).filter(user => user.Pass === Pass);
                    // console.log(result);

                    alert('Успешный вход!');

                    // localStorage.setItem('PersonalId', PersonalId);
                    // localStorage.setItem('Login', Data.Name);
                    // localStorage.setItem('Pass', Data.Pass);

                    location.href = './Profile.html';
                });
        }
    });
}
catch {}

try {
    document.getElementById('Reg').addEventListener('click', function() {
        const Login = document.getElementById('Login').value;
        const Pass = document.getElementById('Pass').value;
        
        CheckData = Check(Login, Pass);

        if (CheckData === true) {
            fetch('https://pocketwin777-default-rtdb.europe-west1.firebasedatabase.app/Data.json', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Name: Login,
                    Pass: Pass
                })
            })
                .then(response => response.json())
                .then(data => {
                    Data = data;
                    PersonalId = Data.name;
        
                    localStorage.setItem('PersonalId', PersonalId);
                    localStorage.setItem('Login', Login);
                    localStorage.setItem('Pass', Pass);

                    location.href = './Profile';
                });
        }
    });
}
catch {}