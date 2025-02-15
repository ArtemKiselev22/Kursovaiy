document.getElementById("home_tab").addEventListener("click", function() {
    document.getElementById("home_tab").classList.add("active");
    document.getElementById("info_tab").classList.remove("active");
    document.getElementById("services_tab").classList.remove("active");
});

document.getElementById("info_tab").addEventListener("click", function() {
    document.getElementById("home_tab").classList.remove("active");
    document.getElementById("info_tab").classList.add("active");
    document.getElementById("services_tab").classList.remove("active");
});

document.getElementById("services_tab").addEventListener("click", function() {
    document.getElementById("home_tab").classList.remove("active");
    document.getElementById("info_tab").classList.remove("active");
    document.getElementById("services_tab").classList.add("active");
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.backgroundColor = "black";
  } else {
    document.getElementById("navbar").style.backgroundColor = "#333";
  }

}

