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

document.getElementById("includeIntro").innerHTML = intro;

var statement='<div class="joinus"><form class="joinus_form"><div class="joinus_input"><div class="joinus_input_inner"><p class="form_label">Ваше ім\'я</p><input type="text" value=""><p class="form_label">Телефон</p><input type="text" value=""><p class="form_label">Плановане споживання</p><p class="form_subtitle">(кВт⋅ч в місяць)</p><input type="text" value=""></div></div><div class="joinus_send"><div id="joinus_choise"><a href="#" class="joinus_link joinus_active">електроенергія</a><a href="#" class="joinus_link">газ</a></div><h2 class="title joinus_title">Заявка на поставку електроенергії</h2><span class="checkbox"><a href="#" class="joinus_send_link">відправити</a><input id="checkbox" type="checkbox"><label for="checkbox">я кліент компанії</label></span></div><div class="clear"></div></form></div>';

document.getElementById("includeStatement").innerHTML = statement;

var footer='<div class="footer"><div class="footer_logo"><ul><li><img class="footer_img" src="assets/images/footer_logo.png" alt="logo"></li><li class="footer_imgsubtitle">© 2013-2019 ТОВ "Вільна Енергетична Компанія ПАЛІВЕНЕРГО"</li></ul></div><div class="info"><ul><li class="footer_info">информация</li><li><a href="contacts.html" class="footer_link">контакты</a></li><li><a href="#" class="footer_link">новости</a></li><li><a href="#" class="footer_link">поставка электроэнергии</a></li></ul></div><div class="contacts"><ul><li>+38 (094) 936-48-81</li><li>+38 (061) 708-28-81</li><li>VEK@palivenergy.com.ua</li></ul></div><div class="address"><ul><li>Пт - Пн</li><li>9:00 - 18:00</li><li>пр.Соборний,180 Запорiжжя 69035, Україна</li></ul></div></div>';

document.getElementById("includeFooter").innerHTML = footer;
