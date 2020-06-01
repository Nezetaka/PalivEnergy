function openMenu() {
  document.getElementById("sidebar").classList.toggle('activesidebar');
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
