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
      includeProfileContent.innerHTML = '<div class="profile_data"><h4 class="profile_data_title">Прізвище</h4><p class="profile_data_subtext">Арабаджи</p></div><div class="profile_data"><h4 class="profile_data_title">Ім\'я</h4><p class="profile_data_subtext">Антон</p></div><div class="profile_data"><h4 class="profile_data_title">ИНН</h4><p class="profile_data_subtext">2322002417</p></div><div class="profile_data"><h4 class="profile_data_title">№ договору</h4><p class="profile_data_subtext">123334985</p></div><div class="profile_data"><h4 class="profile_data_title">Особ. рахунок</h4><p class="profile_data_subtext">00000000000000</p></div><div class="profile_data"><h4 class="profile_data_title">EIC</h4><p class="profile_data_subtext">00000000000000000</p></div><div class="profile_data2"><h4 class="profile_data_title">Адреса підключення</h4><p class="profile_data_subtext">Мариуполь, пр. Мира, 25</p></div><div class="profile_data"><h4 class="profile_data_title">Стан</h4><p class="profile_data_subtext">підключений</p></div><div class="profile_data"><h4 class="profile_data_title">Дата підключення</h4><p class="profile_data_subtext">01.01.2020</p></div>';
      sidebar_info.classList.add("tab_active");
      sidebar_profile.classList.remove("tab_active");
      sidebar_price.classList.remove("tab_active");
      sidebar_calc.classList.remove("tab_active");
      sidebar_amount.classList.remove("tab_active");
      sidebar_pay.classList.remove("tab_active");
      sidebar_graf.classList.remove("tab_active");
      break;
    case 3:
      includeProfileContent.innerHTML = '<div class="profile_prices"><table class="profile_prices"><tr><td class="gastable_data">грн/куб.м.</td><td class="gastable_data"></td></tr><tr><td class="gastable_data">6,91399</td><td class="gastable_data">з урахуванням ПДВ</td></tr><tr><td class="gastable_data">в тому числі</td><td class="gastable_data"></td></tr><tr><td class="gastable_data">0,12416</td><td class="gastable_data">послуга транспортування природного газу</td></tr></table><p class="graf_suptext">графік зміни вартості</p><p class="graf_suptext">вибрати рік:</p><select class="select_year"><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option></select><img class="profile_prices_img" src="assets/images/graf_year.png"/></div>';
      sidebar_price.classList.add("tab_active");
      sidebar_profile.classList.remove("tab_active");
      sidebar_info.classList.remove("tab_active");
      sidebar_calc.classList.remove("tab_active");
      sidebar_amount.classList.remove("tab_active");
      sidebar_pay.classList.remove("tab_active");
      sidebar_graf.classList.remove("tab_active");
      break;
    case 4:
      includeProfileContent.innerHTML = '<table class="gas_calc_table"><tr><td class="gastable_title">особовий рахунок</td><td class="gastable_title">дата</td><td class="gastable_title">сума нарахування</td><td class="gastable_title">сума оплат</td><td class="gastable_title">обсяг споживання</td><td class="gastable_title">початок періоду</td><td class="gastable_title">кінець періоду</td></tr><tr><td class="gastable_data">112315989</td><td class="gastable_data">2020 січень</td><td class="gastable_data">1400 грн</td><td class="gastable_data">1300 грн</td><td class="gastable_data">0,20 куб.м.</td><td class="gastable_data">—</td><td class="gastable_data">-100</td></tr><tr><td class="gastable_data">112315989</td><td class="gastable_data">2020 лютий</td><td class="gastable_data">1300 грн</td><td class="gastable_data">1500 грн</td><td class="gastable_data">0,17 куб.м.</td><td class="gastable_data">-100</td><td class="gastable_data">100</td></tr><tr><td class="gastable_data">112315989</td><td class="gastable_data">2020 березень</td><td class="gastable_data">1370 грн</td><td class="gastable_data">1450 грн</td><td class="gastable_data">0,18 куб.м.</td><td class="gastable_data">100</td><td class="gastable_data">180</td></tr><tr><td class="gastable_data">112315989</td><td class="gastable_data">2020 квітень</td><td class="gastable_data">1400 грн</td><td class="gastable_data">1400 грн</td><td class="gastable_data">0,20 куб.м.</td><td class="gastable_data">180</td><td class="gastable_data">180</td></tr></table>';
      sidebar_calc.classList.add("tab_active");
      sidebar_profile.classList.remove("tab_active");
      sidebar_info.classList.remove("tab_active");
      sidebar_price.classList.remove("tab_active");
      sidebar_amount.classList.remove("tab_active");
      sidebar_pay.classList.remove("tab_active");
      sidebar_graf.classList.remove("tab_active");
      break;
    case 5:
      includeProfileContent.innerHTML = '<table class="gas_amount_table"><tr><td class="gastable_title">дата</td><td class="gastable_title">обсяг споживання</td><td class="gastable_title">сума нарахування</td></tr><tr><td class="gastable_data">08.01.2020</td><td class="gastable_data">12.31 куб. м.</td><td class="gastable_data">1400 грн</td></tr><tr><td class="gastable_data">09.02.2020</td><td class="gastable_data">11.22 куб. м.</td><td class="gastable_data">1300 грн</td></tr><tr><td class="gastable_data">09.03.2020</td><td class="gastable_data">11.44 куб. м.</td><td class="gastable_data">1320 грн</td></tr><tr><td class="gastable_data">08.04.2020</td><td class="gastable_data">13.46 куб. м.</td><td class="gastable_data">1540 грн</td></tr></table>';
      sidebar_amount.classList.add("tab_active");
      sidebar_profile.classList.remove("tab_active");
      sidebar_info.classList.remove("tab_active");
      sidebar_price.classList.remove("tab_active");
      sidebar_calc.classList.remove("tab_active");
      sidebar_pay.classList.remove("tab_active");
      sidebar_graf.classList.remove("tab_active");
      break;
    case 6:
      includeProfileContent.innerHTML = '<form class="profile_payment"><h2 class="profile_payment_title">Виберіть спосіб оплати</h2><input class="profile_payment_checkbox" type="radio" id="onlinePay"         name="contact" value="onlinePay" onclick="showPaymentType()"><label for="onlinePay">оплатити онлайн</label><br><img id="img_payment_type1" class="img_payment_type" src="assets/images/onlinepay.png" alt="pay"><input class="profile_payment_checkbox" type="radio" id="receipPay" name="contact" value="receipPay" onclick="showPaymentType()"><label for="receipPay">оплата по квитанції</label><p id="profile_warning" class="profile_payment_warning">Увага! Змінено банківські реквізити</p><img id="img_payment_type2" class="img_payment_type" src="assets/images/receippay.png" alt="pay"><a href="#" id="profile_print_payment" class="profile_confirm_btn2">роздрукувати</a></form>';
      sidebar_pay.classList.add("tab_active");
      sidebar_profile.classList.remove("tab_active");
      sidebar_info.classList.remove("tab_active");
      sidebar_price.classList.remove("tab_active");
      sidebar_calc.classList.remove("tab_active");
      sidebar_amount.classList.remove("tab_active");
      sidebar_graf.classList.remove("tab_active");
      break;
    case 7:
      includeProfileContent.innerHTML = '<div class="profile_graf"><p class="profile_graf_title">обсяг споживання</p><img class="profile_graf_img" src="assets/images/graf_amount.png" alt="amount"><p class="profile_graf_title">вартість</p><img class="profile_graf_img" src="assets/images/graf_cost.png" alt="cost"><p class="profile_graf_title">сальдо</p><img class="profile_graf_img" src="assets/images/graf_saldo.png" alt="saldo"></div>';
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

function showPaymentType() {
  if (onlinePay.checked == true) {
    img_payment_type1.style.display = "block";
  } else {
    img_payment_type1.style.display = "none";
  }
  if (receipPay.checked == true) {
    profile_warning.style.display = "block";
    img_payment_type2.style.display = "block";
    profile_print_payment.style.display = "inline-block";
  } else {
    profile_warning.style.display = "none";
    img_payment_type2.style.display = "none";
    profile_print_payment.style.display = "none";
  }
}
