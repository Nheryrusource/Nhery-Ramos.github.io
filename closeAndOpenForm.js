const modal = document.querySelector("#myForm");
const body = document.querySelector("body");



function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("btnContact").disabled = true;
    if (!modal.classList.contains("hidden")) {
      // Disable scroll
      body.style.overflow = "hidden";
    } else {
      // Enable scroll
      body.style.overflow = "auto";
    };
   
  }
  
function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("btnContact").disabled = false;
  body.style.overflow = "auto"; 
  }


function closePopUpSent() {
  document.getElementById("popUpSent").style.display = "none";
}



			