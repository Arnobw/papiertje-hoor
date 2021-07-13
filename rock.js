console.log("\\____()< awooooo");




$( document ).ready(function() {
    console.log( "Ready!" );
    $('#container').hide();
    $( "#restartBattle" ).hide();
});




$('#startBattle').click(function(){

    backgroundMusic.play();
    $('#startBattle').hide();
    $('#container').slideDown();
    $('#nameEntry').hide();
   
});





//geluiden


var backgroundMusic = new Howl({
    src: ['audio/dungeon_spooky.mp3'],

    loop: true,
    volume: 0.4,
    onend: function() {
      console.log('Finished!');
    }
  });


var wonnered = new Howl({
    src: ['audio/win.wav'],
    volume: 0.5
});

// var wonnered2 = new Howl({
//     src: ['audio/win2.wav'],
//     volume: 0.5
// });


var klik = new Howl({
    src: ['audio/klik.wav'],
    volume: 0.4
});

var verlies = new Howl({
    src: ['audio/verlies.wav'],
    volume: 0.2
});
// var verlies2 = new Howl({
//     src: ['audio/verlies2.wav'],
//     volume: 0.4
// });

var draww = new Howl({
    src: ['audio/draw.wav'],
    volume: 0.3
});

var revent = new Howl({
    src: ['audio/random.wav'],
    volume: 0.4
});

var damage_right = new Howl({
    src: ['audio/damage_right.wav'],
    volume: 0.4
});

var damage_left = new Howl({
    src: ['audio/damage_left.wav'],
    volume: 0.4
});

var damage = new Howl({
    src: ['audio/damage.wav'],
    volume: 0.4
});

var death = new Howl({
    src: ['audio/death.wav'],
    volume: 0.4
});

//

let a = ["scissors", "rock", "paper"];
let computerwin = 30;
let menswin = 30;
let prefix = "<Rival chose ";
let drawCount = 0;
let playerName;






