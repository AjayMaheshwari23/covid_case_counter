import axios from 'axios';

const url = 'https://api.covidtracking.com/v1/us/daily.json';


const datafetching = async (date) => {
    
    try {
        const data2 = await axios.get(url);
        const data = data2.data;
        for (let i=0; i < data.length; i++) 
        {
            if ( data[i].date === parseInt(date)) 
            {
                 return data[i] ;
             }
        }
    } catch (error) {
        console.log(error);
    }
};

export const fetchdates = async () => {
    try {
        const data  = await axios.get(url);
        return data.data;
    } catch (error) {
        return error;
    }
};

export default datafetching;