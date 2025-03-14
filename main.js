const form = document.getElementById("ticket-form")

const dropArea = document.getElementById("drop-area")
const fileInput = document.getElementById("file-input")
const uploadedImage = document.getElementById("uploaded-image")
const messageAction = document.getElementById("message-action")
const fileActions = document.getElementById("file-actions")
const removeImage = document.getElementById("remove-image")
const changeImage = document.getElementById("change-image")
const uploadHint = document.getElementById("upload-hint")

const textInputs = document.querySelectorAll(".required")

const formData = {
    image: "",
    name: "",
    email: "",
    githubUsername: ""
}

function validateTextInputs() {
    let isValid = true;

    textInputs.forEach(input => {
        const hint = input.nextElementSibling;

        if (input.value.trim() === "") {
            input.classList.add("error");
            hint.classList.add("error");
            isValid = false;
        } else {
            input.classList.remove("error");
            hint.classList.remove("error");
        }
    });

    return isValid;
}

function validateFile(input, hint) {
    const VALID_TYPES = ["image/jpeg", "image/png"];
    const MAX_SIZE = 500 * 1024;
    const file = input.files[0];
    let isValid = true;

    function setHintError(hint, message) {
        hint.classList.add("error");
        hint.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="#f57261" stroke-linecap="round" stroke-linejoin="round" d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"/><path fill="#f57261" d="M8.004 10.462V7.596ZM8 5.57v-042Z"/><path stroke="#f57261" stroke-linecap="round" stroke-linejoin="round" d="M8.004 10.462V7.596M8 5.569v-.042"/></svg> ${message}`;
    }

    if (!file) {
        setHintError(hint, "Por favor carregue uma imagem.");
        isValid = false;
    } else if (!VALID_TYPES.includes(file.type)) {
        setHintError(hint, "Tipo de arquivo inválido! Carregue uma foto JPG ou PNG.");
        input.value = "";
        isValid = false;
    } else if (file.size > MAX_SIZE) {
        setHintError(hint, "Arquivo muito grande! Por favor, carregue uma foto com menos de 500kb.");
        input.value = "";
        isValid = false;
    } else {
        hint.classList.remove("error");
        hint.innerHTML = `<img src="./images/icon-info.svg" alt="icon-info"> Arquivo válido! Pronto para envio.`;
        displayUploadedImage(file);
    }

    return isValid;
}

function displayUploadedImage(file) {
    const reader = new FileReader()

    reader.onload = e => {
        uploadedImage.src = e.target.result
        fileActions.classList.add("show")
        messageAction.classList.add("hide")
    }

    reader.readAsDataURL(file)
}

function resetUpload() {
    const defaultUploadIcon = "./images/icon-upload.svg"

    fileInput.value = ""
    uploadedImage.src = defaultUploadIcon
    messageAction.classList.remove("hide")
    fileActions.classList.remove("show")
    uploadHint.classList.remove("error")
    uploadHint.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="#f57261" stroke-linecap="round" stroke-linejoin="round" d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"/><path fill="#f57261" d="M8.004 10.462V7.596ZM8 5.57v-042Z"/><path stroke="#f57261" stroke-linecap="round" stroke-linejoin="round" d="M8.004 10.462V7.596M8 5.569v-.042"/></svg> Carregue sua foto (JPG ou PNG, tamanho máximo: 500kb)`
}

function storeAndDisplayFormData() {
    formData.image = uploadedImage.src
    formData.name = document.getElementById("full-name").value.trim()
    formData.email = document.getElementById("email").value.trim()
    formData.githubUsername = document.getElementById("github").value.trim()

    document.getElementById("header-name").textContent = formData.name
    document.getElementById("display-name").textContent = formData.name
    document.getElementById("display-email").textContent = formData.email
    document.getElementById("display-github").textContent = formData.githubUsername
    document.getElementById("display-image").src = formData.image
}

dropArea.addEventListener("click", () => {
    fileInput.click()
})

dropArea.addEventListener("dragover", (e) => {
    e.preventDefault()
    return
})

dropArea.addEventListener("drop", (e) => {
    e.preventDefault()

    const files = e.dataTransfer.files
    if(files.length > 0) {
        fileInput.files = files
        validateFile(fileInput, uploadHint)
    }
})

fileInput.addEventListener("change", () => {
    validateFile(fileInput, uploadHint)
})

removeImage.addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation()
    resetUpload()
})

changeImage.addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation()
    fileInput.click()
})

form.addEventListener("submit", e => {
    e.preventDefault()

    const isTextValid = validateTextInputs()
    const isFileValid = validateFile(fileInput, uploadHint)

    if(isTextValid && isFileValid) {
        storeAndDisplayFormData()

        document.getElementById("form-content").classList.add("hide")
        document.getElementById("display-data").style.display = "block"
    }
})