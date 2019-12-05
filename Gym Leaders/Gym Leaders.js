$('#sort').click(function(){
  $('#sort-list').toggle();
})

var modes = ["Type A-Z","Type Z-A",'Leader A-Z','Leader Z-A'];

$(document).ready(function(){
  sortGyms(modes[0]);
  for(let i = 0; i<modes.length; i++){
    $('#sort-list').append('<a id="mode'+i+'">' + modes[i] + '</a>')
    $('#mode'+i).click(function(){
      sortGyms(modes[i])
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


function sortGyms(mode){
  switch(mode){
    case 'Type A-Z': {
      $('.gym-leaders').empty();
      gymInfo.sort(compareTypes);
      setGyms();
      break;
    }
    case 'Type Z-A': {
      $('.gym-leaders').empty();
      gymInfo.sort(compareTypes).reverse();
      setGyms();
      break;
    }

    case 'Leader A-Z':{
      $('.gym-leaders').empty();
      gymInfo.sort(compareLeaders);
      setGyms();
      break;
    }

    case 'Leader Z-A':{
      $('.gym-leaders').empty();
      gymInfo.sort(compareLeaders).reverse();
      setGyms();
      break;
    }
  }
}

function setGyms(){
  for(let i = 0; i<=8; i++){
    $('.gym-leaders').append('<div style="display: flex; width: 866px;" class="gym-leader-row' + i + '"></div>');
    for(let k = 0; k<2; k++){
      var gym = gymInfo[i*2 + k];
      var { singles, doubles } = gym.rules;
      /*
      $('.gym-leader-row'+i).append('<div class="gym-leader-col" style="width: 400px;"><img class="gym-banner" src="Assets/Images/Gym Banners/' + gym.type + '.png"><p class="title"><strong><b><i>~'+ gym.title +'~</i></b></strong></p>'
      + '<div style="display: flex"><div  style="flex: 20%"><strong class="gym-type"><b><i>Type: </i></b></strong><br><img class="type" src="Assets/Images/Type Icons/' + gym.type + '.png"><br><strong class="gym-rank"><b><i>Rank:</i></b></strong><br><img class="rank" src="Assets/Images/Rankings/' + gym.rank + '.png"></div>'
      + '<div style="flex: 80%"><strong class="gym-rules"><u><b>Gym Rules:</b></u></strong><div class="rules">' + (doubles ? '<p id="singles"><b>~Singles~</b><br>' : '<p id="singles">') + (singles.bZMoves ? '-No Z-Moves<br>' : '') + (singles.ouLimit ? '-OU Limit: '+singles.ouLimit+'<br>': '') + (singles.bLegends? '-No Legends<br>' : '') + (singles.itemClause ? '-Item Clause: '+singles.itemClause+'<br>': '') + (singles.bPoke ? '-Banned Pokemon: ' + singles.bPoke+'<br>': '') + (singles.bMega ? '-Banned Mega Stone: '+singles.bMega+'<br>': '') + (singles.bTerrains ? '-No Terrain Summoning Abilities<br>' : '') + (singles.extra?'-'+singles.extra:'')
      + (doubles ? '<p id="doubles"><b>~Doubles~</b><br>' + (doubles.bZMoves? '-No Z-Moves<br>' : '') + (doubles.ouLimit ? '-OU Limit: '+doubles.ouLimit+'<br>': '') + (doubles.bLegends? '-No Legends<br>':'') + (doubles.itemClause?'-Item Clause: '+doubles.itemClause+'<br>':'') + (doubles.bPoke?'-Banned Pokemon: '+doubles.bPoke+'<br>':'') + (doubles.bMega?'-Banned Mega Stone: '+doubles.bMega+'<br>':'') + (doubles.bTerrains?'-No Terrain Summoning Abilities<br>':'') + (doubles.extra?'-'+doubles.extra:'') + '</p>' : '') + '</p>' + (gym.sub?'<p id="sub">Gym Leader Sub: ' + gym.sub + '</p>':'') + '</div></div></div></div>')
      */

      const { type, title, leader, rank, sub } = gym;
      $(`.gym-leader-row${i}`).append(
      `<div class="gym-leader-col" style="width: 400px;">
        <img class="gym-banner" src="./Gym Banners/${type}.png">
        <p class="title">
          <strong><b><i>~${title}~</i></b></strong>
        </p>
        <div style="display: flex">
          <div style="flex: 20%">
            <strong class="gym-type"><b><i>Type:</i></b></strong><br>
            <img class="type" src="../Assets/Images/Type Icons/${type}.png"><br>
            <strong class="gym-rank"><b><i>Rank:</i></b></strong><br>
            <img class="rank" src="../Assets/Images/Rankings/${rank}.png">
          </div>
          <div style="flex: 80%">
            <strong class="gym-rules"><u><b>Gym Rules:</b></u></strong>
            <div class="rules">
              ${(doubles)?`<p class="singles"><b style="font-size: 18px;">Singles:</b><br>${getRules(singles)}</p>`:`<p class="singles">${getRules(singles)}<p>`}
              ${(doubles)?`<p class="doubles"><b style="font-size: 18px;">Doubles:</b><br>${getRules(doubles)}</p>`:``}
            </div>
          </div>
        </div>
      </div>`)
    }
  }

  function getRules(format){
    const { bZMoves, ouLimit, itemClause, bLegends, bPoke, bMega, bTerrains, extra } = format;
    return `
    <b>
      ${(bZMoves)?`-No Z-moves<br>`: ``}
      ${(ouLimit)?`-OU Limit: ${ouLimit}<br>`:``}
      ${(itemClause)?`-Item Clause: ${itemClause}<br>`:``}
      ${(bLegends)?`-No Legends<br>`:``}
      ${bPoke?`-Banned Pokemon: ${bPoke}<br>`:``}
      ${bMega?`-Banned Mega Stone: ${bMega}<br>`:``}
      ${bTerrains?`-No Terrain Summoning Abilities<br>`:``}
      ${extra?`-${extra}<br>`:``}
    </b>`;
  }

  /*
  type: "Water",
  title: "The Moist Master",
  leader: "Time Kitsune",
  rank: "S",
  rules: {
    singles: {
      bZMoves: false,
      ouLimit: null,
      itemClause: "",
      bLegends: false,
      bPoke: "Venusaur",
      bMega: "Medichamite",
      bTerrains: false,
      extra: ""
    }
  }
  */
}
