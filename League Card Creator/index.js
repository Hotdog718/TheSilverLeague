var sprite;
var background;
var rank = "Ignore";
var frame = "None";
var scale = $("#scale").val() || 1;
var x = $("#x").val() || 0;
var y = $("#y").val() || 0;
var flip = document.getElementById("flip").checked || false;
var outline = document.getElementById("outline").checked || true;

$(document).ready(() => {
  let bArray = ["Dragons Den", "Galar Map", "Motostoke", "Power Plant", "Victory Road", "Whirl Islands", "Ilex Forest (Day)", "Ilex Forest (Dusk)", "Ilex Forest (Night)", "Eternatus", "Alolan Exeggutor", "Silver League"];
  bArray.forEach((r) => {
    $("#background-list").append(`<li><img src="./Images/Backgrounds/${r}.png" alt="${r}"><label for="background">${r}</label><input type="radio" name="background" value="${r}"></li>`); //<label for="background"><img src="./Images/Backgrounds/${r}.png" alt="${r}"></label><input type="radio" name="background" value="${r}">
  })
  $('#rank :radio').change(function(){
    rank = this.value;
    createCard();
  })
  $("#backgrounds :radio").change(function(){
    background = this.value;
    createCard();
  })
  $("#frames #options :radio").change(function(){
    frame = this.value;
    createCard();
  })
  $("#x").change(function(){
    x = this.value;
    createCard();
  })
  $("#y").change(function(){
    y = this.value;
    createCard();
  })
  $("#scale").change(function(){
    scale = this.value;
    createCard();
  })
  $("#flip").change(function(){
    flip = document.getElementById("flip").checked;
    createCard();
  })
  $("#outline").change(function(){
    outline = document.getElementById("outline").checked;
    createCard();
  })
  $("#name").change(createCard);
  $("#color1").change(createCard);
  $("#color2").change(createCard);
  $("#name-color").change(createCard);
  $("#outline-color").change(createCard);
})


function drawCurved(canvas, ctx){
  //upper-bottom;
  for(let x=0; x<80; x++){
    let height = Math.floor(0.0063*Math.pow(x,2)-1.0487*x+45.007);
    ctx.fillStyle = document.getElementById("color1").value;
    ctx.fillRect(x,0,1,height);
  }

  //upper-top
  for(let x = 0; x<55; x++){
    let height = Math.floor(0.006*Math.pow(x, 2)-0.8763*x+31.225);
    ctx.fillStyle = document.getElementById("color2").value;
    ctx.fillRect(x,0,1,height);
  }

  //lower-top
  for(let x = 0; x<150; x++){
    let height = Math.ceil(0.0026*Math.pow(x,2)-0.0922*x+12.818);
    ctx.fillStyle = document.getElementById("color1").value;
    ctx.fillRect(x,200-height,1,height);
  }

  //lower-bottom
  for(let x=0; x<150;x++){
    let height = Math.floor((0.000008*Math.pow(x,3))+(0.00002*Math.pow(x,2))-(0.007*x)+6.7925);
    ctx.fillStyle = document.getElementById("color2").value;
    ctx.fillRect(x,200-height,1,height);
  }
}

function drawLine(canvas, ctx){
  for(let x = 0; x<150; x++){
    let height = 20+(9/50)*x;
    ctx.fillStyle = document.getElementById("color1").value;
    ctx.fillRect(x,200-height,1,height);
  }
  for(let x = 0; x<150; x++){
    let height = 7+(9/50)*x;
    ctx.fillStyle = document.getElementById("color2").value;
    ctx.fillRect(x,200-height,1,height);
  }
}

$("#background-toggle").click(function(){
  $("#backgrounds").toggle();
})

$("#rank-toggle").click(function(){
  $("#rank").toggle();
})

$("#frame-toggle").click(function(){
  $("#frames").toggle();
})

$("#name-toggle").click(function(){
  $("#name-panel").toggle();
})

$("#sprite-toggle").click(function(){
  $("#sprite").toggle();
})

$("#upload :file").change(function(){
  let input = $(this);
  if (input[0].files && input[0].files[0]){
    var reader = new FileReader();
    reader.onload = function(e) {
      sprite = e.target.result;
      if(background){
        createCard();
      }
    }
    reader.readAsDataURL(input[0].files[0]);
  }
})


function createCard(){
  if(!(sprite && background)) return;
  let { canvas, ctx } = createCanvas("result");
  if(background){
    let img1 = new Image();
    img1.onload = function(){
      ctx.drawImage(img1, 0, 0);
      if(sprite){
        ctx.mozImageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;
  	    ctx.msImageSmoothingEnabled = false;
  	    ctx.imageSmoothingEnabled = false;
        let img2 = new Image();
        img2.onload = () => {
          if(flip){
            ctx.save()
            ctx.translate((scale*img2.width/2), 0); // 0 -> 26 (x = 1, width = 50, width/2 = 25, scale = 1)
            ctx.scale(-1, 1);
            ctx.drawImage(img2, -x-(scale*img2.width/2), y, scale*img2.width, scale*img2.height);
            ctx.restore()
          }else{
            ctx.drawImage(img2, x, y, scale*img2.width, scale*img2.height);
          }
          drawFrame(canvas,ctx);
        }
        img2.src = sprite;
      }
    }
    img1.src = `./Images/Backgrounds/${background}.png`;
  }
}

function drawFrame(canvas, ctx){
  if(frame && frame !== "None"){
    if(frame === "Curved"){
      drawCurved(canvas, ctx);
    }else if(frame === "Line"){
      drawLine(canvas, ctx);
    }
  }
  fillRankAndName(canvas, ctx);
}

function fillRankAndName(canvas, ctx){
  if(rank && rank !== "Ignore"){
    let img4 = new Image();
    img4.onload = () => {
      ctx.drawImage(img4, 0, 160, 40, 40);
    }
    img4.src = `../Assets/Images/Rankings/${rank}.png`;
  }
  if($("#name").val()){
    let name = $("#name").val();
    let fontsize = 1;
    let maxWidth = rank === "Ignore" ? 120 : 100;
    let maxFontSize = 48;
    ctx.font = `${fontsize}px Revue`;
    while(ctx.measureText(name).width <= maxWidth && fontsize <= maxFontSize){
      fontsize++;
      ctx.font = `${fontsize}px Revue`;
    }
    ctx.font = `${fontsize-1}px Revue`;
    ctx.textAlign = "end";
    ctx.fillStyle= $("#name-color").val() || "white";
    var drawX = 145;
    var drawY = 190;
    ctx.fillText($("#name").val(), drawX, drawY);
    ctx.fillStyle= "white";
    if(outline){
      ctx.strokeStyle=$("#outline-color").val() || "black";
      for(let i = 0; i<=50; i++){
        ctx.strokeText($("#name").val(), drawX, drawY);
      }
      ctx.strokeStyle="black";
    }
  }
}

const createCanvas = (id="") => {
  var canvas = document.createElement("CANVAS");
  var ctx = canvas.getContext("2d");
  canvas.width = 150;
  canvas.height= 200;
  canvas.id = "league-card";

  if(id){
    $(`#${id}`).html(canvas);
  }

  let obj = {
    canvas: canvas,
    ctx: ctx,
  }

  return obj;
}
