

function getPath(pathName){
   console.log(pathName);
   return pathName.split("/");
}

function getPathParts(stringAddress){
   
   const path = getPath(stringAddress);
   const webObject = {
      "protocol": path[0],
      "host": path[1],
      "port": path[2],
      "path": path[3],
      "file": path[4],
   }
   

   console.log("array ", path)
   console.log("object ", webObject);
}

function getCapitalCount(){

}

function correctCalcChecker(){

}

function doMath(){

}
