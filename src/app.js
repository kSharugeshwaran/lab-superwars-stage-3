const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonder woman",
    "Popcorn",
    "Gem woman",
    "Bolt",
    "Ant woman",
    "Mask",
    "Tiger",
    "Captain",
    "Cat woman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {

    // Instead of for loop use Map method
    // Code here

    let playerDetails = players.map((player,index) => {

        return{
            Name : player,
            strength : RandomStrength(),
            Image : "images/super-"+ (index+1) +".png",
            type: index%2 ==0 ? "hero" : "villain"
        }
        
    });  

    return playerDetails;
}

// getting random strength
const RandomStrength = () => {
    return Math.floor(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here

    var filteredPlayers = players.filter((player) => player.type==type)
    var fragment = filteredPlayers.map((player) =>{

        return `<div class="player">
        <img src="${player.Image}" alt="${player.name}">
        <h2>${player.Name}</h2>
        <p class="strength">${player.strength}</p>
        </div>`;

    })

    return fragment.join('');
}

// Display players in HTML
const displayPlayers = (players) => {
    document.getElementById('hero').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villain').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    displayPlayers(initPlayers(PLAYERS));
}