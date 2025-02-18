document.addEventListener('DOMContentLoaded', function() {
    // Get the CV download URL
    const cvUrl = document.querySelector('.btn.btn2').href;
    
    // Create QR code
    const qrcode = new QRCode(document.getElementById("qrcode"), {
        text: cvUrl,
        width: 128,
        height: 128,
        colorDark : "#ffffff",
        colorLight : "#00000000",
        correctLevel : QRCode.CorrectLevel.H
    });
}); 