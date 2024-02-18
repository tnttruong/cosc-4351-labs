function drawTriangle(triangleSize) {

   // Your solution goes here
   for(let x=triangleSize-1; x>=0; x--){
      let output = "";
      for(let y=0; y<triangleSize-x; y++){
         output = output+"*";
      }
      console.log(output);
   }
}