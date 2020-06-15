function openMenu() {
  document.getElementById("sidebar").classList.toggle('activesidebar');
  document.getElementById("includeProfileContent").classList.toggle('content_shift');
}

function openSubMenu(sub) {
  switch (sub) {
    case 1:
      document.getElementById("sidebar_electr").classList.toggle('active_subbar');
      document.getElementById("sub_ul1").classList.toggle('subbar_displayed');
      break;
    case 2:
      document.getElementById("sidebar_gas").classList.toggle('active_subbar');
      document.getElementById("sub_ul2").classList.toggle('subbar_displayed');
      break;
    default:
      {}
  }
}

function showmenu() {
  frame_inner.style.height = "100%";
  frame_inner.style.background = "#2D3039";
  nav1line.innerHTML = '<img class="top_logo" src="assets/images/nav_logo.png" alt="logo"><a href="login.html" class="profile_link">особистий кабiнет</a><p class="nav_icon" onclick="closemenu();"></p>';
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
    case 21:
      includeProfileContent.innerHTML = '<div class="profile_info_content"><h2 class="kprofile_h2_title">Загальна інформація</h2><div class="profile_data3"><h4 class="profile_data_title">Назва компанії</h4><input type="text" name="" value="" class="profile_input_data2" placeholder="ТОВ “ВЕК “ПАЛІВЕНЕРГО”"></div><div class="profile_data3"><h4 class="profile_data_title">ЄДРПОУ/ІПН</h4><input type="text" name="" value="" class="profile_input_data2" placeholder="00000000000000"></div><div class="profile_data3"><h4 class="profile_data_title">EIC</h4><input type="text" name="" value="" class="profile_input_data2" placeholder="00000000000000000"></div><h2 class="kprofile_h2_title">Електроенергія</h2><div class="profile_data3"><h4 class="profile_data_title">№ договору</h4><input type="text" name="" value="" class="profile_input_data3" placeholder="123334985"></div><div class="profile_data3"><h4 class="profile_data_title">Адреса точки обліку</h4><input type="text" name="" value="" class="profile_input_data2" placeholder="м. Запоріжжя, пр. Соборний, 180"></div><h2 class="kprofile_h2_title">Природний газ</h2><div class="profile_data3"><h4 class="profile_data_title">№ договору</h4><input type="text" name="" value="" class="profile_input_data3" placeholder="123334985"></div><div class="profile_data3"><h4 class="profile_data_title">Адреса точки обліку</h4><input type="text" name="" value="" class="profile_input_data2" placeholder="м. Запоріжжя, пр. Соборний, 180"></div><h2 class="kprofile_h2_title">Контактні дані</h2><div class="profile_data3"><h4 class="profile_data_title">Телефон</h4><input type="tel" pattern="+380[0-9]{3}[0-9]{2}[0-9]{2}" name="" value="" class="profile_input_data3" placeholder="+380954585819"><a href="#" class="profile_confirm_btn">підтвердити</a></div><div class="profile_data3"><h4 class="profile_data_title">E-mail</h4><input type="email" name="" value="" class="profile_input_data3" placeholder="arabadjy0203@gmail"><a href="#" class="profile_confirm_btn">підтвердити</a></div><div class="profile_data3"><h4 class="profile_data_title">Сайт</h4><input type="email" name="" value="" class="profile_input_data3" placeholder="vek.energy"><a href="#" class="profile_confirm_btn">зберегти</a></div><h2 class="kprofile_h2_title">Дані облікового запису</h2><div class="profile_data3"><h4 class="profile_data_title">Логін</h4><input type="email" name="" value="" class="profile_input_data3" placeholder="тов_век"><a href="#" class="profile_confirm_btn">зберегти</a></div><div class="profile_data3"><h4 class="profile_data_title">Пароль</h4><input type="password" name="" value="" class="profile_input_data3" placeholder="***********"><a href="#" class="profile_confirm_btn">змінити пароль</a></div><div class="profile_data3"><span class="checkbox"><input id="checkbox" type="checkbox"><label for="checkbox">Отримувати повідомлення про сплату в браузері та на E-mail</label></span><span class="checkbox"><input id="checkbox2" type="checkbox"><label for="checkbox2">Підписатися на розсилку новин</label></span></div><div class="profile_data3"><a href="#" class="profile_confirm_btn2">зберегти</a></div></div>';
      sidebar_profile.classList.add("tab_active");
      sidebar_info.classList.remove("tab_active");
      sidebar_pay.classList.remove("tab_active");
      sidebar_el_price.classList.remove("tab_active");
      sidebar_el_calc.classList.remove("tab_active");
      sidebar_el_amount.classList.remove("tab_active");
      sidebar_el_graf.classList.remove("tab_active");
      sidebar_gas_price.classList.remove("tab_active");
      sidebar_gas_calc.classList.remove("tab_active");
      sidebar_gas_amount.classList.remove("tab_active");
      sidebar_gas_graf.classList.remove("tab_active");
      break;
    case 22:
      includeProfileContent.innerHTML = '<div class="profile_info_content"><h2 class="kprofile_h2_title">Загальна інформація</h2><div class="profile_data4"><h4 class="profile_data_title">Назва компанії</h4><p class="profile_data_subtext">ТОВ “ВЕК “ПАЛІВЕНЕРГО”</p></div><div class="profile_data4"><h4 class="profile_data_title">ЄДРПОУ/ІПН</h4><p class="profile_data_subtext">00000000000000</p></div><div class="profile_data4"><h4 class="profile_data_title">EIC</h4><p class="profile_data_subtext">00000000000000000</p></div><h2 class="kprofile_h2_title">Електроенергія</h2><div class="profile_data4"><h4 class="profile_data_title">№ договору</h4><p class="profile_data_subtext">123334985</p></div><div class="profile_data4"><h4 class="profile_data_title">Адреса підключення</h4><p class="profile_data_subtext">м. Запоріжжя, пр. Соборний, 180</p></div><div class="profile_data4"><h4 class="profile_data_title">Стан</h4><p class="profile_data_subtext">підключений</p></div><div class="profile_data4"><h4 class="profile_data_title">Дата підключення</h4><p class="profile_data_subtext">01.01.2020</p></div><h2 class="kprofile_h2_title">Природний газ</h2><div class="profile_data4"><h4 class="profile_data_title">№ договору</h4><p class="profile_data_subtext">123334985</p></div><div class="profile_data4"><h4 class="profile_data_title">Адреса підключення</h4><p class="profile_data_subtext">м. Запоріжжя, пр. Соборний, 180</p></div><div class="profile_data4"><h4 class="profile_data_title">Стан</h4><p class="profile_data_subtext">підключений</p></div><div class="profile_data4"><h4 class="profile_data_title">Дата підключення</h4><p class="profile_data_subtext">01.01.2020</p></div><div class="profile_data3"><span class="checkbox"><input id="checkbox" type="checkbox" checked><label for="checkbox">Отримувати повідомлення про сплату в браузері та на E-mail</label></span><span class="checkbox"><input id="checkbox2" type="checkbox" checked><label for="checkbox2">Підписатися на розсилку новин</label></span></div></div>';
      sidebar_info.classList.add("tab_active");
      sidebar_profile.classList.remove("tab_active");
      sidebar_pay.classList.remove("tab_active");
      sidebar_el_price.classList.remove("tab_active");
      sidebar_el_calc.classList.remove("tab_active");
      sidebar_el_amount.classList.remove("tab_active");
      sidebar_el_graf.classList.remove("tab_active");
      sidebar_gas_price.classList.remove("tab_active");
      sidebar_gas_calc.classList.remove("tab_active");
      sidebar_gas_amount.classList.remove("tab_active");
      sidebar_gas_graf.classList.remove("tab_active");
      break;
    case 23:
      includeProfileContent.innerHTML = '<div class="profile_content_inner"><div class="tab"><button class="tablinks" onclick="openFuel(event, \'tabgas\')"><p>природний газ</p></button><button class="tablinks" onclick="openFuel(event, \'tabelectro\')"><p>електроенергія</p></button></div><div id="tabgas" class="tabcontent"><form class="profile_payment"><h2 class="profile_payment_title">Виберіть спосіб оплати</h2><input class="profile_payment_checkbox" type="radio" id="onlinePay"         name="contact" value="onlinePay" onclick="showPaymentType()"><label for="onlinePay">оплатити онлайн</label><br><img id="img_payment_type1" class="img_payment_type" src="assets/images/onlinepay.png" alt="pay"><input class="profile_payment_checkbox" type="radio" id="receipPay" name="contact" value="receipPay" onclick="showPaymentType()"><label for="receipPay">оплата по квитанції</label><p id="profile_warning" class="profile_payment_warning">Увага! Змінено банківські реквізити</p><img id="img_payment_type2" class="img_payment_type" src="assets/images/receippay.png" alt="pay"><a href="#" id="profile_print_payment" class="profile_confirm_btn2">роздрукувати</a></form></div><div id="tabelectro" class="tabcontent"><form class="profile_payment"><h2 class="profile_payment_title">Виберіть спосіб оплати</h2><input class="profile_payment_checkbox" type="radio" id="onlinePay_2" name="contact" value="onlinePay_2" onclick="showPaymentType2()"><label for="onlinePay_2">оплатити онлайн</label><br><img id="img_payment_type1_2" class="img_payment_type" src="assets/images/onlinepay.png" alt="pay"><input class="profile_payment_checkbox" type="radio" id="receipPay_2" name="contact" value="receipPay_2" onclick="showPaymentType2()"><label for="receipPay_2">оплата по квитанції</label><p id="profile_warning_2" class="profile_payment_warning">Увага! Змінено банківські реквізити</p><img id="img_payment_type2_2" class="img_payment_type" src="assets/images/receippay.png" alt="pay"><a href="#" id="profile_print_payment_2" class="profile_confirm_btn2">роздрукувати</a></form></div></div>';
      sidebar_pay.classList.add("tab_active");
      sidebar_profile.classList.remove("tab_active");
      sidebar_info.classList.remove("tab_active");
      sidebar_el_price.classList.remove("tab_active");
      sidebar_el_calc.classList.remove("tab_active");
      sidebar_el_amount.classList.remove("tab_active");
      sidebar_el_graf.classList.remove("tab_active");
      sidebar_gas_price.classList.remove("tab_active");
      sidebar_gas_calc.classList.remove("tab_active");
      sidebar_gas_amount.classList.remove("tab_active");
      sidebar_gas_graf.classList.remove("tab_active");
      break;
    case 24:
      includeProfileContent.innerHTML = '<div class="profile_prices">ЦЕНЫ ЭЛЕКТРО</div>';
      sidebar_el_price.classList.add("tab_active");
      sidebar_profile.classList.remove("tab_active");
      sidebar_info.classList.remove("tab_active");
      sidebar_pay.classList.remove("tab_active");
      sidebar_el_calc.classList.remove("tab_active");
      sidebar_el_amount.classList.remove("tab_active");
      sidebar_el_graf.classList.remove("tab_active");
      sidebar_gas_price.classList.remove("tab_active");
      sidebar_gas_calc.classList.remove("tab_active");
      sidebar_gas_amount.classList.remove("tab_active");
      sidebar_gas_graf.classList.remove("tab_active");
      break;
    case 25:
      includeProfileContent.innerHTML = '<div class="profile_prices">РАСЧЁТЫ ЭЛЕКТРО</div>';
      sidebar_el_calc.classList.add("tab_active");
      sidebar_profile.classList.remove("tab_active");
      sidebar_info.classList.remove("tab_active");
      sidebar_pay.classList.remove("tab_active");
      sidebar_el_price.classList.remove("tab_active");
      sidebar_el_amount.classList.remove("tab_active");
      sidebar_el_graf.classList.remove("tab_active");
      sidebar_gas_price.classList.remove("tab_active");
      sidebar_gas_calc.classList.remove("tab_active");
      sidebar_gas_amount.classList.remove("tab_active");
      sidebar_gas_graf.classList.remove("tab_active");
      break;
    case 26:
      includeProfileContent.innerHTML = '<div class="profile_prices">ОБЪЁМ ЭЛЕКТРО</div>';
      sidebar_el_amount.classList.add("tab_active");
      sidebar_profile.classList.remove("tab_active");
      sidebar_info.classList.remove("tab_active");
      sidebar_pay.classList.remove("tab_active");
      sidebar_el_price.classList.remove("tab_active");
      sidebar_el_calc.classList.remove("tab_active");
      sidebar_el_graf.classList.remove("tab_active");
      sidebar_gas_price.classList.remove("tab_active");
      sidebar_gas_calc.classList.remove("tab_active");
      sidebar_gas_amount.classList.remove("tab_active");
      sidebar_gas_graf.classList.remove("tab_active");
      break;
    case 27:
      includeProfileContent.innerHTML = '<div class="profile_graf"><p class="profile_graf_title">обсяг споживання</p><img class="profile_graf_img" src="assets/images/graf_amount.png" alt="amount"><p class="profile_graf_title">вартість</p><img class="profile_graf_img" src="assets/images/graf_cost.png" alt="cost"><p class="profile_graf_title">сальдо</p><img class="profile_graf_img" src="assets/images/graf_saldo.png" alt="saldo"></div>';
      sidebar_el_graf.classList.add("tab_active");
      sidebar_profile.classList.remove("tab_active");
      sidebar_info.classList.remove("tab_active");
      sidebar_pay.classList.remove("tab_active");
      sidebar_el_price.classList.remove("tab_active");
      sidebar_el_calc.classList.remove("tab_active");
      sidebar_el_amount.classList.remove("tab_active");
      sidebar_gas_price.classList.remove("tab_active");
      sidebar_gas_calc.classList.remove("tab_active");
      sidebar_gas_amount.classList.remove("tab_active");
      sidebar_gas_graf.classList.remove("tab_active");
      break;
    case 28:
      includeProfileContent.innerHTML = '<div class="profile_prices"><table class="profile_prices"><tr><td class="gastable_data">грн/куб.м.</td><td class="gastable_data"></td></tr><tr><td class="gastable_data">6,91399</td><td class="gastable_data">з урахуванням ПДВ</td></tr><tr><td class="gastable_data">в тому числі</td><td class="gastable_data"></td></tr><tr><td class="gastable_data">0,12416</td><td class="gastable_data">послуга транспортування природного газу</td></tr></table><p class="graf_suptext">графік зміни вартості</p><p class="graf_suptext">вибрати рік:</p><select class="select_year"><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option></select><img class="profile_prices_img" src="assets/images/graf_year.png"/></div>';
      sidebar_gas_price.classList.add("tab_active");
      sidebar_profile.classList.remove("tab_active");
      sidebar_info.classList.remove("tab_active");
      sidebar_pay.classList.remove("tab_active");
      sidebar_el_price.classList.remove("tab_active");
      sidebar_el_calc.classList.remove("tab_active");
      sidebar_el_amount.classList.remove("tab_active");
      sidebar_el_graf.classList.remove("tab_active");
      sidebar_gas_calc.classList.remove("tab_active");
      sidebar_gas_amount.classList.remove("tab_active");
      sidebar_gas_graf.classList.remove("tab_active");
      break;
    case 29:
      includeProfileContent.innerHTML = '<table class="gas_calc_table"><tr><td class="gastable_title">особовий рахунок</td><td class="gastable_title">дата</td><td class="gastable_title">сума нарахування</td><td class="gastable_title">сума оплат</td><td class="gastable_title">обсяг споживання</td><td class="gastable_title">початок періоду</td><td class="gastable_title">кінець періоду</td></tr><tr><td class="gastable_data">112315989</td><td class="gastable_data">2020 січень</td><td class="gastable_data">1400 грн</td><td class="gastable_data">1300 грн</td><td class="gastable_data">0,20 куб.м.</td><td class="gastable_data">—</td><td class="gastable_data">-100</td></tr><tr><td class="gastable_data">112315989</td><td class="gastable_data">2020 лютий</td><td class="gastable_data">1300 грн</td><td class="gastable_data">1500 грн</td><td class="gastable_data">0,17 куб.м.</td><td class="gastable_data">-100</td><td class="gastable_data">100</td></tr><tr><td class="gastable_data">112315989</td><td class="gastable_data">2020 березень</td><td class="gastable_data">1370 грн</td><td class="gastable_data">1450 грн</td><td class="gastable_data">0,18 куб.м.</td><td class="gastable_data">100</td><td class="gastable_data">180</td></tr><tr><td class="gastable_data">112315989</td><td class="gastable_data">2020 квітень</td><td class="gastable_data">1400 грн</td><td class="gastable_data">1400 грн</td><td class="gastable_data">0,20 куб.м.</td><td class="gastable_data">180</td><td class="gastable_data">180</td></tr></table>';
      sidebar_gas_calc.classList.add("tab_active");
      sidebar_profile.classList.remove("tab_active");
      sidebar_info.classList.remove("tab_active");
      sidebar_pay.classList.remove("tab_active");
      sidebar_el_price.classList.remove("tab_active");
      sidebar_el_calc.classList.remove("tab_active");
      sidebar_el_amount.classList.remove("tab_active");
      sidebar_el_graf.classList.remove("tab_active");
      sidebar_gas_price.classList.remove("tab_active");
      sidebar_gas_amount.classList.remove("tab_active");
      sidebar_gas_graf.classList.remove("tab_active");
      break;
    case 210:
      includeProfileContent.innerHTML = '<table class="gas_amount_table"><tr><td class="gastable_title">дата</td><td class="gastable_title">обсяг споживання</td><td class="gastable_title">сума нарахування</td></tr><tr><td class="gastable_data">08.01.2020</td><td class="gastable_data">12.31 куб. м.</td><td class="gastable_data">1400 грн</td></tr><tr><td class="gastable_data">09.02.2020</td><td class="gastable_data">11.22 куб. м.</td><td class="gastable_data">1300 грн</td></tr><tr><td class="gastable_data">09.03.2020</td><td class="gastable_data">11.44 куб. м.</td><td class="gastable_data">1320 грн</td></tr><tr><td class="gastable_data">08.04.2020</td><td class="gastable_data">13.46 куб. м.</td><td class="gastable_data">1540 грн</td></tr></table>';
      sidebar_gas_amount.classList.add("tab_active");
      sidebar_profile.classList.remove("tab_active");
      sidebar_info.classList.remove("tab_active");
      sidebar_pay.classList.remove("tab_active");
      sidebar_el_price.classList.remove("tab_active");
      sidebar_el_calc.classList.remove("tab_active");
      sidebar_el_amount.classList.remove("tab_active");
      sidebar_el_graf.classList.remove("tab_active");
      sidebar_gas_price.classList.remove("tab_active");
      sidebar_gas_calc.classList.remove("tab_active");
      sidebar_gas_graf.classList.remove("tab_active");
      break;
    case 211:
      includeProfileContent.innerHTML = '<div class="profile_graf"><p class="profile_graf_title">обсяг споживання</p><img class="profile_graf_img" src="assets/images/graf_amount.png" alt="amount"><p class="profile_graf_title">вартість</p><img class="profile_graf_img" src="assets/images/graf_cost.png" alt="cost"><p class="profile_graf_title">сальдо</p><img class="profile_graf_img" src="assets/images/graf_saldo.png" alt="saldo"></div>';
      sidebar_gas_graf.classList.add("tab_active");
      sidebar_profile.classList.remove("tab_active");
      sidebar_info.classList.remove("tab_active");
      sidebar_pay.classList.remove("tab_active");
      sidebar_el_price.classList.remove("tab_active");
      sidebar_el_calc.classList.remove("tab_active");
      sidebar_el_amount.classList.remove("tab_active");
      sidebar_el_graf.classList.remove("tab_active");
      sidebar_gas_price.classList.remove("tab_active");
      sidebar_gas_calc.classList.remove("tab_active");
      sidebar_gas_amount.classList.remove("tab_active");
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

function showPaymentType2() {
  if (onlinePay_2.checked == true) {
    img_payment_type1_2.style.display = "block";
  } else {
    img_payment_type1_2.style.display = "none";
  }
  if (receipPay_2.checked == true) {
    profile_warning_2.style.display = "block";
    img_payment_type2_2.style.display = "block";
    profile_print_payment_2.style.display = "inline-block";
  } else {
    profile_warning_2.style.display = "none";
    img_payment_type2_2.style.display = "none";
    profile_print_payment_2.style.display = "none";
  }
}

function loginType (t) {
  switch (t) {
    case 1:
      loginf.classList.add("login_active");
      logink.classList.remove("login_active");
      loginfk.href = "fprofile.html";
      break;
    case 2:
      logink.classList.add("login_active");
      loginf.classList.remove("login_active");
      loginfk.href = "kprofile.html";
      break;
    default:
      {}
  }
}

function registerType (t) {
  switch (t) {
    case 1:
      loginf.classList.add("login_active");
      logink.classList.remove("login_active");
      register_input_fields.innerHTML = '<p class="form_label">Місто</p><input type="text" value="" class="login_data"><p class="form_label">Телефон</p><input type="text" value="" class="login_data"><p class="form_label">Придумайте пароль</p><input type="text" value="" class="login_data">';
      break;
    case 2:
      logink.classList.add("login_active");
      loginf.classList.remove("login_active");
      register_input_fields.innerHTML = '<p class="form_label">Назва компанії</p><input type="text" value="" class="login_data"><p class="form_label">Місто</p><input type="text" value="" class="login_data"><p class="form_label">Телефон</p><input type="text" value="" class="login_data"><p class="form_label">Придумайте пароль</p><input type="text" value="" class="login_data">';
      break;
    default:
      {}
  }
}

function recoveryNext(step) {
  switch (step) {
    case 1:
      recovery_inner.innerHTML = '<h3 class="form_title">Відновити пароль</h3><p class="recovery_text">На ваш телефон відправлено повідомлення з кодом для скидання пароля.</p><p class="form_label">Введіть код</p><input type="text" value="" class="login_data"><div class="login_btn"><p id="recovery_nextbtn" class="login_btnL" onclick="recoveryNext(3);">далі</p></div>';
      break;
    case 2:
      recovery_inner.innerHTML = '<h3 class="form_title">Відновити пароль</h3><p class="recovery_text">На ваш E-mail відправлено повідомлення з посиланням для скидання пароля.</p><div class="login_btn"><a href="fprofile.html" class="login_btnL">особистий кабінет</a></div>';
      break;
    case 3:
      recovery_inner.innerHTML = '<h3 class="form_title">Відновити пароль</h3><p class="form_label">Новий пароль</p><input type="text" value="" class="login_data"><p class="form_label">Повторіть пароль</p><input type="text" value="" class="login_data"><div class="login_btn"><p id="recovery_nextbtn" class="login_btnL">змінити пароль</p></div>';
      break;
    default:
      {}
  }
}

function openFuel(evt, fuelName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" activetab", "");
    }
    document.getElementById(fuelName).style.display = "block";
    evt.currentTarget.className += " activetab";
}
