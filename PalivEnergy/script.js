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
    link_fullinfo.href = 'energydeliveries.html';
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

function joinusFuel (fuel) {
  switch (fuel) {
    case 1:
      joinusF.innerHTML = "Заявка на поставку електроенергії";
      joinusEnergy.classList.add("joinus_active");
      joinusGas.classList.remove("joinus_active");
      break;
    case 2:
      joinusF.innerHTML = "Заявка на поставку природного газу";
      joinusGas.classList.add("joinus_active");
      joinusEnergy.classList.remove("joinus_active");
      break;
    default:
      {}
  }
}

function changePersonStatus (status) {
  switch (status) {
    case 1:
      physicalPerson.classList.add("active_person");
      legalPerson.classList.remove("active_person");
      person_inner_text.innerHTML = '<p class="slider_text">Якщо бажаєте мати взимку комфортну температуру в оселі за комфортною ціною, то вам до нас!</p>  <p class="slider_text">Змінюйте старого постачальника та ставайте клієнтом ТОВ “ВЕК “Палівенерго”!</p><p class="slider_text">Приєднатися до нас просто:</p><p class="text deliveries_list">завантажте, заповніть та передайте наявному постачальнику <span class="marked_text">пакет документів</span>. Підписана Додаткова угода до Типового договору має бути у двох примірниках</p><p class="text deliveries_list">завантажте, заповніть та передайте нам <span class="marked_text">заяву-приєднання</span>, додавши копії паспорту, ІПН і документу права на власність або користування об’єктом (ВСІ КОПІЇ МАЮТЬ БУТИ ЗАВІРЕНІ ВАМИ З ПРИПИСОМ, КОПІЯ ДІЙСНА, ДАТА, ПІБ та ПІДПИС)</p><p class="text deliveries_list">отримайте від попереднього постачальника довідку про заборгованість і передайте її нам оригінал або копію</p><p class="slider_text">Ознайомитися з умовами Типового договору можна за <span class="marked_text"> посиланням</span></p>';
      break;
    case 2:
      legalPerson.classList.add("active_person");
      physicalPerson.classList.remove("active_person");
      person_inner_text.innerHTML = '<p class="slider_text">Ви можете зробити ваш бізнес ефективнішим, уклавши угоду з ТОВ “ВЕК “Палівенерго”</p><p class="slider_text">Ми допоможемо заощадити ваші гроші завдяки нашій ціні на газ! В грудні 2019 року ціна газу становить від 5 496 грн в залежності від обсягів постачання та умов оплати</p><p class="slider_text">Ви можете вільно змінити старого постачальника та укласти договір з нами, щоб отримати енергоносій за привабливою ціною та комфортними умовами</p><p class="slider_text">Приєднатися до компанії ТОВ “ВЕК “Палівенерго” просто – зв’яжіться з нами, отримайте необхідну інформацію та зробіть ваш бізнес енергоефективним</p>';
      break;
    default:
      {}
  }
}

