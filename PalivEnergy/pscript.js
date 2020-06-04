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
      includeProfileContent.innerHTML = '<div class="profile_data"><h4 class="profile_data_title">Прізвище</h4><input type="text" name="" value="" class="profile_input_data" placeholder="Арабаджи"></div><div class="profile_data"><h4 class="profile_data_title">Ім\'я</h4><input type="text" name="" value="" class="profile_input_data" placeholder="Антон"></div><div class="profile_data"><h4 class="profile_data_title">ИНН</h4><input type="text" name="" value="" class="profile_input_data" placeholder="2322002417"></div><div class="profile_data"><h4 class="profile_data_title">№ договору</h4><input type="text" name="" value="" class="profile_input_data" placeholder="123334985"></div><div class="profile_data"><h4 class="profile_data_title">Особ. рахунок</h4><input type="text" name="" value="" class="profile_input_data" placeholder="00000000000000"></div><div class="profile_data"><h4 class="profile_data_title">EIC</h4><input type="text" name="" value="" class="profile_input_data" placeholder="00000000000000000"></div><div class="profile_data2"><h4 class="profile_data_title">Адреса підключення</h4><input type="text" name="" value="" class="profile_input_data2" placeholder="Мариуполь, пр. Мира, 25"></div><div class="profile_data2"><h4 class="profile_data_title">Телефон</h4><input type="text" name="" value="" class="profile_input_data3" placeholder="+380954585819"><a href="#" class="profile_confirm_btn">підтвердити</a></div><div class="profile_data2"><h4 class="profile_data_title">E-mail</h4><input type="text" name="" value="" class="profile_input_data3" placeholder="arabadjy0203@gmail."><a href="#" class="profile_confirm_btn">підтвердити</a></div><div class="profile_data2"><h4 class="profile_data_title">Пароль</h4><input type="text" name="" value="" class="profile_input_data3" placeholder="***********"><a href="#" class="profile_confirm_btn">змінити пароль</a></div><div class="profile_data2"><h4 class="profile_data_title">Обсяг споживання газу за звітний місяць</h4><p class="profile_data_subtext">01.01 - 04.02</p><input type="text" name="" value="" class="profile_input_data4" placeholder="12,12 куб.м."><a href="#" class="profile_confirm_btn2">зберегти</a></div><div class="profile_data2"><span class="checkbox"><input id="checkbox" type="checkbox"><label for="checkbox">Отримувати повідомлення про сплату в браузері та на E-mail</label></span><span class="checkbox"><input id="checkbox2" type="checkbox"><label for="checkbox2">Підписатися на розсилку новин</label></span>\</div><div class="profile_data2"><a href="#" class="profile_confirm_btn2">зберегти</a></div>';
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
