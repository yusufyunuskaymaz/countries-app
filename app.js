const fetchCountries = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  updateDom(data);
};

const updateDom = (data) => {
  
    data.forEach(country => {
        document.querySelector(".row").innerHTML += `
        <div class="card shadow-lg col-xxl-4 m-3" style="width: 23rem;">
        <img width="100%" src="${country.flags.svg}" class="card-img-top flag" alt="...">
        <div class="card-body">
        <h5 class="card-title text-center">${country.name.common}</h5>
        <p class="card-text">${country.region}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item"><b>Capital: </b>  ${country.capital}</li>
        <li class="list-group-item"><b>Population: </b>  ${country.population}</li>
        <li class="list-group-item"><b>United Nations Member: </b>  ${country.unMember ? "Yes" : "No"}</li>
         </ul>
        
        </div>
        `;
    });

  
};

window.addEventListener("load", fetchCountries);



