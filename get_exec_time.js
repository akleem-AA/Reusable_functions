const fetch = require('node-fetch')

async function get_exec_time(func){
    start_time = new Date().getTime()/1000

    func().then(
        console.log((new Date().getTime()/1000-start_time).toFixed(2))
    )

}

async function dummy(){
    fetch('http://127.0.0.1:8000/api/')
}

get_exec_time(dummy)
