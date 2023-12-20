import { eventsData } from "../firebase/firebase-main.js";




const eventContainer = document.querySelector(".event-container");

const container = document.createElement('div');

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .has-dropdown i').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      if (document.querySelector('.mobile-nav-active')) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      }
    });
  });

eventsData.forEach((event) => {
    const eventEle = document.createElement('div');
    const eventDescription = document.createElement('div');
    const description = document.createElement('p');
    const title = document.createElement('h3');
    const eventImgContainer = document.createElement('div');
    const detail = document.createElement('details');
    const summary = document.createElement('summary'); 


    // add class to each element
    eventEle.className = 'event';
    eventDescription.className = 'event-description';
    description.className = 'description';
    title.className = 'event-title';
    eventImgContainer.className = 'event-img-container';

    summary.innerText = event.title;
    
    title.innerText = event.title;
    description.innerText = event.content;
    detail.append(summary,description)
    
    event.pdfurl.forEach((url) => {
        const img = document.createElement('img');
        img.className = 'event-img'
        img.src = url;
        eventImgContainer.appendChild(img);
        img.height = 250
    })
    eventImgContainer.appendChild(eventDescription);

    eventEle.append(detail,eventImgContainer);
    

    container.appendChild(eventEle);
})

if(eventsData.length != 0) eventContainer.innerHTML = container.innerHTML;


/**
* Preloader
*/
setTimeout(() => {

    if(eventsData != null) {
        const preloader = document.querySelector('#preloader');
        if (preloader) {
          preloader.remove();
        }
    }
},500);
