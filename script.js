const baseURI = 'https://www.swapi.tech/api/people/?name=';
const inputField = document.querySelector('#inputField');
const searchButton = document.querySelector('#searchButton');
const outputField = document.querySelector('#outputField');

searchButton.addEventListener('click', function() {
    // Todo: add method for trimming whitespaces
    let inputFieldValue = inputField.value;
    let fullUri = baseURI + inputFieldValue;

    fetch(fullUri)
        .then(res => res.json())
        .then(data => {
            // Todo:
            // Handle return data
            console.log(data);
            // outputField.innerText = data;
            PrintCharacterInformationToOutputField(data.result[0]);
        })
        .catch(err => console.log(err));
});

function PrintCharacterInformationToOutputField(data) {
    let props = data.properties;
    let characterInformation = `Name: ${props.name}
        Height: ${props.height}
        Mass: ${props.mass}
        Hair color: ${props.hair_color}
        `;
    outputField.innerText = characterInformation;
}