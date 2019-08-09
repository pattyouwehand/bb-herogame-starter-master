const hero ={
    name: "Klaas the Mighty",
    heroic: true,
    inventory: [],
    health: 10,
    weapon:{type: "cannonballs", damage: 2},

}

function rest(obj){
    if(obj.health === 10){
        alert("Health-level is already full")
    }
    obj.health = 10;
    return obj;
}

const inn = document.getElementById("inn")
inn.onclick = function(){
    rest(hero);
};


function pickUpItem(){

}

function equipWeapon(){

}