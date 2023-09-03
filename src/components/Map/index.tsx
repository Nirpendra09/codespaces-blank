// Map.tsx
import React from 'react';
import { useQuery } from 'react-query';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { fetchCovidData } from './api';

// Define an interface to specify the data structure
interface CovidData {
    country: string;
    cases: number;
    deaths: number;
    recovered: number;
    countryInfo: {
        lat: number;
        long: number;
    };
}

const CovidMap: React.FC = () => {
    const { data, isLoading, isError } = useQuery<CovidData[]>('covidData', fetchCovidData);

    const [viewport, setViewport] = React.useState({
        width: '100%',
        height: '500px',
        latitude: 0,
        longitude: 0,
        zoom: 2,
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error fetching data</p>;
    }

    return (
        <div>
            <h1>COVID-19 Map</h1>
            <ReactMapGL
                {...viewport}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onViewportChange={(nextViewport) => setViewport(nextViewport)}
                mapboxAccessToken="pk.eyJ1IjoiZGV2MTI0IiwiYSI6ImNsbTNudzk2dDEyb3Eza3A5dWp1NzZyY2IifQ.aziCc3WgxhLbYisP0c55Xg"
            >
                {data?.map((country: CovidData) => {
                    // check for lat and long as well check if they are not isNaN
                    if (!country.countryInfo.lat || !country.countryInfo.long || isNaN(country.countryInfo.lat) || isNaN(country.countryInfo.long)) {
                        return null;
                    }
                    
                
                    return (
                        <Marker
                            key={country.country}
                            latitude={+country.countryInfo.lat}
                            longitude={+country.countryInfo.long}
                        >
                            <Popup>
                                <strong>{country.country}</strong><br />
                                Cases: {country.cases}<br />
                                Deaths: {country.deaths}<br />
                                Recovered: {country.recovered}
                            </Popup>
                        </Marker>
                    )
                })}
            </ReactMapGL>
        </div>
    );
};

export default CovidMap;
