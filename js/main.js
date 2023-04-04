const header = document.querySelector("#header");
const headerBottom = document.querySelector(".header_bottom");
const menus = document.querySelectorAll("#gnb > ul > li > a");
const gnb = document.querySelector("#gnb");
const sub = document.querySelectorAll(".lnb");
const arrow = document.querySelector(".aside_arrow");
const listWrap = document.querySelector(".list_wrap li");
const imgTxt = document.querySelector(".img_txt");
const hamburgerMenu = document.querySelector(".hamburger_menu");
const hamburgerIcon = document.querySelector(".hamburger");

// 드롭다운 메뉴 (JS)
menus.forEach((item) => {
  (item.onmouseover = () => {
    header.classList.add("active");
    header.style.height = "566px";
    sub.forEach((item) => {
      // item.style.display = "block";
      item.style.visibility = "visible";
      item.style.opacity = 1;
    });
  }),
    (header.onmouseleave = () => {
      header.classList.remove("active");
      header.style.height = "147px";
      sub.forEach((item) => {
        // item.style.display = "none";
        item.style.visibility = "hidden";
        item.style.opacity = 0;
      });
    });
});

// hamburger 메뉴
hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("on");

  if (hamburgerIcon.classList.contains("on")) {
    hamburgerMenu.style.visibility = "visible";
    hamburgerMenu.style.opacity = "1";
    gnb.style.visibility = "hidden";
  } else {
    hamburgerMenu.style.visibility = "hidden";
    hamburgerMenu.style.opacity = "0";
    gnb.style.visibility = "visible";
  }
});

// gnb.onmouseover = () => {
//   header.classList.add("active");
//   header.style.height = "566px";
//   sub.forEach((item) => {
//     // item.style.display = "block";
//     item.style.visibility = "visible";
//     item.style.opacity = 1;
//   })
// }
// gnb.onmouseout = () => {
//   header.classList.remove("active");
//   header.style.height = "0";
//   sub.forEach((item) => {
//     // item.style.display = "none";
//     item.style.visibility = "hidden";
//     item.style.opacity = 0;
//   })
// }

// 스크롤 시 헤더 스타일 변경

window.addEventListener("scroll", () => {
  header.classList.add("on");
  header.style.borderBottom = "1px solid #ddd"; 

  if (window.scrollY == 0) {
    header.classList.remove("on");
    header.style.border = "none"; 
  }
});

// 우측 하단 화살표 클릭 시 상단으로 스크롤
arrow.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth"
  })
});

// section02 list_wrap hover시 VIEW MORE로 글씨 변경
// listWrap.addEventListener("mouseover", () => {
//   imgTxt.innerHTML = "VIEW MORE";
// });
// listWrap.addEventListener("mouseleave", () => {
  
// });