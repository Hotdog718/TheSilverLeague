var pokeInfo = {
  1:{
    forms:[
      {
        sprite: "001.png",
        name: "Bulbasaur",
        galar: true,
        lgpe: true,
        classification: "Seed Pokemon",
        height: 0.7,
        weight: 6.9,
        dexEntry: "It can go for days without eating a single morsel. In the bulb on its back, it stores energy.",
        type: "Grass/ Poison",
        stats: [45, 49, 49, 65, 65, 45],
        ability1: "Overgrow",
        hidden: "Chlorophyll"
      }
    ]
  },
  2:{
    forms: [
      {
        sprite: "002.png",
        name: "Ivysaur",
        galar: true,
        lgpe: true,
        classification: "Seed Pokemon",
        height: 1,
        weight: 13,
        dexEntry: "The bud on its back grows by drawing energy. It gives off an aroma when it is ready to bloom.",
        type: "Grass/ Poison",
        stats: [60, 62, 63, 80, 80, 60],
        ability1: "Overgrow",
        hidden: "Chlorophyll"
      }
    ]
  },
  3:{
    forms: [
      {
        sprite: "003.png",
        name: "Venusaur",
        galar: true,
        lgpe: true,
        classification: "Seed Pokemon",
        height: 2,
        weight: 100,
        dexEntry: "The flower on its back catches the sun’s rays. The sunlight is then absorbed and used for energy.",
        type: "Grass/ Poison",
        stats: [80, 82, 83, 100, 100, 80],
        ability1: "Overgrow",
        hidden: "Chlorophyll",
      },
      {
        sprite: "003-m.png",
        name: "Mega Venusaur",
        lgpe: true,
        classification: "Seed Pokemon",
        height: 2.4,
        weight: 155.5,
        dexEntry: "In order to support its flower, which has grown larger due to Mega Evolution, its back and legs have become stronger.",
        type: "Grass/ Poison",
        stats: [80,100,123,122,120,80],
        ability1: "Thick Fat"
      }
    ]
  },
  4:{
    forms: [
      {
        sprite: "004.png",
        name: "Charmander",
        galar: true,
        lgpe: true,
        classification: "Lizard Pokemon",
        height: 0.6,
        weight: 8.5,
        dexEntry: "The flame at the tip of its tail makes a sound as it burns. You can only hear it in quiet places.",
        type: "Fire",
        stats: [39,52,43,60,50,65],
        ability1: "Blaze",
        hidden: "Solar Power"
      }
    ]
  },
  5:{
    forms: [
      {
        sprite: "005.png",
        name: "Charmeleon",
        galar: true,
        lgpe: true,
        classification: "Flame Pokemon",
        height: 1.1,
        weight: 19,
        dexEntry: "Tough fights could excite this Pokémon. When excited, it may breathe out bluish-white flames.",
        type: "Fire",
        stats: [58,64,58,80,65,80],
        ability1: "Blaze",
        hidden: "Solar Power"
      }
    ]
  },
  6:{
    forms: [
      {
        sprite: "006.png",
        name: "Charizard",
        galar: true,
        lgpe: true,
        classification: "Flame Pokemon",
        height: 1.7,
        weight: 90.5,
        dexEntry: "When this Pokémon expels a blast of superhot fire, the red flame at the tip of its tail burns more intensely.",
        type: "Fire/ Flying",
        stats: [78,84,78,109,85,100],
        ability1: "Blaze",
        hidden: "Solar Power"
      },
      {
        sprite: "006-mx.png",
        name: "Mega Charizard X",
        lgpe: true,
        classification: "Flame Pokemon",
        height: 1.7,
        weight: 110.5,
        dexEntry: "The overwhelming power that fills its entire body causes it to turn black and creates intense blue flames.",
        type: "Fire/ Dragon",
        stats: [78,130,111,130,85,100],
        ability1: "Tough Claws"
      },
      {
        sprite: "006-my.png",
        name: "Mega Charizard Y",
        lgpe: true,
        classification: "Flame Pokemon",
        height: 1.7,
        weight: 100.5,
        dexEntry: "Its bond with its Trainer is the source of its power. It boasts speed and maneuverability greater than that of a jet fighter.",
        type: "Fire/ Flying",
        stats: [78,104,78,159,115,100],
        ability1: "Drought"
      },
      {
        sprite: "006-gi.png",
        name: "G. Charizard",
        galar: true,
        classification: "Flame Pokemon",
        height: 28,
        weight: "???",
        dexEntry: "This colossal, flame-winged figure of a Charizard was brought about by Gigantamax energy.",
        type: "Fire/ Flying",
        stats: [78,84,78,109,85,100],
        ability1: "Blaze",
        hidden: "Solar Power"
      }
    ]
  },
  7: {
    forms: [
      {
        sprite: "007.png",
        name: "Squirtle",
        galar: true,
        lgpe: true,
        classification: "Tiny Turtle Pokemon",
        height: 0.5,
        weight: 9,
        dexEntry:"Shoots water at prey while in the water. Withdraws into its shell when in danger.",
        type: "Water",
        stats: [44,48,65,50,64,43],
        ability1: "Torrent",
        hidden: "Rain Dish"
      }
    ]
  },
  8: {
    forms: [
      {
        sprite: "008.png",
        name: "Wartortle",
        galar: true,
        lgpe: true,
        classification: "Turtle Pokemon",
        height: 1,
        weight: 22.5,
        dexEntry:"When tapped on its head, this Pokémon will pull it in, but its tail will still stick out a little bit.",
        type: "Water",
        stats: [59,63,80,65,80,58],
        ability1: "Torrent",
        hidden: "Rain Dish"
      }
    ]
  },
  9: {
    forms: [
      {
        sprite: "009.png",
        name: "Blastoise",
        galar: true,
        lgpe: true,
        classification: "Shellfish Pokemon",
        height: 1.6,
        weight: 85.5,
        dexEntry:"Once it takes aim at its enemy, it blasts out water with even more force than a fire hose.",
        type: "Water",
        stats: [79,83,100,85,105,78],
        ability1: "Torrent",
        hidden: "Rain Dish"
      },
      {
        sprite: "009-m.png",
        name: "Mega Blastoise",
        lgpe: true,
        classification: "Shellfish Pokemon",
        height: 1.6,
        weight: 101.1,
        dexEntry:"The cannon on its back is as powerful as a tank gun. Its tough legs and back enable it to withstand the recoil from firing the cannon.",
        type: "Water",
        stats: [79,103,120,135,115,78],
        ability1: "Mega Launcher"
      }
    ]
  },
  10: {
    forms: [
      {
        sprite: "010.png",
        name: "Caterpie",
        galar: true,
        lgpe: true,
        classification: "Worm Pokemon",
        height: 0.3,
        weight: 2.9,
        dexEntry: "If you touch the feeler on top of its head, it will release a horrible stink to protect itself.",
        type: "Bug",
        stats: [45,30,35,20,20,45],
        ability1: "Shield Dust",
        hidden: "Run Away"
      }
    ]
  },
  11:{
    forms: [
      {
        sprite: "011.png",
        name: "Metapod",
        galar: true,
        lgpe: true,
        classification: "Cocoon Pokemon",
        height: 0.7,
        weight: 9.9,
        dexEntry: "Hardens its shell to protect itself. However, a large impact may cause it to pop out of its shell.",
        type: "Bug",
        stats: [50,20,55,25,25,30],
        ability1: "Shed Skin"
      }
    ]
  },
  12:{
    forms: [
      {
        sprite: "012.png",
        name: "Butterfree",
        galar: true,
        lgpe: true,
        classification: "Butterfly Pokemon",
        height: 1.1,
        weight: 32,
        dexEntry: "Its wings, covered with poisonous powder, repel water. This allows it to fly in the rain.",
        type: "Bug/ Flying",
        stats: [60,45,50,90,80,70],
        ability1: "Compound Eyes",
        hidden: "Tinted Lens"
      },
      {
        sprite: "012-gi.png",
        name: "G. Butterfree",
        galar: true,
        lgpe: true,
        classification: "Butterfly Pokemon",
        height: 17,
        weight: "???",
        dexEntry: "Crystallized Gigantamax energy makes up this Pokémon's blindingly bright and highly toxic scales.",
        type: "Bug/ Flying",
        stats: [60,45,50,90,80,70],
        ability1: "Compound Eyes",
        hidden: "Tinted Lens"
      }
    ]
  },
  13:{
    forms: [
      {
        sprite: "013.png",
        name: "Weedle",
        lgpe: true,
        classification: "Hairy Pokemon",
        height: 0.3,
        weight: 3.2,
        dexEntry: "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.",
        type: "Bug/ Poison",
        stats: [40,35,30,20,20,50],
        ability1: "Shield Dust",
        hidden: "Run Away"
      }
    ]
  },
  14:{
    forms: [
      {
        sprite: "014.png",
        name: "Kakuna",
        lgpe: true,
        classification: "Cocoon Pokemon",
        height: 0.6,
        weight: 10,
        dexEntry: "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.",
        type: "Bug/ Poison",
        stats: [45,25,50,25,25,35],
        ability1: "Shed Skin"
      }
    ]
  },
  15:{
    forms: [
      {
        sprite: "015.png",
        name: "Beedrill",
        lgpe: true,
        classification: "Poison Bee Pokemon",
        height: 1,
        weight: 29.5,
        dexEntry: "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
        type: "Bug/ Poison",
        stats: [65,90,40,45,80,75],
        ability1: "Swarm",
        hidden: "Sniper"
      },
      {
        sprite: "015-m.png",
        name: "Mega Beedrill",
        lgpe: true,
        classification: "Poison Bee Pokemon",
        height: 1.4,
        weight: 40.5,
        dexEntry: "Its legs have become poison stingers. It stabs its prey repeatedly with the stingers on its limbs, dealing the final blow with the stinger on its rear.",
        type: "Bug/ Poison",
        stats: [65,150,40,15,80,145],
        ability1: "Adaptability"
      }
    ]
  },
  16: {
    forms: [
      {
        sprite: "016.png",
        name: "Pidgey",
        lgpe: true,
        classification: "Tiny Bird Pokemon",
        height: 0.3,
        weight: 1.8,
        dexEntry: "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.",
        type: "Normal/ Flying",
        stats: [40,45,40,35,35,56],
        ability1: "Keen Eye",
        ability2: "Tangled Feet",
        hidden: "Big Pecks"
      }
    ]
  },
  17: {
    forms: [
      {
        sprite: "017.png",
        name: "Pidgeotto",
        lgpe: true,
        classification: "Bird Pokemon",
        height: 1.1,
        weight: 30,
        dexEntry: "This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.",
        type: "Normal/ Flying",
        stats: [63,60,55,50,50,71],
        ability1: "Keen Eye",
        ability2: "Tangled Feet",
        hidden: "Big Pecks"
      }
    ]
  },
  18: {
    forms: [
      {
        sprite: "018.png",
        name: "Pidgeot",
        lgpe: true,
        classification: "Bird Pokemon",
        height: 1.5,
        weight: 39.5,
        dexEntry: "This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.",
        type: "Normal/ Flying",
        stats: [83,80,75,70,70,101],
        ability1: "Keen Eye",
        ability2: "Tangled Feet",
        hidden: "Big Pecks"
      },
      {
        sprite: "018-m.png",
        name: "Mega Pidgeot",
        lgpe: true,
        classification: "Bird Pokemon",
        height: 2.2,
        weight: 50.5,
        dexEntry: "With its muscular strength now greatly increased, it can fly continuously for two weeks without resting.",
        type: "Normal/ Flying",
        stats: [83,80,80,135,80,121],
        ability1: "No Guard"
      }
    ]
  },
  19:{
    forms: [
      {
        sprite: "019.png",
        name: "Rattata",
        lgpe: true,
        classification: "Mouse Pokemon",
        height: 0.3,
        weight: 3.5,
        dexEntry: "Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.",
        type: "Normal",
        stats: [30,56,35,25,35,72],
        ability1: "Run Away",
        ability2: "Guts",
        hidden: "Hustle"
      },
      {
        sprite: "019-a.png",
        name: "Alolan Rattata",
        lgpe: true,
        classification: "Mouse Pokemon",
        height: 0.3,
        weight: 3.8,
        dexEntry: "Its whiskers provide it with a keen sense of smell, enabling it to pick up the scent of hidden food and locate it instantly.",
        type: "Dark/ Normal",
        stats: [30,56,35,25,35,72],
        ability1: "Gluttony",
        ability2: "Hustle",
        hidden: "Thick Fat"
      }
    ]
  },
  20:{
    forms: [
      {
        sprite: "020.png",
        name: "Raticate",
        lgpe: true,
        classification: "Mouse Pokemon",
        height: 0.7,
        weight: 18.5,
        dexEntry: "Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.",
        type: "Normal",
        stats: [55,81,60,50,70,97],
        ability1: "Run Away",
        ability2: "Guts",
        hidden: "Hustle"
      },
      {
        sprite: "020-a.png",
        name: "Alolan Raticate",
        lgpe: true,
        classification: "Mouse Pokemon",
        height: 0.7,
        weight: 25.5,
        dexEntry: "It makes its Rattata underlings gather food for it, dining solely on the most nutritious and delicious fare.",
        type: "Dark/ Normal",
        stats: [75,71,70,40,80,77],
        ability1: "Gluttony",
        ability2: "Hustle",
        hidden: "Thick Fat"
      }
    ]
  },
  21:{
    forms: [
      {
        sprite: "021.png",
        name: "Spearow",
        lgpe: true,
        classification: "Tiny Bird Pokemon",
        height: 0.3,
        weight: 2,
        dexEntry: "Inept at flying high. However, it can fly around very fast to protect its territory.",
        type: "Normal/ Flying",
        stats: [40,60,30,31,31,70],
        ability1: "Keen Eye",
        hidden: "Sniper"
      }
    ]
  },
  22:{
    forms: [
      {
        sprite: "022.png",
        name: "Fearow",
        lgpe: true,
        classification: "Beak Pokemon",
        height: 1.2,
        weight: 38,
        dexEntry: "A Pokémon that dates back many years. If it senses danger, it flies high and away, instantly.",
        type: "Normal/ Flying",
        stats: [65,90,65,61,61,100],
        ability1: "Keen Eye",
        hidden: "Sniper"
      }
    ]
  },
  23:{
    forms: [
      {
        sprite: "023.png",
        name: "Ekans",
        lgpe: true,
        classification: "Snake Pokemon",
        height: 2,
        weight: 6.9,
        dexEntry: "The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest.",
        type: "Poison",
        stats: [35,60,44,40,54,55],
        ability1: "Intimidate",
        ability2: "Shed Skin",
        hidden: "Unnerve"
      }
    ]
  },
  24:{
    forms: [
      {
        sprite: "024.png",
        name: "Arbok",
        lgpe: true,
        classification: "Cobra Pokemon",
        height: 3.5,
        weight: 65,
        dexEntry: "The frightening patterns on its belly have been studied. Six variations have been confirmed.",
        type: "Poison",
        stats: [60,95,69,65,79,80],
        ability1: "Intimidate",
        ability2: "Shed Skin",
        hidden: "Unnerve"
      }
    ]
  },
  25:{
    forms: [
      {
        sprite: "025.png",
        name: "Pikachu",
        galar: true,
        lgpe: true,
        classification: "Mouse Pokemon",
        height: 0.4,
        weight: 6,
        dexEntry: "This forest-dwelling Pokémon stores electricity in its cheeks, so you’ll feel a tingly shock if you touch it.",
        type: "Electric",
        stats: [35,55,40,50,50,90],
        ability1: "Static",
        hidden: "Lightningrod"
      },
      {
        sprite: "025-gi.png",
        name: "G. Pikachu",
        galar: true,
        lgpe: true,
        classification: "Mouse Pokemon",
        height: 21,
        weight: "???",
        dexEntry: "Its Gigantamax power expanded, forming its supersized body and towering tail.",
        type: "Electric",
        stats: [35,55,40,50,50,90],
        ability1: "Static",
        hidden: "Lightningrod"
      }
    ]
  },
  26:{
    forms: [
      {
        sprite: "026.png",
        name: "Raichu",
        galar: true,
        lgpe: true,
        classification: "Mouse Pokemon",
        height: 0.8,
        weight: 30,
        dexEntry: "When electricity builds up inside its body, it becomes feisty. It also glows in the dark.",
        type: "Electric",
        stats: [60,90,55,90,80,110],
        ability1: "Static",
        hidden: "Lightningrod"
      },
      {
        sprite: "026-a.png",
        name: "Alolan Raichu",
        galar: true,
        lgpe: true,
        classification: "Mouse Pokemon",
        height: 0.7,
        weight: 21,
        dexEntry: "It loves pancakes prepared with a secret Alolan recipe. Some wonder whether that recipe holds the key to this Pokémon’s evolution.",
        type: "Electric/ Psychic",
        stats: [60,85,50,95,85,110],
        ability1: "Surge Surfer"
      }
    ]
  },
  27:{
    forms: [
      {
        sprite: "027.png",
        name: "Sandshrew",
        lgpe: true,
        classification: "Mouse Pokemon",
        height: 0.6,
        weight: 12,
        dexEntry: "Its body is dry. When it gets cold at night, its hide is said to become coated with a fine dew.",
        type: "Ground",
        stats: [50,75,85,20,30,40],
        ability1: "Sand Veil",
        hidden: "Sand Rush"
      },
      {
        sprite: "027-a.png",
        name: "Alolan Sandshrew",
        lgpe: true,
        classification: "Mouse Pokemon",
        height: 0.7,
        weight: 40,
        dexEntry: "Its ice-covered body lets it slide across the ground with bullet-like speed, sending its enemies flying when it hits them.",
        type: "Ice/ Steel",
        stats: [50,75,90,10,35,40],
        ability1: "Snow Cloak",
        hidden: "Slush Rush"
      }
    ]
  },
  28:{
    forms: [
      {
        sprite: "028.png",
        name: "Sandslash",
        lgpe: true,
        classification: "Mouse Pokemon",
        height: 1,
        weight: 29.5,
        dexEntry: "It is skilled at slashing enemies with its claws. If broken, they start to grow back in a day.",
        type: "Ground",
        stats: [75,100,110,45,55,65],
        ability1: "Sand Veil",
        hidden: "Sand Rush"
      },
      {
        sprite: "028-a.png",
        name: "Alolan Sandslash",
        lgpe: true,
        classification: "Mouse Pokemon",
        height: 1.2,
        weight: 55,
        dexEntry: "This is Sandslash’s form after adaptation to a frigid environment. The cold air emitted by its body sharpens its icy spikes.",
        type: "Ice/ Steel",
        stats: [75,100,120,25,65,65],
        ability1: "Snow Cloak",
        hidden: "Slush Rush"
      }
    ]
  },
  29:{
    forms:[
      {
        sprite: "029.png",
        name: "Nidoran♀",
        lgpe: true,
        classification: "Poison Pin Pokemon",
        height: 0.4,
        weight: 7,
        dexEntry: "A mild-mannered Pokémon that does not like to fight. Beware—its small horn secretes venom.",
        type: "Poison",
        stats: [55,47,52,40,40,41],
        ability1: "Poison Point",
        ability2: "Rivalry",
        hidden: "Hustle"
      }
    ]
  },
  30:{
    forms: [
      {
        sprite: "030.png",
        name: "Nidorina",
        lgpe: true,
        classification: "Poison Pin Pokemon",
        height: 0.8,
        weight: 20,
        dexEntry: "When resting deep in its burrow, its barbs always retract. This is proof that it is relaxed.",
        type: "Poison",
        stats: [70,62,67,55,55,56],
        ability1: "Poison Point",
        ability2: "Rivalry",
        hidden: "Hustle"
      }
    ]
  },
  31:{
    forms: [
      {
        sprite: "031.png",
        name: "Nidoqueen",
        lgpe: true,
        classification: "Drill Pokemon",
        height: 1.3,
        weight: 60,
        dexEntry: "Tough scales cover the sturdy body of this Pokémon. It appears that the scales grow in cycles.",
        type: "Poison/ Ground",
        stats: [90,92,87,75,85,76],
        ability1: "Poison Point",
        ability2: "Rivalry",
        hidden: "Sheer Force"
      }
    ]
  },
  32:{
    forms: [
      {
        sprite: "032.png",
        name: "Nidoran♂",
        lgpe: true,
        classification: "Poison Pin Pokemon",
        height: 0.5,
        weight: 9,
        dexEntry: "Its large ears are always kept upright. If it senses danger, it will attack with a poisonous sting.",
        type: "Poison",
        stats: [46,57,40,40,40,50],
        ability1: "Poison Point",
        ability2: "Rivalry",
        hidden: "Hustle"
      }
    ]
  },
  33:{
    forms: [
      {
        sprite: "033.png",
        name: "Nidorino",
        lgpe: true,
        classification: "Poison Pin Pokemon",
        height: 0.9,
        weight: 19.5,
        dexEntry: "Its horn contains venom. If it stabs an enemy with the horn, the impact makes the poison leak out.",
        type: "Poison",
        stats: [61,72,57,55,55,65],
        ability1: "Poison Point",
        ability2: "Rivalry",
        hidden: "Hustle"
      }
    ]
  },
  34:{
    forms: [
      {
        sprite: "034.png",
        name: "Nidoking",
        lgpe: true,
        classification: "Drill Pokemon",
        height: 1.4,
        weight: 62,
        dexEntry: "Its steel-like hide adds to its powerful tackle. Its horns are so hard, they can pierce a diamond.",
        type: "Poison/ Ground",
        stats: [81,102,72,85,75,85],
        ability1: "Poison Point",
        ability2: "Rivalry",
        hidden: "Sheer Force"
      }
    ]
  },
  35:{
    forms: [
      {
        sprite: "035.png",
        name: "Clefairy",
        galar: true,
        lgpe: true,
        classification: "Fairy Pokemon",
        height: 0.6,
        weight: 7.5,
        dexEntry: "Adored for their cute looks and playfulness. They are thought to be rare, as they do not appear often.",
        type: "Fairy",
        stats: [70,45,48,60,65,35],
        ability1: "Cute Charm",
        ability2: "Magic Guard",
        hidden: "Friend Guard"
      }
    ]
  },
  36:{
    forms: [
      {
        sprite: "036.png",
        name: "Clefable",
        galar: true,
        lgpe: true,
        classification: "Fairy Pokemon",
        height: 1.3,
        weight: 40,
        dexEntry: "They appear to be very protective of their own world. It is a kind of fairy, rarely seen by people.",
        type: "Fairy",
        stats: [95,70,73,95,90,60],
        ability1: "Cute Charm",
        ability2: "Magic Guard",
        hidden: "Unaware"
      }
    ]
  },
  37:{
    forms: [
      {
        sprite: "037.png",
        name: "Vulpix",
        galar: true,
        lgpe: true,
        classification: "Fox Pokemon",
        height: 0.6,
        weight: 9.9,
        dexEntry: "Both its fur and its tails are beautiful. As it grows, the tails split and form more tails.",
        type: "Fire",
        stats: [38,41,40,50,65,65],
        ability1: "Flash Fire",
        hidden: "Drought"
      },
      {
        sprite: "037-a.png",
        name: "Alolan Vulpix",
        galar: true,
        lgpe: true,
        classification: "Fox Pokemon",
        height: 0.6,
        weight: 9.9,
        dexEntry: "It looks like snow come to life, and the breath it exhales is −58 degrees Fahrenheit. Another name for it is Keokeo.",
        type: "Ice",
        stats: [38,41,40,50,65,65],
        ability1: "Snow Cloak",
        hidden: "Snow Warning"
      }
    ]
  },
  38:{
    forms: [
      {
        sprite: "038.png",
        name: "Ninetales",
        galar: true,
        lgpe: true,
        classification: "Fox Pokemon",
        height: 1.1,
        weight: 19.9,
        dexEntry: "According to an enduring legend, nine noble saints were united and reincarnated as this Pokémon.",
        type: "Fire",
        stats: [73,76,75,81,100,100],
        ability1: "Flash Fire",
        hidden: "Drought"
      },
      {
        sprite: "038-a.png",
        name: "Alolan Ninetales",
        galar: true,
        lgpe: true,
        classification: "Fox Pokemon",
        height: 1.1,
        weight: 19.9,
        dexEntry: "It lives on mountains perpetually covered in snow and is revered as a deity incarnate. It appears draped in a blizzard.",
        type: "Ice/ Fairy",
        stats: [73,67,75,81,100,109],
        ability1: "Snow Cloak",
        hidden: "Snow Warning"
      }
    ]
  },
  39:{
    forms: [
      {
        sprite: "039.png",
        name: "Jigglypuff",
        lgpe: true,
        classification: "Balloon Pokemon",
        height: 0.5,
        weight: 5.5,
        dexEntry: "Uses its cute round eyes to enrapture its foe. It then sings a pleasing melody that lulls the foe to sleep.",
        type: "Normal/ Fairy",
        stats: [115,45,20,45,25,20],
        ability1: "Cute Charm",
        ability2: "Competitive",
        hidden: "Friend Guard"
      }
    ]
  },
  40:{
    forms: [
      {
        sprite: "040.png",
        name: "Wigglytuff",
        lgpe: true,
        classification: "Balloon Pokemon",
        height: 1,
        weight: 12,
        dexEntry: "Its body is very elastic. By inhaling deeply, it can continue to inflate itself without limit.",
        type: "Normal/ Fairy",
        stats: [140,70,45,85,50,45],
        ability1: "Cute Charm",
        ability2: "Competitive",
        hidden: "Frisk"
      }
    ]
  },
  41:{
    forms: [
      {
        sprite: "041.png",
        name: "Zubat",
        lgpe: true,
        classification: "Bat Pokemon",
        height: 0.8,
        weight: 7.5,
        dexEntry: "Emits ultrasonic cries while it flies. They act as a sonar used to check for objects in its way.",
        type: "Poison/ Flying",
        stats: [40,45,35,30,40,55],
        ability1: "Inner Focus",
        hidden: "Infiltrator"
      }
    ]
  },
  42:{
    forms: [
      {
        sprite: "042.png",
        name: "Golbat",
        lgpe: true,
        classification: "Bat Pokemon",
        height: 1.6,
        weight: 55,
        dexEntry: "It attacks in a stealthy manner, without warning. Its sharp fangs are used to bite and to suck blood.",
        type: "Poison/ Flying",
        stats: [75,80,70,65,75,90],
        ability1: "Inner Focus",
        hidden: "Infiltrator"
      }
    ]
  },
  43:{
    forms: [
      {
        sprite: "043.png",
        name: "Oddish",
        galar: true,
        lgpe: true,
        classification: "Weed Pokemon",
        height: 0.5,
        weight: 5.4,
        dexEntry: "It may be mistaken for a clump of weeds. If you try to yank it out of the ground, it shrieks horribly.",
        type: "Grass/ Poison",
        stats: [45,50,55,75,65,30],
        ability1: "Chlorophyll",
        hidden: "Run Away"
      }
    ]
  },
  44:{
    forms: [
      {
        sprite: "044.png",
        name: "Gloom",
        galar: true,
        lgpe: true,
        classification: "Weed Pokemon",
        height: 0.8,
        weight: 8.6,
        dexEntry: "Smells incredibly foul! However, around one out of a thousand people enjoy sniffing its nose-bending stink.",
        type: "Grass/ Poison",
        stats: [60,65,70,85,75,40],
        ability1: "Chlorophyll",
        hidden: "Stench"
      }
    ]
  },
  45:{
    forms: [
      {
        sprite: "045.png",
        name: "Vileplume",
        galar: true,
        lgpe: true,
        classification: "Flower Pokemon",
        height: 1.2,
        weight: 18.6,
        dexEntry: "Flaps its broad flower petals to scatter its poisonous pollen. The flapping sound is very loud.",
        type: "Grass/ Poison",
        stats: [75,80,85,110,90,50],
        ability1: "Chlorophyll",
        hidden: "Effect Spore"
      }
    ]
  },
  46:{
    forms: [
      {
        sprite: "046.png",
        name: "Paras",
        lgpe: true,
        classification: "Mushroom Pokemon",
        height: 0.3,
        weight: 5.4,
        dexEntry: "Burrows under the ground to gnaw on tree roots. The mushrooms on its back absorb most of the nutrition.",
        type: "Bug/ Grass",
        stats: [35,70,55,45,55,25],
        ability1: "Effect Spore",
        ability2: "Dry Skin",
        hidden: "Damp"
      }
    ]
  },
  47:{
    forms: [
      {
        sprite: "047.png",
        name: "Parasect",
        lgpe: true,
        classification: "Mushroom Pokemon",
        height: 1,
        weight: 29.5,
        dexEntry: "The bug host is drained of energy by the mushroom on its back. The mushroom appears to do all the thinking.",
        type: "Bug/ Grass",
        stats: [60,95,80,60,80,30],
        ability1: "Effect Spore",
        ability2: "Dry Skin",
        hidden: "Damp"
      }
    ]
  },
  48:{
    forms: [
      {
        sprite: "048.png",
        name: "Venonat",
        lgpe: true,
        classification: "Insect Pokemon",
        height: 1,
        weight: 30,
        dexEntry: "Its large eyes act as radar. In a bright place, you can see that they are clusters of many tiny eyes.",
        type: "Bug/ Poison",
        stats: [60,55,50,40,55,45],
        ability1: "Compoundeyes",
        ability2: "Tinted Lens",
        hidden: "Run Away"
      }
    ]
  },
  49:{
    forms: [
      {
        sprite: "049.png",
        name: "Venomoth",
        lgpe: true,
        classification: "Poison Moth Pokemon",
        height: 1.5,
        weight: 12.5,
        dexEntry: "The powdery scales on its wings are hard to remove from skin. They also contain poison that leaks out on contact.",
        type: "Bug/ Poison",
        stats: [70,65,60,90,75,90],
        ability1: "Shield Dust",
        ability2: "Tinted Lens",
        hidden: "Wonder Skin"
      }
    ]
  },
  50:{
    forms: [
      {
        sprite: "050.png",
        name: "Diglett",
        galar: true,
        lgpe: true,
        classification: "Mole Pokemon",
        height: 0.2,
        weight: 0.8,
        dexEntry: "It prefers dark places. It spends most of its time underground, though it may pop up in caves.",
        type: "Ground",
        stats: [10,55,25,35,45,95],
        ability1: "Sand Veil",
        ability2: "Area Trap",
        hidden: "Sand Force"
      },
      {
        sprite: "050-a.png",
        name: "Alolan Diglett",
        galar: true,
        lgpe: true,
        classification: "Mole Pokemon",
        height: 0.2,
        weight: 1,
        dexEntry: "After living in soil with high iron content for some time, three steel whiskers sprouted from the top of its head.",
        type: "Ground/ Steel",
        stats: [10,55,30,35,45,90],
        ability1: "Sand Veil",
        ability2: "Tangling Hair",
        hidden: "Sand Force"
      }
    ]
  },
  51:{
    forms: [
      {
        sprite: "051.png",
        name: "Dugtrio",
        galar: true,
        lgpe: true,
        classification: "Mole Pokemon",
        height: 0.7,
        weight: 33.3,
        dexEntry: "A team of triplets that can burrow to a depth of 60 miles. It’s reported that this triggers an earthquake.",
        type: "Ground",
        stats: [35,100,50,50,70,120],
        ability1: "Sand Veil",
        ability2: "Arena Trap",
        hidden: "Sand Force"
      },
      {
        sprite: "051-a.png",
        name: "Alolan Dugtrio",
        galar: true,
        lgpe: true,
        classification: "Mole Pokemon",
        height: 0.7,
        weight: 66.6,
        dexEntry: "They’re referred to as triplets, but they’re not identical—the metallic elements in their bodies differ slightly. The proof shows in their whiskers!",
        type: "Ground/ Steel",
        stats: [35,100,60,50,70,110],
        ability1: "Sand Veil",
        ability2: "Tangling Hair",
        hidden: "Sand Force"
      }
    ]
  },
  52:{
    forms: [
      {
        sprite: "052.png",
        name: "Meowth",
        galar: true,
        lgpe: true,
        classification: "Scratch Cat Pokemon",
        height: 0.4,
        weight: 4.2,
        dexEntry: "Appears to be more active at night. It loves round and shiny things. It can’t stop itself from picking them up.",
        type: "Normal",
        stats: [40,45,35,40,40,90],
        ability1: "Pickup",
        ability2: "Technician",
        hidden: "Unnerve"
      },
      {
        sprite: "052-a.png",
        name: "Alolan Meowth",
        galar: true,
        lgpe: true,
        classification: "Scratch Cat Pokemon",
        height: 0.4,
        weight: 4.2,
        dexEntry: "Highly intelligent and prideful, it’s famously difficult to handle—but that’s also a reason for its popularity.",
        type: "Dark",
        stats: [40,35,35,50,40,90],
        ability1: "Pickup",
        ability2: "Technician",
        hidden: "Rattled"
      },
      {
        sprite: "052-g.png",
        name: "Galarian Meowth",
        galar: true,
        classification: "Scratch Cat Pokemon",
        height: 0.4,
        weight: 7.5,
        dexEntry: "Living with a savage, seafaring people has toughened this Pokémon's body so much that parts of it have turned to iron.",
        type: "Steel",
        stats: [50,65,55,40,40,40],
        ability1: "Pickup",
        ability2: "Tough Claws",
        hidden: "Unnerve"
      },
      {
        sprite: "052-gi.png",
        name: "G. Meowth",
        galar: true,
        classification: "Scratch Cat Pokemon",
        height: 33,
        weight: "???",
        dexEntry: "The pattern that has appeared on its giant coin is thought to be the key to unlocking the secrets of the Dynamax phenomenon.",
        type: "Normal",
        stats: [40,45,35,40,40,90],
        ability1: "Pickup",
        ability2: "Technician",
        hidden: "Unnerve"
      },
    ]
  },
  53:{
    forms: [
      {
        sprite: "053.png",
        name: "Persian",
        galar: true,
        lgpe: true,
        classification: "Classy Cat Pokemon",
        height: 1,
        weight: 32,
        dexEntry: "The gem in its forehead glows on its own! It walks with all the grace and elegance of a proud queen.",
        type: "Normal",
        stats: [65, 70, 60, 65, 65, 115],
        ability1: "Limber",
        ability2: "Technician",
        hidden: "Unnerve"
      },
      {
        sprite: "053-a.png",
        name: "Alolan Persian",
        galar: true,
        lgpe: true,
        classification: "Classy Cat Pokemon",
        height: 1.1,
        weight: 33,
        dexEntry: "It has the classiest coat. The rippling of its fur in the heat of battle has a beauty all its own.",
        type: "Dark",
        stats: [65, 60, 60, 75, 65, 115],
        ability1: "Fur Coat",
        ability2: "Technician",
        hidden: "Rattled"
      }
    ]
  },
  54:{
    forms: [
      {
        sprite: "054.png",
        name: "Psyduck",
        lgpe: true,
        classification: "Duck Pokemon",
        height: 0.8,
        weight: 19.6,
        dexEntry: "Always tormented by headaches. It uses psychic powers, but whether it intends to do so is not known.",
        type: "Water",
        stats: [50,52,48,65,50,55],
        ability1: "Damp",
        ability2: "Cloud Nine",
        hidden: "Swift Swim"
      }
    ]
  },
  55:{
    forms: [
      {
        sprite: "055.png",
        name: "Golduck",
        lgpe: true,
        classification: "Duck Pokemon",
        height: 1.7,
        weight: 76.6,
        dexEntry: "Its long, slim limbs end in broad flippers. They are used for swimming gracefully in lakes.",
        type: "Water",
        stats: [80,82,78,95,80,85],
        ability1: "Damp",
        ability2: "Cloud Nine",
        hidden: "Swift Swim"
      }
    ]
  },
  56:{
    forms: [
      {
        sprite: "056.png",
        name: "Mankey",
        lgpe: true,
        classification: "Pig Monkey Pokemon",
        height: 0.5,
        weight: 28,
        dexEntry: "An agile Pokémon that lives in trees. It angers easily and will not hesitate to attack anything.",
        type: "Fighting",
        stats: [40,80,35,35,45,70],
        ability1: "Vital Spirit",
        ability2: "Anger Point",
        hidden: "Defiant"
      }
    ]
  },
  57:{
    forms: [
      {
        sprite: "057.png",
        name: "Primeape",
        lgpe: true,
        classification: "Pig Monkey Pokemon",
        height: 1,
        weight: 32,
        dexEntry: "It stops being angry only when nobody else is around. To view this moment is very difficult.",
        type: "Fighting",
        stats: [65,105,60,60,70,95],
        ability1: "Vital Spirit",
        ability2: "Anger Point",
        hidden: "Defiant"
      }
    ]
  },
  58:{
    forms: [
      {
        sprite: "058.png",
        name: "Growlithe",
        galar: true,
        lgpe: true,
        classification: "Puppy Pokemon",
        height: 0.7,
        weight: 19,
        dexEntry: "A Pokémon with a friendly nature. However, it will bark fiercely at anything invading its territory.",
        sl: "THE BEST POKEMON IN THE GAME! I LOVE IT! GIVE ME IT! NOWWWWWW!",
        type: "Fire",
        stats: [55,70,45,70,50,60],
        ability1: "Intimidate",
        ability2: "Flash Fire",
        hidden: "Justified"
      }
    ]
  },
  59:{
    forms: [
      {
        sprite: "059.png",
        name: "Arcanine",
        galar: true,
        lgpe: true,
        classification: "Legendary Pokemon",
        height: 1.9,
        weight: 155,
        dexEntry: "A legendary Pokémon in the East. Many people are charmed by the grace and beauty of its running.",
        sl: "A very good firey doggo.",
        type: "Fire",
        stats: [90,110,80,100,80,95],
        ability1: "Intimidate",
        ability2: "Flash Fire",
        hidden: "Justified"
      }
    ]
  },
  60:{
    forms: [
      {
        sprite: "060.png",
        name: "Poliwag",
        lgpe: true,
        classification: "Tadpole Pokemon",
        height: 0.6,
        weight: 12.4,
        dexEntry: "The direction of the spiral on the belly differs by area. It is more adept at swimming than walking.",
        type: "Water",
        stats: [40,50,40,40,40,90],
        ability1: "Water Absorb",
        ability2: "Damp",
        hidden: "Swift Swim"
      }
    ]
  },
  61:{
    forms: [
      {
        sprite: "061.png",
        name: "Poliwhirl",
        lgpe: true,
        classification: "Tadpole Pokemon",
        height: 1,
        weight: 20,
        dexEntry: "Under attack, it uses its belly spiral to put the foe to sleep. It then makes its escape.",
        type: "Water",
        stats: [65,65,65,50,50,90],
        ability1: "Water Absorb",
        ability2: "Damp",
        hidden: "Swift Swim"
      }
    ]
  },
  62:{
    forms: [
      {
        sprite: "062.png",
        name: "Poliwrath",
        lgpe: true,
        classification: "Tadpole Pokemon",
        height: 1.3,
        weight: 54,
        dexEntry: "Swims powerfully using all the muscles in its body. It can even overtake world-class swimmers.",
        type: "Water/ Fighting",
        stats: [90,95,95,70,90,70],
        ability1: "Water Absorb",
        ability2: "Damp",
        hidden: "Swift Swim"
      }
    ]
  },
  63:{
    forms: [
      {
        sprite: "063.png",
        name: "Abra",
        lgpe: true,
        classification: "Psi Pokemon",
        height: 0.9,
        weight: 19.5,
        dexEntry: "Sleeps 18 hours a day. If it senses danger, it will teleport itself to safety even as it sleeps.",
        type: "Psychic",
        stats: [25,20,15,105,55,90],
        ability1: "Synchronize",
        ability2: "Inner Focus",
        hidden: "Magic Guard"
      }
    ]
  },
  64:{
    forms: [
      {
        sprite: "064.png",
        name: "Kadabra",
        lgpe: true,
        classification: "Psi Pokemon",
        height: 1.3,
        weight: 56.5,
        dexEntry: "Many odd things happen if this Pokémon is close by. For example, it makes clocks run backward.",
        type: "Psychic",
        stats: [40,35,30,120,70,105],
        ability1: "Synchronize",
        ability2: "Inner Focus",
        hidden: "Magic Guard"
      }
    ]
  },
  65:{
    forms: [
      {
        sprite: "065.png",
        name: "Alakazam",
        lgpe: true,
        classification: "Psi Pokemon",
        height: 1.5,
        weight: 48,
        dexEntry: "A Pokémon that can memorize anything. It never forgets what it learns—that’s why this Pokémon is smart.",
        type: "Psychic",
        stats: [55,50,45,135,95,120],
        ability1: "Synchronize",
        ability2: "Inner Focus",
        hidden: "Magic Guard"
      },
      {
        sprite: "065-m.png",
        name: "Mega Alakazam",
        lgpe: true,
        classification: "Psi Pokemon",
        height: 1.2,
        weight: 48,
        dexEntry: "It’s adept at precognition. When attacks completely miss Alakazam, that’s because it’s seeing the future.",
        type: "Psychic",
        stats: [55,50,65,175,105,150],
        ability1: "Trace"
      }
    ]
  },
  66:{
    forms: [
      {
        sprite: "066.png",
        name: "Machop",
        galar: true,
        lgpe: true,
        classification: "Superpower Pokemon",
        height: 0.8,
        weight: 19.5,
        dexEntry: "Very powerful in spite of its small size. Its mastery of many types of martial arts makes it very tough.",
        type: "Fighting",
        stats: [70,80,50,35,35,35],
        ability1: "Guts",
        ability2: "No Guard",
        hidden: "Steadfast"
      }
    ]
  },
  67:{
    forms: [
      {
        sprite: "067.png",
        name: "Machoke",
        galar: true,
        lgpe: true,
        classification: "Superpower Pokemon",
        height: 1.5,
        weight: 70.5,
        dexEntry: "The belt around its waist holds back its energy. Without it, this Pokémon would be unstoppable.",
        type: "Fighting",
        stats: [80,100,70,50,60,45],
        ability1: "Guts",
        ability2: "No Guard",
        hidden: "Steadfast"
      }
    ]
  },
  68:{
    forms: [
      {
        sprite: "068.png",
        name: "Machamp",
        galar: true,
        lgpe: true,
        classification: "Superpower Pokemon",
        height: 1.6,
        weight: 130,
        dexEntry: "One arm alone can move mountains. Using all four arms, this Pokémon fires off awesome punches.",
        type: "Fighting",
        stats: [90,130,80,65,85,55],
        ability1: "Guts",
        ability2: "No Guard",
        hidden: "Steadfast"
      }
    ]
  },
  69:{
    forms: [
      {
        sprite: "069.png",
        name: "Bellsprout",
        lgpe: true,
        classification: "Flower Pokemon",
        height: 0.7,
        weight: 4,
        dexEntry: "Prefers hot and humid places. It ensnares tiny bugs with its vines and devours them.",
        type: "Grass/ Poison",
        stats: [50,75,35,70,30,40],
        ability1: "Chlorophyll",
        hidden: "Gluttony"
      }
    ]
  },
  70:{
    forms: [
      {
        sprite: "070.png",
        name: "Weepinbell",
        lgpe: true,
        classification: "Flycatcher Pokemon",
        height: 1,
        weight: 6.4,
        dexEntry: "When hungry, it swallows anything that moves. Its hapless prey is dissolved by strong acids.",
        type: "Grass/ Poison",
        stats: [65,90,50,85,45,55],
        ability1: "Chlorophyll",
        hidden: "Gluttony"
      }
    ]
  },
  71:{
    forms: [
      {
        sprite: "071.png",
        name: "Victreebel",
        lgpe: true,
        classification: "Flycatcher Pokemon",
        height: 1.7,
        weight: 15.5,
        dexEntry: "Lures prey with the sweet aroma of honey. Swallowed whole, the prey is dissolved in a day, bones and all.",
        type: "Grass/ Poison",
        stats: [80,105,65,100,70,70],
        ability1: "Chlorophyll",
        hidden: "Gluttony"
      }
    ]
  },
  72:{
    forms: [
      {
        sprite: "072.png",
        name: "Tentacool",
        lgpe: true,
        classification: "Jellyfish Pokemon",
        height: 0.9,
        weight: 45.5,
        dexEntry: "It can sometimes be found all dry and shriveled up on a beach. Toss it back into the sea to revive it.",
        type: "Water/ Poison",
        stats: [40,40,35,50,100,70],
        ability1: "Clear Body",
        ability2: "Liquid Ooze",
        hidden: "Rain Dish"
      }
    ]
  },
  73:{
    forms: [
      {
        sprite: "073.png",
        name: "Tentacruel",
        lgpe: true,
        classification: "Jellyfish Pokemon",
        height: 1.6,
        weight: 55,
        dexEntry: "Its 80 tentacles can stretch and contract freely. They wrap around prey and weaken it with poison.",
        type: "Water/ Poison",
        stats: [80,70,65,80,120,100],
        ability1: "Clear Body",
        ability2: "Liquid Ooze",
        hidden: "Rain Dish"
      }
    ]
  },
  74:{
    forms: [
      {
        sprite: "074.png",
        name: "Geodude",
        lgpe: true,
        classification: "Rock Pokemon",
        height: 0.4,
        weight: 20,
        dexEntry: "Commonly found near mountain trails and the like. If you step on one by accident, it gets angry.",
        type: "Rock/ Ground",
        stats: [40,80,100,30,30,20],
        ability1: "Rock Head",
        ability2: "Sturdy",
        hidden: "Sand Veil"
      },
      {
        sprite: "074-a.png",
        name: "Alolan Geodude",
        lgpe: true,
        classification: "Rock Pokemon",
        height: 0.4,
        weight: 20.3,
        dexEntry: "Its stone head is imbued with electricity and magnetism. If you carelessly step on one, you’ll be in for a painful shock.",
        type: "Rock/ Electric",
        stats: [40,80,100,30,30,20],
        ability1: "Magnet Pull",
        ability2: "Sturdy",
        hidden: "Galvanize"
      }
    ]
  },
  75:{
    forms: [
      {
        sprite: "075.png",
        name: "Graveler",
        lgpe: true,
        classification: "Rock Pokemon",
        height: 1,
        weight: 105,
        dexEntry: "Often seen rolling down mountain trails. Obstacles are just things to roll straight over, not avoid.",
        type: "Rock/ Ground",
        stats: [55,95,115,45,45,35],
        ability1: "Rock Head",
        ability2: "Sturdy",
        hidden: "Sand Veil"
      },
      {
        sprite: "075-a.png",
        name: "Alolan Graveler",
        lgpe: true,
        classification: "Rock Pokemon",
        height: 1,
        weight: 110,
        dexEntry: "When it comes rolling down a mountain path, anything in its way gets zapped by electricity and sent flying.",
        type: "Rock/ Electric",
        stats: [55,95,115,45,45,35],
        ability1: "Magnet Pull",
        ability2: "Sturdy",
        hidden: "Galvanize"
      }
    ]
  },
  76:{
    forms: [
      {
        sprite: "076.png",
        name: "Golem",
        lgpe: true,
        classification: "Megaton Pokemon",
        height: 1.4,
        weight: 300,
        dexEntry: "Once it sheds its skin, its body turns tender and whitish. Its hide hardens when it’s exposed to air.",
        type: "Rock/ Ground",
        stats: [80,120,130,55,65,45],
        ability1: "Rock Head",
        ability2: "Sturdy",
        hidden: "Sand Veil"
      },
      {
        sprite: "076-a.png",
        name: "Alolan Golem",
        lgpe: true,
        classification: "Megaton Pokemon",
        height: 1.7,
        weight: 316,
        dexEntry: "It uses magnetism to accelerate and fire off rocks tinged with electricity. Even if it doesn’t score a direct hit, the jolt of electricity will do the job.",
        type: "Rock/ Electric",
        stats: [80,120,130,55,65,45],
        ability1: "Magnet Pull",
        ability2: "Sturdy",
        hidden: "Galvanize"
      }
    ]
  },
  77:{
    forms: [
      {
        sprite: "077.png",
        name: "Ponyta",
        galar: true,
        lgpe: true,
        classification: "Fire Horse Pokemon",
        height: 1,
        weight: 30,
        dexEntry: "Capable of jumping incredibly high. Its hooves and sturdy legs absorb the impact of a hard landing.",
        type: "Fire",
        stats: [50,85,55,65,65,90],
        ability1: "Run Away",
        ability2: "Flash Fire",
        hidden: "Flame Body"
      },
      {
        sprite: "077-g.png",
        name: "Galarian Ponyta",
        galar: true,
        classification: "Unique Horn Pokemon",
        height: 0.8,
        weight: 24,
        dexEntry: "Its small horn hides a healing power. With a few rubs from this Pokémon's horn, any slight wound you have will be healed.",
        type: "Psychic",
        stats: [50,85,55,65,65,90],
        ability1: "Run Away",
        ability2: "Pastel Veil",
        hidden: "Anticipation"
      }
    ]
  },
  78:{
    forms: [
      {
        sprite: "078.png",
        name: "Rapidash",
        galar: true,
        lgpe: true,
        classification: "Fire Horse Pokemon",
        height: 1.7,
        weight: 95,
        dexEntry: "Just loves to run. If it sees something faster than itself, it will give chase at top speed.",
        type: "Fire",
        stats: [65,100,70,80,80,105],
        ability1: "Run Away",
        ability2: "Flash Fire",
        hidden: "Flame Body"
      },
      {
        sprite: "078-g.png",
        name: "Galarian Rapidash",
        galar: true,
        classification: "Unique Horn Pokemon",
        height: 1.7,
        weight: 80,
        dexEntry: "Little can stand up to its psycho cut. Unleashed from this Pokémon's horn, the move will punch a hole right through a thick metal sheet.",
        type: "Psychic/ Fairy",
        stats: [65,100,70,80,80,105],
        ability1: "Run Away",
        ability2: "Pastel Veil",
        hidden: "Anticipation"
      }
    ]
  },
  79:{
    forms: [
      {
        sprite: "079.png",
        name: "Slowpoke",
        lgpe: true,
        classification: "Dopey Pokemon",
        height: 1.2,
        weight: 36,
        dexEntry: "Incredibly slow and sluggish. It is quite content to loll about without worrying about the time.",
        type: "Water/ Psychic",
        stats: [90,65,65,40,40,15],
        ability1: "Oblivious",
        ability2: "Own Tempo",
        hidden: "Regenerator"
      }
    ]
  },
  80:{
    forms: [
      {
        sprite: "080.png",
        name: "Slowbro",
        lgpe: true,
        classification: "Hermit Crab Pokemon",
        height: 1.6,
        weight: 78.5,
        dexEntry: "Lives lazily by the sea. If the Shellder on its tail comes off, it becomes a Slowpoke again.",
        type: "Water/ Psychic",
        stats: [95,75,110,100,80,30],
        ability1: "Oblivious",
        ability2: "Own Tempo",
        hidden: "Regenerator"
      },
      {
        sprite: "080-m.png",
        name: "Mega Slowbro",
        lgpe: true,
        classification: "Hermit Crab Pokemon",
        height: 2,
        weight: 120,
        dexEntry: "Under the influence of Shellder’s digestive fluids, Slowpoke has awakened, gaining a great deal of power—and a little motivation to boot.",
        type: "Water/ Psychic",
        stats: [95,75,180,130,80,30],
        ability1: "Shell Armor"
      }
    ]
  },
  81:{
    forms: [
      {
        sprite: "081.png",
        name: "Magnemite",
        lgpe: true,
        classification: "Magnet Pokemon",
        height: 0.3,
        weight: 6,
        dexEntry: "It is hatched with the ability to defy gravity. It floats while emitting powerful electromagnetic waves.",
        type: "Electric/ Steel",
        stats: [25,35,70,95,55,45],
        ability1: "Magnet Pull",
        ability2: "Sturdy",
        hidden: "Analytic"
      }
    ]
  },
  82:{
    forms: [
      {
        sprite: "082.png",
        name: "Magneton",
        lgpe: true,
        classification: "Magnet Pokemon",
        height: 1,
        weight: 60,
        dexEntry: "Generates strange radio signals. It raises the temperature by 3.6 degrees Fahrenheit within 3,300 feet.",
        type: "Electric/ Steel",
        stats: [50,60,95,120,70,70],
        ability1: "Magnet Pull",
        ability2: "Sturdy",
        hidden: "Analytic"
      }
    ]
  },
  83:{
    forms: [
      {
        sprite: "083.png",
        name: "Farfetch'd",
        galar: true,
        lgpe: true,
        classification: "Wild Duck Pokemon",
        height: 0.8,
        weight: 15,
        dexEntry: "They live where reedy plants grow. Farfetch’d are rarely seen, so it’s thought their numbers are decreasing.",
        type: "Normal/ Flying",
        stats: [52,90,55,58,62,60],
        ability1: "Keen Eye",
        ability2: "Inner Focus",
        hidden: "Defiant"
      },
      {
        sprite: "083-g.png",
        name: "Galarian Farfetch'd",
        galar: true,
        classification: "Wild Duck Pokemon",
        height: 0.8,
        weight: 42,
        dexEntry: "The Farfetch'd of the Galar region are brave warriors, and they wield thick, tough leeks in battle.",
        type: "Fighting",
        stats: [52,95,55,58,62,55],
        ability1: "Steadfast",
        hidden: "Scrappy"
      }
    ]
  },
  84:{
    forms: [
      {
        sprite: "084.png",
        name: "Doduo",
        lgpe: true,
        classification: "Twin Bird Pokemon",
        height: 1.4,
        weight: 39.2,
        dexEntry: "Its short wings make flying difficult. Instead, this Pokémon runs at high speed on developed legs.",
        type: "Normal/ Flying",
        stats: [35,85,45,35,35,75],
        ability1: "Run Away",
        ability2: "Early Bird",
        hidden: "Tangled Feet"
      }
    ]
  },
  85:{
    forms:[
      {
        sprite: "085.png",
        name: "Dodrio",
        lgpe: true,
        classification: "Triple Bird Pokemon",
        height: 1.8,
        weight: 85.2,
        dexEntry: "One of Doduo’s two heads splits to form a unique species. It runs close to 40 mph in prairies.",
        type: "Normal/ Flying",
        stats: [60,110,70,60,60,110],
        ability1: "Run Away",
        ability2: "Early Bird",
        hidden: "Tangled Feet"
      }
    ]
  },
  86:{
    forms: [
      {
        sprite: "086.png",
        name: "Seel",
        lgpe: true,
        classification: "Sea Lion Pokemon",
        height: 1.1,
        weight: 90,
        dexEntry: "Loves freezing-cold conditions. Relishes swimming in a frigid climate of around 14 degrees Fahrenheit.",
        type: "Water",
        stats: [65, 45, 55, 45, 70, 45],
        ability1: "Thick Fat",
        ability2: "Hydration",
        hidden: "Ice Body"
      }
    ]
  },
  87:{
    forms: [
      {
        sprite: "087.png",
        name: "Dewgong",
        lgpe: true,
        classification: "Sea Lion Pokemon",
        height: 1.7,
        weight: 120,
        dexEntry: "Its entire body is a snowy white. Unharmed by even intense cold, it swims powerfully in icy waters.",
        type: "Water/ Ice",
        stats: [90,70,80,70,95,70],
        ability1: "Thick Fat",
        ability2: "Hydration",
        hidden: "Ice body"
      }
    ]
  },
  88:{
    forms: [
      {
        sprite: "088.png",
        name: "Grimer",
        lgpe: true,
        classification: "Sludge Pokemon",
        height: 0.9,
        weight: 30,
        dexEntry: "Made of congealed sludge. It smells too putrid to touch. Even weeds won’t grow in its path.",
        type: "Poison",
        stats: [80,80,50,40,50,25],
        ability1: "Stench",
        ability2: "Sticky Hold",
        hidden: "Poison Touch"
      },
      {
        sprite: "088-a.png",
        name: "Alolan Grimer",
        lgpe: true,
        classification: "Sludge Pokemon",
        height: 0.7,
        weight: 42,
        dexEntry: "It has a passion for trash above all else, speedily digesting it and creating brilliant crystals of sparkling poison.",
        type: "Poison/ Dark",
        stats: [80,80,50,40,50,25],
        ability1: "Poison Touch",
        ability2: "Gluttony",
        hidden: "Power of Alchemy"
      }
    ]
  },
  89:{
    forms: [
      {
        sprite: "089.png",
        name: "Muk",
        lgpe: true,
        classification: "Sludge Pokemon",
        height: 1.2,
        weight: 30,
        dexEntry: "Smells so awful, it can cause fainting. Through degeneration of its nose, it lost its sense of smell.",
        type: "Poison",
        stats: [105,105,75,65,100,50],
        ability1: "Stench",
        ability2: "Sticky Hold",
        hidden: "Poison Touch"
      },
      {
        sprite: "089-a.png",
        name: "Alolan Muk",
        lgpe: true,
        classification: "Sludge Pokemon",
        height: 1,
        weight: 52,
        dexEntry: "Muk’s coloration becomes increasingly vivid the more it feasts on its favorite dish—trash.",
        type: "Poison/ Dark",
        stats: [105,105,75,65,100,50],
        ability1: "Poison Touch",
        ability2: "Gluttony",
        hidden: "Power of Alchemy"
      }
    ]
  },
  90:{
    forms: [
      {
        sprite: "090.png",
        name: "Sheller",
        galar: true,
        lgpe: true,
        classification: "Bivalve Pokemon",
        height: 0.3,
        weight: 4,
        dexEntry: "The shell can withstand any attack. However, when it is open, the tender body is exposed.",
        type: "Water",
        stats: [30,65,100,45,25,40],
        ability1: "Shell Armor",
        ability2: "Skill Link",
        hidden: "Overcoat"
      }
    ]
  },
  91:{
    forms: [
      {
        sprite: "091.png",
        name: "Cloyster",
        galar: true,
        lgpe: true,
        classification: "Bivalve Pokemon",
        height: 1.5,
        weight: 132.5,
        dexEntry: "For protection, it uses its harder-than-diamond shell. It also shoots spikes from the shell.",
        type: "Water/ Ice",
        stats: [50,95,180,85,45,70],
        ability1: "Shell Armor",
        ability2: "Skill Link",
        hidden: "Overcoat"
      }
    ]
  },
  92:{
    forms: [
      {
        sprite: "092.png",
        name: "Gastly",
        galar: true,
        lgpe: true,
        classification: "Gas Pokemon",
        height: 1.3,
        weight: 0.1,
        dexEntry: "Said to appear in decrepit, deserted buildings. It has no real shape, as it appears to be made of a gas.",
        type: "Ghost/ Poison",
        stats: [30,35,30,100,35,80],
        ability1: "Levitate"
      }
    ]
  },
  93:{
    forms: [
      {
        sprite: "093.png",
        name: "Haunter",
        galar: true,
        lgpe: true,
        classification: "Gas Pokemon",
        height: 1.6,
        weight: 0.1,
        dexEntry: "By licking, it saps the victim’s life. It causes shaking that won’t stop until the victim’s demise.",
        type: "Ghost/ Poison",
        stats: [45,50,45,115,55,95],
        ability1: "Levitate"
      }
    ]
  },
  94:{
    forms: [
      {
        sprite: "094.png",
        name: "Gengar",
        galar: true,
        lgpe: true,
        classification: "Shadow Pokemon",
        height: 1.5,
        weight: 40.5,
        dexEntry: "A Gengar is close by if you feel a sudden chill. It may be trying to lay a curse on you.",
        type: "Ghost/ Poison",
        stats: [60,65,60,130,75,110],
        ability1: "Cursed Body"
      },
      {
        sprite: "094-m.png",
        name: "Mega Gengar",
        lgpe: true,
        classification: "Shadow Pokemon",
        height: 1.4,
        weight: 40.5,
        dexEntry: "It can pass through other dimensions and appear anywhere. It caused a stir one time when it stuck just one leg out of a wall.",
        type: "Ghost/ Poison",
        stats: [60,65,80,170,95,130],
        ability1: "Shadow Tag"
      }
    ]
  },
  95:{
    forms: [
      {
        sprite: "095.png",
        name: "Onix",
        galar: true,
        lgpe: true,
        classification: "Rock Snake Pokemon",
        height: 8.8,
        weight: 210,
        dexEntry: "Burrows at high speed in search of food. The tunnels it leaves are used as homes by Diglett.",
        type: "Rock/ Ground",
        stats: [35,45,160,30,45,70],
        ability1: "Rock Head",
        ability2: "Sturdy",
        hidden: "Weak Armor"
      }
    ]
  },
  96:{
    forms: [
      {
        sprite: "096.png",
        name: "Drowzee",
        lgpe: true,
        classification: "Hypnosis Pokemon",
        height: 1,
        weight: 32.4,
        dexEntry: "If you sleep by it all the time, it will sometimes show you dreams it had eaten in the past.",
        type: "Psychic",
        stats: [60,48,45,43,90,42],
        ability1: "Insomnia",
        ability2: "Forewarn",
        hidden: "Inner Focus"
      }
    ]
  },
  97:{
    forms: [
      {
        sprite: "097.png",
        name: "Hypno",
        lgpe: true,
        classification: "Hypnosis Pokemon",
        height: 1.6,
        weight: 75.6,
        dexEntry: "Avoid eye contact if you come across one. It will try to put you to sleep by using its pendulum.",
        type: "Psychic",
        stats: [85,73,70,73,115,67],
        ability1: "Insomnia",
        ability2: "Forewarn",
        hidden: "Inner Focus"
      }
    ]
  },
  98:{
    forms: [
      {
        sprite: "098.png",
        name: "Krabby",
        galar: true,
        lgpe: true,
        classification: "River Crab Pokemon",
        height: 0.4,
        weight: 6.5,
        dexEntry: "Its pincers are superb weapons. They sometimes break off during battle, but they grow back fast.",
        type: "Water",
        stats: [30,105,90,25,25,50],
        ability1: "Hyper Cutter",
        ability2: "Shell Armor",
        hidden: "Sheer Force"
      }
    ]
  },
  99:{
    forms: [
      {
        sprite: "099.png",
        name: "Kingler",
        galar: true,
        lgpe: true,
        classification: "Pincer Pokemon",
        height: 1.3,
        weight: 60,
        dexEntry: "One claw grew massively and is as hard as steel. It has 10,000-horsepower strength. However, it is too heavy.",
        type: "Water",
        stats: [55,130,115,50,50,75],
        ability1: "Hyper Cutter",
        ability2: "Shell Armor",
        hidden: "Sheer Force"
      }
    ]
  },
  100:{
    forms: [
      {
        sprite: "100.png",
        name: "Voltorb",
        lgpe: true,
        classification: "Ball Pokemon",
        height: 0.5,
        weight: 10.4,
        dexEntry: "It is said to camouflage itself as a Poké Ball. It will self-destruct with very little stimulus.",
        type: "Electric",
        stats: [40,30,50,55,55,100],
        ability1: "Soundproof",
        ability2: "Static",
        hidden: "Aftermath"
      }
    ]
  },
  101:{
    forms: [
      {
        sprite: "101.png",
        name: "Electrode",
        lgpe: true,
        classification: "Ball Pokemon",
        height: 1.2,
        weight: 66.6,
        dexEntry: "Stores electrical energy inside its body. Even the slightest shock could trigger a huge explosion.",
        type: "Electric",
        stats: [60,50,70,80,80,150],
        ability1: "Soundproof",
        ability2: "Static",
        hidden: "Aftermath"
      }
    ]
  },
  102:{
    forms: [
      {
        sprite: "102.png",
        name: "Exeggcute",
        lgpe: true,
        classification: "Egg Pokemon",
        height: 0.4,
        weight: 2.5,
        dexEntry: "The heads attract each other and spin around. There must be six heads for it to maintain balance.",
        type: "Grass/ Psychic",
        stats: [60,40,80,60,45,40],
        ability1: "Chlorophyll",
        hidden: "Harvest"
      }
    ]
  },
  103:{
    forms: [
      {
        sprite: "103.png",
        name: "Exeggutor",
        lgpe: true,
        classification: "Coconut Pokemon",
        height: 2,
        weight: 120,
        dexEntry: "Its cries are very noisy. This is because each of the three heads thinks about whatever it likes.",
        type: "Grass/ Psychic",
        stats: [95,95,85,125,75,55],
        ability1: "Chlorophyll",
        hidden: "Harvest"
      },
      {
        sprite: "103-a.png",
        name: "Alolan Exeggutor",
        lgpe: true,
        classification: "Coconut Pokemon",
        height: 10.9,
        weight: 415.6,
        dexEntry: "The strong sunlight of the Alola region has awakened the power hidden within Exeggcute. This is the result.",
        type: "Grass/ Dragon",
        stats: [95,105,85,125,75,45],
        ability1: "Frisk",
        hidden: "Harvest"
      }
    ]
  },
  104:{
    forms: [
      {
        sprite: "104.png",
        name: "Cubone",
        lgpe: true,
        classification: "Lonely Pokemon",
        height: 0.4,
        weight: 6.5,
        dexEntry: "Wears the skull of its deceased mother. Its cries echo inside the skull and come out as a sad melody.",
        type: "Ground",
        stats: [50,50,95,40,50,35],
        ability1: "Rock Head",
        ability2: "Lightningrod",
        hidden: "Battle Armor"
      }
    ]
  },
  105:{
    forms: [
      {
        sprite: "105.png",
        name: "Marowak",
        lgpe: true,
        classification: "Bone Keeper Pokemon",
        height: 1,
        weight: 45,
        dexEntry: "Small and weak, this Pokémon is adept with its bone club. It has grown more vicious over the ages.",
        type: "Ground",
        stats: [60,80,110,50,80,45],
        ability1: "Rock Head",
        ability2: "Lightningrod",
        hidden: "Battle Armor"
      },
      {
        sprite: "105-a.png",
        name: "Alolan Marowak",
        lgpe: true,
        classification: "Bone Keeper Pokemon",
        height: 1,
        weight: 34,
        dexEntry: "It has transformed the spirit of its dear departed mother into flames, and tonight it will once again dance in mourning of others of its kind.",
        type: "Fire/ Ghost",
        stats: [60,80,110,50,80,45],
        ability1: "Cursed Pokemon",
        ability2: "Lightningrod",
        hidden: "Rock Head"
      }
    ]
  },
  106:{
    forms: [
      {
        sprite: "106.png",
        name: "Hitmonlee",
        galar: true,
        lgpe: true,
        classification: "Kicking Pokemon",
        height: 1.5,
        weight: 49.8,
        dexEntry: "When kicking, the sole of its foot turns as hard as a diamond on impact and destroys its enemy.",
        type: "Fighting",
        stats: [50,120,53,35,110,87],
        ability1: "Limber",
        ability2: "Reckless",
        hidden: "Unburden"
      }
    ]
  },
  107:{
    forms: [
      {
        sprite: "107.png",
        name: "Hitmonchan",
        galar: true,
        lgpe: true,
        classification: "Punching Pokemon",
        height: 1.4,
        weight: 50.2,
        dexEntry: "Punches in corkscrew fashion. It can punch its way through a concrete wall like a drill.",
        type: "Fighting",
        stats: [50,105,79,35,110,76],
        ability1: "Keen Eye",
        ability2: "Iron Fist",
        hidden: "Inner Focus"
      }
    ]
  },
  108:{
    forms: [
      {
        sprite: "108.png",
        name: "Lickitung",
        lgpe: true,
        classification: "Licking Pokemon",
        height: 1.2,
        weight: 65.5,
        dexEntry: "Its tongue spans almost seven feet and moves more freely than its forelegs. Its licks can cause paralysis.",
        type: "Normal",
        stats: [90,55,75,60,75,30],
        ability1: "Own Tempo",
        ability2: "Oblivious",
        hidden: "Cloud Nine"
      }
    ]
  },
  109:{
    forms: [
      {
        sprite: "109.png",
        name: "Koffing",
        galar: true,
        lgpe: true,
        classification: "Poison Gas Pokemon",
        height: 0.6,
        weight: 1,
        dexEntry: "In hot places, its internal gases could expand and explode without any warning. Be very careful!",
        type: "Poison",
        stats: [40,65,95,60,45,35],
        ability1: "Levitate"
      }
    ]
  },
  110:{
    forms: [
      {
        sprite: "110.png",
        name: "Weezing",
        galar: true,
        lgpe: true,
        classification: "Poison Gas Pokemon",
        height: 1.2,
        weight: 9.5,
        dexEntry: "This Pokémon lives and grows by absorbing poison gas, dust, and germs that exist inside garbage.",
        type: "Poison",
        stats: [65,90,120,85,70,60],
        ability1: "Levitate"
      }
    ]
  },
  111:{
    forms: [
      {
        sprite: "111.png",
        name: "Rhyhorn",
        galar: true,
        lgpe: true,
        classification: "Spikes Pokemon",
        height: 1,
        weight: 115,
        dexEntry: "A Pokémon with a one-track mind. Once it charges, it won’t stop running until it falls asleep.",
        type: "Ground/ Rock",
        stats: [80,85,95,30,30,25],
        ability1: "Lightningrod",
        ability2: "Rock Head",
        hidden: "Reckless"
      }
    ]
  },
  112:{
    forms: [
      {
        sprite: "112.png",
        name: "Rhydon",
        galar: true,
        lgpe: true,
        classification: "Drill Pokemon",
        height: 1.9,
        weight: 120,
        dexEntry: "Its brain developed when it began walking on its hind legs. Its armor-like hide even repels molten lava.",
        type: "Ground/ Rock",
        stats: [105,130,120,45,45,40],
        ability1: "Lightningrod",
        ability2: "Rock Head",
        hidden: "Reckless"
      }
    ]
  },
  113:{
    forms: [
      {
        sprite: "113.png",
        name: "Chansey",
        lgpe: true,
        classification: "Egg Pokemon",
        height: 1.1,
        weight: 34.6,
        dexEntry: "A gentle and kindhearted Pokémon that shares its nutritious eggs if it sees an injured Pokémon.",
        type: "Normal",
        stats: [250,5,5,35,105,50],
        ability1: "Natural Cure",
        ability2: "Serene Grace",
        hidden: "Healer"
      }
    ]
  },
  114:{
    forms: [
      {
        sprite: "114.png",
        name: "Tangela",
        lgpe: true,
        classification: "Vine Pokemon",
        height: 1,
        weight: 35,
        dexEntry: "Its identity is obscured by masses of thick blue vines. The vines are said to never stop growing.",
        type: "Grass",
        stats: [65,55,115,100,40,60],
        ability1: "Chlorophyll",
        ability2: "Leaf Guard",
        hidden: "Regenerator"
      }
    ]
  },
  115:{
    forms: [
      {
        sprite: "115.png",
        name: "Kangaskhan",
        lgpe: true,
        classification: "Parent Pokemon",
        height: 2.2,
        weight: 80,
        dexEntry: "Raises its young in its belly pouch. Won’t run from any fight to keep its young protected.",
        type: "Normal",
        stats: [105,95,80,40,80,90],
        ability1: "Early Bird",
        ability2: "Scrappy",
        hidden: "Inner Focus"
      },
      {
        sprite: "115-m.png",
        name: "Mega Kangaskhan",
        lgpe: true,
        classification: "Parent Pokemon",
        height: 2.2,
        weight: 100,
        dexEntry: "Its child has grown rapidly, thanks to the energy of Mega Evolution. Mother and child show off their harmonious teamwork in battle.",
        type: "Normal",
        stats: [105,125,100,60,100,100],
        ability1: "Parental Bond"
      }
    ]
  },
  116:{
    forms: [
      {
        sprite: "116.png",
        name: "Horsea",
        lgpe: true,
        classification: "Dragon Pokemon",
        height: 0.4,
        weight: 8,
        dexEntry: "If it senses any danger, it will vigorously spray water or a special type of ink from its mouth.",
        type: "Water",
        stats: [30,40,70,70,25,60],
        ability1: "Swift Swim",
        ability2: "Sniper",
        hidden: "Damp"
      }
    ]
  },
  117:{
    forms: [
      {
        sprite: "117.png",
        name: "Seadra",
        lgpe: true,
        classification: "Dragon Pokemon",
        height: 1.2,
        weight: 25,
        dexEntry: "Touching the back fin causes numbness. It hooks its tail to coral to stay in place while sleeping.",
        type: "Water",
        stats: [55,65,95,95,45,85],
        ability1: "Poison Point",
        ability2: "Sniper",
        hidden: "Damp"
      }
    ]
  },
  118:{
    forms: [
      {
        sprite: "118.png",
        name: "Goldeen",
        galar: true,
        lgpe: true,
        classification: "Goldfish Pokemon",
        height: 0.6,
        weight: 15,
        dexEntry: "When it is time for them to lay eggs, they can be seen swimming up rivers and falls in large groups.",
        type: "Water",
        stats: [45,67,60,35,50,63],
        ability1: "Swift Swim",
        ability2: "Water Veil",
        hidden: "Lightningrod"
      }
    ]
  },
  119:{
    forms: [
      {
        sprite: "119.png",
        name: "Seaking",
        galar: true,
        lgpe: true,
        classification: "Goldfish Pokemon",
        height: 1.3,
        weight: 39,
        dexEntry: "It is the male’s job to make a nest by carving out boulders in a stream using the horn on its head.",
        type: "Water",
        stats: [80,92,65,65,80,68],
        ability1: "Swift Swim",
        ability2: "Water Veil",
        hidden: "Lightningrod"
      }
    ]
  },
  120:{
    forms:[
      {
        sprite: "120.png",
        name: "Staryu",
        lgpe: true,
        classification: "Starshape Pokemon",
        height: 0.8,
        weight: 34.5,
        dexEntry: "As long as the center section is unharmed, this Pokémon can grow back fully even if it is chopped to bits.",
        type: "Water",
        stats: [30,45,55,70,55,85],
        ability1: "Illuminate",
        ability2: "Natural Cure",
        hidden: "Analytic"
      }
    ]
  },
  121:{
    forms:[
      {
        sprite: "121.png",
        name: "Starmie",
        lgpe: true,
        classification: "Mysterious Pokemon",
        height: 1.1,
        weight: 80,
        dexEntry: "The center section is named the core. People think it is communicating when it glows in seven colors.",
        type: "Water/ Psychic",
        stats: [60,75,85,100,85,115],
        ability1: "Illuminate",
        ability2: "Natural Cure",
        hidden: "Analytic"
      }
    ]
  },
  122:{
    forms:[
      {
        sprite: "122.png",
        name: "Mr. Mime",
        galar: true,
        lgpe: true,
        classification: "Barrier Pokemon",
        height: 1.3,
        weight: 54.5,
        dexEntry: "Always practicing its pantomime act. It makes enemies believe something exists that really doesn’t.",
        type: "Psychic/ Fairy",
        stats: [40,45,65,100,120,90],
        ability1: "Soundproof",
        ability2: "Filter",
        hidden: "Technician"
      }
    ]
  },
  123:{
    forms: [
      {
        sprite: "123.png",
        name: "Scyther",
        lgpe: true,
        classification: "Mantis Pokemon",
        height: 1.5,
        weight: 56,
        dexEntry: "Leaps out of tall grass and slices prey with its scythes. The movement looks like that of a ninja.",
        type: "Bug/ Flying",
        stats: [70,110,80,55,80,105],
        ability1: "Swarm",
        ability2: "Technician",
        hidden: "Steadfast"
      }
    ]
  },
  124:{
    forms: [
      {
        sprite: "124.png",
        name: "Jynx",
        lgpe: true,
        classification: "Humanshape Pokemon",
        height: 1.4,
        weight: 40.6,
        dexEntry: "Appears to move to a rhythm of its own, as if it were dancing. It wiggles its hips as it walks.",
        type: "Ice/ Psychic",
        stats: [65,50,35,115,95,95],
        ability1: "Oblivious",
        ability2: "Forewarn",
        hidden: "Dry Skin"
      }
    ]
  },
  125:{
    forms:[
      {
        sprite: "125.png",
        name: "Electabuzz",
        lgpe: true,
        classification: "Electric Pokemon",
        height: 1.1,
        weight: 30,
        dexEntry: "If a major power outage occurs, it is certain that this Pokémon has eaten electricity at a power plant.",
        type: "Electric",
        stats: [65,83,57,95,85,105],
        ability1: "Static",
        hidden: "Vital Spirit"
      }
    ]
  },
  126:{
    forms:[
      {
        sprite: "126.png",
        name: "Magmar",
        lgpe: true,
        classification: "Spitfire Pokemon",
        height: 1.3,
        weight: 44.5,
        dexEntry: "Born in an active volcano. Its body is always cloaked in flames, so it looks like a big ball of fire.",
        type: "Fire",
        stats: [65,95,57,100,85,93],
        ability1: "Flame Body",
        hidden: "Vital Spirit"
      }
    ]
  },
  127:{
    forms:[
      {
        sprite: "127.png",
        name: "Pinsir",
        lgpe: true,
        classification: "Stagbeetle Pokemon",
        height: 1.5,
        weight: 55,
        dexEntry: "Grips its prey in its pincers and squeezes hard! It can’t move if it’s cold out, so it lives in warm places.",
        type: "Bug",
        stats: [65,125,100,55,70,85],
        ability1: "Hyper Cutter",
        ability2: "Mold Breaker",
        hidden: "Moxie"
      },
      {
        sprite: "127-m.png",
        name: "Mega Pinsir",
        lgpe: true,
        classification: "Stagbeetle Pokemon",
        height: 1.7,
        weight: 59,
        dexEntry: "With its vaunted horns, it can lift an opponent 10 times heavier than itself and fly about with ease.",
        type: "Bug/ Flying",
        stats: [65,155,120,65,90,105],
        ability1: "Aerilate"
      }
    ]
  },
  128:{
    forms:[
      {
        sprite: "128.png",
        name: "Tauros",
        lgpe: true,
        classification: "Wild Bull Pokemon",
        height: 1.4,
        weight: 88.4,
        dexEntry: "A rowdy Pokémon with a lot of stamina. Once running, it won’t stop until it hits something.",
        type: "Normal",
        stats: [75,100,95,40,70,110],
        ability1: "Intimidate",
        ability2: "Anger Point",
        hidden: "Sheer Force"
      }
    ]
  },
  129:{
    forms: [
      {
        sprite: "129.png",
        name: "Magikarp",
        galar: true,
        lgpe: true,
        classification: "Fish Pokemon",
        height: 0.9,
        weight: 10,
        dexEntry: "Famous for being very unreliable. It can be found swimming in seas, lakes, rivers, and shallow puddles.",
        type: "Water",
        stats: [20,10,55,15,20,80],
        ability1: "Swift Swim",
        hidden: "Rattled"
      }
    ]
  },
  130:{
    forms: [
      {
        sprite: "130.png",
        name: "Gyarados",
        galar: true,
        lgpe: true,
        classification: "Atrocious Pokemon",
        height: 6.5,
        weight: 235,
        dexEntry: "Brutally vicious and enormously destructive. Known for totally destroying cities in ancient times.",
        type: "Water/ Flying",
        stats: [95,125,79,60,100,81],
        ability1: "Intimidate",
        hidden: "Moxie"
      },
      {
        sprite: "130-m.png",
        name: "Mega Gyarados",
        lgpe: true,
        classification: "Atrocious Pokemon",
        height: 6.5,
        weight: 305,
        dexEntry: "Although it obeys its instinctive drive to destroy everything within its reach, it will respond to orders from a Trainer it truly trusts.",
        type: "Water/ Dark",
        stats: [95,155,109,70,130,81],
        ability1: "Mold Breaker"
      }
    ]
  },
  131:{
    forms:[
      {
        sprite: "131.png",
        name: "Lapras",
        galar: true,
        lgpe: true,
        classification: "Transport Pokemon",
        height: 2.5,
        weight: 220,
        dexEntry: "A gentle soul that can understand human speech. It can ferry people across the sea on its back.",
        type: "Water/ Ice",
        stats: [130,85,80,85,95,60],
        ability1: "Water Absorb",
        ability2: "Shell Armor",
        hidden: "Hydration"
      }
    ]
  },
  132:{
    forms:[
      {
        sprite: "132.png",
        name: "Ditto",
        galar: true,
        lgpe: true,
        classification: "Transform Pokemon",
        height: 0.3,
        weight: 4,
        dexEntry: "When it spots an enemy, its body transfigures into an almost-perfect copy of its opponent.",
        type: "Normal",
        stats: [48,48,48,48,48,48],
        ability1: "Limber",
        hidden: "Imposter"
      }
    ]
  },
  133:{
    forms:[
      {
        sprite: "133.png",
        name: "Eevee",
        galar: true,
        lgpe: true,
        classification: "Evolution Pokemon",
        height: 0.3,
        weight: 6.5,
        dexEntry: "It can evolve into a variety of forms. Eevee’s genes are the key to solving the mysteries of Pokémon evolution.",
        type: "Normal",
        stats: [55,55,50,45,65,55],
        ability1: "Run Away",
        ability2: "Adptability",
        hidden: "Anticipation"
      }
    ]
  },
  134:{
    forms:[
      {
        sprite: "134.png",
        name: "Vaporeon",
        galar: true,
        lgpe: true,
        classification: "Bubble Jet Pokemon",
        height: 1,
        weight: 29,
        dexEntry: "Its cell structure is similar to water molecules. It melts into the water and becomes invisible.",
        type: "Water",
        stats: [130,65,60,110,95,65],
        ability1: "Water Absorb",
        hidden: "Hydration"
      }
    ]
  },
  135:{
    forms:[
      {
        sprite: "135.png",
        name: "Jolteon",
        galar: true,
        lgpe: true,
        classification: "Lightning Pokemon",
        height: 0.8,
        weight: 24.5,
        dexEntry: "A sensitive Pokémon that easily becomes sad or angry. Every time its mood changes, it charges power.",
        type: "Electric",
        stats: [65,65,60,110,95,130],
        ability1: "Volt Absorb",
        hidden: "Quick Feet"
      }
    ]
  },
  136:{
    forms:[
      {
        sprite: "136.png",
        name: "Flareon",
        galar: true,
        lgpe: true,
        classification: "Flame Pokemon",
        height: 0.9,
        weight: 25,
        dexEntry: "It has a flame chamber inside its body. It inhales, then breathes out fire that is over 3,000 degrees Fahrenheit.",
        type: "Fire",
        stats: [65,130,60,95,110,65],
        ability1: "Flash Fire",
        hidden: "Guts"
      }
    ]
  },
  137:{
    forms:[
      {
        sprite: "137.png",
        name: "Porygon",
        lgpe: true,
        classification: "Virtual Pokemon",
        height: 0.8,
        weight: 36.5,
        dexEntry: "The only Pokémon that people anticipate can fly into space. None has managed the feat yet, however.",
        type: "Normal",
        stats: [65,60,70,85,75,40],
        ability1: "Trace",
        ability2: "Download",
        hidden: "Analytic"
      }
    ]
  },
  138:{
    forms:[
      {
        sprite: "138.png",
        name: "Omanyte",
        lgpe: true,
        classification: "Spiral Pokemon",
        height: 0.4,
        weight: 7.5,
        dexEntry: "An ancient Pokémon that was recovered from a fossil. It swam by cleverly twisting its 10 tentacles about.",
        type: "Rock/ Water",
        stats: [35,40,100,90,55,35],
        ability1: "Swift Swim",
        ability2: "Shell Armor",
        hidden: "Weak Armor"
      }
    ]
  },
  139:{
    forms:[
      {
        sprite: "139.png",
        name: "Omastar",
        lgpe: true,
        classification: "Spiral Pokemon",
        height: 1,
        weight: 35,
        dexEntry: "Its sharp beak rings its mouth. Its shell was too big for it to move freely, so it became extinct.",
        type: "Rock/ Water",
        stats: [70,60,125,115,70,55],
        ability1: "Swift Swim",
        ability2: "Shell Armor",
        hidden: "Weak Armor"
      }
    ]
  },
  140:{
    forms:[
      {
        sprite: "140.png",
        name: "Kabuto",
        lgpe: true,
        classification: "Shellfish Pokemon",
        height: 0.5,
        weight: 11.5,
        dexEntry: "A Pokémon that was recovered from a fossil. It used the eyes on its back while hiding on the seafloor.",
        type: "Rock/ Water",
        stats: [30,80,90,55,45,55],
        ability1: "Swift Swim",
        ability2: "Battle Armor",
        hidden: "Weak Armor"
      }
    ]
  },
  141:{
    forms:[
      {
        sprite: "141.png",
        name: "Kabutops",
        lgpe: true,
        classification: "Shellfish Pokemon",
        height: 1.3,
        weight: 40.5,
        dexEntry: "A slim and fast swimmer. It sliced its prey with its sharp sickles and drank the body fluids.",
        type: "Rock/ Water",
        stats: [60,115,105,65,70,80],
        ability1: "Swift Swim",
        ability2: "Battle Armor",
        hidden: "Weak Armor"
      }
    ]
  },
  142:{
    forms:[
      {
        sprite: "142.png",
        name: "Aerodactyl",
        lgpe: true,
        classification: "Fossil Pokemon",
        height: 1.8,
        weight: 59,
        dexEntry: "A savage Pokémon that died out in ancient times. It was resurrected using DNA taken from amber.",
        type: "Rock/ Flying",
        stats: [80,105,65,60,75,130],
        ability1: "Rock Head",
        ability2: "Pressure",
        hidden: "Unnerve"
      },
      {
        sprite: "142-m.png",
        name: "Mega Aerodactyl",
        lgpe: true,
        classification: "Fossil Pokemon",
        height: 2.1,
        weight: 79,
        dexEntry: "The power of Mega Evolution has completely restored its genes. The rocks on its body are harder than diamond.",
        type: "Rock/ Flying",
        stats: [80, 135, 85, 70, 95, 150],
        ability1: "Tough Claws"
      }
    ]
  },
  143:{
    forms:[
      {
        sprite: "143.png",
        name: "Snorlax",
        galar: true,
        lgpe: true,
        classification: "Sleeping Pokemon",
        height: 2.1,
        weight: 460,
        dexEntry: "Will eat anything, even if the food happens to be a little moldy. It never gets an upset stomach.",
        type: "Normal",
        stats: [160,110,65,65,110,30],
        ability1: "Immunity",
        ability2: "Thick Fat",
        hidden: "Gluttony"
      }
    ]
  },
  144:{
    forms:[
      {
        sprite: "144.png",
        name: "Articuno",
        lgpe: true,
        classification: "Freeze Pokemon",
        height: 1.7,
        weight: 55.4,
        dexEntry: "A legendary bird Pokémon. It freezes water that is contained in winter air and makes it snow.",
        type: "Ice/ Flying",
        stats: [90,85,100,95,125,85],
        ability1: "Pressure",
        hidden: "Snow Cloak"
      }
    ]
  },
  145:{
    forms:[
      {
        sprite: "145.png",
        name: "Zapdos",
        lgpe: true,
        classification: "Electric Pokemon",
        height: 1.6,
        weight: 52.6,
        dexEntry: "This legendary bird Pokémon is said to appear when the sky turns dark and lightning showers down.",
        type: "Electric/ Flying",
        stats: [90,90,85,125,90,100],
        ability1: "Pressure",
        hidden: "Static"
      }
    ]
  },
  146:{
    forms:[
      {
        sprite: "146.png",
        name: "Moltres",
        lgpe: true,
        classification: "Flame Pokemon",
        height: 2,
        weight: 60,
        dexEntry: "A legendary bird Pokémon. As it flaps its flaming wings, even the night sky will turn red.",
        type: "Fire/ Flying",
        stats: [90,100,90,125,85,90],
        ability1: "Pressure",
        hidden: "Flame Body"
      }
    ]
  },
  147:{
    forms:[
      {
        sprite: "147.png",
        name: "Dratini",
        lgpe: true,
        classification: "Dragon Pokemon",
        height: 1.8,
        weight: 3.3,
        dexEntry: "Long thought to be a myth, this Pokémon’s existence was only recently confirmed by a fisherman who caught one.",
        type: "Dragon",
        stats: [41,64,45,50,50,50],
        ability1: "Shed Skin",
        hidden: "Marvel Scale"
      }
    ]
  },
  148:{
    forms:[
      {
        sprite: "148.png",
        name: "Dragonair",
        lgpe: true,
        classification: "Dragon Pokemon",
        height: 4,
        weight: 16.5,
        dexEntry: "According to a witness, its body was surrounded by a strange aura that gave it a mystical look.",
        type: "Dragon",
        stats: [61,84,65,70,70,70],
        ability1: "Shed Skin",
        hidden: "Marvel Scale"
      }
    ]
  },
  149:{
    forms:[
      {
        sprite: "149.png",
        name: "Dragonite",
        lgpe: true,
        classification: "Dragon Pokemon",
        height: 2.2,
        weight: 210,
        dexEntry: "It is said that this Pokémon lives somewhere in the sea and that it flies. However, these are only rumors.",
        type: "Dragon/ Flying",
        stats: [91,134,95,100,100,80],
        ability1: "Inner Focus",
        hidden: "Multiscale"
      }
    ]
  },
  150:{
    forms:[
      {
        sprite: "150.png",
        name: "Mewtwo",
        galar: true,
        lgpe: true,
        classification: "Genetic Pokemon",
        height: 2,
        weight: 122,
        dexEntry: "Its DNA is almost the same as Mew’s. However, its size and disposition are vastly different.",
        type: "Psychic",
        stats: [106,110,90,154,90,130],
        ability1: "Pressure",
        hidden: "Unnerve"
      },
      {
        sprite: "150-mx.png",
        name: "Mega Mewtwo X",
        lgpe: true,
        classification: "Genetic Pokemon",
        height: 2.3,
        weight: 127,
        dexEntry: "Psychic power has augmented its muscles. It has a grip strength of one ton and can sprint a hundred meters in two seconds flat!",
        type: "Psychic/ Fighting",
        stats: [106,190,100,154,100,130],
        ability1: "Steadfast"
      },
      {
        sprite: "150-my.png",
        name: "Mega Mewtwo Y",
        lgpe: true,
        classification: "Genetic Pokemon",
        height: 1.5,
        weight: 33,
        dexEntry: "Despite its diminished size, its mental power has grown phenomenally. With a mere thought, it can smash a skyscraper to smithereens.",
        type: "Psychic",
        stats: [106,150,70,194,120,140],
        ability1: "Insomnia"
      }
    ]
  },
  151:{
    forms:[
      {
        sprite: "151.png",
        name: "Mew",
        galar: true,
        lgpe: true,
        classification: "New Species Pokemon",
        height: 0.4,
        weight: 4,
        dexEntry: "When viewed through a microscope, this Pokémon’s short, fine, delicate hair can be seen.",
        type: "Psychic",
        stats: [100,100,100,100,100,100],
        ability1: "Synchronize"
      }
    ]
  },
  152:{
    forms:[
      {
        sprite: "152.png",
        name: "Chikorita",
        classification: "Leaf Pokemon",
        height: 0.9,
        weight: 6.4,
        dexEntry: "In battle, Chikorita waves its leaf around to keep the foe at bay. However, a sweet fragrance also wafts from the leaf, becalming the battling Pokémon and creating a cozy, friendly atmosphere all around.",
        type: "Grass",
        stats: [45,49,65,49,65,45],
        ability1: "Overgrow",
        hidden: "Leaf Guard"
      }
    ]
  },
  153:{
    forms:[
      {
        sprite: "153.png",
        name: "Bayleef",
        classification: "Leaf Pokemon",
        height: 1.2,
        weight: 15.8,
        dexEntry: "Bayleef's neck is ringed by curled-up leaves. Inside each tubular leaf is a small shoot of a tree. The fragrance of this shoot makes people peppy.",
        type: "Grass",
        stats: [60,62,80,63,80,60],
        ability1: "Overgrow",
        hidden: "Leaf Guard"
      }
    ]
  },
  154:{
    forms:[
      {
        sprite: "154.png",
        name: "Meganium",
        classification: "Herb Pokemon",
        height: 1.8,
        weight: 100.5,
        dexEntry: "The fragrance of Meganium's flower soothes and calms emotions. In battle, this Pokémon gives off more of its becalming scent to blunt the foe's fighting spirit.",
        type: "Grass",
        stats: [80,82,100,83,100,80],
        ability1: "Overgrow",
        hidden: "Leaf Guard"
      }
    ]
  },
  155:{
    forms:[
      {
        sprite: "155.png",
        name: "Cyndaquil",
        classification: "Fire Mouse Pokemon",
        height: 0.5,
        weight: 7.9,
        dexEntry: "Cyndaquil protects itself by flaring up the flames on its back. The flames are vigorous if the Pokémon is angry. However, if it is tired, the flames splutter fitfully with incomplete combustion.",
        type: "Fire",
        stats: [39,52,43,60,50,65],
        ability1: "Blaze",
        hidden: "Flash Fire"
      }
    ]
  },
  156:{
    forms:[
      {
        sprite: "156.png",
        name: "Quilava",
        classification: "Volcano Pokemon",
        height: 0.9,
        weight: 19,
        dexEntry: "Quilava keeps its foes at bay with the intensity of its flames and gusts of superheated air. This Pokémon applies its outstanding nimbleness to dodge attacks even while scorching the foe with flames.",
        type: "Fire",
        stats: [58,64,58,80,65,80],
        ability1: "Blaze",
        hidden: "Flash Fire"
      }
    ]
  },
  157:{
    forms:[
      {
        sprite: "157.png",
        name: "Typhlosion",
        classification: "Volcano Pokemon",
        height: 1.7,
        weight: 79.5,
        dexEntry: "Typhlosion obscures itself behind a shimmering heat haze that it creates using its intensely hot flames. This Pokémon creates blazing explosive blasts that burn everything to cinders.",
        type: "Fire",
        stats: [78,84,78,109,85,100],
        ability1: "Blaze",
        hidden: "Flash Fire"
      }
    ]
  },
  158:{
    forms:[
      {
        sprite: "158.png",
        name: "Totodile",
        classification: "Big Jaw Pokemon",
        height: 0.6,
        weight: 9.5,
        dexEntry: "Despite the smallness of its body, Totodile's jaws are very powerful. While the Pokémon may think it is just playfully nipping, its bite has enough power to cause serious injury.",
        type: "Water",
        stats: [50,65,64,44,48,43],
        ability1: "Torrent",
        hidden: "Sheer Force"
      }
    ]
  },
  159:{
    forms:[
      {
        sprite: "159.png",
        name: "Croconaw",
        classification: "Big Jaw Pokemon",
        height: 1.1,
        weight: 25,
        dexEntry: "Once Croconaw has clamped its jaws on its foe, it will absolutely not let go. Because the tips of its fangs are forked back like barbed fishhooks, they become impossible to remove when they have sunk in.",
        type: "Water",
        stats: [65,80,80,59,63,58],
        ability1: "Torrent",
        hidden: "Sheer Force"
      }
    ]
  },
  160:{
    forms:[
      {
        sprite: "160.png",
        name: "Feraligatr",
        classification: "Big Jaw Pokemon",
        height: 2.3,
        weight: 88.8,
        dexEntry: "Feraligatr intimidates its foes by opening its huge mouth. In battle, it will kick the ground hard with its thick and powerful hind legs to charge at the foe at an incredible speed.",
        type: "Water",
        stats: [85,105,100,79,83,78],
        ability1: "Torrent",
        hidden: "Sheer Force"
      }
    ]
  },
  161:{
    forms:[
      {
        sprite: "161.png",
        name: "Sentret",
        classification: "Scout Pokemon",
        height: 0.8,
        weight: 6,
        dexEntry: "When Sentret sleeps, it does so while another stands guard. The sentry wakes the others at the first sign of danger. When this Pokémon becomes separated from its pack, it becomes incapable of sleep due to fear.",
        type: "Normal",
        stats: [35,46,34,35,45,20],
        ability1: "Run Away",
        ability2: "Keen Eye",
        hidden: "Frisk"
      }
    ]
  },
  162:{
    forms:[
      {
        sprite: "162.png",
        name: "Furret",
        classification: "Long Body Pokemon",
        height: 1.8,
        weight: 32.5,
        dexEntry: "Furret has a very slim build. When under attack, it can slickly squirm through narrow spaces and get away. In spite of its short limbs, this Pokémon is very nimble and fleet.",
        type: "Normal",
        stats: [85,76,64,45,55,90],
        ability1: "Run Away",
        ability2: "Keen Eye",
        hidden: "Frisk"
      }
    ]
  },
  163:{
    forms:[
      {
        sprite: "163.png",
        name: "Hoothoot",
        galar: true,
        classification: "Owl Pokemon",
        height: 0.7,
        weight: 21.2,
        dexEntry: "Every day, it tilts its head in the same rhythm. A long time ago, people raised these Pokémon to serve as clocks.",
        type: "Normal/ Flying",
        stats: [60,30,30,36,56,50],
        ability1: "Insomnia",
        ability2: "Keen Eye",
        hidden: "Tinted Lens"
      }
    ]
  },
  164:{
    forms:[
      {
        sprite: "164.png",
        name: "Noctowl",
        galar: true,
        classification: "Owl Pokemon",
        height: 1.6,
        weight: 40.8,
        dexEntry: "With eyes that can see in pitch-darkness, it never lets its prey escape. Some even call it “the emperor of dark nights.”",
        type: "Normal/ Flying",
        stats: [100,50,50,86,96,70],
        ability1: "Insomnia",
        ability2: "Keen Eye",
        hidden: "Tinted Lens"
      }
    ]
  },
  165:{
    forms:[
      {
        sprite: "165.png",
        name: "Ledyba",
        classification: "Five Star Pokemon",
        height: 1,
        weight: 10.8,
        dexEntry: "This Pokémon is very sensitive to cold. In the warmth of Alola, it appears quite lively.",
        type: "Bug/ Flying",
        stats: [40,20,30,40,80,55],
        ability1: "Swarm",
        ability2: "Early Bird",
        hidden: "Rattled"
      }
    ]
  },
  166:{
    forms:[
      {
        sprite: "166.png",
        name: "Ledian",
        classification: "Five Star Pokemon",
        height: 1.4,
        weight: 35.6,
        dexEntry: "It’s said that the patterns on its back are related to the stars in the night sky, but the details of that relationship remain unclear.",
        type: "Bug/ Flying",
        stats: [55,35,50,55,110,85],
        ability1: "Swarm",
        ability2: "Early Bird",
        hidden: "Iron Fist"
      }
    ]
  },
  167:{
    forms:[
      {
        sprite: "167.png",
        name: "Spinarak",
        classification: "String Spit Pokemon",
        height: 0.5,
        weight: 8.5,
        dexEntry: "With threads from its mouth, it fashions sturdy webs that won’t break even if you set a rock on them.",
        type: "Bug/ Poison",
        stats: [40,60,40,40,40,30],
        ability1: "Swarm",
        ability2: "Insomnia",
        hidden: "Sniper"
      }
    ]
  },
  168:{
    forms:[
      {
        sprite: "168.png",
        name: "Ariados",
        classification: "Long Leg Pokemon",
        height: 1.1,
        weight: 33.5,
        dexEntry: "Every night, it wanders around in search of prey, whose movements it restrains by spewing threads before it bites into them with its fangs.",
        type: "Bug/ Poison",
        stats: [70, 90, 70, 60, 70, 40],
        ability1: "Swarm",
        ability2: "Insomnia",
        hidden: "Sniper"
      }
    ]
  },
  169:{
    forms:[
      {
        sprite: "169.png",
        name: "Crobat",
        classification: "Bat Pokemons",
        height: 1.8,
        weight: 75,
        dexEntry: "Its fangs are so sharp, if it bites you in the dark and sucks your blood, you won’t notice any pain or realize you’ve been bitten.",
        type: "Poison/ Flying",
        stats: [85,90,80,70,80,130],
        ability1: "Inner Focus",
        hidden: "Infiltrator"
      }
    ]
  },
  170:{
    forms:[
      {
        sprite: "170.png",
        name: "Chinchou",
        galar: true,
        classification: "Angler Pokemon",
        height: 0.5,
        weight: 12,
        dexEntry: "Its two antennae glow softly to lure in prey, making it a useful Pokémon for night fishing.",
        type: "Water/ Electric",
        stats: [75,38,38,56,56,67],
        ability1: "Volt Absorb",
        ability2: "Illuminate",
        hidden: "Water Absorb"
      }
    ]
  },
  171:{
    forms:[
      {
        sprite: "171.png",
        name: "Lanturn",
        galar: true,
        classification: "Light Pokemon",
        height: 1.2,
        weight: 22.5,
        dexEntry: "When the bacteria living inside its antennae absorb Lanturn’s bodily fluids, a strong luminescent effect is produced.",
        type: "Water/ Electric",
        stats: [125,58,58,76,76,67],
        ability1: "Volt Absorb",
        ability2: "Illuminate",
        hidden: "Water Absorb"
      }
    ]
  },
  172:{
    forms:[
      {
        sprite: "172.png",
        name: "Pichu",
        galar: true,
        classification: "Tiny Mouse Pokemon",
        height: 0.3,
        weight: 2,
        dexEntry: "It still can’t use electricity well. When it’s surprised or excited, it discharges electricity unintentionally.",
        type: "Electric",
        stats: [20,40,15,35,35,60],
        ability1: "Static",
        hidden: "Lightningrod"
      }
    ]
  },
  173:{
    forms:[
      {
        sprite: "173.png",
        name: "Cleffa",
        galar: true,
        classification: "Star Shaped Pokemon",
        height: 0.3,
        weight: 3,
        dexEntry: "On nights with many shooting stars, they gather in packs and dance in circles. If you should see them, something good will happen!",
        type: "Fairy",
        stats: [50,25,28,45,55,15],
        ability1: "Cute Charm",
        ability2: "Magic Guard",
        hidden: "Friend Guard"
      }
    ]
  },
  174:{
    forms:[
      {
        sprite: "174.png",
        name: "Igglybuff",
        classification: "Balloon Pokemon",
        height: 0.3,
        weight: 1,
        dexEntry: "It’s always practicing its singing because it wants to improve. Even when it’s asleep, it keeps singing in its dreams!",
        type: "Normal/ Fairy",
        stats: [90,30,15,40,20,15],
        ability1: "Cute Charm",
        ability2: "Competitive",
        hidden: "Friend Guard"
      }
    ]
  },
  175:{
    forms:[
      {
        sprite: "175.png",
        name: "Togepi",
        galar: true,
        classification: "Spike Ball Pokemon",
        height: 0.3,
        weight: 1.5,
        dexEntry: "As its energy, Togepi uses the positive emotions of compassion and pleasure exuded by people and Pokémon. This Pokémon stores up feelings of happiness inside its shell, then shares them with others.",
        type: "Fairy",
        stats: [35,20,65,40,65,20],
        ability1: "Hustle",
        ability2: "Serene Grace",
        hidden: "Super Luck"
      }
    ]
  },
  176:{
    forms:[
      {
        sprite: "176.png",
        name: "Togetic",
        galar: true,
        classification: "Happiness Pokemon",
        height: 0.6,
        weight: 3.2,
        dexEntry: "Togetic is said to be a Pokémon that brings good fortune. When the Pokémon spots someone who is pure of heart, it is said to appear and share its happiness with that person.",
        type: "Fairy/ Flying",
        stats: [55,40,85,80,105,40],
        ability1: "Hustle",
        ability2: "Serene Grace",
        hidden: "Super Luck"
      }
    ]
  },
  177:{
    forms:[
      {
        sprite: "177.png",
        name: "Natu",
        galar: true,
        classification: "Little Bird Pokemon",
        height: 0.2,
        weight: 2,
        dexEntry: "Although it still can’t fly, its jumping power is outstanding. It jumps way up into trees and plucks the buds from the branches.",
        type: "Psychic/ Flying",
        stats: [40,50,45,70,45,70],
        ability1: "Synchronize",
        ability2: "Early Bird",
        hidden: "Magic Bounce"
      }
    ]
  },
  178:{
    forms:[
      {
        sprite: "178.png",
        name: "Xatu",
        galar: true,
        classification: "Mystic Pokemon",
        height: 1.5,
        weight: 15,
        dexEntry: "It’s said that while this Pokémon has the power to predict the future, it’s not powerful enough to change the future it sees.",
        type: "Psychic/ Flying",
        stats: [65,75,70,95,70,95],
        ability1: "Synchronize",
        ability2: "Early Bird",
        hidden: "Magic Bounce"
      }
    ]
  },
  179:{
    forms:[
      {
        sprite: "179.png",
        name: "Mareep",
        classification: "Wool Pokemon",
        height: 0.6,
        weight: 7.8,
        dexEntry: "Clothing made from Mareep’s fleece is easily charged with static electricity, so a special process is used on it.",
        type: "Electric",
        stats: [55,40,40,65,45,35],
        ability1: "Static",
        hidden: "Plus"
      }
    ]
  },
  180:{
    forms:[
      {
        sprite: "180.png",
        name: "Flaaffy",
        classification: "Wool Pokemon",
        height: 0.8,
        weight: 13.3,
        dexEntry: "In the places on its body where fleece doesn’t grow, its skin is rubbery and doesn’t conduct electricity. Those spots are safe to touch.",
        type: "Electric",
        stats: [70,55,55,80,60,45],
        ability1: "Static",
        hidden: "Plus"
      }
    ]
  },
  181:{
    forms:[
      {
        sprite: "181.png",
        name: "Ampharos",
        classification: "Light Pokemon",
        height: 1.4,
        weight: 61.5,
        dexEntry: "The light from its tail can be seen from space. This is why you can always tell exactly where it is, which is why it usually keeps the light off.",
        type: "Electric",
        stats: [90,75,85,115,90,55],
        ability1: "Static",
        hidden: "Plus"
      },
      {
        sprite: "181-m.png",
        name: "Mega Ampharos",
        classification: "Light Pokemon",
        height: 1.4,
        weight: 61.5,
        dexEntry: "Excess energy from Mega Evolution stimulates its genes, and the wool it had lost grows in again.",
        type: "Electric/ Dragon",
        stats: [90,95,105,165,110,45],
        ability1: "Mold Breaker"
      }
    ]
  },
  182:{
    forms:[
      {
        sprite: "182.png",
        name: "Bellossom",
        classification: "Flower Pokemon",
        height: 0.4,
        weight: 5.8,
        dexEntry: "When Bellossom gets exposed to plenty of sunlight, the leaves ringing its body begin to spin around. This Pokémon's dancing is renowned in the southern lands.",
        type: "Grass",
        stats: [75,80,95,90,100,50],
        ability1: "Chlorophyll",
        hidden: "Healer"
      }
    ]
  },
  183:{
    forms:[
      {
        sprite: "183.png",
        name: "Marill",
        classification: "Aquamouse Pokemon",
        height: 0.4,
        weight: 8.5,
        dexEntry: "Marill's oil-filled tail acts much like a life preserver. If you see just its tail bobbing on the water's surface, it's a sure indication that this Pokémon is diving beneath the water to feed on aquatic plants.",
        type: "Water/ Fairy",
        stats: [70,20,50,20,50,40],
        ability1: "Thick Fat",
        ability2: "Huge Power",
        hidden: "Sap Sipper"
      }
    ]
  },
  184:{
    forms:[
      {
        sprite: "184.png",
        name: "Azumarill",
        classification: "Aquarabbit Pokemon",
        height: 0.8,
        weight: 28.5,
        dexEntry: "Azumarill's long ears are indispensable sensors. By focusing its hearing, this Pokémon can identify what kinds of prey are around, even in rough and fast-running rivers.",
        type: "Water/ Fairy",
        stats: [100,50,80,60,80,50],
        ability1: "Thick Fat",
        ability2: "Huge Power",
        hidden: "Sap Sipper"
      }
    ]
  },
  185:{
    forms:[
      {
        sprite: "185.png",
        name: "Sudowoodo",
        classification: "Imitation Pokemon",
        height: 1.2,
        weight: 38,
        dexEntry: "It’s so popular with the elderly that there’s a magazine devoted to this Pokémon. Fans obsess over the particular length and angle of its arms.",
        type: "Rock",
        stats: [70,100,115,30,65,30],
        ability1: "Sturdy",
        ability2: "Rock Head",
        hidden: "Rattled"
      }
    ]
  },
  186:{
    forms:[
      {
        sprite: "186.png",
        name: "Politoed",
        classification: "Frog Pokemon",
        height: 1.1,
        weight: 33.9,
        dexEntry: "Although its cries sound like screams, a composer created a beautiful ballad that was influenced by the sounds.",
        sl: "Politoed... Fucking... Politoed...",
        type: "Water",
        stats: [90,75,75,90,100,70],
        ability1: "Water Absorb",
        ability2: "Damp",
        hidden: "Drizzle"
      }
    ]
  },
  187:{
    forms:[
      {
        sprite: "187.png",
        name: "Hoppip",
        classification: "Cottonweed Pokemon",
        height: 0.4,
        weight: 0.5,
        dexEntry: "This Pokémon drifts and floats with the wind. If it senses the approach of strong winds, Hoppip links its leaves with other Hoppip to prepare against being blown away.",
        type: "Grass/ Flying",
        stats: [35,35,40,35,55,50],
        ability1: "Chlorophyll",
        ability2: "Leaf Guard",
        hidden: "Infiltrator"
      }
    ]
  },
  188:{
    forms:[
      {
        sprite: "188.png",
        name: "Skiploom",
        classification: "Cottonweed Pokemon",
        height: 0.6,
        weight: 1,
        dexEntry: "Skiploom's flower blossoms when the temperature rises above 64 degrees Fahrenheit. How much the flower opens depends on the temperature. For that reason, this Pokémon is sometimes used as a thermometer.",
        type: "Grass/ Flying",
        stats: [55,45,50,45,65,80],
        ability1: "Chlorophyll",
        ability2: "Leaf Guard",
        hidden: "Infiltrator"
      }
    ]
  },
  189:{
    forms:[
      {
        sprite: "189.png",
        name: "Jumpluff",
        classification: "Cottonweed Pokemon",
        height: 0.8,
        weight: 3,
        dexEntry: "Jumpluff rides warm southern winds to cross the sea and fly to foreign lands. The Pokémon descends to the ground when it encounters cold air while it is floating.",
        type: "Grass/ Flying",
        stats: [75,55,70,55,95,110],
        ability1: "Chlorophyll",
        ability2: "Leaf Guard",
        hidden: "Infiltrator"
      }
    ]
  },
  190:{
    forms:[
      {
        sprite: "190.png",
        name: "Aipom",
        classification: "Long Tail Pokemon",
        height: 0.8,
        weight: 11.5,
        dexEntry: "As it did more and more with its tail, its hands became clumsy. It makes its nest high in the treetops.",
        type: "Normal",
        stats: [55,70,55,40,55,85],
        ability1: "Run Away",
        ability2: "Pickup",
        hidden: "Skill Link"
      }
    ]
  },
  191:{
    forms:[
      {
        sprite: "191.png",
        name: "Sunkern",
        classification: "Seed Pokemon",
        height: 0.3,
        weight: 1.8,
        dexEntry: "Sunkern tries to move as little as it possibly can. It does so because it tries to conserve all the nutrients it has stored in its body for its evolution. It will not eat a thing, subsisting only on morning dew.",
        type: "Grass",
        stats: [30,30,30,30,30,30],
        ability1: "Chlorophyll",
        ability2: "Solar Power",
        hidden: "Early Bird"
      }
    ]
  },
  192:{
    forms:[
      {
        sprite: "192.png",
        name: "Sunflora",
        classification: "Sun Pokemon",
        height: 0.8,
        weight: 8.5,
        dexEntry: "Sunflora converts solar energy into nutrition. It moves around actively in the daytime when it is warm. It stops moving as soon as the sun goes down for the night.",
        type: "Grass",
        stats: [75,75,55,105,85,30],
        ability1: "Chlorophyll",
        ability2: "Solar Power",
        hidden: "Early Bird"
      }
    ]
  },
  193:{
    forms:[
      {
        sprite: "193.png",
        name: "Yanma",
        classification: "Clear Wing Pokemon",
        height: 1.2,
        weight: 38,
        dexEntry: "Yanma is capable of seeing 360 degrees without having to move its eyes. It is a great flier that is adept at making sudden stops and turning midair. This Pokémon uses its flying ability to quickly chase down targeted prey.",
        type: "Bug/ Flying",
        stats: [65,65,45,75,45,95],
        ability1: "Speed Boost",
        ability2: "Compoundeyes",
        hidden: "Frisk"
      }
    ]
  },
  194:{
    forms:[
      {
        sprite: "194.png",
        name: "Wooper",
        galar: true,
        classification: "Water Fish Pokemon",
        height: 0.4,
        weight: 8.5,
        dexEntry: "Wooper usually lives in water. However, it occasionally comes out onto land in search of food. On land, it coats its body with a gooey, toxic film.",
        type: "Water/ Ground",
        stats: [55,45,45,25,25,15],
        ability1: "Damp",
        ability2: "Water Absorb",
        hidden: "Unaware"
      }
    ]
  },
  195:{
    forms:[
      {
        sprite: "195.png",
        name: "Quagsire",
        galar: true,
        classification: "Water Fish Pokemon",
        height: 1.4,
        weight: 75,
        dexEntry: "Quagsire hunts for food by leaving its mouth wide open in water and waiting for its prey to blunder in unaware. Because the Pokémon does not move, it does not get very hungry.",
        type: "Water/ Ground",
        stats: [95,85,85,65,65,35],
        ability1: "Damp",
        ability2: "Water Absorb",
        hidden: "Unaware"
      }
    ]
  },
  196:{
    forms:[
      {
        sprite: "196.png",
        name: "Espeon",
        galar: true,
        classification: "Sun Pokemon",
        height: 0.9,
        weight: 26.5,
        dexEntry: "Although it originally had no powers at all, people say its precognitive faculties were awakened by its need to protect itself.",
        type: "Psychic",
        stats: [65,65,60,130,95,110],
        ability1: "Synchronize",
        hidden: "Magic Bounce"
      }
    ]
  },
  197:{
    forms:[
      {
        sprite: "197.png",
        name: "Umbreon",
        galar: true,
        classification: "Moonlight Pokemon",
        height: 1,
        weight: 27,
        dexEntry: "This Pokémon is nocturnal. Even in total darkness, its large eyes can spot its prey clearly!",
        type: "Dark",
        stats: [95,65,110,60,130,65],
        ability1: "Syncronize",
        hidden: "Inner Focus"
      }
    ]
  },
  198:{
    forms:[
      {
        sprite: "198.png",
        name: "Murkrow",
        classification: "Darkness Pokemon",
        height: 0.5,
        weight: 2.1,
        dexEntry: "It has a weakness for shiny things. It’s been known to sneak into the nests of Gabite—noted collectors of jewels—in search of treasure.",
        type: "Dark/ Flying",
        stats: [60,85,42,85,42,91],
        ability1: "Insomnia",
        ability2: "Super Luck",
        hidden: "Prankster"
      }
    ]
  },
  199:{
    forms:[
      {
        sprite: "199.png",
        name: "Slowking",
        classification: "Royal Pokemon",
        height: 2,
        weight: 79.5,
        dexEntry: "It’s constantly coming up with new ideas that would change the world, but as soon as it hits upon a new idea, it forgets it.",
        type: "Water/ Psychic",
        stats: [95,75,80,100,110,30],
        ability1: "Oblivious",
        ability2: "Own Tempo",
        hidden: "Regenerator"
      }
    ]
  },
  200:{
    forms:[
      {
        sprite: "200.png",
        name: "Misdreavus",
        classification: "Screech Pokemon",
        height: 0.7,
        weight: 1,
        dexEntry: "What gives meaning to its life is surprising others. If you set your ear against the red orbs around its neck, you can hear shrieking.",
        type: "Ghost",
        stats: [60,60,60,85,85,85],
        ability1: "Levitate"
      }
    ]
  },
  201:{
    forms:[
      {
        sprite: "201.png",
        name: "Unown",
        classification: "Symbol Pokemon",
        height: 0.5,
        weight: 5,
        dexEntry: "This Pokémon is shaped like ancient writing. It is a mystery as to which came first, the ancient writings or the various Unown. Research into this topic is ongoing but nothing is known.",
        type: "Psychic",
        stats: [48,72,48,72,48,48],
        ability1: "Levitate"
      }
    ]
  },
  202:{
    forms:[
      {
        sprite: "202.png",
        name: "Wobbuffet",
        galar: true,
        classification: "Patient Pokemon",
        height: 1.3,
        weight: 28.5,
        dexEntry: "If two or more Wobbuffet meet, they will turn competitive and try to outdo each other's endurance. However, they may try to see which one can endure the longest without food. Trainers need to beware of this habit.",
        type: "Psychic",
        stats: [190,33,58,33,58,33],
        ability1: "Shadow Tag",
        hidden: "Telepathy"
      }
    ]
  },
  203:{
    forms:[
      {
        sprite: "203.png",
        name: "Girafarig",
        classification: "Long Neck Pokemon",
        height: 1.5,
        weight: 41.5,
        dexEntry: "Girafarig's rear head also has a brain, but it is small. The rear head attacks in response to smells and sounds. Approaching this Pokémon from behind can cause the rear head to suddenly lash out and bite.",
        type: "Normal/ Psychic",
        stats: [70,80,65,90,65,85],
        ability1: "Inner Focus",
        ability2: "Early Bird",
        hidden: "Sap Sipper"
      }
    ]
  },
  204:{
    forms:[
      {
        sprite: "204.png",
        name: "Pineco",
        classification: "Bagworm Pokemon",
        height: 0.6,
        weight: 7.2,
        dexEntry: "Motionless, it hangs from trees, waiting for its bug Pokémon prey to come to it. Its favorite in Alola is Cutiefly.",
        type: "Bug",
        stats: [50,65,90,35,35,15],
        ability1: "Sturdy",
        hidden: "Overcoat"
      }
    ]
  },
  205:{
    forms:[
      {
        sprite: "205.png",
        name: "Forretress",
        classification: "Bagworm Pokemon",
        height: 1.2,
        weight: 125.8,
        dexEntry: "When something approaches it, it fires off fragments of its steel shell in attack. This is not a conscious action but a conditioned reflex.",
        type: "Bug/ Steel",
        stats: [75,90,140,60,60,40],
        ability1: "Sturdy",
        hidden: "Overcoat"
      }
    ]
  },
  206:{
    forms:[
      {
        sprite: "206.png",
        name: "Dunsparce",
        classification: "Land Snake Pokemon",
        height: 1.5,
        weight: 14,
        dexEntry: "It travels by digging through the ground. Diglett and Dunsparce share one another’s tunnels happily.",
        type: "Normal",
        stats: [100,70,70,65,65,45],
        ability1: "Serene Grace",
        ability2: "Run Away",
        hidden: "Rattled"
      }
    ]
  },
  207:{
    forms:[
      {
        sprite: "207.png",
        name: "Gligar",
        classification: "Flyscorpion Pokemon",
        height: 1.1,
        weight: 64.8,
        dexEntry: "Gligar glides through the air without a sound as if it were sliding. This Pokémon hangs on to the face of its foe using its clawed hind legs and the large pincers on its forelegs, then injects the prey with its poison barb.",
        type: "Ground/ Flying",
        stats: [65,75,105,35,65,85],
        ability1: "Hyper Cutter",
        ability2: "Sand Veil",
        hidden: "Immunity"
      }
    ]
  },
  208:{
    forms:[
      {
        sprite: "208.png",
        name: "Steelix",
        galar: true,
        classification: "Iron Snake Pokemon",
        height: 9.2,
        weight: 400,
        dexEntry: "Steelix lives even further underground than Onix. This Pokémon is known to dig toward the earth's core. There are records of this Pokémon reaching a depth of over six-tenths of a mile underground.",
        type: "Steel/ Ground",
        stats: [75,85,200,55,65,30],
        ability1: "Rock Head",
        ability2: "Sturdy",
        hidden: "Sheer Force"
      },
      {
        sprite: "208-m.png",
        name: "Mega Steelix",
        classification: "Iron Snake Pokemon",
        height: 10.5,
        weight: 740,
        dexEntry: "No Data",
        type: "Steel/ Ground",
        stats: [75,125,230,55,95,30],
        ability1: "Sand Force"
      }
    ]
  },
  209:{
    forms:[
      {
        sprite: "209.png",
        name: "Snubbull",
        classification: "Fairy Pokemon",
        height: 0.6,
        weight: 7.8,
        dexEntry: "It grows close to others easily and is also easily spoiled. The disparity between its face and its actions makes many young people wild about it.",
        type: "Fairy",
        stats: [60,80,50,40,40,30],
        ability1: "Intimidate",
        ability2: "Run Away",
        hidden: "Rattled"
      }
    ]
  },
  210:{
    forms:[
      {
        sprite: "210.png",
        name: "Granbull",
        classification: "Fairy Pokemon",
        height: 1.4,
        weight: 48.7,
        dexEntry: "While it has powerful jaws, it doesn’t care for disputes, so it rarely has a chance to display their might.",
        type: "Fairy",
        stats: [90,120,75,60,60,45],
        ability1: "Intimidate",
        ability2: "Quick Feet",
        hidden: "Rattled"
      }
    ]
  },
  211:{
    forms:[
      {
        sprite: "211.png",
        name: "Qwilfish",
        galar: true,
        classification: "Balloon Pokemon",
        height: 0.5,
        weight: 3.9,
        dexEntry: "Qwilfish sucks in water, inflating itself. This Pokémon uses the pressure of the water it swallowed to shoot toxic quills all at once from all over its body. It finds swimming somewhat challenging.",
        type: "Water/ Poison",
        stats: [65,95,85,55,55,85],
        ability1: "Poison Point",
        ability2: "Swift Swim",
        hidden: "Intimidate"
      }
    ]
  },
  212:{
    forms:[
      {
        sprite: "212.png",
        name: "Scizor",
        classification: "Pincer Pokemon",
        height: 1.8,
        weight: 118,
        dexEntry: "Its body is like steel. Its tough, heavy pincers are more suited to smashing enemies than grabbing them.",
        type: "Bug/ Steel",
        stats: [70,130,100,55,80,65],
        ability1: "Swarm",
        ability2: "Technician",
        hidden: "Light Metal"
      },
      {
        sprite: "212-m.png",
        name: "Mega Scizor",
        classification: "Pincer Pokemon",
        height: 2,
        weight: 125,
        dexEntry: "It stores the excess energy from Mega Evolution, so after a long time passes, its body starts to melt.",
        type: "Bug/ Steel",
        stats: [70,150,140,65,100,75],
        ability1: "Technician"
      }
    ]
  },
  213:{
    forms:[
      {
        sprite: "213.png",
        name: "Shuckle",
        galar: true,
        classification: "Mold Pokemon",
        height: 0.6,
        weight: 20.5,
        dexEntry: "Shuckle quietly hides itself under rocks, keeping its body concealed inside its hard shell while eating berries it has stored away. The berries mix with its body fluids to become a juice.",
        type: "Bug/ Rock",
        stats: [20,10,230,10,230,5],
        ability1: "Sturdy",
        ability2: "Gluttony",
        hidden: "Contrary"
      }
    ]
  },
  214:{
    forms:[
      {
        sprite: "214.png",
        name: "Heracross",
        classification: "Singlehorn Pokemon",
        height: 1.5,
        weight: 54,
        dexEntry: "It’s proud of its thick horn. In Alola, its biggest rival is Vikavolt, which it’s always fighting with.",
        type: "Bug/ Fighting",
        stats: [80,125,75,40,95,85],
        ability1: "Swarm",
        ability2: "Guts",
        hidden: "Moxie"
      },
      {
        sprite: "214-m.png",
        name: "Mega Heracross",
        classification: "Singlehorn Pokemon",
        height: 1.7,
        weight: 62.5,
        dexEntry: "It can grip things with its two horns and lift 500 times its own body weight.",
        type: "Bug/ Fighting",
        stats: [80,185,115,40,105,75],
        ability1: "Skill Link"
      }
    ]
  },
  215:{
    forms:[
      {
        sprite: "215.png",
        name: "Sneasel",
        galar: true,
        classification: "Sharp Claw Pokemon",
        height: 0.9,
        weight: 28,
        dexEntry: "They will cooperate to steal eggs from the nests of bird Pokémon, but fights break out to determine which one gets to eat the eggs.",
        type: "Dark/ Ice",
        stats: [55,95,55,35,75,115],
        ability1: "Inner Focus",
        ability2: "Keen Eye",
        hidden: "Pickpocket"
      }
    ]
  },
  216:{
    forms:[
      {
        sprite: "216.png",
        name: "Teddiursa",
        classification: "Little Bear Pokemon",
        height: 0.6,
        weight: 8.8,
        dexEntry: "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill.",
        type: "Normal",
        stats: [60,80,50,50,50,40],
        ability1: "Pickup",
        ability2: "Quick Feet",
        hidden: "Honey Gather"
      }
    ]
  },
  217:{
    forms:[
      {
        sprite: "217.png",
        name: "Ursaring",
        classification: "Hibernator Pokemon",
        height: 1.8,
        weight: 125.8,
        dexEntry: "In the forests inhabited by Ursaring, it is said that there are many streams and towering trees where they gather food. This Pokémon walks through its forest gathering food every day.",
        type: "Normal",
        stats: [90,130,75,75,75,55],
        ability1: "Guts",
        ability2: "Quick Feet",
        hidden: "Unnerve"
      }
    ]
  },
  218:{
    forms:[
      {
        sprite: "218.png",
        name: "Slugma",
        classification: "Lava Pokemon",
        height: 0.7,
        weight: 35,
        dexEntry: "Molten magma courses throughout Slugma's circulatory system. If this Pokémon is chilled, the magma cools and hardens. Its body turns brittle and chunks fall off, reducing its size.",
        type: "Fire",
        stats: [40,40,40,70,40,20],
        ability1: "Magma Armor",
        ability2: "Flame Body",
        hidden: "Weak Armor"
      }
    ]
  },
  219:{
    forms:[
      {
        sprite: "219.png",
        name: "Magcargo",
        classification: "Lava Pokemon",
        height: 0.8,
        weight: 55,
        dexEntry: "Magcargo's shell is actually its skin that hardened as a result of cooling. Its shell is very brittle and fragile-just touching it causes it to crumble apart. This Pokémon returns to its original size by dipping itself in magma.",
        type: "Fire/ Rock",
        stats: [60,50,120,90,80,30],
        ability1: "Magma Armor",
        ability2: "Flame Body",
        hidden: "Weak Armor"
      }
    ]
  },
  220:{
    forms:[
      {
        sprite: "220.png",
        name: "Swinub",
        galar: true,
        classification: "Pig Pokemon",
        height: 0.4,
        weight: 6.5,
        dexEntry: "Swinub roots for food by rubbing its snout against the ground. Its favorite food is a mushroom that grows under the cover of dead grass. This Pokémon occasionally roots out hot springs.",
        type: "Ice/ Ground",
        stats: [50,50,40,30,30,50],
        ability1: "Oblivious",
        ability2: "Snow Cloak",
        hidden: "Thick Fat"
      }
    ]
  },
  221:{
    forms:[
      {
        sprite: "221.png",
        name: "Piloswine",
        galar: true,
        classification: "Swine Pokemon",
        height: 1.1,
        weight: 55.8,
        dexEntry: "Piloswine is covered by a thick coat of long hair that enables it to endure the freezing cold. This Pokémon uses its tusks to dig up food that has been buried under ice.",
        type: "Ice/ Ground",
        stats: [100,100,80,60,60,50],
        ability1: "Oblivious",
        ability2: "Snow Cloak",
        hidden: "Thick Fat"
      }
    ]
  },
  222:{
    forms:[
      {
        sprite: "222.png",
        name: "Corsola",
        galar: true,
        classification: "Coral Pokemon",
        height: 0.6,
        weight: 5,
        dexEntry: "The pink of Corsola that live in Alola is deep and vibrant, thanks to seas filled with nutrition.",
        type: "Water/ Rock",
        stats: [65,55,95,65,95,35],
        ability1: "Hustle",
        ability2: "Natural Cure",
        hidden: "Regenerator"
      }
    ]
  },
  223:{
    forms:[
      {
        sprite: "223.png",
        name: "Remoraid",
        galar: true,
        classification: "Jet Pokemon",
        height: 0.6,
        weight: 12,
        dexEntry: "This Pokémon clings to Mantine and shares in its prosperity. When its Mantine is attacked, Remoraid will fight alongside it!",
        sl: "E̸̻̔ŗ̴͆r̷̲͋ô̴͈r̶̺͝ ̴̘͠4̵̟̄0̸̪̓4̴̂͜:̷͖͌ ̶͚̐D̵͓̊é̶̜x̵̲͘ ̶̛̳Ē̸͜n̸̠͊ţ̶̓r̶̲̐y̴̖͑ ̴̡͐n̴̗̚o̵͕̅t̷̩̄ ̴̨͌f̸̘̌o̷̪͠ů̸͔ṋ̸̍d̸̢͠",
        type: "Water",
        stats: [35,65,35,65,35,65],
        ability1: "Hustle",
        ability2: "Sniper",
        hidden: "Moody"
      }
    ]
  },
  224:{
    forms:[
      {
        sprite: "224.png",
        name: "Octillery",
        galar: true,
        classification: "Jet Pokemon",
        height: 0.9,
        weight: 28.5,
        dexEntry: "The ink it spits when escaping is special. It contains a substance that dulls the sense of smell, so Pokémon with keen noses get lost.",
        type: "Water",
        stats: [75,105,75,105,75,45],
        ability1: "Suction Cups",
        ability2: "Sniper",
        hidden: "Moody"
      }
    ]
  },
  225:{
    forms:[
      {
        sprite: "225.png",
        name: "Delibird",
        galar: true,
        classification: "Delivery Pokemon",
        height: 0.9,
        weight: 16,
        dexEntry: "It shares its food with people who are stranded. Because Delibird is omnivorous, sometimes it gives those people bug Pokémon.",
        type: "Ice/ Flying",
        stats: [45,55,45,65,45,75],
        ability1: "Vital Spirit",
        ability2: "Hustle",
        hidden: "Insomnia"
      }
    ]
  },
  226:{
    forms:[
      {
        sprite: "226.png",
        name: "Mantine",
        galar: true,
        classification: "Kite Pokemon",
        height: 2.1,
        weight: 220,
        dexEntry: "Postcards and posters featuring Mantine leaping elegantly above the waves are popular souvenirs of Alola.",
        type: "Water/ Flying",
        stats: [85,40,70,80,140,70],
        ability1: "Swift Swim",
        ability2: "Water Absorb",
        hidden: "Water Veil"
      }
    ]
  },
  227:{
    forms:[
      {
        sprite: "227.png",
        name: "Skarmory",
        classification: "Armor Bird Pokemon",
        height: 1.7,
        weight: 50.5,
        dexEntry: "The wing feathers it sheds can be processed and made into knives whose sharpness is recognized by the finest chefs.",
        type: "Steel/ Flying",
        stats: [65,80,140,40,70,70],
        ability1: "Keen Eye",
        ability2: "Sturdy",
        hidden: "Weak Armor"
      }
    ]
  },
  228:{
    forms:[
      {
        sprite: "228.png",
        name: "Houndour",
        classification: "Dark Pokemon",
        height: 0.6,
        weight: 10.8,
        dexEntry: "It cooperates with others skillfully. When it becomes your partner, it’s very loyal to you as its Trainer and will obey your orders.",
        type: "Dark/ Fire",
        stats: [45,60,30,80,50,65],
        ability1: "Early Bird",
        ability2: "Flash Fire",
        hidden: "Unnerve"
      }
    ]
  },
  229:{
    forms:[
      {
        sprite: "229.png",
        name: "Houndoom",
        classification: "Dark Pokemon",
        height: 1.4,
        weight: 35,
        dexEntry: "They spew flames mixed with poison to finish off their opponents. They divvy up their prey evenly among the members of their pack.",
        type: "Dark/ Fire",
        stats: [75,90,50,110,80,95],
        ability1: "Early Bird",
        ability2: "Flash Fire",
        hidden: "Unnerve"
      },
      {
        sprite: "229-m.png",
        name: "Mega Houndoom",
        classification: "Dark Pokemon",
        height: 1.9,
        weight: 49.5,
        dexEntry: "Its red claws and the tips of its tail are melting from high internal temperatures that are painful to Houndoom itself.",
        type: "Dark/ Fire",
        stats: [75,90,90,140,90,115],
        ability1: "Solar Power"
      }
    ]
  },
  230:{
    forms:[
      {
        sprite: "230.png",
        name: "Kingdra",
        classification: "Dragon Pokemon",
        height: 1.8,
        weight: 152,
        dexEntry: "Kingdra lives at extreme ocean depths that are otherwise uninhabited. It has long been believed that the yawning of this Pokémon creates spiraling ocean currents.",
        type: "Water/ Dragon",
        stats: [75,95,95,95,95,85],
        ability1: "Swift Swim",
        ability2: "Sniper",
        hidden: "Damp"
      }
    ]
  },
  231:{
    forms:[
      {
        sprite: "231.png",
        name: "Phanphy",
        classification: "Long Nose Pokemon",
        height: 0.5,
        weight: 33.5,
        dexEntry: "For its nest, Phanpy digs a vertical pit in the ground at the edge of a river. It marks the area around its nest with its trunk to let the others know that the area has been claimed.",
        type: "Ground",
        stats: [90,60,60,40,40,40],
        ability1: "Pickup",
        hidden: "Sand Veil"
      }
    ]
  },
  232:{
    forms:[
      {
        sprite: "232.png",
        name: "Donphan",
        classification: "Armor Pokemon",
        height: 1.1,
        weight: 120,
        dexEntry: "Donphan's favorite attack is curling its body into a ball, then charging at its foe while rolling at high speed. Once it starts rolling, this Pokémon can't stop very easily.",
        type: "Ground",
        stats: [90,120,120,60,60,50],
        ability1: "Sturdy",
        hidden: "Sand Veil"
      }
    ]
  },
  233:{
    forms:[
      {
        sprite: "233.png",
        name: "Porygon2",
        classification: "Virtual Pokemon",
        height: 0.6,
        weight: 32.5,
        dexEntry: "AI has been installed in it. It learns various things all on its own, but it even remembers things it doesn’t need to know.",
        type: "Normal",
        stats: [85,80,90,105,95,60],
        ability1: "Trace",
        ability2: "Download",
        hidden: "Analytic"
      }
    ]
  },
  234:{
    forms:[
      {
        sprite: "234.png",
        name: "Stantler",
        classification: "Big Horn Pokemon",
        height: 1.4,
        weight: 71.2,
        dexEntry: "Stantler's magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers.",
        type: "Normal",
        stats: [73,95,62,85,65,85],
        ability1: "Intimidate",
        ability2: "Frisk",
        hidden: "Sap Sipper"
      }
    ]
  },
  235:{
    forms:[
      {
        sprite: "235.png",
        name: "Smeargle",
        classification: "Painter Pokemon",
        height: 1.2,
        weight: 58,
        dexEntry: "The fluid of Smeargle’s tail secretions changes in the intensity of its hue as the Pokémon’s emotions change.",
        type: "Normal",
        stats: [55,20,35,20,45,75],
        ability1: "Own Tempo",
        ability2: "Technician",
        hidden: "Moody"
      }
    ]
  },
  236:{
    forms:[
      {
        sprite: "236.png",
        name: "Tyrogue",
        galar: true,
        classification: "Scuffle Pokemon",
        height: 0.7,
        weight: 21,
        dexEntry: "Tyrogue becomes stressed out if it does not get to train every day. When raising this Pokémon, the Trainer must establish and uphold various training methods.",
        type: "Fighting",
        stats: [35,35,35,35,35,35],
        ability1: "Guts",
        ability2: "Steadfast",
        hidden: "Vital Spirit"
      }
    ]
  },
  237:{
    forms:[
      {
        sprite: "237.png",
        name: "Hitmontop",
        galar: true,
        classification: "Handstand Pokemon",
        height: 1.4,
        weight: 48,
        dexEntry: "Hitmontop spins on its head at high speed, all the while delivering kicks. This technique is a remarkable mix of both offense and defense at the same time. The Pokémon travels faster spinning than it does walking.",
        type: "Fighting",
        stats: [50,95,95,35,110,70],
        ability1: "Intimidate",
        ability2: "Technician",
        hidden: "Steadfast"
      }
    ]
  },
  238:{
    forms:[
      {
        sprite: "238.png",
        name: "Smoochum",
        classification: "Kiss Pokemon",
        height: 0.4,
        weight: 6,
        dexEntry: "When it examines things, before touching them with its hands, it makes lip contact and then diligently licks all the dirt off its lips.",
        type: "Ice/ Psychic",
        stats: [45,30,15,85,65,65],
        ability1: "Oblivious",
        ability2: "Forewarn",
        hidden: "Hydration"
      }
    ]
  },
  239:{
    forms:[
      {
        sprite: "239.png",
        name: "Elekid",
        classification: "Electric Pokemon",
        height: 0.6,
        weight: 23.5,
        dexEntry: "When it hears the crash of thunder, Elekid’s mood improves. It can be useful to record that sound and play it when Elekid’s feeling down.",
        type: "Electric",
        stats: [45,63,37,65,55,95],
        ability1: "Static",
        hidden: "Vital Spirit"
      }
    ]
  },
  240:{
    forms:[
      {
        sprite: "240.png",
        name: "Magby",
        classification: "Live Coal Pokemon",
        height: 0.7,
        weight: 21.4,
        dexEntry: "When flames drip from its nose, that means it has a cold. Have it lie down for a nice rest in some magma.",
        type: "Fire",
        stats: [45,75,37,70,55,83],
        ability1: "Flame Body",
        hidden: "Vital Spirit"
      }
    ]
  },
  241:{
    forms:[
      {
        sprite: "241.png",
        name: "Miltank",
        classification: "Milk Cow Pokemon",
        height: 1.2,
        weight: 75.5,
        dexEntry: "It produces over five gallons of milk a day. The higher the quality of the pastures it lives in, the richer and tastier its milk becomes.",
        sl: "This pokemon is known to give glasses of milk to its trainer. However, it is unknown where it gets the glass from.",
        type: "Normal",
        stats: [95,80,105,40,70,100],
        ability1: "Thick Fat",
        ability2: "Scrappy",
        hidden: "Sap Sipper"
      }
    ]
  },
  242:{
    forms:[
      {
        sprite: "242.png",
        name: "Blissey",
        classification: "Happiness Pokemon",
        height: 1.5,
        weight: 46.8,
        dexEntry: "Their eggs are such a delicacy that some say eating one will bring you happiness. These eggs fetch the highest prices on the market.",
        type: "Normal",
        stats: [255,10,10,75,135,55],
        ability1: "Natural Cure",
        ability2: "Serene Grace",
        hidden: "Healer"
      }
    ]
  },
  243:{
    forms:[
      {
        sprite: "243.png",
        name: "Raikou",
        classification: "Thunder Pokemon",
        height: 1.9,
        weight: 178,
        dexEntry: "Raikou embodies the speed of lightning. The roars of this Pokémon send shock waves shuddering through the air and shake the ground as if lightning bolts had come crashing down.",
        type: "Electric",
        stats: [90,85,75,115,100,115],
        ability1: "Pressure",
        hidden: "Inner Focus"
      }
    ]
  },
  244:{
    forms:[
      {
        sprite: "244.png",
        name: "Entei",
        classification: "Volcano Pokemon",
        height: 2.1,
        weight: 198,
        dexEntry: "Entei embodies the passion of magma. This Pokémon is thought to have been born in the eruption of a volcano. It sends up massive bursts of fire that utterly consume all that they touch.",
        type: "Fire",
        stats: [115,115,85,90,75,100],
        ability1: "Pressure",
        hidden: "Inner Focus"
      }
    ]
  },
  245:{
    forms:[
      {
        sprite: "245.png",
        name: "Suicune",
        classification: "Aurora Pokemon",
        height: 2,
        weight: 187,
        dexEntry: "Suicune embodies the compassion of a pure spring of water. It runs across the land with gracefulness. This Pokémon has the power to purify dirty water.",
        type: "Water",
        stats: [100,75,115,90,115,85],
        ability1: "Pressure",
        hidden: "Inner Focus"
      }
    ]
  },
  246:{
    forms:[
      {
        sprite: "246.png",
        name: "Larvitar",
        galar: true,
        classification: "Rock Skin Pokemon",
        height: 0.6,
        weight: 72,
        dexEntry: "Born underground, it eats its way through dirt to the surface, where its parents are. It doesn’t deal well with the bright light it finds there.",
        type: "Rock/ Ground",
        stats: [50,64,50,45,50,41],
        ability1: "Guts",
        hidden: "Sand Veil"
      }
    ]
  },
  247:{
    forms:[
      {
        sprite: "247.png",
        name: "Pupitar",
        galar: true,
        classification: "Hard Shell Pokemon",
        height: 1.2,
        weight: 152,
        dexEntry: "This troublesome Pokémon can’t wait to evolve, so it relieves its stress by wildly propelling itself around using compressed gas.",
        type: "Rock/ Ground",
        stats: [70,84,70,65,70,51],
        ability1: "Shed Skin"
      }
    ]
  },
  248:{
    forms:[
      {
        sprite: "248.png",
        name: "Tyranitar",
        galar: true,
        classification: "Armor Pokemon",
        height: 2,
        weight: 202,
        dexEntry: "It wanders through the mountains seeking opponents to fight. If it finds an opponent that’s not worthy, Tyranitar ignores it and wanders on.",
        type: "Rock/ Dark",
        stats: [100,134,110,95,100,61],
        ability1: "Sand Stream",
        hidden: "Unnerve"
      },
      {
        sprite: "248-m.png",
        name: "Mega Tyranitar",
        classification: "Armor Pokemon",
        height: 2.5,
        weight: 255,
        dexEntry: "Due to the colossal power poured into it, this Pokémon’s back split right open. Its destructive instincts are the only thing keeping it moving.",
        type: "Rock/ Dark",
        stats: [100,164,150,95,120,71],
        ability1: "Sand Stream"
      }
    ]
  },
  249:{
    forms:[
      {
        sprite: "249.png",
        name: "Lugia",
        classification: "Diving Pokemon",
        height: 5.2,
        weight: 216,
        dexEntry: "It sleeps in a deep-sea trench. If it flaps its wings, it is said to cause a 40-day storm.",
        type: "Psychic/ Flying",
        stats: [106, 90, 130, 90, 154, 110],
        ability1: "Pressure",
        hidden: "Multiscale"
      }
    ]
  },
  250:{
    forms:[
      {
        sprite: "250.png",
        name: "Ho-oh",
        classification: "Rainbow Pokemon",
        height: 3.8,
        weight: 199,
        dexEntry: "Ho-Oh's feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot of a rainbow.",
        type: "Fire/ Flying",
        stats: [106,130,90,110,154,90],
        ability1: "Pressure",
        hidden: "Regenerator"
      }
    ]
  },
  251:{
    forms:[
      {
        sprite: "251.png",
        name: "Celebi",
        galar: true,
        classification: "Time Travel Pokemon",
        height: 0.6,
        weight: 5,
        dexEntry: "This Pokémon came from the future by crossing over time. It is thought that so long as Celebi appears, a bright and shining future awaits us.",
        type: "Psychic/ Grass",
        stats: [100,100,100,100,100,100],
        ability1: "Natural Cure"
      }
    ]
  },
  252:{
    forms:[
      {
        sprite: "252.png",
        name: "Treecko",
        classification: "Wood Gecko Pokemon",
        height: 0.5,
        weight: 5,
        dexEntry: "Treecko has small hooks on the bottom of its feet that enable it to scale vertical walls. This Pokémon attacks by slamming foes with its thick tail.",
        type: "Grass",
        stats: [40,45,35,65,55,70],
        ability1: "Overgrow",
        hidden: "Unburden"
      }
    ]
  },
  253:{
    forms:[
      {
        sprite: "253.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  254:{
    forms:[
      {
        sprite: "254.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      },
      {
        sprite: "254-m.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
  ]
  },
  255:{
    forms:[
      {
        sprite: "255.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  256:{
    forms:[
      {
        sprite: "256.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  257:{
    forms:[
      {
        sprite: "257.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      },
      {
        sprite: "257-m.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  258:{
    forms:[
      {
        sprite: "258.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  259:{
    forms:[
      {
        sprite: "259.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  260:{
    forms:[
      {
        sprite: "260.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      },
      {
        sprite: "260-m.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  261:{
    forms:[
      {
        sprite: "261.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  262:{
    forms:[
      {
        sprite: "262.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  263:{
    forms:[
      {
        sprite: "263.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  264:{
    forms:[
      {
        sprite: "264.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  265:{
    forms:[
      {
        sprite: "265.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  266:{
    forms:[
      {
        sprite: "266.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  267:{
    forms:[
      {
        sprite: "267.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  268:{
    forms:[
      {
        sprite: "268.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  269:{
    forms:[
      {
        sprite: "269.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  270:{
    forms:[
      {
        sprite: "270.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  271:{
    forms:[
      {
        sprite: "271.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  272:{
    forms:[
      {
        sprite: "272.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  273:{
    forms:[
      {
        sprite: "273.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  274:{
    forms:[
      {
        sprite: "274.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  275:{
    forms:[
      {
        sprite: "275.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  276:{
    forms:[
      {
        sprite: "276.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  277:{
    forms:[
      {
        sprite: "277.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  278:{
    forms:[
      {
        sprite: "278.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  279:{
    forms:[
      {
        sprite: "279.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  280:{
    forms:[
      {
        sprite: "280.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  281:{
    forms:[
      {
        sprite: "281.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  282:{
    forms:[
      {
        sprite: "282.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      },
      {
        sprite: "282-m.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  283:{
    forms:[
      {
        sprite: "283.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  284:{
    forms:[
      {
        sprite: "284.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  285:{
    forms:[
      {
        sprite: "285.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  286:{
    forms:[
      {
        sprite: "286.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  287:{
    forms:[
      {
        sprite: "287.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  288:{
    forms:[
      {
        sprite: "288.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  289:{
    forms:[
      {
        sprite: "289.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  290:{
    forms:[
      {
        sprite: "290.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  291:{
    forms:[
      {
        sprite: "291.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  292:{
    forms:[
      {
        sprite: "292.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  293:{
    forms:[
      {
        sprite: "293.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  294:{
    forms:[
      {
        sprite: "294.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  295:{
    forms:[
      {
        sprite: "295.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  296:{
    forms:[
      {
        sprite: "296.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  297:{
    forms:[
      {
        sprite: "297.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  298:{
    forms:[
      {
        sprite: "298.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  299:{
    forms:[
      {
        sprite: "299.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  300:{
    forms:[
      {
        sprite: "300.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  301:{
    forms:[
      {
        sprite: "301.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  302:{
    forms:[
      {
        sprite: "302.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      },
      {
        sprite: "302-m.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  303:{
    forms:[
      {
        sprite: "303.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      },
      {
        sprite: "303-m.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  304:{
    forms:[
      {
        sprite: "304.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  305:{
    forms:[
      {
        sprite: "305.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  306:{
    forms:[
      {
        sprite: "306.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      },
      {
        sprite: "306-m.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  307:{
    forms:[
      {
        sprite: "307.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  308:{
    forms:[
      {
        sprite: "308.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      },
      {
        sprite: "308-m.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  309:{
    forms:[
      {
        sprite: "309.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  310:{
    forms:[
      {
        sprite: "310.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      },
      {
        sprite: "310-m.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  311:{
    forms:[
      {
        sprite: "311.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  312:{
    forms:[
      {
        sprite: "312.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  313:{
    forms:[
      {
        sprite: "313.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  314:{
    forms:[
      {
        sprite: "314.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  315:{
    forms:[
      {
        sprite: "315.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  316:{
    forms:[
      {
        sprite: "316.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  317:{
    forms:[
      {
        sprite: "317.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  318:{
    forms:[
      {
        sprite: "318.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  319:{
    forms:[
      {
        sprite: "319.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      },
      {
        sprite: "319-m.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  320:{
    forms:[
      {
        sprite: "320.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  321:{
    forms:[
      {
        sprite: "321.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  322:{
    forms:[
      {
        sprite: "322.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  323:{
    forms:[
      {
        sprite: "323.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      },
      {
        sprite: "323-m.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  324:{
    forms:[
      {
        sprite: "324.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  325:{
    forms:[
      {
        sprite: "325.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  326:{
    forms:[
      {
        sprite: "326.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  327:{
    forms:[
      {
        sprite: "327.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  328:{
    forms:[
      {
        sprite: "328.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  329:{
    forms:[
      {
        sprite: "329.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  330:{
    forms:[
      {
        sprite: "330.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  331:{
    forms:[
      {
        sprite: "331.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  332:{
    forms:[
      {
        sprite: "332.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  333:{
    forms:[
      {
        sprite: "333.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  334:{
    forms:[
      {
        sprite: "334.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      },
      {
        sprite: "334-m.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  335:{
    forms:[
      {
        sprite: "335.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  336:{
    forms:[
      {
        sprite: "336.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  337:{
    forms:[
      {
        sprite: "337.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  338:{
    forms:[
      {
        sprite: "338.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  339:{
    forms:[
      {
        sprite: "339.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  340:{
    forms:[
      {
        sprite: "340.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  341:{
    forms:[
      {
        sprite: "341.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  342:{
    forms:[
      {
        sprite: "342.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  343:{
    forms:[
      {
        sprite: "343.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  344:{
    forms:[
      {
        sprite: "344.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  345:{
    forms:[
      {
        sprite: "345.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  346:{
    forms:[
      {
        sprite: "346.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  347:{
    forms:[
      {
        sprite: "347.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  348:{
    forms:[
      {
        sprite: "348.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  349:{
    forms:[
      {
        sprite: "349.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  350:{
    forms:[
      {
        sprite: "350.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  351:{
    forms:[
      {
        sprite: "351.png",
        name: "Castform",
        classification: "Weather Pokemon",
        height: 0.3,
        weight: 0.8,
        dexEntry: "Although its form changes with the weather, that is apparently the result of a chemical reaction and not the result of its own free will.",
        type: "Normal",
        stats: [70,70,70,70,70,70],
        ability1: "Forecast"
      },
      {
        sprite: "351-s.png",
        name: "Castform",
        classification: "Weather Pokemon",
        height: 0.3,
        weight: 0.8,
        dexEntry: "This is the form Castform takes on bright days. In an experiment where Castform was placed in front of a heater, it didn’t change to this form.",
        type: "Fire",
        stats: [70,70,70,70,70,70],
        ability1: "Forecast"
      },
      {
        sprite: "351-r.png",
        name: "Castform",
        classification: "Weather Pokemon",
        height: 0.3,
        weight: 0.8,
        dexEntry: "This is Castform’s form when pelted by rain. In an experiment where it was placed in a shower, this Pokémon didn’t change to this form.",
        type: "Water",
        stats: [70,70,70,70,70,70],
        ability1: "Forecast"
      },
      {
        sprite: "351-i.png",
        name: "Castform",
        classification: "Weather Pokemon",
        height: 0.3,
        weight: 0.8,
        dexEntry: "This is the form Castform takes when hit by hail. In an experiment where it was placed in a freezer, it didn’t change to this form.",
        type: "Ice",
        stats: [70,70,70,70,70,70],
        ability1: "Forecast"
      },
    ]
  },
  352:{
    forms:[
      {
        sprite: "352.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  353:{
    forms:[
      {
        sprite: "353.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  354:{
    forms:[
      {
        sprite: "354.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      },
      {
        sprite: "354-m.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  355:{
    forms:[
      {
        sprite: "355.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  356:{
    forms:[
      {
        sprite: "356.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  357:{
    forms:[
      {
        sprite: "357.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  358:{
    forms:[
      {
        sprite: "358.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  359:{
    forms:[
      {
        sprite: "359.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      },
      {
        sprite: "359-m.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  360:{
    forms:[
      {
        sprite: "360.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  361:{
    forms:[
      {
        sprite: "361.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  362:{
    forms:[
      {
        sprite: "362.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      },
      {
        sprite: "362-m.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  363:{
    forms:[
      {
        sprite: "363.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  364:{
    forms:[
      {
        sprite: "364.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  365:{
    forms:[
      {
        sprite: "365.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  366:{
    forms:[
      {
        sprite: "366.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  367:{
    forms:[
      {
        sprite: "367.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  368:{
    forms:[
      {
        sprite: "368.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  369:{
    forms:[
      {
        sprite: "369.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  370:{
    forms:[
      {
        sprite: "370.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  371:{
    forms:[
      {
        sprite: "371.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  372:{
    forms:[
      {
        sprite: "372.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  373:{
    forms:[
      {
        sprite: "373.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      },
      {
        sprite: "373-m.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  374:{
    forms:[
      {
        sprite: "374.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  375:{
    forms:[
      {
        sprite: "375.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  376:{
    forms:[
      {
        sprite: "376.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      },
      {
        sprite: "376-m.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  377:{
    forms:[
      {
        sprite: "377.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  378:{
    forms:[
      {
        sprite: "378.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  379:{
    forms:[
      {
        sprite: "379.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  380:{
    forms:[
      {
        sprite: "380.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      },
      {
        sprite: "380-m.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  381:{
    forms:[
      {
        sprite: "381.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      },
      {
        sprite: "381-m.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  382:{
    forms:[
      {
        sprite: "382.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      },
      {
        sprite: "382-m.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  383:{
    forms:[
      {
        sprite: "383.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      },
      {
        sprite: "383-m.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  384:{
    forms:[
      {
        sprite: "384.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      },
      {
        sprite: "384-m.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  385:{
    forms:[
      {
        sprite: "385.png",
        name: "",
        classification: "",
        height: 0,
        weight: 0,
        dexEntry: "",
        type: "",
        stats: [],
        ability1: "",
        ability2: "",
        hidden: ""
      }
    ]
  },
  386:{
    forms:[
      {
        sprite: "386.png",
        name: "Deoxys",
        classification: "DNA Pokemon",
        height: 1.7,
        weight: 60.8,
        dexEntry: "The DNA of a space virus underwent a sudden mutation upon exposure to a laser beam and resulted in Deoxys. The crystalline organ on this Pokémon's chest appears to be its brain.",
        type: "Psychic",
        stats: [50,150,50,150,50,150],
        ability1: "Pressure"
      },
      {
        sprite: "386-a.png",
        name: "Deoxys",
        classification: "DNA Pokemon",
        height: 1.7,
        weight: 60.8,
        dexEntry: "The DNA of a space virus underwent a sudden mutation upon exposure to a laser beam and resulted in Deoxys. The crystalline organ on this Pokémon's chest appears to be its brain.",
        type: "Psychic",
        stats: [50,180,20,180,20,150],
        ability1: "Pressure"
      },
      {
        sprite: "386-d.png",
        name: "Deoxys",
        classification: "DNA Pokemon",
        height: 1.7,
        weight: 60.8,
        dexEntry: "The DNA of a space virus underwent a sudden mutation upon exposure to a laser beam and resulted in Deoxys. The crystalline organ on this Pokémon's chest appears to be its brain.",
        type: "Psychic",
        stats: [50,70,160,70,160,90],
        ability1: "Pressure"
      },
      {
        sprite: "386-s.png",
        name: "Deoxys",
        classification: "DNA Pokemon",
        height: 1.7,
        weight: 60.8,
        dexEntry: "The DNA of a space virus underwent a sudden mutation upon exposure to a laser beam and resulted in Deoxys. The crystalline organ on this Pokémon's chest appears to be its brain.",
        type: "Psychic",
        stats: [50,95,90,95,90,180],
        ability1: "Pressure"
      }
    ]
  },
  744:{
    forms:[
      {
        sprite: "744.png",
        name: "Rockruff",
        classification: "Puppy Pokemon",
        height: 0.5,
        weight: 9.2,
        dexEntry: "As they develop, their disposition grows more violent and aggressive. Many Trainers find them too much to handle and abandon them.",
        sl: "It's a puppy, it's cute. I want one .-.",
        type: "Rock",
        stats: [45,65,40,30,40,60],
        ability1: "Keen Eye",
        ability2: "Vital Spirit",
        hidden: "Steadfast",
        special: "Own Tempo"
      }
    ]
  },
  808:{
    forms:[
      {
        sprite: "808.png",
        name: "Meltan",
        galar: true,
        lgpe: true,
        classification: "Hex Nut Pokemon",
        height: 0.2,
        weight: 8,
        dexEntry: "It melts particles of iron and other metals found in the subsoil, so it can absorb them into its body of molten steel.",
        type: "Steel",
        stats: [46,65,65,55,35,34],
        ability1: "Magnet Pull"
      }
    ]
  },
  809:{
    forms:[
      {
        sprite: "809.png",
        name: "Melmetal",
        galar: true,
        lgpe: true,
        classification:"Hex Nut Pokemon",
        height: 2.5,
        weight: 800,
        dexEntry: "Revered long ago for its capacity to create iron from nothing, for some reason it has come back to life after 3,000 years.",
        type: "Steel",
        stats: [135,143,143,80,65,34],
        ability1: "Iron Fist"
      }
    ]
  }
}
