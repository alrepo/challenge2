var clicked = false;
if (!clicked){
  document.querySelector(".dimImage").classList.add("hide");
  document.querySelector(".defaultImage").classList.remove("hide");
  document.querySelector(".circle1").classList.add("hide");
  document.querySelector(".circle2").classList.remove("hide");
  document.querySelector(".default").classList.add("blueBorder");
}

    document.querySelector(".default").addEventListener("click", function(){
    document.querySelector(".default").classList.add("blueBorder");
    document.querySelector(".dim").classList.remove("blueBorder");
    document.querySelector("body").classList.remove("dimBackground");
    document.querySelector("body").classList.add("defaultBackground");

    document.querySelector(".defaultImage").classList.remove("hide");
    document.querySelector(".dimImage").classList.add("hide");
    document.querySelector(".circle2").classList.remove("hide");
    document.querySelector(".circle1").classList.add("hide");
  });
  document.querySelector(".dim").addEventListener("click", function(){
    document.querySelector(".dim").classList.add("blueBorder");
    document.querySelector(".default").classList.remove("blueBorder");
    document.querySelector("body").classList.remove("defaultBackground");
    document.querySelector("body").classList.add("dimBackground");
    document.querySelector(".default").classList.remove("hide");
    document.querySelector("body").classList.add("defaultBackground");

    document.querySelector(".dimImage").classList.remove("hide");
    document.querySelector(".defaultImage").classList.add("hide");
    document.querySelector(".circle1").classList.remove("hide");
    document.querySelector(".circle2").classList.add("hide");
  });
