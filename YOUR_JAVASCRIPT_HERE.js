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
    displayStats(hero);
};

function pickUpItem(hero, weapon){
    hero.inventory.push(weapon);
};

const dagger = document.getElementById("dagger");
const daggerObj = {type: 'dagger', damage: 2};
dagger.onclick = function(){
    pickUpItem(hero, daggerObj);
    displayStats(hero);
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
    displayStats(hero)
}

function displayStats(hero){
    
    const stats = document.getElementById("stats");
    const name = document.createElement("p");
    const health = document.createElement("p");
    const weapon = document.createElement("p");
    const weaponDamage = document.createElement("p");
    
    stats.textContent = null;
    name.textContent = `${hero.name}`
    health.textContent = `Health-level: ${hero.health}`
    weapon.textContent = `Weapon of choice: ${hero.weapon.type}`
    weaponDamage.textContent = `Weapon damage: ${hero.weapon.damage}`
    
    stats.appendChild(name);
    stats.appendChild(health);
    stats.appendChild(weapon);
    stats.appendChild(weaponDamage);
}
displayStats(hero)


enterName.addEventListener("submit", changeName);
function changeName(event){
    const input = document.getElementById("herosName");
    hero.name = input.value;    
    event.preventDefault();
    displayStats(hero);
};

input.addEventListener("keyup", ifEnterIsPressed);
function ifEnterIsPressed(event) {
    if (event.key === "Enter") {
        changeName(event);
    }
};