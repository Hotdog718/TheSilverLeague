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

function getMoves(moves){
  let line = '<span style="font-size: 12px;">-';
  let usedTypes = [];
  for(let i = 0; i<moves.length; i++){
    let moveInfo = BattleMovedex[moves[i].toLowerCase().split(" ").join("").split("-").join("")];
    if(!moveInfo) continue;
    if(usedTypes.includes(moveInfo.type)) continue;
    line += '<img class="inline" src="../Assets/Images/Type Icons/' + moveInfo.type + '.png">/'
    usedTypes.push(moveInfo.type);
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
  //var year = motw['2019'];
  var mon = movesets[movesets.length-1];
  if(mon){
    $('#MOTW').append('<div style="margin: 2px;"><p style="text-align: center; margin-top: -18px;">' + mon.month + " " + mon.day + ", " + mon.year + '</p><img class="center" src="../Assets/Images/Pokemon Sprites/' + mon.pokemon + '.png" alt="' + mon.pokemon + '"><p style="text-align: center; font-size: 14px;">"' + mon.title + '"</p><p style="font-size: 14px;">Pokemon: ' + mon.pokemon + '<br>Ability: ' + mon.ability + '<br>Nature: ' + mon.nature + '<br>Item: ' + mon.item + '<br>EVs: ' + mon.evs + (mon.ivs ? '<br>IVs: ' + mon.ivs : '') + '</p><div id="moveset"></div><div>' + getParagraph(mon.desc) + '</div><p>Written By: ' + mon.author + '</p></div>');
    for(let r = 0; r<mon.moves.length; r++){
      let move = mon.moves[r];
      if(move){
        $('#moveset').append(getMoves(move));
      }
    }
  }
}
