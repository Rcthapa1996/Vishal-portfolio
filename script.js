const cv = document.getElementById("cv");
const portfolio = document.getElementById("portfolio");
const homeControler = document.getElementById("controler");
const downloadBtn = document.getElementById("download-cv");
const homeSection = cv.parentElement;

let showCv = false;

function toggelHome() {
  if (showCv) {
    homeSection.style.backgroundImage = "url('./img/img_bg_1.jpg')";
    cv.style.display = "flex";
    portfolio.style.display = "none";
  } else {
    homeSection.style.backgroundImage = "url('./img/img_bg_2.jpg')";
    cv.style.display = "none";
    portfolio.style.display = "flex";
  }
  homeControler.children[0].classList.toggle("active");
  homeControler.children[1].classList.toggle("active");
  showCv = !showCv;
}
// function downloadCv() {
//   var fn = "JavaScript.txt";
//        dwn(fn, t);
//    }, false);
//    function dwn(fn, t) {
//         var element = document.createElement('a');
//         element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(t));
//         element.setAttribute('download', fn);
//   // let downloadUrl =
//   //   "https://ram-assets.s3.us-west-2.amazonaws.com/Ramchandra_Thapa_CV.pdf";

//   console.log("Hello Btn", downloadUrl);
// }

// downloadBtn.addEventListener("click", downloadCv);

downloadBtn.addEventListener(
  "click",
  function () {
    // var t = document.getElementById("val").value;
    var fn = "Vishal Karnani CV.pdf";
    dwn(fn);
  },
  false
);
function dwn(fn) {
  var element = document.createElement("a");
  element.setAttribute("href", "./assets/Vishal Karnani CV 001.pdf");
  element.setAttribute("download", fn);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

// function downloadFile(url, fileName) {
//   fetch(url, { method: "get", mode: "no-cors", referrerPolicy: "no-referrer" })
//     .then((res) => res.blob())
//     .then((res) => {
//       const aElement = document.createElement("a");
//       aElement.setAttribute("download", fileName);
//       const href = URL.createObjectURL(res);
//       aElement.href = href;
//       // aElement.setAttribute('href', href);
//       aElement.setAttribute("target", "_blank");
//       aElement.click();
//       URL.revokeObjectURL(href);
//     });
// }

// const downloadFile = (url, fileName) => {
//   // using Java Script method to get PDF file
//   console.log("Hello");

//   fetch(url, {
//     method: "get",
//     mode: "no-cors",
//     referrerPolicy: "no-referrer",
//   }).then((response) => {
//     response.blob().then((blob) => {
//       // Creating new object of PDF file
//       const fileURL = window.URL.createObjectURL(blob);
//       // Setting various property values
//       let alink = document.createElement("a");
//       alink.href = fileURL;
//       alink.download = fileName;
//       alink.click();
//     });
//   });
// };

// downloadBtn.onclick = function () {
//   downloadFile(
//     "https://ram-assets.s3.us-west-2.amazonaws.com/Ramchandra_Thapa_CV.pdf",
//     "Ramchandra Thapa CV.pdf"
//   );
// };
// // setInterval(toggelHome, 3000);
