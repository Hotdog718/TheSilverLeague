var participants = [
  "Vicious Victreebel",
  "Apex",
  "Odds",
  "JKWiffle",
  "ZephyrBlaze",
  "Jerso",
  "BenBlazing",
  "Time Kitsune",
  "Spear",
  "Abel",
  "Eeveelution Solution",
  "LiBassMaster",
  "Rylo",
  "Dave",
  "Alabaster",
  "Roki",
  "King",
  "RedEyeSkull",
  "Kaitou",
  "Diogo",
  "Mo",
  "Mirrorcard Neko",
  "Aldnoah Shadow",
  "Ben",
  "Sadia",
  "CakeTemplar",
  "WayofAlex",
  "Hotdog",
  "Sl33py",
  "Lominoth",
  "Hope",
  "Entin",
  "AnotherJason",
  "JefLunar"
];

$(document).ready(function(){
  for(let i = 1; i <= 64; i++){
    if(i<=32){
      $('#side1').append('<p>'+i+". "+ (participants[i-1]?participants[i-1]:'')+"</p>");
    }else{
      $('#side2').append('<p>'+i+". "+ (participants[i-1]?participants[i-1]:'')+"</p>");
    }
  }
})
