const submitbtn = document.getElementById("submitbtn");
const cityname = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
// const temp = document.getElementById("temp")
const temp_status = document.getElementById("temp_status")
const datahide=document.querySelector('.middle_layer')
const temprealvalue=document.getElementById('temp_real_value')


const getInfo = async (event) => {
    event.preventDefault();
    let cityval = cityname.value;

    if (cityval === "") {
        city_name.innerText = `please enter the correct city name`;
        datahide.classList.add("data_hide")
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=04ef077b86d8f787f7ead8391fbbbdc7`
            const responce = await fetch(url);
            const data = await responce.json();
            // console.log(data);
            const arrData = [data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temprealvalue.innerText = arrData[0].main.temp;

            // temp_status.innerText=arrdata[0].weather[0].main; 

            const tempst = arrData[0].weather[0].main;;

            //condition to check sunny or cloudy
            if (tempst == "clear") {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempst == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempst == "Rain") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            }
            datahide.classList.remove("data_hide")
        }
        catch {
            city_name.innerText = `please enter the prper city name`;
            datahide.classList.add("data_hide")

            // city_name.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`;
        }
    } 
}
submitbtn.addEventListener("click", getInfo); 