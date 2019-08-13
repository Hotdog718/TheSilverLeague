var miniGames = [
  {
    name: "Gotcha!Mon!Machine",
    rules: "Ever wanted a random egg, good or terrible? Then this game is for you.All you have to do is find a Frontier Brain to trade with. Due to the nature of this game, the cost is only 2 Bronze medals, after the payment, you pick a random number between 1-30. Your prize is whatever egg was on that spot of the host's box. Good or Terrible."
  },
  {
    name: "High Roll-Low Roll",
    rules: "Like a bit of a gamble? Have a good guessing sense? Then you might want to try this game.This game is only hosted by certified Frontier Brains. Who, places 6 of the same species but all differently trained Pokemon in a row in a box, and starts off with naming one of the exact stats of the first Pokemon. Then moves onto the next Pokemon, and asks if this one's stat is higher or lower then the previous one, the amount of times you are correct, you will be rewarded one medal, you cannot go below 0 medals as a prize. Totaling of a 5 medal profit if you guess all of them correctly, this mini-game's cost is one bronze medal."
  },
  {
    name: "Team Rocked Palooza",
    rules: "Like mazes? Do you enjoy a thrill? Then come on over to this game!<br><br>This game is only to be hosted by certified Frontier Brains. Who will prepare a maze like box of Pokemon. Though, unlike a regular maze, this box will be laid by traps, Including Voltorb and Electrode, Grimer, and Koffing<br><br>You guide the pokemon by picking a direction on a D-pad like grid. If you land on any of the traps, you will have a certain effect placed upon you, If you land on a Voltorb or electrode, it is game over. While Grimer will have you pay one bronze to get freed.<br><br>Koffing will confuse you, having you take a direction at random. Based on the difficulty you pick, it will be really easy, or really hard to reach the end and claim your prize. If you do reach the end, not only will you be rewarded with a medal reward based on the difficulty you chose, but you also get to keep the Pokemon that you went through the maze with. It's team rocket after all.<br><br>Difficulty ranges from Easy to Hard.<br><br>Rules for the Frontier Brain to follow:<br>-Slots number 1 and 30 cannot be an electrode<br>-No Diagonal blockage from Electrode/Voltorb<br>-No Horizontal Blockage.<br>-No Vertical Blockage.<br>-Player must be able to reach the end of the box with the D-pad set up.<br>-If any of these are broken, please confront them with it, and make a note of it to LowRes please.<br><br>-Difficulty 1 Prize: Pokemon player claimed as their Prize. 1 Bronze Medal<br>-Difficulty 2 Prize: Pokemon the player claimed as their prize and 5 Silver Medals.<br>-Difficulty 3 Prize: Pokemon the player claimed as their prize and 3 Gold Medals."
  },
  {
    name: "Something's Fishy...",
    rules: "The play cost for this game is 5 Bronze Medals. Only certified Frontier Brains may host this game. Your goal is to guess what fish Pokemon the Frontier Brain has chosen. A third party will be informed for this to avoid any cheating.<br><br> -The Player can pay 1 Bronze medal for a single Simple Hint. Such hints consist of the fish's color and general looks.<br><br>-The Player can pay 1 Silver medal for a single Super Hint. Such hints consist of what rod can catch said fish or the region that it can be found at. (e.g. This fish can be found in Sinnoh. *Another Silver Medal* It can be caught with an old rod. *Magikarp?* Correct!)<br><br>-Your reward for guessing the fish is that you can reel it in and collect an IV bred fish and 5 bronze medals! (The fish WILL be the Pokemon the Player guessed)<br><br>-Remember you only get one guess, so make it count."
  },
  {
    name: "For crying out load!",
    rules: "The play cost for this game is 5 Bronze Medals. Only certified Frontier Brains may host this game. You will be given a Pokemon's Cry and your goal is to guess which Pokemon it is, you will be informed from what generation it is from. Your reward is an Iv bred version of the Pokemon you've guessed! A third party will be informed to avoid cheating. (Legendaries are excluded from this game)"
  }
];

