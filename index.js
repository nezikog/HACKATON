function SingUp(){
    let Name = "Кирилл";
    let SurName = "Шумаков";

    
    let inputN = document.getElementById("inputN");
    let inputNS = document.getElementById("inputSN");

    if(inputN.value == Name && inputNS.value == SurName){
        console.log("Verify");
        inputN.classList.remove("red");
        inputNS.classList.remove("red");
    }
    else{
        alert("Данные введены неккоректно! Попробуйте снова!")
        inputN.classList.add("red");
        inputNS.classList.add("red");  
    }
}
