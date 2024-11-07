function showText() {
    var inputValue = document.getElementById('userInput').value; 
    var output = document.getElementById('output'); 
    
    if (inputValue.trim() !== "") {  
        output.innerHTML = inputValue; 
        output.style.display = 'block'; 
    } else {
        output.style.display = 'none'; 
    }
}