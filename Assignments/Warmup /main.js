array = ['1', '2', '3', '4', '5']


function warmUp(array) {
  const results = {};
 
  if (array.length % 2 !== 0) {
    for (let i = 0; i < shufflearray.length; i ++) {
      shufflearray = Math.floor(Math.random()* array.length)
   
      results[lastGroup].push(array[i]);
     
      results[newGroup] = [shufflearray[i], array[i + 1]];
    }
  }
  return warmUp;
}

const array = [1, "a", "b", "c", "d", 2, "e", "f", 3]
function convertToObject(array) {
    const onlyStr = array.filter(item => isNaN(item) );
    onlyStr.sort(() => Math.random() - 0.5)
    const json = {}
    for(let i = 0 ; i < onlyStr.length; i++){
        if (i % 2 === 0){
            json[onlyStr[i]] = onlyStr[ i + 1]
        }
    }
    console.log(json)
}
convertToObject(array)