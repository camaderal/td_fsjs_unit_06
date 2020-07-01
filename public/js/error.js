//add functionality to show/hide stack trace
const showErrorDetails = document.getElementById("showStackTrace");
if(showErrorDetails){
    showErrorDetails.addEventListener('click', (event) =>{
        const stackTrace = document.getElementById("stackTrace");
        if(stackTrace.style.display == 'none'){
            stackTrace.style.display = 'block';
            showErrorDetails.textContent = "Hide details";
        }else{
            stackTrace.style.display = 'none';
            showErrorDetails.textContent = "Show details";
        }
    })
}
