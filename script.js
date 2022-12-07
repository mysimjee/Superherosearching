const accesstoken = "6349391745071622"	
let superheroid
let superheroname
const heroinfo = document.getElementById('heroinfo')
const getSuperHerobyid = (id) => {
    console.log("Hello")
    fetch("https://superheroapi.com/api.php/6349391745071622/" + id)
    .then(Response => Response.json())
    .then(json => {
        console.log(json.image.url)
        addimage.innerHTML = '<img height="200" width="200" src="' + json.image.url + '" </img>'

    
    
    })
}


const addimage = document.querySelector('#heroImage')

const randomhero = () => {
    superheroid = Math.floor(Math.random() * 730)
    console.log(superheroid)
    console.log(getSuperHerobyid(superheroid))
}

const randombutton = document.getElementById('newHeroButton')
randombutton.onclick = () => randomhero()



const getSuperHerobyname = (name) => {
    fetch("https://superheroapi.com/api.php/6349391745071622/search/" + name)
    .then(Response => Response.json())
    .then(json => {
        console.log(json.results[0].image.url)
        addimage.innerHTML = "<img src='" + json.results[0].image.url + "' height='200' width='200'> </img> "
        let hheroinfo = Object.keys(json.results[0].powerstats).map(stat => stat = "<h3>" + stat.toLocaleUpperCase() + ":" + "</h3>")
        console.log(json.results[0].powerstats)
        console.log(hheroinfo)
        heroinfo.innerHTML += hheroinfo[0] + json.results[0].powerstats.intelligence
        heroinfo.innerHTML += hheroinfo[1] + json.results[0].powerstats.strength
        heroinfo.innerHTML += hheroinfo[2] + json.results[0].powerstats.speed
        heroinfo.innerHTML += hheroinfo[3] + json.results[0].powerstats.durability
        heroinfo.innerHTML += hheroinfo[4] + json.results[0].powerstats.power
        heroinfo.innerHTML += hheroinfo[5] + json.results[0].powerstats.combat
    
    })
}

const inputfield = document.getElementById('searchInput')
function getheroname() {
    superheroname = inputfield.value
    return superheroname
}

const searchbutton = document.getElementById('searchButton')

searchbutton.onclick = () => {
    getSuperHerobyname(getheroname())
    
}