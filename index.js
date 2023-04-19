// Dom 
const tempareture=document.querySelector(".weather1")
const cityField=document.querySelector(".weather2 h2")
const timefield=document.querySelector(".weather2 span")
const emojifield=document.querySelector(".weather3 img")
const weatherCondition=document.querySelector(".weather3 span")
const form=document.querySelector("form")
const searchbar=document.querySelector(".searchbar")



form.addEventListener("submit",locations)
let target="kolkata"

const fetchApi= async(target)=>{
try {
    const url =`https://api.weatherapi.com/v1/current.json?key=9a2938ece3874533a39201959221512&q=${target}`
    
    const response= await fetch(url);
 const data=await response.json()
 
 const {current:{temp_c,condition:{icon,text}},location:{name,localtime
 }}=data
 domUpdate(temp_c,name,localtime,icon,text);
} catch (error) {
    alert("locatons are not found")
}
}


function domUpdate(temp,city,date,emoji,condition){
    tempareture.innerText=temp;
    cityField.innerText=city;
    const exacttime=date.split(" ")[1]
    const exactDate=date.split(" ")[0]
    const exactDay=getExactDay(new Date(exactDate).getDay())
    timefield.innerText=`${exacttime} - ${exactDay} - ${exactDate}`
    emojifield.src=emoji;
    weatherCondition.innerText=condition
}

function locations(e){
e.preventDefault()
target=searchbar.value
fetchApi(target)

}

function getExactDay(num){
    switch (num) {
        case 0:
           return "sunday";
        case 1:
           return "Monday";
        case 2:
           return "Tuesday";
        case 3:
           return "Wenesday";
        case 4:
           return "Thusday";
        case 5:
           return "Friday";
        case 6:
           return "Saturday";
    
        default:
            return "None Of date";
    }
}


fetchApi(target)