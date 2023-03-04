console.log("This is a website")
// const url = "https://forbes400.onrender.com/"
const loadAllData = () =>{
    const url = "https://forbes400.onrender.com/api/forbes400/"
    fetch(url)
    .then(res => res.json())
    .then(data => getData(data))
    .catch(error => console.log(error))
}
const getData = data =>{
    console.log(data)
    data.forEach(key => {
        const rank = key.rank;
        const personName = key.personName;
        const citizenOf = key.countryOfCitizenship;
        console.log(key)
    })
}

loadAllData()