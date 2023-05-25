const token = '3Cl5PtFcnqRjiNYR4sFQvp1etwGhTjpjMip7kUbO';
const url = 'https://eonet.gsfc.nasa.gov/api/v3/events';

const server_calls = {  
    getEONET: async (category="", dateS="", dateE="") => {
        const cat = `category=${category}`
        const date = `start=${dateS}&end=${dateE}`
        if (cat) {
            const response = await fetch((`${url}?${cat}&limit=6`), {
                method: 'GET',
            })
            // console.log(response.json());
            const result = await response.json()
            // console.log(result.events);
            const event = result.events
            // console.log(event);
            return event
        }
        else if (cat && date) {
            const response = await fetch((`${url}?${cat}&${date}&limit=6`), {
                method: 'GET',
            })
            // console.log(response.json());
            const result = await response.json()
            // console.log(result.events);
            const event = result.events
            // console.log(event);
            return event
        }
        else {
            const response = await fetch((`${url}&limit=6`), {
                method: 'GET',
            })
            // console.log(response.json());
            const result = await response.json()
            // console.log(result.events);
            const event = result.events
            // console.log(event);
            return event
        }
    }
}

export default server_calls