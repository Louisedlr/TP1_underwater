
const POS_MAX_Y =1000 ;
const POS_MAX_X = 1600;

const SIZE_MAX = 50;
const SIZE_MIN = 10;

const NUMBER_SHELL = 20;


let shell_selected;
let top_pos = 200;
let left_pos = 100;

let tab_shell_lien = ["./images/shell1.svg","./images/shell2.svg","./images/shell3.svg","./images/shell4.svg","./images/shell5.svg","./images/shell6.svg","./images/shell7.svg","./images/shell8.svg"];
let tab_shell = [];

let div_shell = document.getElementById("shell-frame");
let shell_1 = document.getElementById('shell1');
let shell_2 = document.getElementById('shell2');
let shell_3 = document.getElementById('shell3');
let shell_4 = document.getElementById('shell4');
let shell_5 = document.getElementById('shell5');
let shell_6 = document.getElementById('shell6');
let shell_7 = document.getElementById('shell7');
let shell_8 = document.getElementById('shell8');

let shell_1_text = document.getElementById(('shell1-text'));
let shell_2_text = document.getElementById(('shell2-text'));
let shell_3_text = document.getElementById(('shell3-text'));
let shell_4_text = document.getElementById(('shell4-text'));
let shell_5_text = document.getElementById(('shell5-text'));
let shell_6_text = document.getElementById(('shell6-text'));
let shell_7_text = document.getElementById(('shell7-text'));
let shell_8_text = document.getElementById(('shell8-text'));


let shell_1_value = 0;
let shell_2_value = 0;
let shell_3_value = 0;
let shell_4_value = 0;
let shell_5_value = 0;
let shell_6_value = 0;
let shell_7_value = 0;
let shell_8_value = 0;
let shell_value =  [shell_1_value,shell_2_value,shell_3_value,shell_4_value,shell_5_value,shell_6_value,shell_7_value,shell_8_value];

let score =0;

let cave = document.querySelector(".cave");
let shell_in_cave = document.querySelector(".shell-in-cave");

let fish = document.querySelector(".fish");
let top_page = document.querySelector(".coprs");

let timer;
let music = document.querySelector('#music');




document.querySelector('.sound').addEventListener('click', play_audio);

// Fonction pour la music 

function play_audio() {
	if (music.paused) {
		document.querySelector("#music").play();
		document.querySelector("#sound-on").style.display= "none";
        document.querySelector("#sound-off").style.display= "block";

	} else { 
		music.pause();
		document.querySelector("#sound-on").style.display= "block";
        document.querySelector("#sound-off").style.display= "none";
	}
}




document.querySelector(".button-play").addEventListener("click",intro_game);

//on ajoute les eventListener qui modifie le curseur
for(let i =1; i<=8;i++)
{
    document.getElementById("shell"+i.toString()).addEventListener("click",()=>{cursor_shell(i)});
}


//Fonction qui enlève la fenêtre d'introduction
function intro_game(){

    document.querySelector(".intro-game").style.display = 'none';
    document.querySelector(".frame-game").style.display ='block';
    document.querySelector(".frame").style.display = 'block';
    document.querySelector(".shark-img").classList.add("shark-anim");
    fish.addEventListener("click",fish_home);
    place_shell_in_frame();
    timer = setTimeout(game,35000);

}



//fonction pour créer et placer au hasard dans l'image les shell
function create_shell(i){
    
    let shell = document.createElement("img");
    shell.setAttribute('id', i.toString() + "_id");
    let n = Math.floor(Math.random() * 8);
    shell.src = tab_shell_lien[n];
    

    let x = Math.floor(Math.random() * (POS_MAX_X +1));
    let y = Math.floor(Math.random() * (POS_MAX_Y +1));
    let size = Math.floor(Math.random() * (SIZE_MAX - SIZE_MIN + 1)) + SIZE_MIN;


    shell.style.width = size.toString() + "px";
    shell.style.top = y.toString() + "px";
    shell.style.left = x.toString() + "px";

    div_shell.appendChild(shell);

    shell.addEventListener("click",()=>{document.getElementById(i.toString() + "_id").style.display = 'none';add_shell(document.getElementById(i.toString() + "_id").src);});


    
}


