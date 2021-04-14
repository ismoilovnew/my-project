
const typedName = '"Leanne Graham"' //don't forget quote marks when compare with this url

const fetch = require("node-fetch")

const Url = 'https://jsonplaceholder.typicode.com/users'

fetch(Url)
.then(response => response.text())
.then(function(text) {
    let arr = JSON.parse(text)
    // console.log(arr)
    // console.log (JSON.stringify(text) )
    for (i=0; i<arr.length; i++){
        const typedName2= JSON.stringify( arr[i].name)
        // console.log(typedName2)
        console.log(JSON.stringify( arr[i].name))
    if (typedName2==typedName) {
      console.log("true")
    } else {
      console.log("false")
    }}
  })


