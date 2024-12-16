// Definisi matriks
const matrix = [
    [7, 8, 9, 10],
    [10, 5, 3, 6],
    [7, 5, 4, 3]
];

// Flatten matriks ke array 1D
const flattened = matrix.flat();

// Cari nilai minimum dan maksimum
const min = Math.min(...flattened);
const max = Math.max(...flattened);

// Hitung jumlah kemunculan nilai minimum dan maksimum
const minCount = flattened.filter(value => value === min).length;
const maxCount = flattened.filter(value => value === max).length;

// Tampilkan matriks sebagai kotak di halaman
const matrixContainer = document.getElementById('matrix');
matrix.forEach(row => {
    row.forEach(value => {
        const cell = document.createElement('div');
        cell.textContent = value;
        matrixContainer.appendChild(cell);
    });
    const br = document.createElement('br');
    matrixContainer.appendChild(br);
});

// Cetak hasil analisis ke halaman
const output = `
    <p><strong>Nilai Minimum:</strong> ${min} 
    <br>(Jumlah: ${minCount})</p>
    <p><strong>Nilai Maksimum:</strong> ${max} 
    <br>(Jumlah: ${maxCount})</p>
`;

document.getElementById('output').innerHTML = output;
