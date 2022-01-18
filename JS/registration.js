let bodyTable = document.getElementById("bodyTable");
let btn = document.getElementById("button");
let form = document.getElementById("form");

let users = [];


btn.addEventListener('click', (e) =>{

    e.preventDefault();
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let phone = document.getElementById("phone").value;
    let adress = document.getElementById("adress").value;
    let observations = document.getElementById("observations").value;
    if( (name === '' )|| (lastName === '')) {
        showMessage('¡Ingrese un valor, por favor!');
    }else if((phone  === '') || (adress === '') ){
        showMessage('¡Ingrese un valor, por favor!');
    } else if(isNaN(phone)) {
        showMessage('¡Ingrese un valor valido, por favor!');
    } else {
      registerUser(name, lastName, phone, adress, observations);
    }
    form.reset();

    listData();
});


let registerUser = (Name, LastName, Phone, Adress, Observations) => {
    let register = {
        name: Name,
        lastName: LastName,
        phone: Phone,
        adress: Adress,
        observations: Observations
    }
    users.push(register);
    saveData(users);  
}

 let saveData = () => {
    localStorage.setItem('user', JSON.stringify(users))
}

 let showMessage = (mens) => {
    const message = document.createElement('div');
    message.setAttribute('class', 'error');
    message.textContent = mens;
    form.appendChild(message);
    setTimeout( () => {
        message.remove();
    }, 5000);
}


let listData = () => {
    bodyTable.innerHTML = "";
    users = JSON.parse(localStorage.getItem("user"));
    users.forEach(element=> {
        const {name, lastName, phone, adress, observations} = element;
        bodyTable.innerHTML += ` <tr>  
            <td>${name}</td>
            <td>${lastName}</td>
            <td>${phone}</td>
            <td>${adress}</td>
            <td>${observations}</td>
        </tr>`
    });
}
// document.addEventListener('DOMContentLoaded',listData)