var convenienceStore = [
  "IV bred Pokemon: Random. 5 Bronze",
  "TM Move Taught. 2 Bronze",
  "Re-do EV Training. 10 Bronze",
  "Everstone. 3 Silver",
  "Destiny Knot. 3 Silver",
  "Lucky Egg. 8 Silver",
  "Hyper Train a single stat of a Pokemon. 5 Gold",
  "Hyper Train all stats of a Pokemon. 12 Gold"
]

var compMarket = [
  "Sitrus Berry. 1 Silver",
  "Lum Berry. 1 Silver",
  "Fire Stone. 2 Silver",
  "Thunder Stone. 2 Silver",
  "Water Stone. 2 Silver",
  "Leaf Stone. 2 Silver",
  "Moon Stone. 2 Silver",
  "Toxic Orb. 5 Silver",
  "Flame Orb. 5 Silver",
  "Power Herb. 5 Silver",
  "Absorb Bulb. 5 Silver",
  "Luminous Moss. 5 Silver",
  "Cell Battery. 7 Silver",
  "Snow Ball. 7 Silver",
  "Red Card. 7 Silver",
  "Eject Button. 7 Silver"
]

var compParadise = [
  "Sitrus Berry. 1 Silver",
  "Lum Berry. 1 Silver",
  "Rare Candy. 1 Silver",
  "Fire Stone. 2 Silver",
  "Thunder Stone. 2 Silver",
  "Water Stone. 2 Silver",
  "Leaf Stone. 2 Silver",
  "Moon Stone. 2 Silver",
  "Toxic Orb. 5 Silver",
  "Flame Orb. 5 Silver",
  "Power Herb. 5 Silver",
  "Absorb Bulb. 5 Silver",
  "Luminous Moss. 5 Silver",
  "Cell Bettery. 7 Silver",
  "Snow Ball. 5 Silver",
  "Red Card. 7 Silver",
  "Eject Button. 7 Silver",
  "Bottle Cap. 5 Gold",
  "Ability Capsule. 20 Gold",
  "Mega Stone of Choice. 10 Gold"
]

var rareGoodies = [
  "EV Reduction Berries of your choice (x6). 5 Silver",
  "IV bred mon: Chosen. 2 Gold",
  "Salac Berry. 1 Gold",
  "Power Item of your choice. 6 Gold",
  "Dawn Stone. 3 Gold",
  "Dusk Stone. 3 Gold",
  "Sun Stone. 3 Gold",
  "Shiny Stone. 3 Gold",
  "Weakness Policy. 5 Gold",
  "Muscle Band. 5 Gold",
  "Scope Lens. 5 Gold",
  "Zoom Lens. 5 Gold",
  "Wide Lens. 5 Gold",
  "Focus Band. 5 Gold",
  "Choice Scarf. 8 Gold",
  "Choice Band. 8 Gold",
  "Choice Specs. 8 Gold",
  "Assault Vest. 9 Gold",
  "Focus Sash. 7 Gold",
  "Expert Belt. 7 Gold",
  "Balloon. 8 Gold",
  "Razor Fang. 4 Gold",
  "Razor Claw. 4 Gold",
  "Life Orb. 6 Gold",
  "Iron Ball. 3 Gold",
  "Safety Goggles. 6 Gold",
  "Binding Band. 3 Gold",
  "Protective Pads. 2 Gold",
  "Terrain Extender. 4 Gold",
  "Smooth Rock. 5 Gold",
  "Damp Rock. 5 Gold",
  "Heat Rock. 5 Gold",
  "Icy Rock. 5 Gold",
  "Eviolite. 9 Gold",
  "Leftovers. 9 Gold",
  "Rocky Helmet. 9 Gold",
  "Light Clay. 9 Gold",
  "Golden Bottle Cap. 15 Gold"
]

