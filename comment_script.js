function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comments = document.getElementById("comments").value;
    var rating = document.getElementById("rating").value;
  
    if (name == "") {
      alert("Please enter your name.");
      return false;
    }
    if (email == "") {
      alert("Please enter your email address.");
      return false;
    }
    if (rating == "") {
      alert("Please rate us.");
      return false;
    }
  
    // Show a popup message after the form is submitted
    alert("Dear " + name + ", Thank you very much for your feedback. You have rated our site as " + rating + 
    " and your comment was Very informative website.");
  
    return true;
  }


