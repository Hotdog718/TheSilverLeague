var champions = [
  {
    name: "LowRes",
    revives: 13,
    resets: 1,
    video: '<iframe width="418" height="235" src="https://www.youtube.com/embed/06XnVwnm9-k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  {
    name: "JammedGoblin",
    revives: 17,
    resets: 2,
    video: '<iframe width="418" height="235" src="https://www.youtube.com/embed/chs5R6kwejo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  {
    name: "Chris",
    revives: 13,
    resets: 1,
    video: '<iframe width="418" height="235" src="https://www.youtube.com/embed/J3VYzLyFC_4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  {
    name: "Mo",
    revives: 16,
    resets: 1,
    video: '<iframe width="418" height="235" src="https://www.youtube.com/embed/Laa5PNCzFUc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  }
];

var victors = [
  {
    image: "Dragon Arbock - 19th CLT",
    video: "https://www.youtube.com/watch?v=QKzgt0D-l1w"
  },
  {
    image: "Blight - 20th CLT",
    video: "https://www.youtube.com/watch?v=0iAlR_8Rsco"
  },
  {
    image: "Spear - 21st CLT",
    video: "https://www.youtube.com/watch?v=Yeyq7PfyjLQ"
  },
  {
    image: "Odds - LC2",
    video: "https://www.youtube.com/watch?v=ZkHxqf-DXqE"
  },
  {
    image: "Entin - Cafe",
    video: "https://www.youtube.com/watch?v=9xM99r_ae6A"
  },
  {
    image: "Firey - 22nd CLT",
    video: "https://www.youtube.com/watch?v=n93-iBeJJBQ"
  },
  {
    image: "Kaitou - 23rd CLT",
    video: "https://www.youtube.com/watch?v=6v9YgMm2pb8"
  },
  {
    image: "Dave - Zodiac",
    video: "https://www.youtube.com/watch?v=QCHb-t5cgJw"
  },
  {
    image: "Shade - 24th CLT",
    video: "https://www.youtube.com/watch?v=KE58m4JMcAM"
  },
  {
    image: "Kaitou - 25th CLT",
    video: "https://www.youtube.com/watch?v=jMo3K-E-MtI&t=200s"
  },
  {
    image: "Mo - Comic",
    video: "https://www.youtube.com/watch?v=dgA67q4t6LE"
  },
  {
    image: "Dave - 26th CLT",
    video: "https://www.youtube.com/watch?v=AJ4GLdZt5EM"
  },
  {
    image: "Aggron - PU",
    video: "https://www.youtube.com/watch?v=Vs7GvyElzq8"
  },
  {
    image: "Spear - 27th CLT",
    video: "https://www.youtube.com/watch?v=wTz5ZNZTnWA"
  }
];

$(document).ready(function(){
  champions.forEach(function(champ){
    $('#champions').append('<div class="row"><div class="col"><img src="./Hall of Fame/' + champ.name + '.png"><h1><u>' + champ.name + '</u></h1><h3><u>' + champ.revives + ' Revives' + (champ.resets?', '+ champ.resets + ' Resets': '') +'</u></h3></div><div class="col">' + champ.video + '</div></div>')
  })

  for(let i = 0; i<Math.ceil(victors.length/4); i++){
    $('#victors').append('<div class="row" id="victors' + i + '"></div>');
    for(let k = 0; k<4; k++){
      var victorID = i*4 + k;
      if(victors[victorID]){
        var victor = victors[victorID];
        $('#victors'+i).append('<div style="flex: 25%;"><a href="' + victor.video + '"><img style="width: 194px; display: block; margin-left: auto; margin-right: auto;" src="./Wall of Victors/' + victor.image + '.png"></a></div>');
      }else{
        $('#victors'+i).append('<div style="flex: 25%"></div>');
      }
    }
  }
})
