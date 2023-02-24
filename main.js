import './style.css'

const video = document.getElementById("video");

navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(error => {
    console.error("Error accessing camera:", error);
  });

  window.addEventListener("load", () => {
    // put the above code here
  });
