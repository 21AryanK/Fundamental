import { db } from "./firebase-main.js";
import { collection,addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {validateEmail, validatePhone} from "../helper/phoneAndEmailValidator.js";
console.log('hehe')

const messageBtn = document.querySelector('#sendMessage');

const form = document.querySelector('#form');

form.addEventListener('submit',async (e) => {
    console.log('form');
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const subj = document.querySelector('#subj').value;
    const msg = document.querySelector('#msg').value;

    const msgData = {
        'name': name,
        'email': email,
        'phone': phone,
        'subj': subj,
        'msg': msg,
        'time': new Date(),
        'seen': false
    }

    console.log(msgData);

    
    if(!validatePhone(phone)){
        alert('Enter valid phone');
        return;
    }
    if(!validateEmail(email)){
        alert('Enter valid email');
        return;
    }

    document.querySelector('#name').value ="";
    document.querySelector('#email').value = "";
    document.querySelector('#phone').value = "";
    document.querySelector('#subj').value = "";
    document.querySelector('#msg').value = "";

    document.querySelector('.sent-message').classList.add('d-block')

    setTimeout(() => {
        document.querySelector('.sent-message').classList.remove('d-block')
    },2000)

    await addDoc(collection(db,'messages'),msgData);
    



})
