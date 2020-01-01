var c = document.getElementById("Pokedex");
var ctx = c.getContext("2d");
var shiny = false;
var id = 1;
var murican = false;
var SL = false;
var form = 0;

var loaded = true;

var select = document.createElement("select");
  select.id = "name";
for(let i = 1; i<=809; i++){
  if(pokeInfo[i]){
    if(pokeInfo[i].forms[0].name){
      var option = document.createElement("option");
      option.text = pokeInfo[i].forms[0].name;
      option.value = i;
      select.add(option)
    }
  }
}
var use = document.getElementById("use");
var parentDiv = use.parentNode;
parentDiv.insertBefore(select, use);
select.onchange = () => {
  SL = false;
  form = 0;
  id = select.value;
  draw();
}
c.addEventListener('mousedown', touchEvents);
c.addEventListener('touchend', touchEvents);
var body = document.getElementsByTagName("body")[0];
body.onload = () => {
  draw();
}

function draw(){
  loaded = false;
  var img = new Image();
  img.onload = function(){
    ctx.drawImage(img, 0, 0);
    var info = pokeInfo[id].forms[form];
    if(pokeInfo[id].forms.length > 1){
      ctx.fillRect(285, 90, 50, 50);
      ctx.fillStyle="white";
      ctx.fillRect(287.5, 92.5, 45, 45);
      ctx.fillStyle="black";
      ctx.fillText("Forms", 292.5, 117.5)
    }
    if(SL){
      ctx.font = "8px Arial, Arial Unicode MS";
      var text = "SL Dex Entry";
      var num = ctx.measureText(text).width;
      ctx.fillText(text,500-num,235);
    }

    //sprite
    var sprites = new Image();
    if(info.galar){
      var path = shiny? `https://www.serebii.net/Shiny/SWSH/${info.sprite}`: `https://www.serebii.net/swordshield/pokemon/${info.sprite}`;
    }else{
      var path = shiny ? `https://www.serebii.net/Shiny/SM/${info.sprite}`: `https://www.serebii.net/sunmoon/pokemon/${info.sprite}`;
    }
    sprites.onload = function(){
      if(sprites.height <= sprites.width){
        var height = sprites.height/sprites.width;
        ctx.drawImage(sprites, 165, 43+(100-height*104)/2, 104, height*104);
      }else{
        var width = sprites.width/sprites.height;
        ctx.drawImage(sprites, 165+(100-width*101)/2,43,101*width,101);
      }
      loaded = true;
    }
    sprites.onerror = () => {
      loaded = true;
    }
    sprites.src = path;

    //name and dexnumber
    var name = info.name;
    ctx.font = "16px Arial, Arial Unicode MS";
    if(id < 10){
      ctx.fillText("#00"+id+" "+name, 330, 50);
    }else if(id < 100){
      ctx.fillText("#0"+id+" "+name, 330, 50);
    }else{
      ctx.fillText("#"+id+" "+name, 330, 50);
    }


    //dex entry
    var dexEntry = info.dexEntry;
    if(SL && info.sl){
      dexEntry = info.sl;
    }
    var words = dexEntry.split(" ");
    var wordLength = 0;
    var row = 0;
    ctx.font = "11px Arial, Arial Unicode MS";
    for(var i = 0; i<words.length; i++){
      var letterLength = ctx.measureText(words[i]).width;
      if(162+letterLength+wordLength >= 495){
        row++;
        wordLength = 0;
      }
      ctx.fillText(words[i], 162+wordLength, 191+12*row);
      wordLength+=letterLength+4;
    }

    //type
    var types = info.type.split("/ ");
    if(types[0]){
      var type1Path = "../Assets/Images/Type Icons/"+types[0]+".png";
      var type1 = new Image();
      type1.onload = function(){
          ctx.drawImage(type1, 355, 83);
      }
      type1.src = type1Path;
    }
    if(types[1]){
      var type2Path = "../Assets/Images/Type Icons/"+types[1]+".png";
      var type2 = new Image();
      type2.onload = function(){
          ctx.drawImage(type2, 355+type2.width+5, 83);
      }
      type2.src = type2Path;
    }

    //stats
    var stats = info.stats;
    ctx.font = "16px Arial, Arial Unicode MS";
    ctx.fillText("HP: "+stats[0],160, 330);
    var fillColor = "blue";
    if(stats[0]){
      ctx.fillStyle = fillColor;
      ctx.fillRect(300,314,(stats[0]/255)*180,16);
      ctx.fillStyle="black";
    }
    ctx.fillText("Attack: "+stats[1], 160, 348);
    if(stats[1]){
      ctx.fillStyle = fillColor;
      ctx.fillRect(300,332,(stats[1]/255)*180,16);
      ctx.fillStyle="black";
    }
    ctx.fillText("Defense: "+stats[2], 160, 366);
    if(stats[2]){
      ctx.fillStyle = fillColor;
      ctx.fillRect(300,350,(stats[2]/255)*180,16);
      ctx.fillStyle="black";
    }
    ctx.fillText("Sp. Attack: "+stats[3],160, 384);
    if(stats[3]){
      ctx.fillStyle = fillColor;
      ctx.fillRect(300,368,(stats[3]/255)*180,16);
      ctx.fillStyle="black";
    }
    ctx.fillText("Sp. Defense: "+stats[4],160, 402);
    if(stats[4]){
      ctx.fillStyle = fillColor;
      ctx.fillRect(300,386,(stats[4]/255)*180,16);
      ctx.fillStyle="black";
    }
    ctx.fillText("Speed: "+stats[5], 160, 420);
    if(stats[5]){
      ctx.fillStyle = fillColor;
      ctx.fillRect(300,404,(stats[5]/255)*180,16);
      ctx.fillStyle="black";
    }

    //abilities
    var A1 = info.ability1;
    var A2 = info.ability2;
    var AH = info.hidden;
    var AS = info.special;
    ctx.font = "14px Arial, Arial Unicode MS";
    var start = 445;
    if(A1){
      ctx.fillText("Ability #1: "+A1,160, start);
      start+=16;
    }
    if(A2){
      ctx.fillText("Ability #2: "+A2,160,start);
      start+=16;
    }
    if(AH){
      ctx.fillText("Hidden Ability: "+AH,160, start);
      start+=16;
    }
    if(AS){
      ctx.fillText("Special Ability: "+AS,160,start);
    }

    //classification
    ctx.font = "16px Arial, Arial Unicode MS";
    ctx.fillText(info.classification,330,74);
    ctx.fillText("HT",363,130)
    ctx.fillText("WT",363,151);
    if(murican){
      var inches = Math.round(info.height/0.0254);
      var feet = Math.floor(inches/12);
      inches = inches - feet*12;
      if(inches<10){
        ctx.fillText(feet+"'0"+inches+"\"",426,130);
      }else{
        ctx.fillText(feet+"'"+inches+"\"",426,130);
      }
      if(isNaN(info.weight)){
        ctx.fillText("??? lb",426,151);
      }else{
        var weight = info.weight*2.20462;
        ctx.fillText(weight.toFixed(1)+"lb",426,151);
      }
    }else{
      ctx.fillText(info.height+" m",426,130);
      ctx.fillText(info.weight+" kg",426,151);
    }

    //Pokemon
    ctx.font = "12px Arial, Arial Unicode MS";
    ctx.fillText("Pokemon: ", 160,300);
  }
  img.src = "./SL Pokedex.png";
}

