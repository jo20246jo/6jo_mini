// 달력 클릭하면 회색 배경으로 변경
//.click-bg 추가

document.querySelector("ul.date").addEventListener("click", (e) => {
  const $dayBoxLi = e.target.closest(".day-box");
  console.log(e.target.closest(".day-box"));
  $dayBoxLi.classList.toggle("click-bg");
});