$('.speelknop').click(function (e) {

    klik.play();
    playerName = $('#nameEntry').val();
    $('#playerName').text(playerName);

    b =  e.target.id;
    console.log(b);
    

    let rr = Math.floor(Math.random() * 10);
    console.log(rr);
    if (rr == 5) {
        randitem();
    } else {

    //winnen, verliezen, gelijkspel....
    let win = function () {
        drawCount = 0;
        wonnered.play();
        // wonnered2.play();
        damage_right.play();
        $('#output').animate({
            opacity: 0
        }, 50, function () {
            $(this).text(prefix + a[r] + "." + "\n" + playerName + " won!>")
                .animate({
                    opacity: 1
                });
                $('#computer').css('background-image',"url('img/anti_gamerLow.png')");
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

        $('#mens').text("HP: " + menswin)
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

        
        computerwin -=1;
        $('#pc').text("HP: " + computerwin)
        $('#scorepc').animate({
            opacity: 0
        }, 50, function () {
            $(this).text("-1")
                .animate({
                    opacity: 1
                }).animate({
                    opacity: 0
                });
         
                
     
        });




        setTimeout(function() {   checkWin();  ; },700); 
    }


    // Begin Draw Function
    let draw = function () {
       
        draww.play();
        damage.play();
        drawCount++;
    
        $('#output').animate({
            opacity: 0
        }, 50, function () {
            $(this).text("<Draw.>")
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


                computerwin -= drawCount;
                $('#pc').text("HP: " + computerwin)
                $('#scorepc').animate({
                    opacity: 0
                }, 50, function () {
                    $(this).text("-" + drawCount)
                        .animate({
                            opacity: 1
                        }).animate({
                            opacity: 0
                        });
                        $("#player").effect( "bounce", {times:3}, 300 );
                        
             
                });


                menswin -= drawCount;
                $('#mens').text("HP: " + menswin)
                $('#scoreman').animate({
                    opacity: 0
                }, 50, function () {
                    $(this).text("-" + drawCount)
                        .animate({
                            opacity: 1
                        }).animate({
                            opacity: 0
                        });
                        $("#computer").effect( "bounce", {times:3}, 300 );
                        
             
                });
        })

        

 


                


        $('#computer').css('background-image',"url('img/anti_gamerLow.png')");
        $('#player').css('background-image',"url('img/playerLow.png')");

    
        setTimeout(function() {   checkWin();  ; },700);    
    }

    // Einde Draw Function


    //Begin Loss Function
    let loss = function () {
        drawCount = 0;
        verlies.play();
        // verlies2.play();
        damage_left.play();
        $('#output').animate({
            opacity: 0
        }, 50, function () {
            $(this).text(prefix + a[r] + "." + "\n" + playerName + " loses.>")
                .animate({
                    opacity: 1
                });
                $('#player').css('background-image', "url('img/playerLow.png')");
                $('#computer').css('background-image',"url('img/anti_gamer.png')");
              
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

        $('#pc').text("HP: " + computerwin);
        $('#scorepc').animate({
            opacity: 0
        }, 50, function () {
            $(this).text("+1")
                .animate({
                    opacity: 1
                }).animate({
                    opacity: 0
                });


        menswin -=1;
        $('#mens').text("HP: " + menswin)
        $('#scoreman').animate({
            opacity: 0
        }, 50, function () {
            $(this).text("-1")
                .animate({
                    opacity: 1
                }).animate({
                    opacity: 0
                });
         
                
     
        });
       

                

                
                $("#player").effect( "bounce", {times:3}, 300 );
        });

        setTimeout(function() {   checkWin();  ; },700);  
    }
    //Einde Loss Function




    let r = Math.floor(Math.random() * 3);


    if (b === "scissors") {
        if (a[r] === "scissors") {
            draw();

        } else if (a[r] === "rock") {
            loss();
        } else if (a[r] === "paper") {
            win();
        }
    } else if (b === "rock") {
        if (a[r] === "scissors") {
            win();
        } else if (a[r] === "rock") {
            draw();
        } else if (a[r] === "paper") {
            loss();
        }
    } else if (b === "paper") {
        if (a[r] === "scissors") {
            loss();
        } else if (a[r] === "rock") {
            win();
        } else if (a[r] === "paper") {
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
let archvile = new item("Archvile", +1, -3, "archvile.png", "<The archvile shows up just to kick you in the nuts.>");
let medic = new item ("Medic", +10, +10, "medic.png", "<You both get buffed by a medic passing by.>");
let dio = new item ('dio', -20, -20, "roller.jpg", "MUDA MUDA MUDAMUDAMUDAMUDAMUDAMUDA");
let dunky = new item ('dunky', 0, +3, "dunky.png", "<Jerma gives you some dunky donut because your epic>");
let sus = new item ('sus', -5, -5, "sus.jpg", "<wen imposer sus>");
let drain = new item ('drain', +7, -7, "drain.gif", "<Your opponent used drain!>")
let items = [tankje, archvile, medic, dio, dunky, sus, drain];



// randomitem

let randitem = function () {
    drawCount= 0;
    revent.play();
  let rrr = Math.floor(Math.random()* items.length);
  let gekozen = items[rrr];
  
  computerwin += gekozen.infoPC;
  menswin += gekozen.info;

$('#pc').text("HP: " + computerwin);
$('#mens').text("HP: " + menswin );  

  console.log(gekozen)
    $('#output').animate({
        opacity: 0
    }, 50, function () {
        $(this).text(gekozen.desc)
            .animate({
                opacity: 1
            });
    });




     //score animatie
     $('#scorepc').animate({
        opacity: 0
    }, 50, function () {
        $(this).text(gekozen.infoPC)
            .animate({
                opacity: 1
            }).animate({
                opacity: 0
            })
    });

    $('#scoreman').animate({
        opacity: 0
    }, 50, function () {
        $(this).text(gekozen.info)
            .animate({
                opacity: 1
            }).animate({
                opacity: 0
            })
    });   

    
   
    $('#foto').css("background-image", "url(" + 'img/' + gekozen.foto + ")") .effect( "bounce", {times:3}, 300 );
    $('#foto').css("opacity", "1");
    


   

    $('#computer').css('background-image',"url('img/anti_gamerLow.png')");
    $('#player').css('background-image',"url('img/playerLow.png')");

    setTimeout(function() {   checkWin();  ; }, 700); 
};






function checkWin(){
    console.log ('checking');
    
    if (computerwin <=0 && menswin <=0){
        death.play();
        $('.buttonWrapper').hide();
        $('#output').text("You both suck!");
        $('#computer').toggle( "explode" );
        $('#player').toggle( "explode" );
        console.log('Both players lost. Shame.');
        $( "#restartBattle" ).slideDown();
        $('#foto').css('background-image',"url('img/draw.gif')");

    }

  else if(computerwin <=0){
        $('#computer').toggle( "explode" );
        death.play();
        $('#output').text("You're winner!!!");
        $('.buttonWrapper').hide();
        console.log('The computer somehow lost.');
        $( "#restartBattle" ).slideDown();
        $('#foto').css('background-image',"url('img/player_wins.gif')");
    }
    
    
  else if(menswin <=0){
        $('#player').toggle( "explode" );
        death.play();
        $('#output').text("You're losered!!!");
        $('.buttonWrapper').hide();
        console.log('The player obviously lost.');
        $( "#restartBattle" ).slideDown();
        $('#foto').css('background-image',"url('img/revenant_wins.gif')");
    } 
    else {
        console.log('no winner yet.....')
    }
}

function restart(){
    $('#player').slideDown();
    $('#computer').slideDown();
    $('.buttonWrapper').slideDown();
    menswin = 30;
    computerwin = 30;
    drawCount = 0;
    $('#mens').text( "HP: " + menswin);
    $('#pc').text("HP: " + computerwin);
    $( "#restartBattle" ).slideUp();

}

$( "#restartBattle" ).click(function() {
    restart();
  });