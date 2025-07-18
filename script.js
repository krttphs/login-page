document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("dropform");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const subjectSelect = document.getElementById("subject");
    const confirmCheck = document.getElementById("confirm");
    const errParagraph = document.getElementById("error");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let errMessages = [];

        const username = usernameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;
        const subject = subjectSelect.value;

        if(subject === ""){
            errMessages.push("กรุณาเลือกรายวิชา");
            subjectSelect.classList.add("is-invalid");
        }
        else if(subject !== ""){
            subjectSelect.classList.remove("is-invalid");
        }
        if(username.trim() === ""){
            errMessages.push("กรุณาใส่ username");
            usernameInput.classList.add("is-invalid");
        }
        else if(username.trim() !== ""){
            usernameInput.classList.remove("is-invalid");
        }
        if(email.trim() === ""){
            errMessages.push("กรุณาใส่ email");
            emailInput.classList.add("is-invalid");
        }
        else if(email.trim() !== ""){
            emailInput.classList.remove("is-invalid");
        }
        if(password.trim() === ""){
            errMessages.push("กรุณาใส่ password");
            passwordInput.classList.add("is-invalid");
        }
        else if(password.trim() !== ""){
            passwordInput.classList.remove("is-invalid");
        }
        if(!confirmCheck.checked){
            errMessages.push("กรุณายอมรับเงื่อนไข");
            confirmCheck.classList.add("is-invalid");
        }
        else if(confirmCheck.checked){
            confirmCheck.classList.remove("is-invalid");
        }
        if(errMessages.length > 0){
            errParagraph.innerHTML = errMessages.join("<br>");
        }
    })
});