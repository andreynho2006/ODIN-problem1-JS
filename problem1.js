var finish = 1000;

var rezultat = 0;

for(var i = 0; i < finish; i++){
  if( i % 3 ===0 || i % 5 ===0){
    rezultat += i;
  }

}
 console.log(rezultat);
