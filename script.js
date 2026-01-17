function login() {
  const id = document.getElementById("userId").value;

  if (id === "") {
    document.getElementById("error").innerText = "ID cannot be empty";
  } else {
    // Save ID (temporary)
    localStorage.setItem("userID", id);
    window.location.href = "review.html";
  }
}

function submitReview() {
  const doctor = document.getElementById("doctor").value;
  const review = document.getElementById("review").value;

  if (doctor === "" || review === "") {
    document.getElementById("message").innerText = "Fill all fields";
  } else {
    document.getElementById("message").innerText =
      "Review submitted successfully!";
  }
}
