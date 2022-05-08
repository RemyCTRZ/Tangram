function formeSwitch(a) {
    let forme = document.getElementById("tangramMain");
    forme.className = "tangramMain";
    switch (a) {
        case '':
            forme.classList.add("baisc");
        case 'basic':
            forme.classList.add("basic");
            break;
        case "fish":
            forme.classList.add("fish");
            break;
        case 'bear':
            forme.classList.add("bear");
            break;
        case 'dog':
            forme.classList.add("dog");
            break;
        case 'cat':
            forme.classList.add("cat");
            break;
        case 'swan':
            forme.classList.add("swan");
            break;
        case 'camel':
            forme.classList.add("camel");
            break;
    }
}

function nightMode() {
    let body = document.body;
    let icon = document.getElementById('icon_night_mode');
    body.getAttribute("id") === "nightMode" ? body.removeAttribute("id") : body.setAttribute("id", "nightMode");
    if (icon.className === "fa-solid fa-sun")
    {
      icon.className = "fa-solid fa-moon";
    }
    else
    {
      icon.className = "fa-solid fa-sun";
    }
  }