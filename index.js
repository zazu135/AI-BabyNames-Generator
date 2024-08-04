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

function generatebabynames(gender) {
    let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
    let prompt = `User instructions are: Generate 10 baby names for a ${gender}`;
    let context = "You are a baby name generator and you love to generate 10 unique names in basic HTML in numbered list. Please follow the user instructions and generate 10 names based on the provided instructions ONLY. Do not include a title.";
    let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(url).then(displaybabynames);
}

document.querySelector(".btn-boy").addEventListener("click", function() {
    generatebabynames("boy");
});

document.querySelector(".btn-girl").addEventListener("click", function() {
    generatebabynames("girl");
});
