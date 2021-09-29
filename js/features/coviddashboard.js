const base_api = 'https://corona.lmao.ninja/v2/';
const ENDPOINT = {
  WORLDLASTEST: 'all?yesterday',
  COUNTRIES: 'countries?yesterday&sort'
};
var countryData;

//get world lastest data
fetch(`${base_api}${ENDPOINT.WORLDLASTEST}`)
  .then(res => res.json())
  .then(getWorldLastest)
  .catch((err)=> console.log("Error!!!!", err))  
;

//get countries data
fetch(`${base_api}${ENDPOINT.COUNTRIES}`)
  .then(res => res.json())
  .then(getCountries)
  .catch((err)=> console.log("Error!!!!", err))  
;

function render(selector, data){
    var target = document.querySelector(selector);
    target.innerHTML = (data || '');
}

function getWorldLastest(global){
    //render global cases data
    render('#cases', global.cases.toLocaleString());
    render('#deaths', global.deaths.toLocaleString());
    render('#recovered', global.recovered.toLocaleString());
    render('#new-cases', global.todayCases.toLocaleString());
    render('#new-deaths', global.todayDeaths.toLocaleString());
    render('#new-recovered', global.todayRecovered.toLocaleString());
}

function getCountries(countries){
  renderCountriesList('#country_cards', countries);
  
  //Select option add event listener
  // renderCountrySelect('#country-select', countries);
//   let countrySelect = document.querySelector('#country-select');
//   countrySelect.addEventListener('change', (e)=>{
//     console.log(e.target.options[e.target.selectedIndex].text);
//     renderCountriesList('#country_cards', countries.filter(country => {
//       return country.country === e.target.options[e.target.selectedIndex].text;
//     }));
// });
    
  // search bar add event listener
  let searchBar = document.querySelector('.search-bar #country');
  searchBar.addEventListener('keyup', (e)=>{
    renderCountriesList('#country_cards', countries.filter(country => {
      return country.country.toUpperCase().includes(e.target.value.toUpperCase().trim());
    }));
});
}

function renderCountrySelect(renderTarget, countries){
  var countriesHTML = [];
    countries.forEach(country => {
      var html = `
        <option value="${country.countryInfo.iso2}">${country.country}</opiton>
      `;
      countriesHTML.push(html);
    })
    render(renderTarget, countriesHTML.join(''));
}

function renderCountriesList(renderTarget, countries){
  var countriesHTML = [];
    countries.forEach(country => {
      var html = `
        <div class="card" id="${country.countryInfo.iso2}">
          <h2 class="country-name">${country.country}</h2>
          <img src="${country.countryInfo.flag}"">
          <h3 id="cases">${country.cases.toLocaleString()}</h3>
          <p>感染者数</p>
          <div class="new-today">
            <span> + </span>
            <span id="new-cases">${country.todayCases.toLocaleString()}</span>
            <span>今日</span>
          </div>
          <h3 id="deaths">${country.deaths.toLocaleString()}</h3>
          <p>死者数</p>
          <div class="new-today">
            <span> + </span>
            <span id="new-deaths">${country.todayDeaths.toLocaleString()}</span>
            <span>今日</span>
          </div>
          <h3 id="recovered">${country.recovered.toLocaleString()}</h3>
          <p>回復者数</p>
          <div class="new-today">
            <span> + </span>
            <span id="new-recovered">${country.todayRecovered.toLocaleString()}</span>
            <span>今日</span>
          </div>
        </div>
      `;
      countriesHTML.push(html);
    })
    render(renderTarget, countriesHTML.join(''));
}