var packages = [
  {
    item: "IV Breeding Starter Kit: 5 Bronze",
    contents: "1x Destiny Knot, 1x Everstone"
  },
  {
    item: "EV Training Starter Kit: 25 Gold",
    contents: "1x Power Weight, 1x Power Bracer, 1x Power Belt, 1x Power Lens, 1x Power Band, 1x Power Anklet, 2x Lucky Egg, x30 Adrenaline Orb"
  },
  {
    item: "Choice Item Kit: 15 Gold",
    contents: "1x Choice Band, 1x Choice Specs, 1x Choice Scarf"
  },
  {
    item: "The Orb of Choice Kit: 12 Gold",
    contents: "1x Life Orb, 1x Flame Orb, 1x Toxic Orb"
  },
  {
    item: "The Beginner Berry Kit: 9 Silver",
    contents: "1x Sitrus Berry, 1x Lum Berry, 1x Leppy Berry, 1x Pomeg Berry, 1x Kelpsy Berry, 1x Qualot Berry, 1x Hondew Berry, 1x Grepa Berry, 1x Tamato Berry, 1x Salac Berry, 1x Custap Berry"
  },
  {
    item: "Nectar Package: 8 Bronze",
    contents: "1x Yellow Nectar, 1x Pink Nectar, 1x Red Nectar, 1x Purple Nectar"
  }
];

var frontierBrains = [
  {
    name: "The Generation Challenge Frontier",
    owner: "LowRes",
    fee: "3 Bronze Medals",
    mascot: "Sableye",
    style: "Varies<br><br>Generation 1: Singles<br>Generation 2: Doubles<br>Generation 3: Singles<br>Generation 4: Doubles<br>Generation 5: Singles<br>Generation 6: Doubles<br>Generation 7: Singles<br>",
    difficulties: "Beginner, Advanced, Master, Legend",
    explaination: "When challenging this frontier, both the Brain and the challenger may only use Pokemon of a given generation. The generation used within battle will be determined by the day the challenge happens.<br><br>Please be aware that Pokemon may have their evolution line cut short or not allowed. Ex: In generation 2, Sneasel would be allowed, as to where Weavile would not. Togekiss, is another example of a Pokemon that will not be allowed. Also keep in mind Alolan forms do NOT count as generation 1 Pokemon.<br><br>Monday: Generation 1<br>Tuesday: Generation 2<br>Wednesday: Generation 3<br>Thursday: Generation 4<br>Friday: Generation 5<br>Saturday: Generation 6<br>Sunday: Generation 7",
    prize: "5 Bronze Medals (Beginner), 8 Bronze Medals (Advanced), 1 Platinum Medal (Master)",
    gameHost: "Team Rocket Palooza",
    medal: "[Difficulty] Temporal Medal"
  },
  {
    name: "The Sky Frontier",
    owner: "Diogo",
    fee: "1 Bronze Medal",
    mascot: "Staraptor",
    difficulties: "Beginner, Advanced, Master, Legend",
    explaination: "Just like the Sky battles of the X and Y, this frontier will follow the same rules as a sky battle as in only flying types and levitate Pokemon EXCEPT flying Silvally and Arceus, Pokemon that lose the flying type when mega evolving will not be allowed in the sky battles so people don't abuse the fact that these Pokemon will not have to care for ground type moves (e.g.Mega Charizard X).<br><br>In a Sky battle there are some moves that cannot be used, for starters no ground moves can be used for...obvious reasons, here's a <a href='http://prnt.sc/bf5qdu'>list of moves that are not allowed</a>. A lot of moves are not mentioned because simply Pokemon that learn said moves can not participate in sky battles.<br><br>Other special rules:<br><br>Pinsir will be allowed as a flying types IF AND ONLY IF it mega evolves on the exact next turn that it gets out of the Pokeball, no switching or attacking for that moxie boost, as soon as it gets out the Pokeball, if it doesn't mega evolve on the following turn, the challenger is DQ'd.<br><br>in the Flying only battle of Monday and Tuesday, some bug types will now be allowed to enter, specially the ones that show the ability to fly, the list of bug types allowed is:<br><br>-Beedrill<br>-Venomoth<br>-Scizor<br>-Heracross<br>-Dustox<br>-Shedinja<br>-Volbeat and Illumise<br>-Kricketune<br>-Volcarona<br>-Vikavolt<br>-Cutiefly and Ribombee<br><br>in the Levitates only battle of Wednesday and Thursday, the players are now allowed to use Pokemon that have the trace ability, Gardevoir line, Porygon 2 and normal, and mega Alakazam with the same clause as Pinsir, as in he MUST mega evolve after coming out.<br><br>The Sky battles will be different depending the days of the week, here's the list:<br><br>-Monday and Tuesday: Singles flying Pokemon only<br><br>-Wednesday and Thursday: Singles levitate only<br><br>-Friday and Saturday: Single flying and levitate<br><br>-Sunday: The challenger decides",
    prize: "5 Bronze Medals (Beginner), 5 Silver Medals (Advanced), 1 Platinum Medal (Master)",
    gameHost: "None",
    medal: "[Difficulty] Sky Medal"
  },
  {
    name: "The Battle Cafe",
    owner: "RiverNote",
    fee: "None (Beginner), 3 Bronze (Advanced), 6 Bronze (Master), 8 Bronze (Legend)",
    difficulties: "Beginner, Advanced, Master, Legend",
    explaination: 'RULES CAN BE FOUND <a href="https://docs.google.com/document/d/1CV4VMdPZjLBdMbymEXxX-zkXgd8ji-m74fdePEWG8I8/edit">HERE</a>',
    prize: "3 Bronze (Beginner), 6 Bronze (Advanced), 3 Silver (Master), 2 Gold (Legend)",
    gameHost: "None.",
    medal: "[Difficulty] Cafe Medal"
  }
]

