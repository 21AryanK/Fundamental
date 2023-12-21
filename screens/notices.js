import { noticesData } from "../firebase/firebase-main.js";
import { formateDate } from "../helper/formateDate.js";

const mainContainer = document.querySelector("#main-container");

const main = document.createElement("div");
console.log(main);

/**
 * Mobile nav toggle
 */
const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

function mobileNavToogle() {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  mobileNavToggleBtn.classList.toggle("bi-list");
  mobileNavToggleBtn.classList.toggle("bi-x");
}
mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

/**
 * Hide mobile nav on same-page/hash links
 */
document.querySelectorAll("#navmenu a").forEach((navmenu) => {
  navmenu.addEventListener("click", () => {
    if (document.querySelector(".mobile-nav-active")) {
      mobileNavToogle();
    }
  });
});

/**
 * Toggle mobile nav dropdowns
 */
document.querySelectorAll(".navmenu .has-dropdown i").forEach((navmenu) => {
  navmenu.addEventListener("click", function (e) {
    if (document.querySelector(".mobile-nav-active")) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    }
  });
});

noticesData.forEach((notice) => {
  const noticeDiv = document.createElement("div");
  const dateDiv = document.createElement("div");
  const noticeTitle = document.createElement("h4");
  const noticeBody = document.createElement("p");

  noticeDiv.className = "notice-block";
  dateDiv.className = "notice-date";

  const noticeDate = new Date(notice.uploadtime.seconds * 1000);
  const formatedDate = formateDate(noticeDate);

  dateDiv.innerText = formatedDate;
  noticeTitle.innerText = notice.title;
  noticeBody.innerText = notice.content;

  const divContainer = document.createElement("div");
  divContainer.className = "notice-container";
  divContainer.append(noticeTitle, noticeBody);

  noticeDiv.append(dateDiv, divContainer);

  const downloadButton = document.createElement("div");
  downloadButton.className = "download-notice-btn";
  if (notice.pdfurl) {
    downloadButton.classList.add("visible");
    const a = document.createElement("a");
    a.innerHTML = "<span><i class='fas fa-download'></i> <br>Attachment</span>";
    a.href = notice.pdfurl;
    downloadButton.appendChild(a);
    console.log(a);
  }
  noticeDiv.appendChild(downloadButton);
  main.appendChild(noticeDiv);
});

if (noticesData != 0) mainContainer.innerHTML = main.innerHTML;

/**
 * Preloader
 */
setTimeout(() => {
  if (noticesData != null) {
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      preloader.remove();
    }
  }
}, 500);
