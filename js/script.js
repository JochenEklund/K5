let card = document.querySelectorAll(".Card");
let art = document.querySelectorAll(".Art");
let knappN = document.querySelectorAll(".knappNext");
let knappNph = document.querySelectorAll(".knappNextPlaceholder");
let knappP = document.querySelectorAll(".knappPre");
let knappPph = document.querySelectorAll("knappPrePlaceholder");
let flex = document.querySelectorAll(".flex");
let storlek = window.matchMedia("(max-width: 600px)");

function ÄndraBild()
{
    if(storlek.matches){
        card.forEach(element => element.removeEventListener("mouseover", Byt));
        art.forEach(element => element.removeEventListener("mouseout", BytTillbaka));
        card.forEach(element => element.addEventListener("click", Byt));
        art.forEach(element => element.addEventListener("click", BytTillbaka));
    }
    else{
        card.forEach(element => element.removeEventListener("click", Byt));
        art.forEach(element => element.removeEventListener("click", BytTillbaka));
        card.forEach(element => element.addEventListener("mouseover", Byt));
        art.forEach(element => element.addEventListener("mouseout", BytTillbaka));
    }
}

knappN.forEach(element => element.addEventListener("click", KnappTryck));
knappP.forEach(element => element.addEventListener("click", KnappTryck));

function KnappTryck()
{
    if(storlek.matches){
        card.forEach(element => element.removeEventListener("click", Byt));
        art.forEach(element => element.removeEventListener("click", BytTillbaka));
        setTimeout(
            () => {
                card.forEach(element => element.addEventListener("click", Byt));
                art.forEach(element => element.addEventListener("click", BytTillbaka));
            },
            1000
        );
    }
    else{
        card.forEach(element => element.removeEventListener("mouseover", Byt));
        art.forEach(element => element.removeEventListener("mouseout", BytTillbaka));
        setTimeout(
            () => {
                card.forEach(element => element.addEventListener("mouseover", Byt));
                art.forEach(element => element.addEventListener("mouseout", BytTillbaka));
            },
            1000
        );
    }
}

function Byt()
{
    card.forEach(element => element.style.display = "none");
    art.forEach(element => element.style.display = "initial");
    knappN.forEach(element => element.style.display = "none");
    knappNph.forEach(element => element.style.display = "none");
    knappP.forEach(element => element.style.display = "none");
    knappPph.forEach(element => element.style.display = "none");
    flex.forEach(element => element.style.justifyContent = "center");
}

function BytTillbaka()
{
    art.forEach(element => element.style.display = "none");
    card.forEach(element => element.style.display = "initial");
    knappN.forEach(element => element.style.display = "initial");
    knappNph.forEach(element => element.style.display = "initial");
    knappP.forEach(element => element.style.display = "initial");
    knappPph.forEach(element => element.style.display = "initial");
    flex.forEach(element => element.style.justifyContent = "space-between");
}

ÄndraBild();
KnappTryck();

storlek.addListener(ÄndraBild);