let delText = document.getElementById('deliveries_fuel');
let pt1 = document.getElementById('pt1');
let pt2 = document.getElementById('pt2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');
let p7 = document.getElementById('p7');
let pt8 = document.getElementById('pt8');
let bg_animation = document.getElementById('bg_animation');
let select_fuelG = document.getElementById('select_fuelG');
let select_fuelE = document.getElementById('select_fuelE');
let lamp1 = document.getElementById('lamp1');

function changeFuel(fuelType) {
  if(fuelType == "electricity") {
    pt1.innerHTML = "Процес укладання договору";
    pt2.innerHTML = "Документи, необхідні для укладання договору з постачальником електроенергії:";
    p3.innerHTML = "довідка про стан обліку електроенергії";
    p4.innerHTML = "перелік технічних характеристик комерційних точок обліку";
    p5.innerHTML = "свідоцтво про ДМА АСКОЕ/ЛУЗОД";
    p6.innerHTML = "акт вводу АСКОЕ/ЛУЗОД у промислову експлуатацію";
    p7.innerHTML = "Графік денного та почасового прогнозованого споживання електричної енергії";
    pt8.innerHTML = "Після одержання перерахованих документів, фахівці ТОВ «ВЕК «ПАЛИВЕНЕРГО» оперативно готують проект Договору про постачання електричної енергії. Цей проект відправляється споживачеві, для погодження його тексту згідно внутрішніх процедур споживача.";
    bg_animation.style.background = "url(assets/images/electricity-animation.gif) no-repeat";
    select_fuelE.classList.add("active_fuel");
    select_fuelG.classList.remove("active_fuel");
  } else if (fuelType) {
    pt1.innerHTML = "Загальні умови постачання";
    pt2.innerHTML = "Підставою для постачання природного газу споживачу є:";
    p3.innerHTML = "наявність у споживача, об’єкт якого підключений до газорозподільної системи, договору розподілу природного газу, укладеного в установленому порядку між споживачем та Оператором ГРМ, та присвоєння споживачу Оператором ГРМ персонального EIC-коду як суб’єкту ринку природного газу;";
    p4.innerHTML = "наявність у споживача, об’єкт якого підключений до газотранспортної системи, договору транспортування природного газу, укладеного в установленому порядку між споживачем та Оператором ГТС, та присвоєння споживачу Оператором ГТС персонального EIC-коду як суб’єкту ринку природного газу;";
    p5.innerHTML = "наявність у споживача укладеного з постачальником договору постачання природного газу та дотримання його умов;";
    p6.innerHTML = "наявність підтвердженого обсягу природного газу на відповідний розрахунковий період для потреб споживача;";
    p7.innerHTML = "відсутність простроченої заборгованості споживача за поставлений природний газ перед діючим постачальником (за його наявності), що має підтверджуватися письмовою довідкою діючого постачальника або складеним з ним актом звірки взаєморозрахунків.";
    pt8.innerHTML = "";
    bg_animation.style.background = "url(assets/images/gas-animation.gif) no-repeat";
    select_fuelE.classList.remove("active_fuel");
    select_fuelG.classList.add("active_fuel");
  }
}

function showreview(paper) {
  switch (paper) {
    case 1:
      paper1.src = "assets/images/review1.png";
      break;
    case 2:
      paper2.src = "assets/images/review2.png";
      break;
    case 3:
      paper3.src = "assets/images/review3.png";
      break;
    case 4:
      paper4.src = "assets/images/review4.png";
      break;
    case 5:
      paper5.src = "assets/images/review5.png";
      break;
    case 6:
      paper6.src = "assets/images/review6.png";
      break;
    case 7:
      paper7.src = "assets/images/review7.png";
      break;
    default:
      {}
  }
}

