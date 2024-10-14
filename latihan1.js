const fs = require('fs');

// Membaca file coba.json
fs.readFile('coba.json', 'utf-8', (err, data) => { 
    if (err) {
        console.error('Gagal membaca file:', err);
        return;
    }
    
    // Mengonversi data JSON menjadi objek JavaScript
    const Data = JSON.parse(data);
    
    // Mengakses data
    console.log(`Nama: ${Data.program.nama}`);
    console.log(`Umur: ${Data.program.umur}`);
    console.log(`Sekolah: ${Data.program.sekolah}`);
    console.log(`Status: ${Data.program.status}`);
    console.log(`Pembimbing 1: ${Data.program.pembimbing.pembimbing1}`);
    console.log(`Pembimbing 2: ${Data.program.pembimbing.pembimbing2}`);
});
