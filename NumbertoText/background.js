let number = document.querySelector(".inputnumber");
let oknumber = document.getElementsByClassName("inputnumber");
// let mconverter = document.querySelector(".Converter");
let showtext = document.querySelector(".showtext");
//console.log(mconverter);
// mconverter.addEventListener("click", clickfun);
oknumber[0].focus();
function clickfun (){ 
    let getnumber = oknumber[0].value;
   // console.log("get: "+getnumber);
    getnumber = parseInt(getnumber);
    //console.log("get: "+getnumber);
    if(getnumber>0){
        showtext.innerText ="(In Word : "+ lactocrore(getnumber) + " Taka Only.)";
    }else{
        showtext.innerText ="No data";
    }
    
 }
 function CopyText() {
    var text = showtext.innerText;
    navigator.clipboard.writeText(text).then(function() {
      //console.log('Async: Copying to clipboard was successful!');
      alert("Coppied");
    }, function(err) {
        alert("Not Coppied", err);
    });
  }

  showtext.addEventListener("click", CopyText);

 oknumber[0].addEventListener("keyup", clickfun);

 function onetonineteen(mnumber){
    
    let mtext = "";
    if(mnumber==1){
        mtext += "One"
       // console.log(mnumber);
    }else if(mnumber==2){
        mtext += "Two"
    }
    else if(mnumber==3){
        mtext += "Three"
    }
    else if(mnumber==4){
        mtext += "Four"
    }else if(mnumber==5){
        mtext += "Five"
    }else if(mnumber==6){
        mtext += "Six"
    }
    else if(mnumber==7){
        mtext += "Seven"
    }
    else if(mnumber==8){
        mtext += "Eight"
    }
    else if(mnumber==9){
        mtext += "Nine"
    }
    else if(mnumber==10){
        mtext += "Ten"
    }
    else if(mnumber==11){
        mtext += "Eleven"
    }
    else if(mnumber==12){
        mtext += "Twelve"
    }
    else if(mnumber==13){
        mtext += "Thirteen"
    }else if(mnumber==14){
        mtext += "Fourteen"
    }
    else if(mnumber==15){
        mtext += "Fifteen"
    }
    else if(mnumber==16){
        mtext += "Sixteen"
    }
    else if(mnumber==17){
        mtext += "Seventeen"
    }
    else if(mnumber==18){
        mtext += "Eighteen"
    }else if(mnumber==19){
        mtext += "Nineteen"
    }
    return mtext;
 }
 function Twentytohun(mnumber){
    let mtext = "";
     if(mnumber>=20 && mnumber<30){
         
         mnumber = mnumber%10;
         mtext = "Twenty "+ onetonineteen(mnumber);
     }
     else if(mnumber>=30 && mnumber<40){
         
        mnumber = mnumber%10;
        mtext = "Thirty "+ onetonineteen(mnumber);
    }
    else if(mnumber>=40 && mnumber<50){
         
        mnumber = mnumber%10;
        mtext = "Forty "+ onetonineteen(mnumber);
    }
    else if(mnumber>=50 && mnumber<60){
         
        mnumber = mnumber%10;
        mtext = "Fifty "+ onetonineteen(mnumber);
    }else if(mnumber>=60 && mnumber<70){
         
        mnumber = mnumber%10;
        mtext = "Sixty "+ onetonineteen(mnumber);
    }
    else if(mnumber>=70 && mnumber<80){
         
        mnumber = mnumber%10;
        mtext = "Seventy "+ onetonineteen(mnumber);
    }else if(mnumber>=80 && mnumber<90){
         
        mnumber = mnumber%10;
        mtext = "Eighty "+ onetonineteen(mnumber);
    }
    else if(mnumber>=90 && mnumber<100){
         
        mnumber = mnumber%10;
        mtext = "Ninety "+ onetonineteen(mnumber);
    }else{
        mtext = onetonineteen(mnumber);
    }
     return mtext;
 }
 function huntothousand(mnumber){
    let mtext = "";
    let tempno = 0;
   
        if(mnumber>=100 && mnumber<1000){
         
            tempno =parseInt(mnumber%100);
            number = parseInt(mnumber/100);
            //console.log(number)
            mtext += Twentytohun(number) + " Hundred ";
            mtext += Twentytohun(tempno);
        }
      else{
           mtext = Twentytohun(mnumber);
       }
     
     return mtext;
 }
 function thousandtolac(mnumber){
    let mtext = "";
    let tempno = 0;
   // console.log(mnumber)
   
    if(mnumber>=1000 && mnumber<100000){
            
        tempno =parseInt(mnumber%1000);
         number = parseInt(mnumber/1000);
        // console.log(number)
         mtext += huntothousand(number) + " Thousand ";
         mtext += huntothousand(tempno);
    }
      else{
           mtext = huntothousand(mnumber);
       }
     
     return mtext;
 }
 function lactocrore(mnumber){
    let mtext = "";
    let tempno = 0;
    console.log(mnumber)
   
    if(mnumber>=100000 && mnumber<10000000){
            
        tempno =parseInt(mnumber%100000);
         number = parseInt(mnumber/100000);
        // console.log(number)
         mtext += thousandtolac(number) + " Lac ";
         mtext += thousandtolac(tempno);
    }
      else{
           mtext = thousandtolac(mnumber);
       }
     
     return mtext;
 }