function showdeliver(sec) {
  switch (sec) {
    case 1:
      deliver_section_text1.innerHTML = "Договір про постачання електричної енергії споживачу з 01.01.2019р.";
      deliver_section_text1.style = "padding-top: 30px;";
      deliver_section_link1.innerHTML = "завантажити файл";
      deliver_section_text2.innerHTML = "Комерційна пропозиція №1 - 100% предоплата без розподілу";
      deliver_section_text2.style = "padding-top: 30px;";
      deliver_section_link2.innerHTML = "завантажити файл";
      deliver_section_text3.innerHTML = "Комерційна пропозиція №2 - 4 планових платіжа по 25% предоплата без розподілу";
      deliver_section_text3.style = "padding-top: 30px;";
      deliver_section_link3.innerHTML = "завантажити файл";
      deliver_section_text4.innerHTML = "Комерційна пропозиція №3 - подекадна оплата без розподілу";
      deliver_section_text4.style = "padding-top: 30px;";
      deliver_section_link4.innerHTML = "завантажити файл";
      deliver_section_text5.innerHTML = "Комерційна пропозиція №4 - 50% предоплата без розподілу";
      deliver_section_text5.style = "padding-top: 30px;";
      deliver_section_link5.innerHTML = "завантажити файл";
      deliver_section_text6.innerHTML = "Зразок звернення Споживача щодо коригування обсягів постачання";
      deliver_section_text6.style = "padding-top: 30px;";
      deliver_section_link6.innerHTML = "завантажити файл";
      deliver_section_text7.innerHTML = "Відомість про обсяги очікуваного споживання електричної енергії";
      deliver_section_text7.style = "padding-top: 30px;";
      deliver_section_link7.innerHTML = "завантажити файл";
      deliver_section_text8.innerHTML = "Ліцензія електроенергія";
      deliver_section_text8.style = "padding-top: 30px;";
      deliver_section_link8.innerHTML = "завантажити файл";
      deliver_section_text9.innerHTML = "Ліцензія газ";
      deliver_section_text9.style = "padding-top: 30px;";
      deliver_section_link9.innerHTML = "завантажити файл";
      break;
    case 2:
      //includeSlider.innerHTML = '<ul id="slides"><li class="slide showing"><div class="slider_inner"><p class="slider_text">Документи, необхідні для укладання договору з постачальником електроенергії:</p><ol class="slider_numlist"><li class="slider_list">довідка про стан обліку електроенергії</li><li class="slider_list">перелік технічних характеристик комерційних точок обліку</li><li class="slider_list">свідоцтво про ДМА АСКОЕ/ЛУЗОД</li><li class="slider_list">акт вводу АСКОЕ/ЛУЗОД у промислову експлуатацію</li><li class="slider_list">Графік денного та почасового прогнозованого споживання електричної енергії</li></ol></div><div class="slider_inner"><img class="slider_image" src="./assets/images/steps1num.png" alt="1"></div><p class="slider_next" onclick="nextSlide();"></p></li><li class="slide"><div class="slider_inner"><p class="slider_text">Після одержання перерахованих документів, фахівці ТОВ «ВЕК «ПАЛИВЕНЕРГО» оперативно готують проект Договору про постачання електричної енергії. Цей проект відправляється споживачеві, для погодження його тексту згідно внутрішніх процедур споживача.</p><p class="slider_text">Кінцевим етапом укладення договору є його підписання, та скріплення підписів печатками підприємств.</p></div><div class="slider_inner"><img class="slider_image" src="./assets/images/steps2num.png" alt="1"></div><p class="slider_prev" onclick="prevSlide();"></p><p class="slider_next" onclick="nextSlide();"></p></li><li class="slide"><div class="slider_inner"><p class="slider_text">Слід наголосити, що Споживач має завчасно та у встановлені терміни:</p><ol class="slider_numlist"><li class="slider_list">повідомити обленерго про перехід до незалежного постачальника</li><li class="slider_list">здійснити остаточний розрахунок з обленерго</li><li class="slider_list">призупинити діючий Договір з обленерго в частині постачання активної електричної енергії</li></ol></div><div class="slider_inner"><img class="slider_image" src="./assets/images/steps3num.png" alt="1"></div><p class="slider_prev" onclick="prevSlide();"></p></li></ul>';
      break;
    case 3:
      includeActs.innerHTML = '<p class="deliver_section_text" id="deliver_section3_text1">У своїй діяльності ТОВ "Вільна Енергетична Компанія "ПАЛІВЕНЕРГО" керується наступними нормативно-правовими актами:</p><p class="text deliveries_list">Закон України «Про ринок електричної енергії» № 2019-VIII від 13.04.2017</p><p class="text deliveries_list">Закон України «Про ліцензування видів господарської діяльності»</p><p class="text deliveries_list">Постанова НКРЕ №1421 від 29.10.2010 р. «Про затвердження Порядку доступу постачальників електричної енергії за нерегульованим тарифом до місцевих (локальних) електричних мереж»</p><p class="text deliveries_list">Постанова НКРЕКП від 14.03.2018 № 307 “Про затвердження Правил ринку”</p><p class="text deliveries_list">Постанова НКРЕКП від 14.03.2018 № 309 “Про затвердження Кодексу системи передачі”</p><p class="text deliveries_list">Постанова НКРЕКП від 14.03.2018 № 311 “Про затвердженння Кодексу комерційного обліку електричної енергії”</p><p class="text deliveries_list">Постанова НКРЕКП від 14.03.2018 № 310 “Про затвердження Кодексу системи розподілу”</p><p class="text deliveries_list">Постанова НКРЕКП від 14.03.2018 № 308 “Про затвердження Правил ринку “на добу наперед” та внутрішньодобового ринку”</p><p class="text deliveries_list">Постанова НКРЕКП від 27.12.2017 № 1469 “Про затвердження Ліцензійних умов провадження господарської діяльності з постачання електричної енергії споживачу”</p><p class="text deliveries_list">Постанова НКРЕКП від 14.03.2018 № 312 “Про затвердження Правил роздрібного ринку електричної енергії”</p><p class="text deliveries_list">Антикорупційна програма</p>'
      break;
    case 4:
      paper4.src = "assets/images/review4.png";
      break;
    case 5:
      paper5.src = "assets/images/review5.png";
      break;
    default:
      {}
  }
}

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;

function prevSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide-1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

function nextSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1);
    slides[currentSlide].className = 'slide showing';
}

function lightOn(lamp) {
  switch (lamp) {
  case 1:
    lamp1.src = "assets/images/lamp_active01.png";
    break;
  case 2:
    lamp2.src = "assets/images/lamp_active02.png";
    break;
  case 3:
    lamp3.src = "assets/images/lamp_active03.png";
    break;
  case 4:
    lamp4.src = "assets/images/lamp_active04.png";
    break;
  default:
    {}
  }
}

var smoothJumpUp = function() {
  if (document.body.scrollTop>0 || document.documentElement.scrollTop>0) {
    window.scrollBy(0,-80);
    setTimeout(smoothJumpUp, 0.2);
    }
}

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 1000) {
  	document.getElementById('upbutton').style.display = 'block';
  } else {
    document.getElementById('upbutton').style.display = 'none';
  }
}

var intro='<div class="header"><div class="topmenu"><img class="top_logo" src="assets/images/header_logo.png" alt="logo"><a href="#" class="top_news_link">новини</a><p class="header_icon"><span id="s1"></span><span id="s2"></span><span id="s3"></span></p></div><div class="header_intro"><p class="intro_text">енергія</p><p class="intro_text">вашого</p><p class="lch">бізнесу</p><a href="#" class="intro_btn">замовити розрахунок</a></div></div>';

var statement='<div class="joinus"><form class="joinus_form"><div class="joinus_input"><div class="joinus_input_inner"><p class="form_label">Ваше ім\'я</p><input type="text" value=""><p class="form_label">Телефон</p><input type="text" value=""><p class="form_label">Плановане споживання</p><p class="form_subtitle">(кВт⋅ч в місяць)</p><input type="text" value=""></div></div><div class="joinus_send"><div id="joinus_choise"><a href="#" class="joinus_link joinus_active">електроенергія</a><a href="#" class="joinus_link">газ</a></div><h2 class="title joinus_title">Заявка на поставку електроенергії</h2><span class="checkbox"><a href="#" class="joinus_send_link">відправити</a><input id="checkbox" type="checkbox"><label for="checkbox">я кліент компанії</label></span></div><div class="clear"></div></form></div>';

var footer='<div class="footer"><div class="footer_logo"><ul><li><img class="footer_img" src="assets/images/footer_logo.png" alt="logo"></li><li class="footer_imgsubtitle">© 2013-2019 ТОВ "Вільна Енергетична Компанія ПАЛІВЕНЕРГО"</li></ul></div><div class="info"><ul><li class="footer_info">информация</li><li><a href="contacts.html" class="footer_link">контакты</a></li><li><a href="#" class="footer_link">новости</a></li><li><a href="#" class="footer_link">поставка электроэнергии</a></li></ul></div><div class="contacts"><ul><li>+38 (094) 936-48-81</li><li>+38 (061) 708-28-81</li><li>VEK@palivenergy.com.ua</li></ul></div><div class="address"><ul><li>Пт - Пн</li><li>9:00 - 18:00</li><li>пр.Соборний,180 Запорiжжя 69035, Україна</li></ul></div></div>';

if (includeStatement) {
  includeStatement.innerHTML = statement;
}

if (includeFooter) {
  includeFooter.innerHTML = footer;
}

if (includeIntro) {
  includeIntro.innerHTML = intro;
}

//document.getElementById("includeStatement").innerHTML = statement;
//document.getElementById("includeFooter").innerHTML = footer;
//document.getElementById("includeIntro").innerHTML = intro;
