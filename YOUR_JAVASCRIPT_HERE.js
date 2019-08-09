const hero ={
    name: "Klaas the Mighty",
    heroic: true,
    inventory: [],
    health: 10,
    weapon:{type: "cannonballs", damage: 2}
}

function rest(obj){
    if(obj.health === 10){
        alert("Health-level is already full")
    }
    obj.health = 10;
    return obj;
};

const inn = document.getElementById("inn");
inn.onclick = function(){
    rest(hero);
};

function pickUpItem(hero, weapon){
    hero.inventory.push(weapon);
};

const dagger = document.getElementById("dagger");
const daggerObj = {type: 'dagger', damage: 2};
dagger.onclick = function(){
    pickUpItem(hero, daggerObj);
};

function equipWeapon(hero){
    if (hero.inventory.length != 0){
       return hero.weapon = hero.inventory[0];
    }else{
        return null
    }
}

const bag = document.getElementById("bag");
bag.onclick = function(){
    equipWeapon(hero)
}