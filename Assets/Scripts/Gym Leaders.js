$('#sort').click(function(){
  $('#sort-list').toggle();
})

var modes = ["Type A-Z","Type Z-A",'Leader A-Z','Leader Z-A'];

$(document).ready(function(){
  setGyms(modes[0]);
  for(let i = 0; i<modes.length; i++){
    $('#sort-list').append('<a id="mode'+i+'">' + modes[i] + '</a>')
    $('#mode'+i).click(function(){
      setGyms(modes[i])
    })
  }
})

function compareTypes(a, b) {
  // Use toUpperCase() to ignore character casing
  const leaderA = a.type.toUpperCase();
  const leaderB = b.type.toUpperCase();

  let comparison = 0;
  if (leaderA > leaderB) {
    comparison = 1;
  }else if (leaderA < leaderB) {
    comparison = -1;
  }
  return comparison;
}

function compareLeaders(a, b) {
  // Use toUpperCase() to ignore character casing
  const leaderA = a.leader.toUpperCase();
  const leaderB = b.leader.toUpperCase();

  let comparison = 0;
  if (leaderA > leaderB) {
    comparison = 1;
  }else if (leaderA < leaderB) {
    comparison = -1;
  }
  return comparison;
}


function setGyms(mode){
  switch(mode){
    case 'Type A-Z': {
      $('.gym-leaders').empty();
      gymInfo.sort(compareTypes);
      sortForwards();
      break;
    }
    case 'Type Z-A': {
      $('.gym-leaders').empty();
      gymInfo.sort(compareTypes);
      sortBackwards()
      break;
    }

    case 'Leader A-Z':{
      $('.gym-leaders').empty();
      gymInfo.sort(compareLeaders);
      sortForwards();
      break;
    }

    case 'Leader Z-A':{
      $('.gym-leaders').empty();
      gymInfo.sort(compareLeaders);
      sortBackwards();
      break;
    }
  }
}

function sortForwards(){
  for(let i = 0; i<=8; i++){
    $('.gym-leaders').append('<div style="display: flex; width: 866px;" class="gym-leader-row' + i + '"></div>');
    for(let k = 0; k<2; k++){
      var gym = gymInfo[i*2 + k];
      var singles = gym.rules.singles;
      var doubles = gym.rules.doubles;
      $('.gym-leader-row'+i).append('<div class="gym-leader-col" style="width: 400px;"><img class="gym-banner" src="Assets/Images/Gym Banners/' + gym.type + '.png"><p class="title"><strong><b><i>~'+ gym.title +'~</i></b></strong></p>'
      + '<div style="display: flex"><div  style="flex: 20%"><strong class="gym-type"><b><i>Type: </i></b></strong><br><img class="type" src="Assets/Images/Type Icons/' + gym.type + '.png"><br><strong class="gym-rank"><b><i>Rank:</i></b></strong><br><img class="rank" src="Assets/Images/Rankings/' + gym.rank + '.png"></div>'
      + '<div style="flex: 80%"><strong class="gym-rules"><u><b>Gym Rules:</b></u></strong><div class="rules">' + (doubles ? '<p id="singles"><b>~Singles~</b><br>' : '<p id="singles">') + (singles.bZMoves ? '-No Z-Moves<br>' : '') + (singles.ouLimit ? '-OU Limit: '+singles.ouLimit+'<br>': '') + (singles.bLegends? '-No Legends<br>' : '') + (singles.itemClause ? '-Item Clause: '+singles.itemClause+'<br>': '') + (singles.bPoke ? '-Banned Pokemon: ' + singles.bPoke+'<br>': '') + (singles.bMega ? '-Banned Mega Stone: '+singles.bMega+'<br>': '') + (singles.bTerrains ? '-No Terrain Summoning Abilities<br>' : '') + (singles.extra?'-'+singles.extra:'')
      + (doubles ? '<p id="doubles"><b>~Doubles~</b><br>' + (doubles.bZMoves? '-No Z-Moves<br>' : '') + (doubles.ouLimit ? '-OU Limit: '+doubles.ouLimit+'<br>': '') + (doubles.bLegends? '-No Legends<br>':'') + (doubles.itemClause?'-Item Clause: '+doubles.itemClause+'<br>':'') + (doubles.bPoke?'-Banned Pokemon: '+doubles.bPoke+'<br>':'') + (doubles.bMega?'-Banned Mega Stone: '+doubles.bMega+'<br>':'') + (doubles.bTerrains?'-No Terrain Summoning Abilities<br>':'') + (doubles.extra?'-'+doubles.extra:'') + '</p>' : '') + '</p>' + (gym.sub?'<p id="sub">Gym Leader Sub: ' + gym.sub + '</p>':'') + '</div></div></div></div>')
    }
  }
}

function sortBackwards(){
  for(let i = 8; i>=0; i--){
    $('.gym-leaders').append('<div style="display: flex; width: 866px;" class="gym-leader-row' + i + '"></div>');
    for(let k = 1; k>=0; k--){
      var gym = gymInfo[i*2 + k];
      var singles = gym.rules.singles;
      var doubles = gym.rules.doubles;
      $('.gym-leader-row'+i).append('<div class="gym-leader-col" style="width: 400px;"><img class="gym-banner" src="Assets/Images/Gym Banners/' + gym.type + '.png"><p class="title"><strong><b><i>~'+ gym.title +'~</i></b></strong></p>'
      + '<div style="display: flex"><div  style="flex: 20%"><strong class="gym-type"><b><i>Type: </i></b></strong><br><img class="type" src="Assets/Images/Type Icons/' + gym.type + '.png"><br><strong class="gym-rank"><b><i>Rank:</i></b></strong><br><img class="rank" src="Assets/Images/Rankings/' + gym.rank + '.png"></div>'
      + '<div style="flex: 80%"><strong class="gym-rules"><u><b>Gym Rules:</b></u></strong><div class="rules">' + (doubles ? '<p id="singles"><b>~Singles~</b><br>' : '<p id="singles">') + (singles.bZMoves ? '-No Z-Moves<br>' : '') + (singles.ouLimit ? '-OU Limit: '+singles.ouLimit+'<br>': '') + (singles.bLegends? '-No Legends<br>' : '') + (singles.itemClause ? '-Item Clause: '+singles.itemClause+'<br>': '') + (singles.bPoke ? '-Banned Pokemon: ' + singles.bPoke+'<br>': '') + (singles.bMega ? '-Banned Mega Stone: '+singles.bMega+'<br>': '') + (singles.bTerrains ? '-No Terrain Summoning Abilities<br>' : '') + (singles.extra?'-'+singles.extra:'')
      + (doubles ? '<p id="doubles"><b>~Doubles~</b><br>' + (doubles.bZMoves? '-No Z-Moves<br>' : '') + (doubles.ouLimit ? '-OU Limit: '+doubles.ouLimit+'<br>': '') + (doubles.bLegends? '-No Legends<br>':'') + (doubles.itemClause?'-Item Clause: '+doubles.itemClause+'<br>':'') + (doubles.bPoke?'-Banned Pokemon: '+doubles.bPoke+'<br>':'') + (doubles.bMega?'-Banned Mega Stone: '+doubles.bMega+'<br>':'') + (doubles.bTerrains?'-No Terrain Summoning Abilities<br>':'') + (doubles.extra?'-'+doubles.extra:'') + '</p>' : '') + '</p>' + (gym.sub?'<p id="sub">Gym Leader Sub: ' + gym.sub + '</p>':'') + '</div></div></div></div>')
    }
  }
}
