const textInput = document.getElementById("textInput");
const typedCount = document.getElementById("typedCount");
const remainingCount = document.getElementById("remainingCount");
const warningMessage = document.getElementById("warningMessage");

const maxLimit = 200;

textInput.addEventListener("input", () => {
    const currentLength = textInput.value.length;
    
    // Update count display
    typedCount.textContent = currentLength;
    remainingCount.textContent = maxLimit - currentLength;

    // Warning display logic
    if (currentLength >= maxLimit) {
        warningMessage.textContent = "⚠️ You have reached the maximum character limit (200)!";
        textInput.style.borderColor = "#d9534f";
    } else {
        warningMessage.textContent = "";
        textInput.style.borderColor = "#ccc";
    }
});