$(document).ready(function(){
  miniGames.forEach(function(game){
    $('#mini-games').append('<li><b><u>' + game.name + '</u></b><br>' + game.rules + '</li>')
  })
  convenienceStore.forEach(item => {
    $('#convience-store').append('<span>-' + item + '</span><br>')
  })
  compMarket.forEach(item => {
    $('#competitive').append('<span>-' + item + '</span><br>')
  })
  compParadise.forEach(item => {
    $('#comp-paradise').append('<span>-' + item + '</span><br>')
  })
  rareGoodies.forEach(item => {
    $('#rare-goodies').append('<span>-' + item + '</span><br>')
  })
  packages.forEach(item => {
    $('#packages').append('<span>-' + item.item + '</span><br><span>(Includes: ' + item.contents + ')</span><br><br>')
  })
  for(let i = 0; i<Math.ceil(frontierBrains.length/2); i++){
    $('#fontier-brains').append('<div class="frontier-brains' + i + '" style="display: flex;"></div>')
    for(let k = 0; k<2; k++){
      var brain = frontierBrains[i*2+k];
      if(brain){
        $('.frontier-brains'+i).append('<div style="flex: 50%; margin: 4px;"><h2 style="text-align: center"><u>' + brain.name + '</u></h2><img class="center" src="Assets/Images/Battle Frontier/' + brain.owner + '.png" alt="' + brain.owner + '"><p><b>Owner: ' + brain.owner + '<br>Challenge Fee: ' + brain.fee + (brain.mascot?'<br>Mascot: ' +  brain.mascot: '') + (brain.style? '<br>Style: ' + brain.style :'') +'<br>Available Difficulties: ' + brain.difficulties + '</b></p><p><b>Explaination: ' + brain.explaination + '</b></p><p><b>Prize: ' + brain.prize + '</b></p><p><b>Mini-Game Host: ' + brain.gameHost + '</b></p><p><b>Medal: ' + brain.medal + '</b></p></div>')
      }else{
        $('.frontier-brains'+i).append('<div style="flex: 50%"></div>')
      }
    }
  }
})
