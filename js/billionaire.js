console.log("This is a website")
// const url = "https://forbes400.onrender.com/"
const loadAllData = () => {
    const url = "https://forbes400.onrender.com/api/forbes400/"
    fetch(url)
        .then(res => res.json())
        .then(data => getData(data))
        .catch(error => console.log(error))
}
const getData = (data) => {
    // console.log(data)
    data.forEach(key => {
        const rank = key.rank;
        const personName = key.personName;
        const citizenOf = key.countryOfCitizenship;
        const industry = key.industries
        displayData(rank, personName, citizenOf, industry);
        return [rank, personName, citizenOf, industry]
    })
}

function displayData(rank, personName, citizenOf, industry) {

    document.getElementById("t-body").innerHTML += `
    <tr class="odd:bg-white even:bg:slate-100">
        <td>${rank}</td>
        <td>${personName ? personName : "No data found"}</td>
        <td>${citizenOf ? citizenOf : "No data found"}</td>
        <td>${industry}</td>
        <td><label for="my-modal-4" class="btn bg-blue-400 hover:bg-blue-700 text-white p-2 rounded-md" onclick=loadData(${rank})>More</label></td>
    </tr>
    `
}
// <button class="bg-blue-400 hover:bg-blue-700 text-white p-2 rounded-md" onclick=loadData(${rank})>More</button>
//  <label for="my-modal-4" class="btn">open modal</label>


document.getElementById("btn-youngest").addEventListener("click", function () {
    document.getElementById("t-body").innerHTML = ""
    url = "https://forbes400.onrender.com/api/forbes400/youngest";
    fetch(url)
        .then(res => res.json())
        .then(data => displayYougest(data))


})
function displayYougest(data) {
    const [rank, personName, citizen, industry] = getData(data)
    displayData(rank, personName, citizen, industry);
}

document.getElementById("btn-female").addEventListener("click", function () {
    document.getElementById("t-body").innerHTML = ""
    url = "https://forbes400.onrender.com/api/forbes400/female";
    fetch(url)
        .then(res => res.json())
        .then(data => displayFemale(data))


})
function displayFemale(data) {
    const [rank, personName, citizen, industry] = getData(data)
    displayData(rank, personName, citizen, industry);
}

document.getElementById("btn-male").addEventListener("click", function () {
    document.getElementById("t-body").innerHTML = ""
    url = "https://forbes400.onrender.com/api/forbes400/male";
    fetch(url)
        .then(res => res.json())
        .then(data => displayMale(data))


})
function displayMale(data) {
    const [rank, personName, citizen, industry] = getData(data)
    displayData(rank, personName, citizen, industry);
}


const loadData = async (rank) => {
    console.log("This async is working")
    const url = "https://forbes400.onrender.com/api/forbes400/"
    const res = await fetch(url)
    const data = await res.json()
    personDetails(data, rank);

}

const personDetails = (data, rank) =>{
    // console.log(data)
    data.forEach(key =>{
        // console.log(key.rank)
        const _isRank = key.rank;
        if(_isRank === rank){
            console.log(key.person);
            console.log(`${_isRank} is clicked`)
        }
    })

}


loadAllData()