function showdeliver(sec) {
  switch (sec) {
    case 1:
      includeDocs.innerHTML = '<p class="deliver_section_text">Договір про постачання електричної енергії споживачу з 01.01.2019р.</p><a href="#" class="deliver_section_link">завантажити файл</a><p class="deliver_section_text">Комерційна пропозиція №1 - 100% предоплата без розподілу</p><a href="#" class="deliver_section_link">завантажити файл</a><p class="deliver_section_text">Комерційна пропозиція №2 - 4 планових платіжа по 25% предоплата без розподілу</p><a href="#" class="deliver_section_link">завантажити файл</a><p class="deliver_section_text">Комерційна пропозиція №3 - подекадна оплата без розподілу</p><a href="#" class="deliver_section_link">завантажити файл</a><p class="deliver_section_text">Комерційна пропозиція №4 - 50% предоплата без розподілу</p><a href="#" class="deliver_section_link">завантажити файл</a><p class="deliver_section_text">Зразок звернення Споживача щодо коригування обсягів постачання</p><a href="#" class="deliver_section_link">завантажити файл</a><p class="deliver_section_text">Відомість про обсяги очікуваного споживання електричної енергії</p><a href="#" class="deliver_section_link">завантажити файл</a><p class="deliver_section_text">Ліцензія електроенергія</p><a href="#" class="deliver_section_link">завантажити файл</a><p class="deliver_section_text">Ліцензія газ</p><a href="#" class="deliver_section_link">завантажити файл</a>';
      break;
    case 2:
      del_section2.style.height = "auto";
      break;
    case 3:
      includeActs.innerHTML = '<p class="deliver_section_text">У своїй діяльності ТОВ "Вільна Енергетична Компанія "ПАЛІВЕНЕРГО" керується наступними нормативно-правовими актами:</p><p class="text deliveries_list">Закон України «Про ринок електричної енергії» № 2019-VIII від 13.04.2017</p><p class="text deliveries_list">Закон України «Про ліцензування видів господарської діяльності»</p><p class="text deliveries_list">Постанова НКРЕ №1421 від 29.10.2010 р. «Про затвердження Порядку доступу постачальників електричної енергії за нерегульованим тарифом до місцевих (локальних) електричних мереж»</p><p class="text deliveries_list">Постанова НКРЕКП від 14.03.2018 № 307 “Про затвердження Правил ринку”</p><p class="text deliveries_list">Постанова НКРЕКП від 14.03.2018 № 309 “Про затвердження Кодексу системи передачі”</p><p class="text deliveries_list">Постанова НКРЕКП від 14.03.2018 № 311 “Про затвердженння Кодексу комерційного обліку електричної енергії”</p><p class="text deliveries_list">Постанова НКРЕКП від 14.03.2018 № 310 “Про затвердження Кодексу системи розподілу”</p><p class="text deliveries_list">Постанова НКРЕКП від 14.03.2018 № 308 “Про затвердження Правил ринку “на добу наперед” та внутрішньодобового ринку”</p><p class="text deliveries_list">Постанова НКРЕКП від 27.12.2017 № 1469 “Про затвердження Ліцензійних умов провадження господарської діяльності з постачання електричної енергії споживачу”</p><p class="text deliveries_list">Постанова НКРЕКП від 14.03.2018 № 312 “Про затвердження Правил роздрібного ринку електричної енергії”</p><p class="text deliveries_list">Антикорупційна програма</p>'
      break;
    case 4:
      del_section4.style.height = "auto";
      break;
    case 5:
      del_section5.style.height = "auto";
      break;
    case 21:
      del_section21.style.height = "auto";
      break;
    case 22:
      includeLaw.innerHTML = '<p class="deliver_section_text">Закон України "Про ринок природного газу"</p><a href="#" class="deliver_section_link">дивитися</a><p class="deliver_section_text">Постанова НКРЕКП № 2496 «Про затвердження правил постачання природного газу»</p><a href="#" class="deliver_section_link">дивитися</a><p class="deliver_section_text">Постанова НКРЕКП № 2494 «Про затвердження кодексу газорозподільних систем»</p><a href="#" class="deliver_section_link">дивитися</a><p class="deliver_section_text">Загальні умови постачання природного газу</p><a href="#" class="deliver_section_link">посилання на документ</a><p class="deliver_section_text">Права та обов’язки постачальника та споживача</p><a href="#" class="deliver_section_link">посилання на документ</a>';
      break;
    case 23:
      del_section23.style.height = "auto";
      break;
    case 24:
      del_section24.style.height = "auto";
      break;
    case 25:
      includePersonStatus.innerHTML = '<div class="chose_person_status"><p class="person_status active_person" onclick="changePersonStatus(1);" id="physicalPerson">фізична особа</p><p class="person_status" onclick="changePersonStatus(2);" id="legalPerson">юридична особа</p></div><div class="person_inner" id="person_inner_text"><p class="slider_text">Якщо бажаєте мати взимку комфортну температуру в оселі за комфортною ціною, то вам до нас!</p>  <p class="slider_text">Змінюйте старого постачальника та ставайте клієнтом ТОВ “ВЕК “Палівенерго”!</p><p class="slider_text">Приєднатися до нас просто:</p><p class="text deliveries_list">завантажте, заповніть та передайте наявному постачальнику <span class="marked_text">пакет документів</span>. Підписана Додаткова угода до Типового договору має бути у двох примірниках</p><p class="text deliveries_list">завантажте, заповніть та передайте нам <span class="marked_text">заяву-приєднання</span>, додавши копії паспорту, ІПН і документу права на власність або користування об’єктом (ВСІ КОПІЇ МАЮТЬ БУТИ ЗАВІРЕНІ ВАМИ З ПРИПИСОМ, КОПІЯ ДІЙСНА, ДАТА, ПІБ та ПІДПИС)</p><p class="text deliveries_list">отримайте від попереднього постачальника довідку про заборгованість і передайте її нам оригінал або копію</p><p class="slider_text">Ознайомитися з умовами Типового договору можна за <span class="marked_text"> посиланням</span></p></div>';
      break;
    case 26:
      includePrices.innerHTML = '<p class="slider_text">Відповідно до ч.2 ст.12 Закону України «Про ринок природного газу», постачання природного газу здійснюється за цінами, що вільно встановлюються між постачальником та споживачем, крім випадків, передбачених цим Законом. Зважаючи на викладене, ціна, спосіб та умови оплати на природний газ та порядок розрахунків за спожитий газ встановлюється сторонами в Договорі</p><a href="#" class="deliver_section_link">типовий договір</a>';
      break;
    case 27:
      includeDecigion.innerHTML = '<p class="slider_text">Спори, що виникли із цього Договору, вирішуються шляхом двосторонніх переговорів уповноваженими представниками Сторін. У випадку недосягнення згоди шляхом переговорів, суперечки передаються на вирішення в господарські суди України, які мають відповідну юрисдикцію і розглядаються в установленому порядку згідно з чинним законодавством України</p><p class="slider_text">Всі спори і розбіжності, які можуть виникнути щодо тлумачення і застосування договору поставки природного газу або в зв’язку з ним, або інші суперечки, які можуть виникнути при взаємодії між постачальником і споживачем, будуть вирішуватися шляхом переговорів і консультацій</p><p class="slider_text">У випадку виникнення будь-яких спірних питань, будь ласка звертайтеся за адресою пр.Соборний, 180 Запоріжжя 69035, Україна , з понеділка по п’ятницю з 9:00 до 18:00, за телефоном <span class="marked_text">+38 (066) 171-55-05</span>, або на електронну пошту: <span class="marked_text">VEK@palivenergy.com.ua</span></p><p class="slider_text">Особа, відповідальна за врегулювання спорів: Директор Логійко Ігор Станіславович</p><p class="slider_text">У випадку недосягнення згоди шляхом проведення переговорів споживач має право звернутися із відповідною заявою до Регулятора ринку природного газу та/або передати спір на розгляд до суду у відповідності з чинним законодавством України</p><p class="slider_text">Порядок розгляду вказаних скарг Регулятором передбачений ст. 21 Закону України «Про Національну комісію, що здійснює державне регулювання у сферах енергетики та комунальних послуг»</p>';
      break;
    default:
      {}
  }
}

