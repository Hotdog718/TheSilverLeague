var committeeMembers = [
  "Kaitou",
  "GamerMadness",
  "Diogo",
  "WayofAlex",
  "LowRes",
  "Mirrorcard Neko",
  "Aldnoah Shadow",
  "Dave",
  "Crystal",
  "Odds",
  "Aggron"
];

$(document).ready(function(){
  committeeMembers.forEach(function(member){
    $('#committee-members').append(`<li>${member}</li>`);
  })
})
