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

initials();
