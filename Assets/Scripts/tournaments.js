var participants = [
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
})
