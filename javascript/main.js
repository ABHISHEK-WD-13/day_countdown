var days =document.getElementById('days');
var hours =document.getElementById('hours');
var mins =document.getElementById('mins');
var secs =document.getElementById('secs');


const finalDate=new Date('15 mar 2020');


function countdown(){
    const currentdate=new Date();
    const total_secs=Math.floor((currentdate-finalDate)/1000);
    
    const day=Math.floor(total_secs/(3600*24));
const hrs=Math.floor((total_secs/3600)%24);
const min=Math.floor((total_secs/60)%60);
var sec=Math.floor(total_secs%60);
if(sec==0){
    sec=60;
}
days.innerHTML=day;
hours.innerHTML=hrs;
mins.innerHTML=min;
secs.innerHTML=sec;


}
setInterval(countdown ,1000);



