// 올해가 몇 년도인지 계산

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();


// 계속 마우스 오버하여 재생하기

// const thumbnailEl = document.getElementsByClassName(".vedio__thumbnail");
// const timeEl = document.getElementsByClassName(".vedio__time");

// function mouseOver () {
//   if (timeEl.innerText === null) {
//     timeEl.innerText = "계속 마우스 오버하여 재생하기"
//   } else {
//     timeEl.innerText = ""
//     timeEl.innerText = "계속 마우스 오버하여 재생하기"
//   }
// }

// thumbnailEl.addEventListener("mouseover", mouseOver);