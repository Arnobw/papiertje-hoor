$(document).ready(function() {
    $("#input, #btn").hide();
});

$( document ).keypress(function() {
    $("#input, #btn").slideDown()
  });
console.log("\\____()< awooooo");





//geluiden
var wonnered = new Howl({
    src: ['audio/win.wav'],
    volume: 0.5
});

var wonnered2 = new Howl({
    src: ['audio/win2.wav'],
    volume: 0.5
});


var klik = new Howl({
    src: ['audio/klik.wav'],
    volume: 0.2
});

var verlies = new Howl({
    src: ['audio/verlies.wav'],
    volume: 0.2
});
var verlies2 = new Howl({
    src: ['audio/verlies2.wav'],
    volume: 0.4
});

var draww = new Howl({
    src: ['audio/draw.wav'],
    volume: 1
});

var revent = new Howl({
    src: ['audio/random.wav'],
    volume: 0.7
});

//

let a = ["schaar", "steen", "papier"];
let computerwin = 0;
let menswin = 0;
let prefix = "<De computer koos ";








$('#btn').click(function () {

    klik.play();
    
    b = $('#input').val();


    let rr = Math.floor(Math.random() * 10);
    console.log(rr);
    if (rr == 5) {
        randitem();
    } else {

    //winnen, verliezen, gelijkspel....
    let win = function () {
        wonnered.play();
        wonnered2.play();
        $('#output').animate({
            opacity: 0
        }, 50, function () {
            $(this).text(prefix + a[r] + ". Je hebt gewonnen! Episch!>")
                .animate({
                    opacity: 1
                });
                $('#computer').css('background-image',"url('img/revenantLow.png')");
                $('#player').css('background-image',"url('img/player.png')");

        })
        $('#foto').animate({
            opacity: 0
        }, 50, function () {
            $(this).css('background-image', "url('img/win.jpg')")
                .animate({
                    opacity: 1
                });
        })


        menswin += 1;
        $('#mens').text("jouw score: " + menswin)
        $('#scoreman').animate({
            opacity: 0
        }, 50, function () {
            $(this).text("+1")
                .animate({
                    opacity: 1
                }).animate({
                    opacity: 0
                });
                $("#computer").effect( "bounce", {times:3}, 300 );
        });
    }

    let draw = function () {
        draww.play();
        $('#output').animate({
            opacity: 0
        }, 50, function () {
            $(this).text(prefix + a[r] + ". Jullie staan gelijk.>")
                .animate({
                    opacity: 1
                });
        })
        $('#foto').animate({
            opacity: 0
        }, 50, function () {
            $(this).css('background-image', "url('img/draw.jpg')")
                .animate({
                    opacity: 1
                });
        })
    }

    let loss = function () {
        verlies.play();
        verlies2.play();
        $('#output').animate({
            opacity: 0
        }, 50, function () {
            $(this).text(prefix + a[r] + ". Je verliest.>")
                .animate({
                    opacity: 1
                });
                $('#player').css('background-image', "url('img/playerLow.png')");
                $('#computer').css('background-image',"url('img/revenant.png')");
              
        })
        $('#foto').animate({
            opacity: 0
        }, 50, function () {
            $(this).css('background-image', "url('img/lose.jpg')")
                .animate({
                    opacity: 1
                });
        })
        computerwin += 1;
        $('#pc').text("pc score :" + computerwin);
        $('#scorepc').animate({
            opacity: 0
        }, 50, function () {
            $(this).text("+1")
                .animate({
                    opacity: 1
                }).animate({
                    opacity: 0
                });
                $("#player").effect( "bounce", {times:3}, 300 );
        });
    }



    let r = Math.floor(Math.random() * 3);


    if (b === "schaar") {
        if (a[r] === "schaar") {
            draw();

        } else if (a[r] === "steen") {
            loss();
        } else if (a[r] === "papier") {
            win();
        }
    } else if (b === "steen") {
        if (a[r] === "schaar") {
            win();
        } else if (a[r] === "steen") {
            draw();
        } else if (a[r] === "papier") {
            loss();
        }
    } else if (b === "papier") {
        if (a[r] === "schaar") {
            loss();
        } else if (a[r] === "steen") {
            win();
        } else if (a[r] === "papier") {
            draw();
        }
    }


    }

    


});


//random items
function item(inaam, iinfoPC, iinfoo, ifoto, idesc) {
    this.naam = inaam;
    this.infoPC = iinfoPC;
    this.info = iinfoo;
    this.foto = ifoto;
    this.desc = idesc;
  }

let tankje = new item ("tank", -5, -5, "tank.jpg", "<TANK BEATS EVERYTHING>");
let inktvis = new item("inktvis", +10, +10, "inktvis.jpg", "<Inktvis op de parking, uuuhhhhhhh.>");
let yeeten = new item ("PC uit het raam gooien", -3, 1, "raam.jpg", "<Je yeet gewoon die tyfus computer het raam uit.>")
let computerman = new item("computerman", 1, -3, "computerman.jpg", "<De computer yeet gewoon jezelve het raam uit.>")
let dio = new item('dio', -20, -20, "roller.jpg", "MUDA MUDA MUDAMUDAMUDAMUDAMUDAMUDA")
let items = [tankje, inktvis, yeeten, computerman, dio];



// randomitem

let randitem = function () {
    $('#output').addClass(".rood");
    revent.play();
  let rrr = Math.floor(Math.random()* items.length);
  let gekozen = items[rrr];
  console.log(gekozen)
    $('#output').animate({
        opacity: 0
    }, 50, function () {
        $(this).text(gekozen.desc)
            .animate({
                opacity: 1
            });
    });

   /* $('#foto').animate({
        opacity: 0
    }, 50, function () {
       .effect( "bounce", {times:3}, 300 );
    });*/
    
   
    $('#foto').css("background-image", "url(" + 'img/' + gekozen.foto + ")") .effect( "bounce", {times:3}, 300 );
    $('#foto').css("opacity", "1");
    
   
  // $('#foto')
   
   //score animatie

   
   computerwin += gekozen.infoPC;
   $('#pc').text("pc score: " + computerwin);
  
    
   menswin += gekozen.info;
    $('#mens').text("jouw score: " + menswin );  
   

    
}




   
