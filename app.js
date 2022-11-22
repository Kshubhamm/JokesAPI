//https://swapi.dev/api/people/1/

// axios.get("https://swapi.dev/api/people/1/")
// .then(res =>{
//     console.log("Response is",res);
// })
// .catch(e => {
//     console.log("Error!!",e);
// })

// let myApi = async () => {
//     try{
//     let res = await axios.get("https://swapi.dev/api/people/1/");
//     console.log(res.data.name);
//     }
//     catch(e)
//     {
//         console.log("Error",e);
//     }
// }

// myApi();


// .then(res =>{
//     console.log("response received",res);

// })
// .catch(e=>{
//     console.log("Error",e);
// })

const jokes = document.querySelector('#jokes');
const getJoke = async()=>{
    try{
        const config = {headers:{Accept:'application/json'}};
    const res = await axios.get("https://icanhazdadjoke.com/",config);
    //console.log("Succes",res);
    return res.data.joke;
   
    }
    catch{
        console.log("Error occured.");
    }
   
}
const addJoke = async() =>{
    const res = await getJoke();
    const newLi = document.createElement('LI');
    newLi.append(res);
    jokes.append(newLi);

}
const button = document.querySelector('#butt');
button.addEventListener('click',addJoke);






//Dom manipulation sikhna 