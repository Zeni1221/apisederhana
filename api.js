// const endpoint = "https://reqres.in/api/users"
// const endpoint = "https://masak-apa.tomorisakura.vercel.app"

// // jika menggunakan post
// fetch(endpoint, {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         email: "yayay@gmail.com",
//         firstname: "zeni",
//     })
// })
//     .then((result) => result.json())
//     .then((data) => console.log(data))


// jika menggunakan fetch GET
fetch("https://reqres.in/api/users")
    .then((result) => result.json())
    .then((data) => console.log(data))

