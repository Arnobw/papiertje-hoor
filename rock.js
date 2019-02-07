console.log("\\____()< awooooo");

let a = ["schaar", "steen", "papier"];
let computerwin = 0;
let menswin = 0;
let prefix = "<De computer koos ";
let ttank = 1;






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



// tank
let tank = function () {
    $('#output').animate({
        opacity: 0
    }, 50, function () {
        $(this).text("Tank verslaat alles.")
            .animate({
                opacity: 1
            });
    })

    $('#foto').animate({
        opacity: 0
    }, 50, function () {
        $(this).css('background-image', "url('tank.jpg')")
            .animate({
                opacity: 1
            });
    })
    menswin -= ttank;
    computerwin -= ttank;

    $('#mens').text("jouw score: " + menswin);
    $('#pc').text("pc score: " + computerwin);
    ttank += 1;
}

$('#btn').click(function () {
    let rr = Math.floor(Math.random() * 10);
    if (rr == 5) {
        tank();
    }
})