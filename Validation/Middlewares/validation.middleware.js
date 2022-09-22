
const validateMiddleware = (req, res, next)=>{

//  console.log(req.url, req.method)

 let dataType = true, dataCorrrect=true;
 let dataKeys = ["ID", "Name","Rating","Description","Genre","Cast"]
 let dataTypes = ["number", "string", "number", "string", "string","string"];

  let movieData = req.body;
//   console.log(movieData)
  dataKeys.forEach(el => { if(movieData[el] === undefined || movieData[el].length == 0 ) dataCorrrect = false });
  dataKeys.forEach((el, ind) => { if(typeof movieData[el] !== dataTypes[ind]) dataType=false});

  if(!dataType) return res.status(400).send("Data type should be correct !");
  else if(!dataCorrrect) return res.status(400).send("Data is not valid !");
  else{
    console.log("Input Data validated")
    next();
  } 
 
}

module.exports = validateMiddleware;