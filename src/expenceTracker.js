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
        let ExLen = expenceData.length - 1;
        let DisplayBalance = Number(balance.innerText) - Number(expenceData[ExLen].amount);
        balance.innerText = DisplayBalance;
        localStorage.setItem('Balance',DisplayBalance);

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

       
};

window.deleteExpencce = (index) =>{

    expenceData.splice(index,1);
    localStorage.setItem("Expences",JSON.stringify(expenceData));
    displayExpenses();
};

// Edit Balance
const Edit  = document.getElementById('editBtn');
const options = document.getElementById('edit-options');

const add_balBtn = document.getElementById('add-bal');
const edit_balBtn = document.getElementById('edit-bal');

const add_bal = document.getElementById('add-new-input');
const add_bal_btn = document.getElementById('add-bal-btn');

const edit_bal = document.getElementById('add-edit-input');
const edit_bal_btn = document.getElementById('edit-bal-btn');

// Edit Button
Edit.addEventListener('click',()=>{
    options.classList.toggle('hidden');
    add_bal.classList.add('hidden');
    edit_bal.classList.add('hidden');
    options.classList.add('animate-fadeIn');
});

add_balBtn.addEventListener('click',()=>{
    add_bal.classList.toggle('hidden');
    add_bal.classList.add('animate-fadeIn');
    edit_bal.classList.add('hidden');
});

edit_balBtn.addEventListener('click',()=>{
    edit_bal.classList.toggle('hidden');
    edit_bal.classList.add('animate-fadeIn');
    add_bal.classList.add('hidden');
    
});

// Added Balance Add Buttons
add_bal_btn.addEventListener('click',()=>{
   
    let new_bal = document.getElementById('new-bal-value').value;
    console.log(new_bal);
    let present_bal = balance.innerText;
    let set_bal = Number(new_bal) + Number(present_bal);
    localStorage.setItem('Balance',set_bal);
    balance.innerText = set_bal;
   
    document.getElementById('new-bal-value').value = "";
    
});

// Edit Balance Add Button
edit_bal_btn.addEventListener('click',()=>{
    let edit_b = document.getElementById('edit-bal-value').value;
    console.log(edit_b);
    let new_bal = Number(edit_b);
    localStorage.setItem('Balance',new_bal);
    balance.innerText = new_bal;

    document.getElementById('edit-bal-value').value = "";
});

document.addEventListener('DOMContentLoaded',displayExpenses);

// <!-- Desktop Warnning -->
function checkDevice(){
    if(window.innerWidth > 768){
        document.getElementById('warnning').classList.remove('hidden');
        document.getElementById('warnning').classList.add('animate-fadeIn');
    }
}

checkDevice();
window.addEventListener('resize',checkDevice);
