$(document).ready(function() {
    $("#input, #btn").hide();
});

$( document ).keypress(function() {
    $("#input, #btn").slideDown()
  });


console.log("\\____()< awooooo");

let a = ["schaar", "steen", "papier"];
let computerwin = 0;
let menswin = 0;
let prefix = "<De computer koos ";







$('#btn').click(function () {
    b = $('#input').val();

    //winnen, verliezen, gelijkspel....
    let win = function () {
        $('#output').animate({
            opacity: 0
        }, 50, function () {
            $(this).text(prefix + a[r] + ". Je hebt gewonnen! Episch!>")
                .animate({
                    opacity: 1
                });
        })
        $('#foto').animate({
            opacity: 0
        }, 50, function () {
            $(this).css('background-image', "url('win.jpg')")
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
        });
    }

    let draw = function () {
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
            $(this).css('background-image', "url('draw.jpg')")
                .animate({
                    opacity: 1
                });
        })
    }

    let loss = function () {
        $('#output').animate({
            opacity: 0
        }, 50, function () {
            $(this).text(prefix + a[r] + ". Je verliest.>")
                .animate({
                    opacity: 1
                });
        })
        $('#foto').animate({
            opacity: 0
        }, 50, function () {
            $(this).css('background-image', "url('lose.jpg')")
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
let yeeten = new item ("PC uit het raam gooien", -3, 1, "raam.jpg", "<Je yeet gwn die tyfus computer het raam uit.>")
let computerman = new item("computerman", 1, -3, "computerman.jpg", "<De computer yeet gewoon jezelve het raam uit.>")
let items = [tankje, inktvis, yeeten, computerman];



// randomitem
let randitem = function () {
  let rrr = Math.floor(Math.random()* items.length);
  let gekozen = items[rrr];
    $('#output').animate({
        opacity: 0
    }, 50, function () {
        $(this).text(gekozen.desc)
            .animate({
                opacity: 1
            });
    })

    $('#foto').animate({
        opacity: 0
    }, 50, function () {
        $(this).css("background-image", "url(" + gekozen.foto + ")")
            .animate({
                opacity: 1
            });
    })
    computerwin += gekozen.infoPC;
    $('#pc').text("pc score: " + computerwin);
    menswin += gekozen.info;
    $('#mens').text("jouw score: " + menswin ); 
   
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
}

$('#btn').click(function () {
    let rr = Math.floor(Math.random() * 10);
    if (rr == 5) {
        randitem();
    }
})

