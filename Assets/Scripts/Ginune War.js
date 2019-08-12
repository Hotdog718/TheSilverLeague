
var gw2Videos = [
  {
    name: "The 2nd Ginune Pokemon War - OFFICIAL TRAILER",
    url: "https://www.youtube.com/embed/YGgx606dkkM",
    thumb: "Assets/Images/Thumbnails/GW2 - Trailer.png"
  },
  {
    name: "The 2nd Ginune Pokemon War - Prologue",
    url: "https://www.youtube.com/embed/1MbL1oLIRLs",
    thumb: "Assets/Images/Thumbnails/GW2 - Prologue.png"
  },
  {
    name: "The 2nd Ginune Pokemon War - Ch. 1 - A Rival's Resolve",
    url: "https://www.youtube.com/embed/6K_QtvZWP_8",
    thumb: "Assets/Images/Thumbnails/GW2 - Episode 1.png"
  },
  {
    name: "The 2nd Ginune Pokemon War - Ch. 2 - The Ironhand's Hatchet",
    url: "https://www.youtube.com/embed/ghkyW1_Irek",
    thumb: "Assets/Images/Thumbnails/GW2 - Episode 2.png"
  },
  {
    name: "The 2nd Ginune Pokemon War - Ch. 3 - The Jester Assassin",
    url: "https://www.youtube.com/embed/bEUYkcjGkqk",
    thumb: "Assets/Images/Thumbnails/GW2 - Episode 3.png"
  },
  {
    name: "The 2nd Ginune Pokemon War - Ch. 4 - A Flame Among Roses",
    url: "https://www.youtube.com/embed/jjlMEKjN9Lc",
    thumb: "Assets/Images/Thumbnails/GW2 - Episode 4.png"
  },
  {
    name: "The 2nd Ginune Pokemon War - Ch. 5 - The Darkness Within",
    url: "https://www.youtube.com/embed/iZH3owmheRA",
    thumb: "Assets/Images/Thumbnails/GW2 - Episode 5.png"
  },
]

var ginuneWarParticipants = [
  {
    name: "Sol August",
    sprite: "Assets/Images/Sprites/PastSilver.png",
    banner: "Assets/Images/Flags/Flag - Silver.png",
    user: "Silver August"
  },
  {
    name: "Kazeryu",
    sprite: "Assets/Images/Sprites/kazeryu.png",
    banner: "Assets/Images/Flags/Flag - Diogo.png",
    user: "Diogo"
  },
  {
    name: "Orchid",
    sprite: "Assets/Images/Sprites/Orchid.png",
    banner: "Assets/Images/Flags/Flag - Cotton.png",
    user: "Cotton"
  },
  {
    name: "Rosa Violet",
    sprite: "Assets/Images/Sprites/Rosa.png",
    banner: "Assets/Images/Flags/Flag - Sadia.png",
    user: "Sadia"
  },
  {
    name: "Scarlet Fealynn",
    sprite: "Assets/Images/Sprites/Scarlett.png",
    banner: "Assets/Images/Flags/Flag - Skyfire.png",
    user: "Skyfire"
  },
  {
    name: "Largo Ironhand",
    sprite: "Assets/Images/Sprites/Largo.png",
    banner: "Assets/Images/Flags/Flag - Major Largo.png",
    user: "Major Largo"
  },
  {
    name: "Zacharius Volff",
    sprite: "Assets/Images/Sprites/Zach.png",
    banner: "Assets/Images/Flags/Flag - Lowres.png",
    user: "Lowres"
  },
  {
    name: "Lunch Hound",
    sprite: "Assets/Images/Sprites/Lunch.png",
    banner: "Assets/Images/Flags/Flag - Hotdog.png",
    user: "Hotdog"
  },
  {
    name: "James Blazing",
    sprite: "Assets/Images/Sprites/James.png",
    banner: "Assets/Images/Flags/Flag - BenBlazing.png",
    user: "Ben Blazing"
  },
  {
    name: "Ren",
    sprite: "Assets/Images/Sprites/Ren.png",
    banner: "Assets/Images/Flags/Flag - Aldnoah.png",
    user: "Aldnoah Shadow"
  },
  {
    name: "Keegan",
    sprite: "Assets/Images/Sprites/Keegan.png",
    banner: "Assets/Images/Flags/Flag - Power.png",
    user: "Power"
  },
  {
    name: "Monty Geist",
    sprite: "Assets/Images/Sprites/Monty.png",
    banner: "Assets/Images/Flags/Flag - FireyCyndaquil.png",
    user: "Firey Cyndaquil"
  },
  {
    name: "Plague",
    sprite: "Assets/Images/Sprites/Plague.png",
    banner: "Assets/Images/Flags/Flag - Blight.png",
    user: "Blight"
  },
  {
    name: "Arthur",
    sprite: "Assets/Images/Sprites/Arthur.png",
    banner: "Assets/Images/Flags/Flag - Aggron.png",
    user: "Aggron"
  },
  {
    name: "Dawn Corona",
    sprite: "Assets/Images/Sprites/Dawn.png",
    banner: "Assets/Images/Flags/Flag - Ligera Days.png",
    user: "Ligera Days"
  },
  {
    name: "Loselot Du Maches**",
    sprite: "Assets/Images/Sprites/Losalot.png",
    banner: "Assets/Images/Flags/Flag - Wayofalex.png",
    user: "Wayofalex"
  },
  {
    name: "Rico*",
    banner: "Assets/Images/Flags/Flag - Razorang.png",
    user: "Razorang"
  }
]

