$(document).ready(function(){
    
    var cNote = document.getElementById("cAudio");
    
    $("#c").click(function(){
       cNote.currentTime = 0;
       cNote.play(); 
    });

    // This controls the button for the d note.
    
    var dNote = document.getElementById('dAudio');
    
    $('#d').click(function(){
        dNote.currentTime = 0;
        dNote.play();
    });
    
    // This controls the button for the e note.
    
    var eNote = document.getElementById('eAudio');
    
    $('#e').click(function(){
        eNote.currentTime = 0;
        eNote.play();
    });
 
    // This controls the button for the f note.
    
    var fNote = document.getElementById('fAudio');
    
    $('#f').click(function(){
        fNote.currentTime = 0;
        fNote.play();
    });
    
    // This controls the button for the g note.
    
    var gNote = document.getElementById('gAudio');
    
    $('#g').click(function(){
        gNote.currentTime = 0;
        gNote.play();
    });
    
    // This controls the button for the a note.
    
    var aNote = document.getElementById('aAudio');
    
    $('#a').click(function(){
        aNote.currentTime = 0;
        aNote.play();
    });
    
    // This controls the button for the b note.
    
    var bNote = document.getElementById('bAudio');
    
    $('#b').click(function(){
        bNote.currentTime = 0;
        bNote.play();
    });

});