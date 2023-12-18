import { noticesData } from "../firebase/firebase-main.js";
import {formateDate} from "../helper/formateDate.js";




    const main = document.querySelector('#main');
    console.log(main);
    if(noticesData.length ==0){
        main.innerHTML ="<div><h1>No Notice Published Yet!</h1></div>"
    }
    else{
        noticesData.forEach((notice) => {
        const noticeDiv = document.createElement('div');
        const dateDiv = document.createElement('div');
        const noticeTitle = document.createElement('h4');
        const noticeBody = document.createElement('p');


        noticeDiv.className= 'notice-block';
        dateDiv.className = 'notice-date';
        
        const noticeDate = new Date(notice.uploadtime.seconds * 1000);
        const formatedDate = formateDate(noticeDate);
        
        
        dateDiv.innerText = formatedDate;
        noticeTitle.innerText = notice.title;
        noticeBody.innerText = notice.content;

        const divContainer = document.createElement('div');
        divContainer.className = 'notice-container';
        divContainer.append(noticeTitle,noticeBody);

        noticeDiv.append(dateDiv,divContainer);


        const downloadButton = document.createElement('div');
        downloadButton.className = 'download-notice-btn'
        if(notice.pdfurl){
            downloadButton.classList.add('visible')
            const a = document.createElement('a');
            a.innerHTML = "<span><i class='fas fa-download'></i> <br>Attachment</span>";
            a.href = notice.pdfurl;
            downloadButton.appendChild(a);
            console.log(a);
        }
        noticeDiv.appendChild(downloadButton);
        main.appendChild(noticeDiv);
    });
}

// document.addEventListener(onload,() => {
    

// })