//Fonction pour ajouter un shell à l'inventory
function add_shell(src){
   
        if(src === shell_1.src)
        {
            shell_1.style.width = '45px';
            shell_value[0] = shell_value[0] +1;
            shell_1_text.textContent = shell_value[0].toString();
            shell_1_text.style.fontSize = '16px';
                
            
            
        }
        if(src === shell_2.src)
        {
            shell_2.style.width = '45px';
            shell_value[1] = shell_value[1] +1;
            shell_2_text.textContent = shell_value[1].toString();
            shell_2_text.style.fontSize = '16px';
        }
        if(src === shell_3.src)
        {
            shell_3.style.width = '40px';
            shell_value[2] = shell_value[2] +1;
            shell_3_text.textContent = shell_value[2].toString();
            shell_3_text.style.fontSize = '16px';
        }
        if(src === shell_4.src)
        {
            shell_4.style.width = '45px';
            shell_value[3] = shell_value[3] +1;
            shell_4_text.textContent = shell_value[3].toString();
            shell_4_text.style.fontSize = '16px';
        }
        if(src === shell_5.src)
        {
            shell_5.style.width = '45px';
            shell_value[4] = shell_value[4] +1;
            shell_5_text.textContent = shell_value[4].toString();
            shell_5_text.style.fontSize = '16px';
        }
        if(src === shell_6.src)
        {
            shell_6.style.width = '45px';
            shell_value[5] = shell_value[5] +1;
            shell_6_text.textContent = shell_value[5].toString();
            shell_6_text.style.fontSize = '16px';
        }
        if(src === shell_7.src)
        {
            shell_7.style.width = '45px';
            shell_value[6] = shell_value[6] +1;
            shell_7_text.textContent = shell_value[6].toString();
            shell_7_text.style.fontSize = '16px';
        }
        if(src === shell_8.src)
        {
            shell_8.style.width = '40px';
            shell_value[7] = shell_value[7] +1;
            shell_8_text.textContent = shell_value[7].toString();
            shell_8_text.style.fontSize = '16px';
        }
}


//Fonction pour faire apparaitre et masquer la cave du poissound
function fish_home()
{


    if(document.querySelector(".fish-home").style.display === 'none' )
    {
        document.querySelector(".fish-home").style.display = 'block';
        document.querySelector(".frame").style.filter = 'blur(5px)';
        cave.addEventListener("click",()=>{place_shell_in_home(shell_value)});
        
    }
    else{
        document.querySelector(".fish-home").style.display = 'none';
        document.querySelector(".frame").style.filter = 'blur(0px)';
        

    }

}


//Fonction qui change la forme des curseurs
function cursor_shell(number){
    switch (number){
        case 1:
            document.getElementsByTagName("body")[0].style.cursor = "url('./images/shell1.png'),auto";
            shell_selected = 1;
            break;
        case 2:
            document.getElementsByTagName("body")[0].style.cursor = "url('./images/shell2.png'),auto";
            shell_selected = 2;
            break;
        case 3:
            document.getElementsByTagName("body")[0].style.cursor = "url('./images/shell3.png'),auto";
            shell_selected = 3;
            break;
        case 4:
            document.getElementsByTagName("body")[0].style.cursor = "url('./images/shell4.png'),auto";
            shell_selected = 4;
            break;
        case 5:
                document.getElementsByTagName("body")[0].style.cursor = "url('./images/shell5.png'),auto";
                shell_selected = 5;
                break; 
        case 6:
            document.getElementsByTagName("body")[0].style.cursor = "url('./images/shell6.png'),auto";
            shell_selected = 6;
            break;  
        case 7:
            document.getElementsByTagName("body")[0].style.cursor = "url('./images/shell7.png'),auto";
            shell_selected = 7;
            break;
        case 8:
            document.getElementsByTagName("body")[0].style.cursor = "url('./images/shell8.png'),auto";
            shell_selected = 8;
            break;
    }


    
}

//Fonction qui place le shell qui est selectionné au hasard sur la cave et qui enlève le shell de l'inventory et si il en reste 0 l'image disparait
function place_shell_in_home(shell_value){
    if(shell_value[shell_selected-1]>0)
    {
        let shell = document.createElement("img");
    
    shell.src = tab_shell_lien[shell_selected-1];
    shell.setAttribute('id', "shell-taille");

    
    top_pos= Math.floor(Math.random() * ((350-250) +1)) + 250;
    left_pos = Math.floor(Math.random() * ((300-200) +1))+200;

    shell.style.top = top_pos.toString() +"px";
    shell.style.left = left_pos.toString() +"px";
    
    shell_in_cave.appendChild(shell);
    score +=10;
    document.getElementById("point").textContent = score;
    document.getElementsByTagName("body")[0].style.cursor = "pointer";
    switch (shell_selected){
        
        case 1:
            
            shell_value[0] --;
            if (shell_value[0] === 0)
            {
                shell_1.style.width = '0px';
                shell_1_text.style.fontSize = '0px';
            }
            else if(shell_value[0]>0)
            {
                shell_1.style.width = '40px';
                shell_1_text.textContent = shell_value[0].toString();
                shell_1_text.style.fontSize = '16px';
            }
            else{
                break
            }
            break;
        
        case 2:
            shell_value[1] --;
            if (shell_value[1] === 0)
            {
                shell_2.style.width = '0px';
                shell_2_text.style.fontSize = '0px';
            }
            else if (shell_value[1]>0){
                shell_2.style.width = '40px';
                shell_2_text.textContent = shell_value[1].toString();
                shell_2_text.style.fontSize = '16px';
            }
            break;
        
        case 3:
            shell_value[2] --;
            if (shell_value[2] === 0)
            {
                shell_3.style.width = '0px';
                shell_3_text.style.fontSize = '0px';
            }
            else{
                shell_3.style.width = '40px';
                shell_3_text.textContent = shell_value[2].toString();
                shell_3_text.style.fontSize = '16px';
            }
            break;
        case 4:
            shell_value[3] --;
            if (shell_value[3] === 0)
            {
                shell_4.style.width = '0px';
                shell_4_text.style.fontSize = '0px';
            }
            else{
                shell_4.style.width = '40px';
                shell_4_text.textContent = shell_value[3].toString();
                shell_4_text.style.fontSize = '16px';
            }
            break;
        case 5:
            shell_value[4] --;
            if (shell_value[4] === 0)
            {
                shell_5.style.width = '0px';
                shell_5_text.style.fontSize = '0px';
            }
            else{
                shell_5.style.width = '40px';
                shell_5_text.textContent = shell_value[4].toString();
                shell_5_text.style.fontSize = '16px';
            }
            break;
        case 6:
            shell_value[5] --;
            if (shell_value[5] === 0)
            {
                shell_6.style.width = '0px';
                shell_6_text.style.fontSize = '0px';
            }
            else{
                shell_6.style.width = '40px';
                shell_6_text.textContent = shell_value[5].toString();
                shell_6_text.style.fontSize = '16px';
            }
            break;
        case 7:
            shell_value[6] --;
            if (shell_value[6] === 0)
            {
                shell_7.style.width = '0px';
                shell_7_text.style.fontSize = '0px';
            }
            else{
                shell_7.style.width = '40px';
                shell_7_text.textContent = shell_value[6].toString();
                shell_7_text.style.fontSize = '16px';
            }
            break;
        case 8:
            shell_value[7] --;
            if (shell_value[7] === 0)
            {
                shell_8.style.width = '0px';
                shell_8_text.style.fontSize = '0px';
            }
            else{
                shell_8.style.width = '40px';
                shell_8_text.textContent = shell_value[7].toString();
                shell_8_text.style.fontSize = '16px';
            }
            break;
    }
    
    }
    else {
        return;
    }


}




