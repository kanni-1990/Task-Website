//menu toggle 
function toggle() {
  var x = document.getElementById("mainMenu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// form validation 

document.getElementById("product").value = '';
document.getElementById("selectCountery").value = '';
function disableButton() {
    document.getElementById("submitButton").disabled = true;
}
function changeValidation() {
    // console.log(document.getElementById('productname').value, document.getElementById('product').value);
    if (document.getElementById('productname').value.length > 2 && document.getElementById('product').value.length>0 && document.getElementById('selectCountery').value.length>0) {
         document.getElementById("submitButton").disabled = false;
    } else {
        document.getElementById("submitButton").disabled = true;		
    }
}