function idUp(){
  do{
    id++;
  }while(!pokeInfo[id]);
  SL = false;
  select.value = id;
  form = 0;
  draw();
}
function idDown(){
  do{
    id--;
  }while(!pokeInfo[id]);
  SL = false;
  select.value = id;
  form = 0;
  draw();
}


//events
function touchEvents(event){
  var x;
  var y;
  if (event.pageX || event.pageY) {
    x = event.pageX;
    y = event.pageY;
  }
  else {
    x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  x -= c.offsetLeft;
  y -= c.offsetTop;
  if(loaded){
    if((x >= 164 && x <= 268) && (y >= 41 && y <=145)){
      shiny = !shiny;
      draw();
    }
    if((x >= 24 && x <= 78) && (y >= 447 && y <= 497)){
      if(id > 1){
        idDown();
      }
    }
    if((x >= 80 && x <= 132) && (y >= 447 && y <= 497)){
      if(id < 809){
        idUp();
      }
    }
    if((x >= 357 && x <= 485) && (y >= 110 && y <= 157)){
      murican = !murican;
      draw();
    }
    if((x >= 285 && x <= 335) && (y >= 90 && y <= 140) && pokeInfo[id].forms.length > 1){
      form++;
      if(!pokeInfo[id].forms[form]){
        form = 0;
      }
      draw();
    }
    if((x >= 157 && x <= 500) && (y >= 176 && y <= 240) && pokeInfo[id].forms[form].sl){
      SL = !SL;
      draw();
    }
  }
}

window.addEventListener('keydown',function(e){
  var code = e.keyCode;
  if([32,37,38,39,40].indexOf(code) > -1){
    e.preventDefault();
  }
  if(loaded){
    if(code === 38 && id < 809){
      idUp();
    }
    if(code === 40 && id > 1){
      idDown();
    }
    if(code === 37 && pokeInfo[id].forms.length > 1){
      if(form === 0){
        form = pokeInfo[id].forms.length-1;
        draw();
      }else{
        form--;
        draw();
      }
    }
    if(code === 39 && pokeInfo[id].forms.length > 1){
      if(form === pokeInfo[id].forms.length-1){
        form = 0;
        draw();
      }else{
        form++;
        draw();
      }
    }
    if(code === 83){
      shiny = !shiny;
      draw();
    }
    if(code === 16){
      murican = !murican;
      draw();
    }
    if(code === 17 && pokeInfo[id].forms[form].sl){
      SL = !SL;
      draw();
    }
  }
})
