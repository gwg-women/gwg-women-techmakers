export function getCity(lat, lng){
  let city;
  const state = {
    //Canada
        "AB": "Alberta",
        "BC": "British Columbia",
        "MB": "Manitoba",
        "NB": "New Brunswick",
        "NF": "Newfoundland",
        "NS": "Nova Scotia",
        "NT": "Northwest Territories",
        "ON": "Ontario",
        "PE": "Prince Edward Island",
        "QC": "Quebec",
        "SK": "Saskatchewan",
        "YT": "Yukon",
    //USA
        "AK": "Alaska",
        "AL": "Alabama",
        "AR": "Arkansas",
        "AS": "American Samoa",
        "AZ": "Arizona",
        "CA": "California",
        "CO": "Colorado",
        "CT": "Connecticut",
        "DC": "District of Columbia",
        "DE": "Deleware",
        "FL": "Florida",
        "FM": "Federated State of Micronesia",
        "GA": "Georgia",
        "GU": "Guam",
        "HI": "Hawaii",
        "IA": "Iowa",
        "ID": "Idaho",
        "IL": "Illinois",
        "IN": "Indiana",
        "KS": "Kansas",
        "KY": "Kentucky",
        "LA": "Lousiana",
        "MA": "Massachusetts",
        "MD": "Maryland",
        "ME": "Maine",
        "MH": "Marshall Islands",
        "MI": "Michigan",
        "MN": "Minnesota",
        "MO": "Missouri",
        "MP": "Northern Mariana Islands",
        "MS": "Mississippi",
        "MT": "Montana",
        "NC": "North Carolina",
        "ND": "North Dakota",
        "NE": "Nebraska",
        "NH": "New Hampshire",
        "NJ": "New Jersey",
        "NM": "New Mexico",
        "NV": "Nevada",
        "NY": "New York",
        "OH": "Ohio",
        "OK": "Oklahoma",
        "OR": "Oregon",
        "PA": "Pennsylvania",
        "PR": "Puerto Rico",
        "PW": "Palau",
        "RI": "Rhode Island",
        "SC": "South Carolina",
        "SD": "South Dakota",
        "TN": "Tennessee",
        "TX": "Texas",
        "UT": "Utah",
        "VA": "Virginia",
        "VI": "Virgin Island",
        "VT": "Vermont",
        "WA": "Washington",
        "WI": "Wisconsin",
        "WV": "West Virginia",
        "WY": "Wyoming",
        //Mexico
        "Ags.": "Aguascalientes",
        "B.C.S.": "Baja California Sur",
        "B.C.": "Baja California",
        "Chi.": "Chihuahua",
        "Col.": "Colima",
        "Camp.": "Campeche",
        "Coah.": "Coahuila",
        "Chis.": "Chiapas",
        "Dgo.": "Durango",
        "Gro.": "Guerrero",
        "Gto.": "Guanajuato",
        "Hgo.": "Hidalgo",
        "Jal.": "Jalisco",
        "CDMX": "México City",
        "Méx.": "México State",
        "Mich.": "Michoacán",
        "Mor.": "Morelos",
        "Nay.": "Nayarit",
        "N.L.": "Nuevo León",
        "Oax.": "Oaxaca",
        "Pue.": "Puebla",
        "Qro.": "Querétaro",
        "Q.R.": "Quintana Roo",
        "Sin.": "Sinaloa",
        "S.L.P.": "San Luis Potosí",
        "Son.": "Sonora",
        "Tab.": "Tabasco",
        "Tlax": "Tlaxcala",
        "Tamps.": "Tamaulipas",
        "Ver.": "Veracruz",
        "Yuc.": "Yucatán",
        "Zac": "Zacatecas",
        //Countries with Acronyms
        "UK": "United Kingdom"
          }


  return new Promise(function (resolve, reject) {
    
    const latlng = {lat: parseFloat(lat), lng: parseFloat(lng)};

    if (!window.google) {
      resolve();
    }

    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({'location': latlng}, function(results, status) {
      if (status === 'OK') {
        if (results[0]) {
          
          city = results[0].formatted_address;
          console.log('this is the original location ' + city)
          // Replaces state abbreviation to full name using state object.
          // Object.keys(state).forEach(k => city = city.replace(new RegExp(`\\b${k}\\b`, 'g'), state[k]));
          Object.keys(state).forEach(k => city = city.replace(k, state[k]));

          //gets rid of 'unnamed road', 'USA', numbers with their word if connected, and -=
          city = city.replace(/\b\w*?Unnamed Road|Mexico|Canada|-|USA|[a-z]*\d+[a-z]*\w*?\b/gi, '');
          //split by ','
          let citystate = city.split(',');
            
          //gets rid of those empty array elements as well as remove empty space in front and back of array elements.
          citystate = citystate.filter(entry => entry.trim() !== '').map(string => string.trim());

              if (citystate.length === 3 || citystate.length === 2 || citystate.length >= 4) {
                citystate = `${[citystate[citystate.length -2]]}, ${[citystate[citystate.length -1]]}`;
              }
            resolve(citystate);
        } else {
          window.alert('No results found');
          reject();
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
        reject();
      }
    });
  })
}