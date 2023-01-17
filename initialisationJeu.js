function init(btn){
    btn.style.display="none";
    i=1;
    nbr=0;
    choix=new Array();
    creerGrille();
 }
 function creerGrille(){
    t=setTimeout("creerGrille()",50);
    bouton=document.createElement("div");
    bouton.className="bouton";
    bouton.innerHTML=i;
    bouton.setAttribute("id",i);
    bouton.onclick=function(){
       ajouter(this);
    }
    document.getElementById("grille").appendChild(bouton);
    if(i%7==0){
       br=document.createElement("br");
       document.getElementById("grille").appendChild(br);
    }
    i+=1;
    if(i>49)
       clearTimeout(t);
 }
 function ajouter(ob){
   if(nbr<6){
      ob.style.visibility="hidden";
      nbouton=document.createElement("div");
      nbouton.className="nbouton";
      nbouton.setAttribute("id","ch"+nbr);
      nbouton.innerHTML=ob.textContent;
      document.getElementById("choix").appendChild(nbouton);
      choix[nbr]=ob.firstChild.nodeValue;
      nbr+=1;
      if(nbr==6)
         ztirage();
   }
}
j=0;
function ztirage(){
   setTimeout("ztirage()",100);
   if(j<6){
      zbouton=document.createElement("div");
      zbouton.className="zbouton";
      zbouton.innerHTML=0;
      zbouton.setAttribute("id","res"+j);
      document.getElementById("res").appendChild(zbouton);
      j+=1;
      if(j==6){
         document.getElementById("bon").style.visibility="visible";
         tirage();
      }
   }
}
index=0;
rep=0;
tab=new Array();
itr=50;
function tirage(){
   tx=setTimeout("tirage()",40);
   rep+=1;
   if(rep<itr){
      for(k=index+1;k<6;k++)
         document.getElementById("res"+k).innerHTML=Math.ceil(Math.random()*49);

      v=Math.ceil(Math.random()*49);
      document.getElementById("res"+index).innerHTML=v;
      if(rep==itr-1){
         if(tab.indexOf(v)==-1){
            tab[index]=v;
            for(k=0;k<6;k++){
               if(document.getElementById("ch"+k).firstChild.data==tab[index]){
                  document.getElementById("ch"+k).style.backgroundColor="#48C";
                  document.getElementById("res"+index).style.backgroundColor="#48C";
                  document.getElementById("ch"+k).style.color="#FFF";
                  document.getElementById("res"+index).style.color="#FFF";
                  document.getElementById("bon").innerHTML=parseInt(document.getElementById("bon").textContent)+1;
               }
            }
         }
         else
            rep=itr-2;
      }
   }
   else{
      rep=0;
      index+=1;
      if(index==6){
         clearTimeout(tx);
         return false;
      }
   }
}

