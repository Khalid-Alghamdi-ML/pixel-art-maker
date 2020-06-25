// Select color input
let color = document.getElementById('colorPicker');
// Select size input
let canvas = document.getElementById('pixelCanvas');
let size = document.getElementById('sizePicker');
    

// When size is submitted by the user, call makeGrid()
size.addEventListener('submit',function (evt){
    //for overwriting
    canvas.innerHTML = "";
    evt.preventDefault();
    // height and width should be local to get their value
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    makeGrid(height,width);
    
});

function makeGrid(height,width) {

    for (let i = 0; i < height; i++ ){
        let row = canvas.insertRow(0);
        for (let j = 0; j < width; j++){
        let cell = row.insertCell(0);
        cell.addEventListener('click',function (e){
            cell.style.backgroundColor = color.value;
        });

            
        };
    };
};


