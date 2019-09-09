
$(document).ready(function(){
 setMOTW("2019");
})

$('#2010').click(function(){
  setMOTW('2010');
})

$('#2011').click(function(){
  setMOTW('2011');
})

$('#2012').click(function(){
  setMOTW('2012');
})

$('#2013').click(function(){
  setMOTW('2013');
})

$('#2014').click(function(){
  setMOTW('2014');
})

$('#2015').click(function(){
  setMOTW('2015');
})

$('#2016').click(function(){
  setMOTW('2016');
})

$('#2017').click(function(){
  setMOTW('2017');
})

$('#2018').click(function(){
  setMOTW('2018');
})

$('#2019').click(function(){
  setMOTW('2019');
})

function getParagraph(arrayList){
  let text = "";
  arrayList.forEach(function(r, i){
    text += '<p>' + r + '</p>'
  })
  return text;
}

function getMoves(moves){
  let line = '<span style="font-size: 16px;">-';
  for(let i = 0; i<moves.length; i++){
    let moveInfo = BattleMovedex[moves[i].toLowerCase().split(" ").join("")];
    if(!moveInfo) continue;
    line += '<img src="Assets/Images/Type Icons/' + moveInfo.type + '.png">/'
  }
  line = line.substring(0, line.length-1)+" ";
  for(let i = 0; i<moves.length; i++){
    line+= moves[i] + ' / '
  }
  line = line.substring(0, line.length-3) + '</span><br>';
  return line;
}

function setMOTW(year){
  $('#archives').empty();
  var arc = motw[year];
  $('#archives').append('<div style="margin-bottom: -24px;"><h1 style="text-align: center; font-size: 72px;"><u>' + year + ' Archives</u></h1></div>');
  for(let i = 0; i<Math.ceil(arc.length/2); i++){
    $('#archives').append('<div style="display: flex; font-size: 12px;" id="motw-archive-row' + i + '"></div>');
    for(let k = 0; k<2; k++){
      var mon = arc[i*2+k];
      if(mon){
        $('#motw-archive-row'+i).append('<div style="flex: 50%; margin: 12px;"><p style="text-align: center;">' + mon.date + '</p><img class="center" src="Assets/Images/Pokemon Sprites/' + mon.pokemon + '.png" alt="' + mon.pokemon + '"><p style="text-align: center; font-size: 16px;">"' + mon.title + '"</p><p style="font-size: 16px;">Pokemon: ' + mon.pokemon + '<br>Ability: ' + mon.ability + '<br>Nature: ' + mon.nature + '<br>Item: ' + mon.item + '<br>EVs: ' + mon.evs + '</p><div id="moveset' + (i*2+k) + '"></div><div>' + getParagraph(mon.desc) + '</div><p>Written By: ' + mon.author + '</p></div>')
        for(let r = 0; r<mon.moves.length; r++){
          let move = mon.moves[r];
          if(move){
            $('#moveset'+(i*2+k)).append(getMoves(move));
            //'<span style="font-size: 16px;">-<img style="display: inline;" src="Assets/Images/Type Icons/' + move.type + '.png"> ' + move.name + '</span><br>'
          }
        }
      }else{
        $('#motw-archive-row'+i).append('<div style="flex: 50%;"></div>')
      }
    }
  }
}
