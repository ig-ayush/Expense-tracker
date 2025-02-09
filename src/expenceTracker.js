function Home(){
    window.location.href = "../index.html";
};

document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById('profile').classList.add('load');
    document.getElementById('totalbal').classList.add('load');
    document.getElementById('container').classList.add('animate-fadeIn');
});

// Profile
let username = document.getElementById('Username');
let balance = document.getElementById('balance');

username.innerText = localStorage.getItem('Name');
balance.innerText = localStorage.getItem('Balance');

// Tracker 

const addExpence = document.getElementById('add-expence');
const list = document.getElementById('list');
let expenceData = JSON.parse(localStorage.getItem('Expences')) || [];

addExpence.addEventListener('click',function(){

    const expence = document.getElementById('expence-name').value;
    const amount = document.getElementById('amount').value;

    if(expence != "" && amount != ""){
        let data = {
            expence,
            amount
        };
        expenceData.push(data);
        localStorage.setItem("Expences",JSON.stringify(expenceData));
        displayExpenses();
    }else{
        alert("You did't fill the details");
    }
});

const displayExpenses = () =>{

    list.innerHTML = '';
    expenceData.forEach((expence,index) => {
        const item = document.createElement('li');
        const hr = document.createElement('hr');
        item.innerHTML = `
        <span><button onclick = deleteExpencce(${index}) class="del"><i class="fa-solid fa-trash"></i></button> &nbsp; ${expence.expence.toUpperCase()}  </span>
        <span>&#8377; ${expence.amount} </span>`;
        list.appendChild(item);
        list.appendChild(hr);
    });
};

document.addEventListener('DOMContentLoaded',displayExpenses);
