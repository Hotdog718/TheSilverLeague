var participants = [
  "Vicious Victreebel",
  "Apex",
  "Odds",
  "JKWiffle",
  "ZephyrBlaze",
  "Jerso",
  "BenBlazing",
  "Time Kitsune"
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
