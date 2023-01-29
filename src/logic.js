console.log("Hello");

const inputFile = document.getElementById('inputFile')
inputFile.onchange = ()=>{
    const file = inputFile.files[0]
    console.log(file);
}