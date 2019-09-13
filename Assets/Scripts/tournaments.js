/*var participants = [
  "Dave",
  "Diogo",
  "Spear",
  "Roki",
  "Entin",
  "Jerso",
  "Marvin",
  "Sleepy",
  "JKWiffle",
  "Black Animal",
  "Eeveelution",
  "Zephyr",
  "Lowres",
  "Apex",
  "Abel",
  "Neko",
  "Aldnoah",
  "BenBlazing"
];

$(document).ready(function(){
  $('#participants').append('<div style="flex: 50%;" id="side1"></div><div style="flex: 50%;" id="side2"></div>')
  for(let i = 1; i <= 64; i++){
    if(i<=32){
      $('#side1').append('<p>'+i+". "+ (participants[i-1]?participants[i-1]:'')+"</p>");
    }else{
      $('#side2').append('<p>'+i+". "+ (participants[i-1]?participants[i-1]:'')+"</p>");
    }
  }
})*/

var standings = [
  {
    name: "Mo",
    points: 6
  },
  {
    name: "Spear",
    points: 4
  },
  {
    name: "DragonArbock",
    points: 3
  },
  {
    name: "Kaitou",
    points: 4
  },
  {
    name: "Dave",
    points: 2
  },
  {
    name: "Abel",
    points: 3
  },
  {
    name: "Odds",
    points: 2
  },
  {
    name: "Blight",
    points: 1
  },
  {
    name: "Apex",
    points: 1
  },
  {
    name: "Entin",
    points: 1
  },
  {
    name: "Aldnoah Shadow",
    points: 3
  },
  {
    name: "Hotdog",
    points: 1
  },
  {
    name: "BenBlazing",
    points: 0
  },
  {
    name: "JKWiffle",
    points: 1
  }
]

function sortPoints(a, b) {
  // Use toUpperCase() to ignore character casing
  const leaderA = a.points
  const leaderB = b.points;

  let comparison = 0;
  if (leaderA > leaderB) {
    comparison = -1;
  }else if (leaderA < leaderB) {
    comparison = 1;
  }
  return comparison;
}

$(document).ready(function(){
  standings.sort(sortPoints);
  var place = 0, potentialPlace = 0;

  standings.forEach(function(r, i){
    if(i === 0 || r.points !== standings[i-1].points){
      potentialPlace++;
      place = potentialPlace;
    }else{
      potentialPlace++;
    }
    let placeSuffix;
    if(place%10 === 1 && place !== 11){
      placeSuffix = 'st';
    }else if(place%10 === 2 && place !== 12){
      placeSuffix = 'nd';
    }else if(place%10 === 3 && place !== 13){
      placeSuffix = 'rd';
    }else{
      placeSuffix = 'th';
    }
    $('#participants').append('<p style="font-size: 16px;">' + place + placeSuffix + ' - ' + r.name + ' - ' + r.points + ' Pts</p>');
  })
})
