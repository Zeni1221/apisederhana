// api cuasa jakarta
fetch('https://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=11434714eeb186bb632bdab07d4c456c')
    .then((Response) => Response.json())
    .then((data) => console.log(data))