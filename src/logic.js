console.log("Hello");

const inputFile = document.getElementById('inputFile')
const prevContainer = document.getElementsByClassName('container')
const img_preview = document.querySelector('.Image__Preview')


let opCanvas = document.getElementById('opCanvas')
let opCanvasContext = opCanvas.getContext('2d');

var img = new Image()

let val =0

inputFile.onchange = ()=>{
    const file = inputFile.files[0]
    console.log(file);
    if (file) {
        const reader = new FileReader()
        img_preview.style.display = 'block'
        reader.addEventListener('load',()=>{
            console.log(file.path);
            img_preview.setAttribute('src',file.path)
            img.src = file.path
            
        })
        // reader.readAsDataURLsy(file)
        reader.readAsDataURL(file)
        setTimeout(()=>{
            var width = img_preview.clientWidth
            var height = img_preview.clientHeight
            opCanvas.width = width
            opCanvas.height = height
            console.log(opCanvas.width, opCanvas.height);
            opCanvasContext.drawImage(img, 0,0, width, height);
                    console.log("Image is being drawn");
        },1000)
    }
}







// opCanvas.width = width
// opCanvas.height = height

// console.log(opCanvas.width, opCanvas.height);
console.log(img);


