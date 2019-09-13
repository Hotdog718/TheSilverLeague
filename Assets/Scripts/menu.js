
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
    href: "ambercrest chat.html"
  },
  {
    page: "Gym Leaders",
    href: "Gym Leaders.html"
  },
  {
    page: "The CLT and Elite Four",
    href: "The CLT and Elite Four.html"
  },
  {
    page: "Hall of Fame",
    href: "Hall of Fame.html"
  },
  {
    page: "Battle Frontier",
    href: "Battle Frontier.html"
  },
  {
    page: "Training Center",
    href: "Training Center.html"
  },
  {
    page: "Tournaments",
    href: "Tournaments.html"
  },
  {
    page: "The Ginune Pokemon War",
    href: "Ginune War.html"
  },
  {
    page: "Pixel Art Center",
    href: "PixelArt.html"
  },
  {
    page: "The SL Comic Canon",
    href: "ComicCanon.html"
  },
  {
    page: "MOTW Archives",
    href: "MOTW.html"
  },
  {
    page: "Rules and Rankings",
    href: "Rules and Rankings.html"
  }
];

$(document).ready(function(){
  $('#button-and-menu').append('<button id="button">Menu</button><div class="menu" style="display: none;"></div>');
  pages.forEach(function(p){
    $('.menu').append('<a href="' + p.href +'">' + p.page + '</a>')
  })

  document.getElementById("button").onclick = function(){
    $(".menu").toggle();
  }
})
