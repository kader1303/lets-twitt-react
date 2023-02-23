/*global chrome*/
import React, { useState } from "react";
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
    const [loading, setloading] = useState(false)
    const [background, setbackground] = useState('rgba(0, 0, 0, 0)')

    const handleTemaChange = (event) => {
        setTema(event.target.value);
    };

    const handleGenerateTwitt = async () => {
        setloading(true);
        setbackground('rgba(0, 0, 0, 0.5)');
        const Twitt = await useGetTwitt(tema);
        setloading(false);
        setbackground('rgba(0, 0, 0, 0)');
        setTwitt(Twitt);
        console.log(Twitt);
    };

    return (
        <div id="container" style={{
            backgroundColor: background,
        }}>
            <div id="popup">
                <h1>Let's Twitt</h1>
                <img src="/assets/twitter.png" style={{ height: 35, width: 35, marginLeft: 20 }} alt='icono de twitter'></img>
            </div>

            <div id="twitt-form-container">
                <p>Recuerda twittear varias veces al día.</p>
                <button id="generate-button" onClick={handleGenerateTwitt}>
                    Generar twitt
                </button>
                <input type="text" className="input" name="text" id="twitt-input" placeholder="Sobre que quieres Twittear" value={tema} onChange={handleTemaChange} />
            </div>
            {
                loading &&
                <div class="loader">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>

            }
            <div id="twitt-container">
                {
                    twitt &&
                    <blockquote contenteditable="true">
                        <p>{twitt}</p>
                    </blockquote>
                }
            </div>
            <script type="module" src="popup.js"></script>
            <script src="popup.js" type="text/javascript"></script>
        </div>
    );
}

createRoot(document.getElementById("react-target")).render(<Popup />);
