console.log("\\____()< awooooo");

let a = ["schaar", "steen", "papier"];
let computerwin = 0;
let menswin = 0;
let prefix = "De computer koos "






$('#btn').click(function(){
    b = $('#input').val();
   
    //winnen, verliezen, gelijkspel....
    let win = function() {
        $('#output').text(prefix + a[r] + ". Je hebt gewonnen, episch!");
        $('#foto').css('background-image', "url('win.jpg')");
        menswin +=1; 
        $('#mens').text("jouw score: " + menswin);
    }

    let draw = function(){
        $('#output').text(prefix + a[r] +  ". Jullie staan gelijk.");
        $('#foto').css('background-image', "url('draw.jpg')");
    }

    let loss = function(){
        $('#output').text(prefix + a[r] + ". Je verliest."); 
        $('#foto').css('background-image', "url('lose.jpg')");
        computerwin +=1;
        $('#pc').text( "pc score :" + computerwin);
    }
    let r = Math.floor(Math.random()*3);
 
    if (b === "schaar") {
        if (a[r] === "schaar") {
           draw();
            
        } else if (a[r] === "steen") {
        loss();
        } else if (a[r] === "papier") {
            win();
        }
    } else if (b ==="steen") {
        if (a[r] === "schaar") {
           win();
        } else if (a[r] === "steen") {
           draw();
        } else if (a[r] === "papier"){
           loss();
        }
    } else if (b === "papier") {
        if(a[r] === "schaar") {
           loss();
        } else if (a[r] === "steen") {
          win();
        } else if (a[r] === "papier") {
           draw();
        }
    }


});