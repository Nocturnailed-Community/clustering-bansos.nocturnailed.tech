//get url api
let url_api = "https://society-status-predict.herokuapp.com/api/predict";
//get url api

//get element by id
const jumlah_anak = document.getElementById("jumlah_anak")
const penghasilan = document.getElementById("penghasilan")
const button = document.getElementById("button-predict")
const button_clear = document.getElementById("button-clear")
//get element by id

// Function to fetch data all method GET, POST, PUT, and DELETE
function myFetch(url, type, data) {
    //GET
    if (type === "GET") {
    return fetch(url, {
    method: type,
    headers: {
        'Content-type': 'application/json'
    }
    })
    .then(res => {
        if (res.ok) { console.log("HTTP request successful") }
        else { console.log("HTTP request unsuccessful") }
        return res
    })
    .then(res => res.json())
    .then(data => data)
    .catch(error => error)
    }
  
    //DELETE
    if (type === "DELETE") {
    return fetch(url, {
    method: type,
    headers: {
        'Content-type': 'application/json'
    }
    })
    .then(res => {
        if (res.ok) { console.log("HTTP request successful") }
        else { console.log("HTTP request unsuccessful") }
        return res
    })
    .catch(error => error)
    }
  
    //POST or PUT
    if (type === "POST" | type === "PUT") {
    return fetch(url, {
    method: type,
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'same-origin', 
    redirect: 'follow', 
    referrerPolicy: 'no-referrer',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(res => {
        if (res.ok) { console.log("HTTP request successful") }
        else { console.log("HTTP request unsuccessful") }
        return res
    })
    .then(res => res.json())
    .then(data => data)
    .catch(error => error)
    }
}
// Function to fetch data all method GET, POST, PUT, and DELETE

// function to clear data
function clearTodo(){
    // refresh value
    document.getElementById("jumlah_anak").value = ""
    document.getElementById("penghasilan").value = ""
}
// function to clear data

// Button to clear data
button_clear.addEventListener("click", function() {
    clearTodo()
})
// Button to clear data

// Button to insert 
button.addEventListener("click", function() {
    // validasi input
    if (jumlah_anak.value == "" || penghasilan.value == "") {
        // alert failed
        alert("Masukkan Jumlah Anak dan Penghasilan")
    }else{
            myFetch(url_api, "POST",[{
                jumlah_anak: jumlah_anak.value ,
                penghasilan: penghasilan.value
               }]).then(res => document.getElementById("predict-list").innerHTML = `<ul id="predict-list"><button class="btn btn-primary">${res}</button></ul>`)           
    }       
})
// Button to insert 