import React from "react";
import { createRoot } from "react-dom/client";
import axios from 'axios';

const LetsTwittApi = axios.create({
    baseURL: 'http://192.168.8.165:3000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

class TwittDetailsImpl {
    async twitt(tema) {
        try {
            const response = await LetsTwittApi.put('/letstwitt/gettwitt', {
                tema: tema,
            });
            return response.data;
        } catch (error) {
            console.log('Error: ' + JSON.stringify(error.response?.data));
            const apierr = JSON.parse(JSON.stringify(error.response?.data));
            return Promise.resolve(apierr);
        }
    }
}

const useGetTwitt = async (tema) => {
    const twittDetails = new TwittDetailsImpl();
    const response = await twittDetails.twitt(tema);
    return response.result.choices[0].text;
};

function Popup() {

    const [tema, setTema] = React.useState('');
    const [twitt, setTwitt] = React.useState('');

    const handleTemaChange = (event) => {
        setTema(event.target.value);
    };

    const handleGenerateTwitt = async () => { 
        const Twitt = await useGetTwitt(tema);
        setTwitt(Twitt);
        console.log(Twitt);
    };

    return (
        <div>
            <h1>Let's Twitt</h1>
            <p>Recuerda twittear varias veces al día.</p>
            <div id="twitt-form-container">
                <button id="generate-button" onClick={handleGenerateTwitt}>
                    Generar twitt
                </button>
                <input type="text" id="twitt-input" placeholder="Sobre que quieres Twittear" value={tema} onChange={handleTemaChange} />
            </div>
            <div id="twitt-container">
                <p id="twitt-text" style={{marginTop: 20}}>
                    {twitt}
                </p>
            </div>
            <div id="output"></div>
            <script type="module" src="popup.js"></script>
            <script src="popup.js" type="text/javascript"></script>
        </div>
    );
}

createRoot(document.getElementById("react-target")).render(<Popup />);
