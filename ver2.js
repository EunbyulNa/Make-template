
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for(i=0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click",function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if(dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    }else {
      dropdownContent.style.display = "block";
    }
  });
}


function myFunction() {
  var x= document.getElementById("mySlidebar");
  if(x.style.display === "block") {
    x.style.display = "none";
  }else{
    x.style.display = "block";
  }
}
