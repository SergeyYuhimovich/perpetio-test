import axios from 'axios';

class Service {
    getWeatherData() {
        return axios(
            {
                method: 'GET',
                url:'http://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/bradforddata.txt',
            }
        )
            .then(response => response)
            .catch(error => error);
    }
}


export default new Service();