var territoryLeaders = [
  {
    name: "Kumokage Kazeryu",
    region: "Feathervale",
    sprite: "Assets/Images/Sprites/Kazeryu - Front 1.png",
    banner: "Assets/Images/Flags/Flag - Diogo.png",
    user: "Diogo"
  },
  {
    name: "Lord Malefor",
    region: "Fangspire",
    sprite: "Assets/Images/Sprites/Malefor - (front 1).png",
    banner: "Assets/Images/Flags/Flag - Skyfire.png",
    user: "Mo"
  },
  {
    name: "Grand Seer Varia",
    region: "Ambercrest",
    sprite: "Assets/Images/Sprites/Varia (M) - (front 1).png",
    banner: "Assets/Images/Flags/Flag - Ambercret Seers.png",
    user: "Red"
  },
  {
    name: "King Styre",
    region: "Neonite",
    sprite: "Assets/Images/Sprites/King Styre - Front 1.png",
    banner: "Assets/Images/Flags/Flag - Blight.png",
    user: "N/a"
  }
]




$(document).ready(function(){
    document.getElementsByClassName('banner')[0].addEventListener('mousedown',function(e){
      $(".menu").toggle();
    })

    gw2Videos.forEach(function(video) {
		$('#videos').append('<div class="playlist-item"><figure><img width=250 height=140 src="'
            + video.thumb + '" alt="' + video.name + '"><figcaption>' + video.name.toUpperCase()
            + '</figcaption></figure></div>');
  	});
  	$('#videos .playlist-item:first-child').addClass('playing');


    $('#videos .playlist-item').click(function(){
      $('#videos .playing').removeClass('playing');
      $(this).addClass("playing");

      var vidThumbSearch = $(this).find('img').attr('src');
      var index = gw2Videos.findIndex(function(video, i){
          return video.thumb === vidThumbSearch;
      });
      var video = gw2Videos[index];
      document.getElementById("current-video").src = video.url;
    });

    ginuneWarParticipants.forEach(function(g){
      $(`.participants`).append('<div style="flex:1;" class="ginune-war-participant"><figure>'
        + '<p style="text-align: center;">'+g.name + '</p>' + '<p style="text-align: center">(' + g.user + ')</p>'
        + (g.banner ? '<img src="'+ g.banner + '" alt="' + g.name + '"></img>': '')
        + (g.sprite ? '<img width="205" height="205" src="'+ g.sprite + '" alt="' + g.name + '"></img>': '')
        + '</figure></div>')
    })

    territoryLeaders.forEach(function(leader){
      $(".territory-leaders").append('<div style="flex:1" class="ginune-war-participant"><figure>'
      + '<p style="text-align: center;">'+leader.name + "</p>" + '<p style="text-align: center">('+leader.user+')</p>'
      + (leader.banner ? '<img src="'+ leader.banner + '" alt="' + leader.name + '"></img>': '')
      +'</figure></div>')
    })
})
