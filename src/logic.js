console.log("Hello");

const inputFile = document.getElementById('inputFile')
const prevContainer = document.getElementsByClassName('container')
const img_preview = document.querySelector('.Image__Preview')

inputFile.onchange = ()=>{
    const file = inputFile.files[0]
    console.log(file);
    if (file) {
        const reader = new FileReader()
        img_preview.style.display = 'block'
        reader.addEventListener('load',()=>{
            console.log(file.path);
            img_preview.setAttribute('src',file.path)
        })
        reader.readAsDataURL(file)
    }
}