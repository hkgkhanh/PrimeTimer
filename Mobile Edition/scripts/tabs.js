function openTab(tab) {
  document.getElementById("timer_div").style.display = "none";
  document.getElementById("stats_div").style.display = "none";
  document.getElementById("options_div").style.display = "none";
  document.getElementById("about_div").style.display = "none";
  
  document.getElementById(tab).style.display = "block";
  
  document.getElementById("timer_tab").blur();
  document.getElementById("stats_tab").blur();
  document.getElementById("options_tab").blur();
  document.getElementById("about_tab").blur();
}

function initTabs() {
  openTab("timer_div");
}