var intro_slides = document.querySelectorAll('#intro_slides .intro_slide');
var currentSlideI = 0;
var slideInterval = setInterval(nextSlideI,5000);

function nextSlideI(){
    intro_slides[currentSlideI].className = 'intro_slide';
    currentSlideI = (currentSlideI+1)%intro_slides.length;
    intro_slides[currentSlideI].className = 'intro_slide showing';
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
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

var slides2 = document.querySelectorAll('#slides2 .slide2');
var currentSlide2 = 0;

function prevSlide2(){
    slides2[currentSlide2].className = 'slide2';
    currentSlide2 =(currentSlide2-1);
    slides2[currentSlide2].className = 'slide2 showing';
}

function nextSlide2(){
    slides2[currentSlide2].className = 'slide2';
    currentSlide2 = (currentSlide2+1)%slides2.length;
    slides2[currentSlide2].className = 'slide2 showing';
}

var slides3 = document.querySelectorAll('#slides3 .slide3');
var currentSlide3 = 0;

function prevSlide3(){
    slides3[currentSlide3].className = 'slide3';
    currentSlide3 =(currentSlide3-1);
    slides3[currentSlide3].className = 'slide3 showing';
}

function nextSlide3(){
    slides3[currentSlide3].className = 'slide3';
    currentSlide3 = (currentSlide3+1)%slides3.length;
    slides3[currentSlide3].className = 'slide3 showing';
}

var slides21 = document.querySelectorAll('#slides21 .slide21');
var currentSlide21 = 0;

function prevSlide21(){
    slides21[currentSlide21].className = 'slide21';
    currentSlide21 =(currentSlide21-1);
    slides21[currentSlide21].className = 'slide21 showing';
}

function nextSlide21(){
    slides21[currentSlide21].className = 'slide21';
    currentSlide21 = (currentSlide21+1)%slides21.length;
    slides21[currentSlide21].className = 'slide21 showing';
}

var slides23 = document.querySelectorAll('#slides23 .slide23');
var currentSlide23 = 0;

function prevSlide23(){
    slides23[currentSlide23].className = 'slide23';
    currentSlide23 =(currentSlide23-1);
    slides23[currentSlide23].className = 'slide23 showing';
}

function nextSlide23(){
    slides23[currentSlide23].className = 'slide23';
    currentSlide23 = (currentSlide23+1)%slides23.length;
    slides23[currentSlide23].className = 'slide23 showing';
}

var slides24 = document.querySelectorAll('#slides24 .slide24');
var currentSlide24 = 0;

function prevSlide24(){
    slides24[currentSlide24].className = 'slide24';
    currentSlide24 =(currentSlide24-1);
    slides24[currentSlide24].className = 'slide24 showing';
}

function nextSlide24(){
    slides24[currentSlide24].className = 'slide24';
    currentSlide24 = (currentSlide24+1)%slides24.length;
    slides24[currentSlide24].className = 'slide24 showing';
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

function showMoreNews(step) {
  switch (step) {
  case 1:
    news.style.height = "2500px";
    news_grad.innerHTML = '<div class="news_grad2"><p class="news_more more_link preudo" onclick="showMoreNews(2);">больше новостей</p></div><div class="news_grad"></div>';
    break;
  case 2:
    news.style.height = "auto";
    news_grad.innerHTML = '<p class="news_more more_link" style="margin-top:100px; margin-left:48%;">всі новини</p>';
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

//var intro='<div class="header"><div class="header_intro"><p class="intro_text">енергія</p><p class="intro_text">вашого</p><p class="lch">бізнесу</p><a href="#" class="intro_btn">замовити розрахунок</a></div></div>';

var statement='<div class="joinus"><form class="joinus_form"><div class="joinus_input"><div class="joinus_input_inner"><p class="form_label">Ваше ім\'я</p><input type="text" value="" class="join_data"><p class="form_label">Телефон</p><input type="text" value="" class="join_data"><p class="form_label">Плановане споживання</p><p class="form_subtitle">(кВт⋅ч в місяць)</p><input type="text" value="" class="join_data"></div></div><div class="joinus_send"><div id="joinus_choise"><p class="joinus_link joinus_active" onclick="joinusFuel(1);" id="joinusEnergy">електроенергія</p><p class="joinus_link" onclick="joinusFuel(2);" id="joinusGas">газ</p></div><h2 class="title joinus_title" id="joinusF">Заявка на поставку електроенергії</h2><p class="text joinus_text">Заповніть форму і ми вам передзвонимо</p><span class="checkbox"><a href="#" class="joinus_send_link">відправити</a><input id="checkbox" type="checkbox"><label for="checkbox">я кліент компанії</label></span></div><div class="clear"></div></form></div>';

var footer='<div class="footer"><div class="footer_logo"><ul><li><img class="footer_img" src="assets/images/footer_logo.png" alt="logo"></li><li class="footer_imgsubtitle">© 2013-2019 ТОВ "Вільна Енергетична Компанія ПАЛІВЕНЕРГО"</li></ul></div><div class="info"><ul><li class="footer_info">информация</li><li><a href="contacts.html" class="footer_link">контакты</a></li><li><a href="#" class="footer_link">новости</a></li><li><a href="energydeliveries.html" class="footer_link">поставка электроэнергии</a></li></ul></div><div class="contacts"><ul><li>+38 (094) 936-48-81</li><li>+38 (061) 708-28-81</li><li>VEK@palivenergy.com.ua</li></ul></div><div class="address"><ul><li>Пт - Пн</li><li>9:00 - 18:00</li><li>пр.Соборний,180 Запорiжжя 69035, Україна</li></ul></div></div>';

//if (includeIntro) {
//  includeIntro.innerHTML = intro;
//}

if (includeStatement) {
  includeStatement.innerHTML = statement;
}

if (includeFooter) {
  includeFooter.innerHTML = footer;
}
