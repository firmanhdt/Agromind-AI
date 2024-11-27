import React from "react";

function HasilDiagnose() {
  return (
    <>
    <div class="flex flex-col items-center bg-gray-100">
    {/* <!-- Container untuk judul --> */}
    <div class="bg-yellow-100 w-full max-w-3xl p-4 rounded-lg mt-8">
        <h2 class="text-center text-2xl font-semibold text-gray-800">Mastitis</h2>
    </div>
    
        {/* <!-- Gambar di bawah judul --> */}
        <div class="mt-4">
            <img src="https://th.bing.com/th/id/OIP.tMqfiQ1jMlfVUcVKZ3HoZQHaEV?rs=1&pid=ImgDetMain" alt="Mastitis" class="w-full max-w-md rounded-lg shadow-md"/>
        </div>
    </div>

    {/* Tanda dan Gejala */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">Tanda dan Gejala</h2>
        <ul className="list-decimal list-inside space-y-2">
            <li>
                <span className="font-semibold">Perubahan pada susu:</span> Susu menjadi menggumpal, berwarna abnormal (kuning, kemerahan), atau berbau tidak sedap.
            </li>
            <li>
                <span className="font-semibold">Pembengkakan ambing:</span> Ambing terasa keras, panas, dan sakit saat disentuh.
            </li>
            <li>
                <span className="font-semibold">Perubahan suhu tubuh:</span> Sapi mungkin mengalami demam.
            </li>
            <li>
                <span className="font-semibold">Penurunan produksi susu:</span> Sapi menghasilkan susu lebih sedikit.
            </li>
            <li>
                <span className="font-semibold">Perubahan perilaku:</span> Sapi menjadi lesu, nafsu makan berkurang.
            </li>
        </ul>
    </div>

        {/* Penyebab */}
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h2 class="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">Penyebab</h2>
            <p class="mb-4">Penyebab utama mastitis adalah infeksi bakteri. Beberapa jenis bakteri yang sering menyebabkan mastitis antara lain:</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li><span class="font-semibold">Staphylococcus aureus:</span> Bakteri ini sangat umum dan dapat menyebabkan infeksi akut atau kronis.</li>
                <li><span class="font-semibold">Streptococcus agalactiae:</span> Bakteri ini sering menyebabkan infeksi subklinis.</li>
                <li><span class="font-semibold">Escherichia coli:</span> Bakteri ini sering menyebabkan mastitis akut yang parah.</li>
                <li><span class="font-semibold">Klebsiella spp:</span> Bakteri ini juga dapat menyebabkan mastitis.</li>
            </ul>

            <p class="mt-4 mb-2">Selain infeksi bakteri, faktor-faktor lain yang dapat meningkatkan risiko terjadinya mastitis antara lain:</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold">Kebersihan yang buruk:</span> Peralatan pemerahan yang tidak bersih, lingkungan kandang yang kotor, dan teknik pemerahan yang tidak benar dapat meningkatkan risiko infeksi.</li>
                <li><span className="font-semibold">Trauma pada ambing:</span> Luka pada ambing dapat menjadi pintu masuk bagi bakteri.</li>
                <li><span className="font-semibold">Ketidakseimbangan hormon:</span> Perubahan hormon pada saat kering atau saat awal laktasi dapat meningkatkan kerentanan terhadap mastitis.</li>
                <li><span className="font-semibold">Sistem kekebalan tubuh yang lemah:</span> Sapi dengan sistem kekebalan tubuh yang lemah lebih mudah terinfeksi.</li>
            </ul>
        </div>

        {/* Pengobatan */}
        <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">Pengobatan</h2>
        <p class="mb-4">Pengobatan mastitis tergantung pada tingkat keparahan penyakit dan jenis bakteri penyebab. Beberapa metode pengobatan yang umum dilakukan antara lain:</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li><span class="font-semibold">Antibiotik:</span> Antibiotik diberikan secara intramammary (langsung ke dalam ambing) atau sistemik (melalui suntikan) untuk membunuh bakteri penyebab infeksi.</li>
                <li><span class="font-semibold">Perawatan lokal:</span>  Ambing yang terkena infeksi dibersihkan dan dikompres dengan air hangat.</li>
                <li><span class="font-semibold">Pengobatan gejala:</span> Obat-obatan diberikan untuk mengurangi peradangan, demam, dan rasa sakit.</li>
                <li><span class="font-semibold">Pengeringan sementara:</span> Sapi yang terinfeksi berat mungkin perlu dikeringkan sementara untuk memberikan waktu bagi ambing untuk sembuh.</li>
            </ul>
        </div>
    </>
  );
}

export default HasilDiagnose;
