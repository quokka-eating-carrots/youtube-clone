// 올해가 몇 년도인지 계산

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();


// 계속 마우스 오버하여 재생하기
const thumbnailEl = document.querySelectorAll(".video__thumbnail");
const timeEl = document.querySelectorAll(".video__time");

for (let i = 0; i < thumbnailEl.length; i += 1) {
  const originalTime = timeEl[i].innerText;

  thumbnailEl[i].addEventListener('mouseover', function () {
    timeEl[i].innerText = "계속 마우스 오버하여 재생하기"
  })
  thumbnailEl[i].addEventListener('mouseout', function () {
    timeEl[i].innerText = originalTime
  })
} 