//Fonction qui vérifie si le joueur à gagné ou perdu et qui affiche l'écran qui correspond
function game()
{
    
   
    if( score <100)
    {
        document.querySelector(".frame-game").style.display ='none';
        document.querySelector(".frame").style.display = 'none';
        document.querySelector(".intro-game").style.display = 'flex';
        document.querySelector(".text-intro").textContent = "Tu as malheureusement perdu mais tu peux retenter ta chance !";
        document.querySelector(".shark-img").classList.remove("shark-anim");
    }
    else
    {
        document.querySelector(".frame-game").style.display ='none';
        document.querySelector(".frame").style.display = 'none';
        document.querySelector(".intro-game").style.display = 'flex';
        document.querySelector(".text-intro").textContent = "Bravo tu as gagné, grâce à toi Cali la méduse est en sécurité !"+" Ton score est de " + score.toString() + ". Tu peux rejouer pour essayer d'améliorer ton score.";
        document.querySelector(".shark-img").classList.remove("shark-anim");
    }

    clear();

}

//Fonction qui créer le nombre de shell souhaité
function place_shell_in_frame(){
    for(let i= 0; i< NUMBER_SHELL; i++)
    {
        create_shell(i);
        
    }
}

//Fonction pour remettre les paramètre à zéro pour pouvoir rejouer
function clear(){
    if(document.querySelector(".fish-home").style.display === 'block' )
    {
        document.querySelector(".fish-home").style.display = 'none';
        document.querySelector(".frame").style.filter = 'blur(0px)';
    }

    score = 0;

    shell_1_value = 0;
    shell_2_value = 0;
    shell_3_value = 0;
    shell_4_value = 0;
    shell_5_value = 0;
    shell_6_value = 0;
    shell_7_value = 0;
    shell_8_value = 0;
    shell_value =  [shell_1_value,shell_2_value,shell_3_value,shell_4_value,shell_5_value,shell_6_value,shell_7_value,shell_8_value];

    document.getElementsByTagName("body")[0].style.cursor = "pointer";

    for(let i =0;i<NUMBER_SHELL;i++)
    {
        document.getElementById(i.toString()+"_id").remove();
    }
    document.querySelectorAll(".shell-frame img")
  .forEach(img => img.remove());

    shell_1.style.width = '0px';
    shell_1_text.style.fontSize = '0px';
    
    shell_2.style.width = '0px';
    shell_2_text.style.fontSize = '0px';

    shell_3.style.width = '0px';
    shell_3_text.style.fontSize = '0px';

    shell_4.style.width = '0px';
    shell_4_text.style.fontSize = '0px';

    shell_5.style.width = '0px';
    shell_5_text.style.fontSize = '0px';

    shell_6.style.width = '0px';
    shell_6_text.style.fontSize = '0px';

    shell_7.style.width = '0px';
    shell_7_text.style.fontSize = '0px';

    shell_8.style.width = '0px';
    shell_8_text.style.fontSize = '0px';


    document.querySelectorAll(".shell-in-cave img")
  .forEach(img => img.remove());

  document.getElementById("point").textContent = score;
}
