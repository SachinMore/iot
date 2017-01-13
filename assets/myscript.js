/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function clikd(a) {
//	alert (a.id);    
    if(a.id == "btn-off") {        
        document.getElementById('btn-off').id= "btn-on";
        document.getElementById('btn-on').src= "assets/btn-on.png";
        document.getElementById('blub-off').id= "blub-on";
        document.getElementById('blub-on').src= "assets/blub-on.png";
    }
    
    else if(a.id == "btn-on") {
        document.getElementById('btn-on').id= "btn-off";
        document.getElementById('btn-off').src= "assets/btn-off.png";
        document.getElementById('blub-on').id= "blub-off";
        document.getElementById('blub-off').src= "assets/blub-off.png";
    }        
}


