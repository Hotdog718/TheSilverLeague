document.getElementById("coc-toggle").onclick = function(){
  $("#code-of-conduct").toggle();
}

function getParagraph(arrayList){
  let text = "";
  arrayList.forEach(function(r, i){
    text += '<p style="font-size: 11px;">' + r + '</p>'
  })
  return text;
}

/*function getMoves(moves){
  let line = '<span style="font-size: 12px;">-';
  for(let i = 0; i<moves.length; i++){
    line += '<img class="inline" style="height: 12px;" src="Assets/Images/Type Icons/' + moves[i].type + '.png">/'
  }
  line = line.substring(0, line.length-1)+" ";
  for(let i = 0; i<moves.length; i++){
    line+= moves[i].name + ' / '
  }
  line = line.substring(0, line.length-3) + '</span><br>';
  return line;
}*/

function getMoves(moves){
  let line = '<span style="font-size: 12px;">-';
  for(let i = 0; i<moves.length; i++){
    let moveInfo = BattleMovedex[moves[i].toLowerCase().split(" ").join("")];
    if(!moveInfo) continue;
    line += '<img class="inline" src="Assets/Images/Type Icons/' + moveInfo.type + '.png">/'
  }
  line = line.substring(0, line.length-1)+" ";
  for(let i = 0; i<moves.length; i++){
    line+= moves[i] + ' / '
  }
  line = line.substring(0, line.length-3) + '</span><br>';
  return line;
}

$(document).ready(function(){
  setMOTW();
})

function setMOTW(){
  var year = motw['2019'];
  var mon = year[year.length-1];
  if(mon){
    $('#MOTW').append('<div style="margin: 2px;"><p style="text-align: center; margin-top: -18px;">' + mon.date + '</p><img class="center" src="Assets/Images/Pokemon Sprites/' + mon.pokemon + '.png" alt="' + mon.pokemon + '"><p style="text-align: center; font-size: 14px;">"' + mon.title + '"</p><p style="font-size: 14px;">Pokemon: ' + mon.pokemon + '<br>Ability: ' + mon.ability + '<br>Nature: ' + mon.nature + '<br>Item: ' + mon.item + '<br>EVs: ' + mon.evs + '</p><div id="moveset"></div><div>' + getParagraph(mon.desc) + '</div><p>Written By: ' + mon.author + '</p></div>');
    for(let r = 0; r<mon.moves.length; r++){
      let move = mon.moves[r];
      if(move){
        $('#moveset').append(getMoves(move));
        //'<span style="font-size: 16px;">-<img style="display: inline;" src="Assets/Images/Type Icons/' + move.type + '.png"> ' + move.name + '</span><br>'
      }
    }
  }
}
