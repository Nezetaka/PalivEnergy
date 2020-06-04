function openMenu() {
  document.getElementById("sidebar").classList.toggle('activesidebar');
  document.getElementById("includeProfileContent").classList.toggle('content_shift');

}

function showmenu() {
  frame_inner.style.height = "100%";
  frame_inner.style.background = "#2D3039";
  nav1line.innerHTML = '<img class="top_logo" src="assets/images/nav_logo.png" alt="logo"><a href="#" class="profile_link">особистий кабiнет</a><p class="nav_icon" onclick="closemenu();"></p>';
}

function closemenu() {
  frame_inner.style.height = "155px";
  frame_inner.style.background = "inherit";
  nav1line.innerHTML = '<img class="top_logo" src="assets/images/header_logo.png" alt="logo"><a href="#" class="top_news_link">новини</a><p class="header_icon" onclick="showmenu()"><span id="s1"></span><span id="s2"></span><span id="s3"></span></p>';
}

function showProfileInfo(tab) {
  switch (tab) {
    case 1:
      includeProfileContent.innerHTML = "<p>Профиль</p>";
      sidebar_profile.classList.add("tab_active");
      sidebar_info.classList.remove("tab_active");
      sidebar_price.classList.remove("tab_active");
      sidebar_calc.classList.remove("tab_active");
      sidebar_amount.classList.remove("tab_active");
      sidebar_pay.classList.remove("tab_active");
      sidebar_graf.classList.remove("tab_active");
      break;
    case 2:
      includeProfileContent.innerHTML = "<p>інформація</p>";
      sidebar_info.classList.add("tab_active");
      sidebar_profile.classList.remove("tab_active");
      sidebar_price.classList.remove("tab_active");
      sidebar_calc.classList.remove("tab_active");
      sidebar_amount.classList.remove("tab_active");
      sidebar_pay.classList.remove("tab_active");
      sidebar_graf.classList.remove("tab_active");
      break;
    case 3:
      includeProfileContent.innerHTML = "<p>Відпускні ціни на газ</p>";
      sidebar_price.classList.add("tab_active");
      sidebar_profile.classList.remove("tab_active");
      sidebar_info.classList.remove("tab_active");
      sidebar_calc.classList.remove("tab_active");
      sidebar_amount.classList.remove("tab_active");
      sidebar_pay.classList.remove("tab_active");
      sidebar_graf.classList.remove("tab_active");
      break;
    case 4:
      includeProfileContent.innerHTML = "<p>Розрахунки за гаp</p>";
      sidebar_calc.classList.add("tab_active");
      sidebar_profile.classList.remove("tab_active");
      sidebar_info.classList.remove("tab_active");
      sidebar_price.classList.remove("tab_active");
      sidebar_amount.classList.remove("tab_active");
      sidebar_pay.classList.remove("tab_active");
      sidebar_graf.classList.remove("tab_active");
      break;
    case 5:
      includeProfileContent.innerHTML = "<p>Обсяг споживання газу</p>";
      sidebar_amount.classList.add("tab_active");
      sidebar_profile.classList.remove("tab_active");
      sidebar_info.classList.remove("tab_active");
      sidebar_price.classList.remove("tab_active");
      sidebar_calc.classList.remove("tab_active");
      sidebar_pay.classList.remove("tab_active");
      sidebar_graf.classList.remove("tab_active");
      break;
    case 6:
      includeProfileContent.innerHTML = "<p>Оплатити за газ через сайт</p>";
      sidebar_pay.classList.add("tab_active");
      sidebar_profile.classList.remove("tab_active");
      sidebar_info.classList.remove("tab_active");
      sidebar_price.classList.remove("tab_active");
      sidebar_calc.classList.remove("tab_active");
      sidebar_amount.classList.remove("tab_active");
      sidebar_graf.classList.remove("tab_active");
      break;
    case 7:
      includeProfileContent.innerHTML = "<p>Графіки</p>";
      sidebar_graf.classList.add("tab_active");
      sidebar_profile.classList.remove("tab_active");
      sidebar_info.classList.remove("tab_active");
      sidebar_price.classList.remove("tab_active");
      sidebar_calc.classList.remove("tab_active");
      sidebar_amount.classList.remove("tab_active");
      sidebar_pay.classList.remove("tab_active");
      break;
    default:
      {}
  }
}
