document.getElementById('image-form').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    const fileInput = document.getElementById('image');
    const file = fileInput.files[0];
  
    if (!file) {
      alert('Please upload an image.');
      return;
    }
  
    // Tampilkan preview gambar
    const preview = document.getElementById('preview');
    preview.src = URL.createObjectURL(file);
    preview.style.display = 'block';
  
    // Siapkan data untuk dikirim ke endpoint
    const formData = new FormData();
    formData.append('image', file);
  
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Classifying...';

    try {
      // Kirim gambar ke endpoint
      const response = await fetch('https://app-predict-image.1ongwfft5soj.us-south.codeengine.appdomain.cloud/imagePrediction', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json', // Pastikan menerima JSON
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
  
      // Tampilkan hasil prediksi
      console.log('Model Response:', result);
      resultDiv.textContent = `Prediction: ${result.Penyakit}`;
    } catch (error) {
      console.error('Error:', error);
      resultDiv.textContent = 'Error during classification. Please try again.';
    }
  });