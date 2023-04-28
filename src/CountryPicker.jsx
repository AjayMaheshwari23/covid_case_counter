import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchdates } from './api';

const Countries = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchdates());
        };
        fetchAPI();
    }, []);


    const dateFormat  = (date) => 
    {     
        const newdate = date.toString();
        const a = newdate.substring(0,4);
        const b = newdate.substring(4,6);
        const c = newdate.substring(6,8);
        const f = c + "-" + b + "-" + a;
        return f;
    }

    return (
        <FormControl>
            <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
                {countries.map((country, i) => <option key={i} value={country.date}>{ dateFormat(country.date) }</option>)}
            </NativeSelect>
        </FormControl>
    );
};

export default Countries;