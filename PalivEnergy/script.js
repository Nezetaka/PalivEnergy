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

function lightOn(lamp) {
  if (lamp == 'lamp1') {
    lamp1.src = "assets/images/lamp_active01.png";
  } else if (lamp == 'lamp2') {
    lamp2.src = "assets/images/lamp_active02.png";
  } else if (lamp == 'lamp3') {
    lamp3.src = "assets/images/lamp_active03.png";
  } else if (lamp == 'lamp4') {
    lamp4.src = "assets/images/lamp_active04.png";
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
