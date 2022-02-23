// var userdata = {};
// fetch("https://api.github.com/users/Schneider-Alex")
//     // .then(function(response){
//     //     return response.json() 
//     // } )
//     .then(response=>response.json())
//     .then(coderData =>{
//         console.log(coderData)
//         userdata=coderData

//     })
//     .catch(err => console.log(err))

async function getCoderData2(){
    fetch("https://api.github.com/users/Schneider-Alex")
        .then(response => response.json() )
        .then(coderData => {
        console.log(coderData)
        var coderData2=coderData
        return coderData2
        })
        .catch(err => console.log(err))
    var div = document.getElementById('div')
    div.innerHTML=`<p>${coderData.bio}<p>`
}


// console.log('hello')
async function getCoderData() {
    // The await keyword lets js know that it needs to wait until it gets a response back to continue.
    var response = await fetch("https://api.github.com/users/Schneider-Alex");
    // We then need to convert the data into JSON format.
    var coderData = await response.json();
    console.log(coderData)
    var div = document.getElementById('div')
    div.innerHTML=`<p>${coderData.bio}<p>`
    return coderData;
}

