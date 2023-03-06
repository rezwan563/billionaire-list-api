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
        <td><label for="my-modal-4" class="btn bg-white hover:bg-black hover:text-white text-black p-2 rounded-md" onclick=loadData(${rank})>More</label></td>
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

const personDetails = (data, rank) => {
    // console.log(data)
    data.forEach(key => {
        // console.log(key.rank)
        const _isRank = key.rank;
        if (_isRank === rank) {
            console.log(key);
            const staticImage = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdesibooks.co%2Fheadshot-dummy%2F&psig=AOvVaw25aCMfJpE-IJQyXgY3kF--&ust=1678183557958000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOiPsYiHx_0CFQAAAAAdAAAAABAE"
            key.financialAssets.forEach(companies => {
                // console.log(companies.companyName)
                // console.log(companies.numberOfShares)
                // console.log(companies.sharePrice)
                const companyOwn = companies.companyName;
                const shareOwn = companies.numberOfShares;
                const sharePrice = companies.sharePrice;
                document.getElementById("t-head").innerHTML = `
                    <th>Company</th>
                    <th>Number of Share</th>
                    <th>Share Price</th>
                `
                document.getElementById("modal-t-body").innerHTML += `
                <tr>
                    <td>${companyOwn}</td>
                    <td>${shareOwn}</td>
                    <td>${sharePrice}</td>
                </tr>
                `

                // console.log(companies.companyName)
            })
            const personImage = key.person.squareImage;
            const personBio = key.bios.join(" ")
            document.getElementById("image-box").innerHTML = `
            <img src="${personImage ? personImage : staticImage}" alt="">
            `
            document.getElementById("text-bio").innerText = "Bio"
            document.getElementById("wealth-section").innerHTML = `
            <h1><span class="font-2xl font-semibold">Estimated wealth</span>(in million $)</h1>
            <p id="person-wealth" class="text-4xl">${key.finalWorth}</p>
            `
            document.getElementById("person-bio").innerText = personBio;
            // document.getElementById("person-wealth").innerText = key.finalWorth;
            console.log(`${_isRank} is clicked`)
        }
    })

}


loadAllData()