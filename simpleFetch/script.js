function getWeather() { // untuk ambil data dari api open weather berdasarkan input nama
    $('#weatherResult').html(''); // Reset hasil pencarian
    const city = $('#cityInput').val(); // ambil nilai nama kota yang dimasukkan di input dengan id #cityInput
    const apiKey = '11434714eeb186bb632bdab07d4c456c'; // api key yang di dapat dari openweather
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`; // url weather untuk melakukan request ke openweather

    $.ajax({ // request dengan jquery
        url: url, // url untuk mengambil data cuaca
        type: 'get', // permintaan http untuk melihat data
        dataType: 'json', // respon dari server yang dberikan berupa json 
        success: function (data) { // fungsi yang dijalankan ketika request berhasil
            if (data.cod === 200) { // jika kode respon 200 maka data sukses 
                const temperature = (data.main.temp - 273.15).toFixed(2); // Mengonversi dari Kelvin ke Celsius
                const weather = data.weather[0].description; // mengambil deskripsi cuaca dari api 

                // menampilkan hasil html, dan memunculkan card yang berisi suhu dan kondisi di cuaca yang dicari 
                $('#weatherResult').append(`
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">Cuaca di ${data.name}</h3>
                            <p class="card-text">Suhu: ${temperature} °C</p>
                            <p class="card-text">Kondisi: ${weather}</p>
                        </div>
                    </div>
                `);
                $('#cityInput').val(''); // Bersihkan input setelah pencarian

            } else {
                $('#weatherResult').html(`
                    <div class="alert alert-danger" role="alert">
                        ${data.message}
                    </div>
                `);
            }
        },

        // jika terjadi kesalahan, maka fungsi ini akan dijalankan 
        error: function () {
            $('#weatherResult').html(`
                <div class="alert alert-danger" role="alert">Terjadi kesalahan, coba lagi nanti.</div>
            `);
        }
    });
}

// Event listener saat tombol "Dapatkan Cuaca" diklik
$('#getWeather').on('click', function () { // ketika tombol dengan id tersebut di kllik, maka fungsi tersebut akan diproses
    getWeather();
});

// Event listener untuk pencarian cuaca saat enter ditekan di input
$('#cityInput').on('keyup', function (e) {
    if (e.keyCode === 13) {
        getWeather();
    }
});
