function submitbutton() {
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        uname: document.getElementById("uname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      location.reload()
      .catch((error) => console.error(error));
  }