var version;
var sprite;
var background;
var rank;
var frame;
var scale = $("#scale").val() || 1;
var x = $("#x").val() || 0;
var y = $("#y").val() || 0;
var flip = document.getElementById("flip").checked || false;

$(document).ready(() => {
  let bArray = ["Dragons Den", "Galar Map", "Motostoke", "Power Plant", "Victory Road", "Whirl Islands"];
  bArray.forEach((r) => {
    $("#backgrounds").append(`<label for="background"><img src="./Images/Backgrounds/${r}.png" alt="${r}"></label><input type="radio" name="background" value="${r}">`);
  })
  let fArray = ["Blue - Curved", "Blue - Line", "Green - Curved", "Green - Line", "Orange - Curved", "Orange - Line", "Purple - Curved", "Purple - Line", "Red - Curved", "Red - Line"];
  fArray.forEach((r) => {
    $("#frames").append(`<label for="frames"><img src="./Images/Frames/${r}.png" alt="${r}"></label><input type="radio" name="frames" value="${r}">`)
  })
  $('#rank :radio').change(function(){
    rank = this.value;
    createCard();
  })
  $("#backgrounds :radio").change(function(){
    background = this.value;
    createCard();
  })
  $("#frames :radio").change(function(){
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
})

$("#background-toggle").click(function(){
  $("#backgrounds").toggle();
})

$("#rank-toggle").click(function(){
  $("#rank").toggle();
})

$("#frame-toggle").click(function(){
  $("#frames").toggle();
})

$("#upload :file").change(function(){
  let input = $(this);
  if (input[0].files && input[0].files[0]){
    var reader = new FileReader();
    reader.onload = function(e) {
      sprite = e.target.result;
      if(rank && background){
        createCard();
      }
    }
    reader.readAsDataURL(input[0].files[0]);
  }
})

function createCard(){
  if(!(sprite && rank && background && frame)) return;
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
          if(frame){
            let img3 = new Image();
            img3.onload = () => {
              ctx.drawImage(img3, 0, 0);
              if(rank){
                let img4 = new Image();
                img4.onload = () => {
                  ctx.drawImage(img4, 0, 160, 40, 40);
                }
                img4.src = `../Assets/Images/Rankings/${rank}.png`;
              }
            }
            img3.src = `./Images/Frames/${frame}.png`
          }
        }
        img2.src = sprite;
      }
    }
    img1.src = `./Images/Backgrounds/${background}.png`;
  }
}

const createCanvas = (id="") => {
  var canvas = document.createElement("CANVAS");
  var ctx = canvas.getContext("2d");
  canvas.width = 150;
  canvas.height= 200;

  if(id){
    $(`#${id}`).html(canvas);
  }

  let obj = {
    canvas: canvas,
    ctx: ctx,
  }

  return obj;
}
