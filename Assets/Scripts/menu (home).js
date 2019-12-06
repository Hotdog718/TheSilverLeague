
/*<button id="button">Menu</button>
<div class="menu" style="display: none;">
  <a href="ambercrest chat.html">Ambercrest Chat</a>
  <a href="Gym Leaders.html">Gym Leaders</a>
  <a href="The CLT and Elite Four.html">The CLT and Elite Four</a>
  <a href="Hall of Fame.html">Hall of Fame</a>
  <a href="Battle Frontier.html">Battle Frontier</a>
  <a href="Training Center.html">Training Center 101</a>
  <a href="Tournaments.html">Tournaments</a>
  <a href="Ginune War.html">The Ginune Pokemon War</a>
  <a href="http://www.thesilverleague.com/pixel-art-centre.php">Pixel Art Center</a>
  <a href="ComicCanon.html">The SL Comic Canon</a>
  <a href="MOTW.html">MOTW Archives</a>
  <a href="Rules and Rankings.html">Rules and Rankings</a>
</div>*/

var pages = [
  {
    page: "Ambercrest Chat",
    href: "./Ambercrest Chat/"
  },
  {
    page: "Gym Leaders",
    href: "./Gym Leaders/"
  },
  {
    page: "The CLT and Elite Four",
    href: "./CLT and Elite Four/"
  },
  {
    page: "Hall of Fame",
    href: "./Hall of Fame/"
  },
  {
    page: "Battle Frontier",
    href: "./Battle Frontier/"
  },
  {
    page: "Training Center",
    href: "./Training Center/"
  },
  {
    page: "Tournaments",
    href: "./Tournaments/"
  },
  {
    page: "The Ginune Pokemon War",
    href: "./Ginune War/"
  },
  {
    page: "Pixel Art Center",
    href: "./Pixel Art/"
  },
  {
    page: "The SL Comic Canon",
    href: "./Comic Canon/"
  },
  {
    page: "MOTW Archives",
    href: "./MOTW/"
  },
  {
    page: "Rules and Rankings",
    href: "./Rules and Rankings/"
  },
  {
    page: "SL Pokedex",
    href: "./SL Pokedex/"
  }
];

$(document).ready(function(){
  $('#button-and-menu').append('<button id="button">Menu</button><div class="menu" style="display: none;"></div>');
  pages.forEach(function(p){
    const { href, page } = p;
    $('.menu').append(`<a href="${href}">${page}</a>`);
  })

  document.getElementById("button").onclick = function(){
    $(".menu").toggle();
  }
})
