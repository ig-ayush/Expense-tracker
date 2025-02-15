function checkDevice() {
  if (window.innerWidth > 768) {
    document;
  }
}
const inputCon = document.getElementById("input-con");
const enter = document.getElementById("TrackExpence");

function showInputs() {
  const showBtn = document.getElementById("showInput");
  showBtn.innerHTML = showBtn.innerText == "Clear" ? "Get Started" : "Clear";
  inputCon.classList.toggle("hidden");
  enter.classList.toggle("hidden");
  inputCon.classList.toggle("animate-fadeIn");
  enter.classList.toggle("animate-fadeIn");

  showBtn.addEventListener("click", () => {
    localStorage.clear("Name");
    if (localStorage.clear) {
      document.getElementById("username").value = "";
      document.getElementById("balance").value = "";
    }
  });
}

function TrackExpence() {
  let name = document.getElementById("username").value;
  let balance = document.getElementById("balance").value;

  if (name != "" && balance != "") {
    localStorage.setItem("Name", name);
    localStorage.setItem("Balance", balance);
  } else {
    return;
  }
  window.location.href = "./src/trackExpence.html";
}

if (localStorage.getItem("Name") && localStorage.getItem("Balance")) {
  document.getElementById("username").value = localStorage.getItem("Name");
  document.getElementById("balance").value = localStorage.getItem("Balance");
}

// Desktop Warnning 
function checkDevice() {
  if (window.innerWidth > 768) {
    document.getElementById("warnning").classList.remove("hidden");
    document.getElementById("warnning").classList.add("animate-fadeIn");
  }
}

checkDevice();
window.addEventListener("resize", checkDevice);

document.querySelector("details").addEventListener("toggle", function () {
  const headings = document.getElementById("headings");
  if (this.open) {
    headings.style.transform = "translateY(10px)";
    headings.style.transition = "transform 0.5s ease-in-out";
  } else {
    headings.style.transform = "translateY(0px)";
  }
});
