function displaybabynames(response) { 
    if (response.data && response.data.answer) {
        new Typewriter('.babynames', {
            strings: response.data.answer,
            autoStart: true,
            delay: 75,
            cursor: ""
        });
    } else {
        document.querySelector('.babynames').textContent = "No valid data received from the API.";
    }
}

function generatebabynames(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector(".instructions");
    let inputValue = instructionsInput.value.trim();
    
    if (!inputValue) {
        document.querySelector('.babynames').textContent = "Please enter 'Boy' or 'Girl'.";
        return;
    }

    let apiKey = "1feb8a7b2d092f38fof7t1c4fa0416b7";
    let prompt = `User instructions are: Generate 5 baby names for a ${inputValue}`;
    let context = "You are a baby name generator and you love to generate 5 names in basic HTML and separate each line with a </br>. Please follow the user instructions and generate 5 names based on the provided instructions ONLY. Do not include a title.";
    let url = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;

    axios.post(url)
        .then(displaybabynames)
        .catch(error => {
            document.querySelector('.babynames').textContent = "Failed to generate a name. Please try again.";
        });
}

let babynamesFormElement = document.querySelector("#babynames-generator");
babynamesFormElement.addEventListener("submit", generatebabynames);
