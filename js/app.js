'use strict'
let formEl = document.getElementById('myForm');
let tableEl = document.getElementById('myTable');
let thead = document.createElement('thead');
tableEl.appendChild(thead);
thead.setAttribute('id', 'head');
let tbody= document.createElement('tbody');
tableEl.appendChild(tbody);
tbody.setAttribute('id', 'body');

let randomPrice =0;

let orders=[];
function Order(customerName,foodType,imgPath){
    this.customerName =customerName;
    this.foodType = foodType;
    this.imgPath = imgPath;
    orders.push(this);
}

function getRandomInt(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return randomPrice=Math.floor(Math.random() * (max - min) + min); 
  }


formEl.addEventListener('submit',myData);

function myData(event){
    event.preventDefault();
    let customerName = event.target.customerName.value;
    let foodType =event.target.foodType.value.split('.')[0].split('/')[1];
    let imgPath = event.target.foodType.value;
    new Order(customerName,foodType,imgPath);
    
    settingLocalStorage();
    tableHead();
    render();
    console.log(orders);
    
}

function settingLocalStorage(){
    let data = JSON.stringify(orders);
    localStorage.setItem('food',data);
    console.log(data);

}
function gettingLocalStorage(){
    let data = localStorage.getItem('food');
    let object = JSON.parse(data);
    if (object !==null){
        orders = object;
        tableHead();
        render();
    }
}

function tableHead(){

   document.getElementById('head').innerHTML='';

    let trEl = document.createElement('tr');
    thead.appendChild(trEl);
    let thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = 'Order Image';
    let thE2 = document.createElement('th');
    trEl.appendChild(thE2);
    thE2.textContent = 'Order Details';


}

function render(){
    
    document.getElementById('body').innerHTML='';
    for (let i =0; i<orders.length;i++){
        getRandomInt(50,100);
        let trEl = document.createElement('tr');
        tbody.appendChild(trEl);
        let tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        
        let imgEl = document.createElement('img');
        tdEl.appendChild(imgEl);
        imgEl.setAttribute('src',orders[i].imgPath);

        let tdE2 = document.createElement('td');
        trEl.appendChild(tdE2);
        let pEl= document.createElement('p');
        tdE2.appendChild(pEl);
        pEl.textContent = `Customer Name : ${orders[i].customerName}  Food Type : ${orders[i].foodType} Food Price : ${randomPrice} `;
        


    }
}
gettingLocalStorage();