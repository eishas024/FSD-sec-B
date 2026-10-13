// function sum(a,b){
//   return a+b;
// }
// function sumwithMsg(clbk,msg){
//   const result=clbk(20,30);
//   const fresult="HI"+msg+"Your score is="+result;
//   console.log(fresult);
// }
// sumwithMsg(sum,"MR. Deepak");
// function study(callback){
//   console.log("I am studying");
//   callback();
// }
// function WatchMovie(){
//   console.log("Now watching movie");}
// study(WatchMovie);
  

function greet(name,callback){
  console.log("Hello"+name);
  callback();
}
function sayBye(){
  console.log("Goodbye!");
}
greet("Eisha",sayBye);
