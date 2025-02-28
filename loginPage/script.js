document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm")

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const email = document.getElementById("email").value
    const passcode = document.getElementById("passcode").value

    // Here you would typically send the login data to your server
    // For this example, we'll just log it to the console
    console.log("Login attempt:", { email, passcode })

    // Simulating a login process
    setTimeout(() => {
      alert("Login functionality would be implemented here.")
      // Reset the form
      loginForm.reset()
    }, 1000)
  })
})

