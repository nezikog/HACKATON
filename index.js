function SingUp(){
    let Name = "Кирилл";
    let SurName = "Шумаков";

    
    let inputN = document.getElementById("inputN");
    let inputNS = document.getElementById("inputSN");

    if(inputN.value == Name && inputNS.value == SurName){
        window.location.href = "diary.html";
        inputN.classList.remove("red");
        inputNS.classList.remove("red");
    }
    else{
        alert("Данные введены неккоректно! Попробуйте снова!")
        inputN.classList.add("red");
        inputNS.classList.add("red");  
    }
}

function initials(){
    let Name = "Кирилл";
    let SurName = "Шумаков";
    
    let nameTxt = document.getElementById("name")
    let surnameTxt = document.getElementById("surname")

    nameTxt.textContent = Name
    surnameTxt.textContent = SurName
}

function Lessons(){
    let lesson0 = "C#"
    let lesson1 = "Html, Css, Js"

    let Less0 = document.getElementById("en0")
    let Less1 = document.getElementById("en1")
    
    Less0.textContent = lesson0
    Less1.textContent = lesson1
}

function Time(){
    let lesson0 = "C#"
    let lesson1 = "Html, Css, Js"

    let time0 = "10.00 до 11.30"
    let time1 = "11.45 до 12.00"

    let Less0 = document.getElementById("enn0")
    let Less1 = document.getElementById("enn1")
    
    Less0.textContent = lesson0 + " " +time0
    Less1.textContent = lesson1 + " " +time1
}

Time();
Lessons();
initials();
