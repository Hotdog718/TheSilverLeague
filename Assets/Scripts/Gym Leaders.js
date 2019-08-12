$(document).ready(function(){
  var gymInfo = [
    {
      type: "Bug",
      title: "Web of Despair",
      rank: "S",
      rules: "-Banned Pokemon: Hawlucha<br>-Banned Mega Stone: Charizardite Y"
    },
    {
      type: "Dark",
      title: "The Pillager of Twilight",
      rank: "SS",
      rules: "-Item Clause: One of each item except Leftovers."
    },
    {
      type: "Dragon",
      title: "The Dragon Empress",
      rank: "S",
      rules: "-Banned Pokemon: Magearna<br>-Banned Mega Stone: Medichamite<br><br> Gym Leader Sub: Abel"
    },
    {
      type: "Electric",
      title: "COMING SOON",
      rank: "S",
      rules: "-Banned Pokemon: Excadrill<br>-Banned Mega Stone: Venusaurite<br>-Full Item Clause<br>-OU Limit: 4<br>-No Terrain Summoning Abilities"
    },
    {
      type: "Fairy",
      title: "The Sakura Blossom Anime Conisseur",
      rank: "S",
      rules: "-No Z-Moves<br>-Item Clause: One of each item except Leftovers<br>-Banned Pokemon: Heatran<br>-Banned Mega Stone: Scizorite"
    },
    {
      type: "Fighting",
      title: "The Blossoming Warrior",
      rank: "S",
      rules: "-Banned Pokemon: Tapu Lele<br>-Banned Mega Stone: Pinsirite<br><br>Gym Leader Sub: Zephyrblaze"
    },
    {
      type: "Fire",
      title: "The Weenie Roaster",
      rank: "S",
      rules: '-Rules are for <a href="https://www.youtube.com/watch?v=Xg8aqu9HL_o">Weenies</a>.'
    },
    {
      type: "Flying",
      title: "Wings of Rebellion",
      rank: "S",
      rules: "-No Terrain Summoning Abilities"
    },
    {
      type: "Ghost",
      title: "The Geist Keeper",
      rank: "S",
      rules: "-Banned Pokemon: Heatran<br>-Banned Mega Stone: Gyaradosite"
    },
    {
      type: "Grass",
      title: "COMING SOON",
      rank: "S",
      rules: "-Banned Pokemon: Volcarona<br>-Banned Mega Stone: Charizardite X"
    },
    {
      type: "Ground",
      title: "One Groundy Boi",
      rank: "S",
      rules: "-Banned Pokemon: Charizard<br>-Banned Mega Stone: Medichamite"
    },
    {
      type: "Ice",
      title: "The Trap Master",
      rank: "S",
      rules: "-Banned Pokemon: Charizard"
    },
    {
      type: "Normal",
      title: "Seeker of the Future",
      rank: "S",
      rules: "~Singles~<br>-OU Limit: 3<br>-No Legends<br>-Banned Pokemon: Skarmory<br>-Banned Mega Stone: Medichamite<br><br>~Doubles~<br>-Banned Pokemon: Sableye<br>-Banned Mega Stone: Lopponite"
    },
    {
      type: "Poison",
      title: "The Hand of Nihil",
      rank: "SS",
      rules: "-OU Limit: 4<br>-Item Clause: 1 Focus Sash/ 1 Choice Scarf<br>-Banned Pokemon: Landorus<br>-Banned Mega Stone: Mawilite"
    },
    {
      type: "Psychic",
      title: "The Voiceless Seer",
      rank: "SS",
      rules: "-None."
    },
    {
      type: "Rock",
      title: "The Relic Seeker",
      rank: "S",
      rules: "-Banned Pokemon: Magearna<br>-Banned Mega Stone: Venusaurite"
    },
    {
      type: "Steel",
      title: "COMING SOON",
      rank: "S",
      rules: "~Singles~<br>-Banned Pokemon: Charizard<br>-Banned Mega Stone: Medichamite<br><br>~Doubles~<br>-Banned Pokemon: Volcanion<br>-Banned Mega Stone: Cameruptite"
    },
    {
      type: "Water",
      title: "The Moist Master",
      rank: "S",
      rules: "-Banned Pokemon: Venusaur<br>-Banned Mega Stone: Medichamite"
    }
  ];
  for(i = 0; i<gymInfo.length; i++){
    $('.gym-banner')[i].src = "Assets/Images/Gym Banners/" + gymInfo[i].type + ".png";
    $('.title')[i].innerHTML = "<strong><b><i>~"+gymInfo[i].title+"~</i></b><strong>";
    $('.type')[i].src = "Assets/Images/Type Icons/" + gymInfo[i].type + ".png";
    $('.type')[i].width = 52;
    $('.type')[i].height = 20;
    $('.rank')[i].src = "Assets/Images/Rankings/" + gymInfo[i].rank + ".png";
    $('.rank')[i].width = 54;
    $('.rank')[i].height = 54;
    $('.rules')[i].innerHTML = gymInfo[i].rules;
  }
})
