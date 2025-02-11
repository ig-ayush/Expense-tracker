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
    
    const list = document.getElementById('list');
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

        let ExLen = expenceData.length - 1;
        let DisplayBalance = Number(balance.innerText) - Number(expenceData[ExLen].amount);
        balance.innerText = DisplayBalance;
        localStorage.setItem('Balance',DisplayBalance);
};

window.deleteExpencce = (index) =>{

    expenceData.splice(index,1);
    localStorage.setItem("Expences",JSON.stringify(expenceData));
    displayExpenses();
};

// Edit Balance
const balanceEdit = document.getElementById('edit-balance');
const addBal = document.getElementById('add-bal');
const balInput = document.getElementById('input-bal');
addBal.addEventListener('click',()=>{
    const newBal = document.getElementById('newBal').value;
    balance.innerText = newBal;
    localStorage.setItem("Balance",newBal);
    balInput.classList.add('hidden');
});

balanceEdit.addEventListener('click',()=>{

    balInput.classList.remove('hidden');
    balInput.classList.add('load');
});

// Clear
const clear = document.getElementById('clear');

clear.addEventListener('click',()=>{
    console.log("clear")
    localStorage.removeItem('Expence');
    document.getElementById('list').innerHTML = "";
});


document.addEventListener('DOMContentLoaded',displayExpenses)

