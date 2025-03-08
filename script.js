document.addEventListener("DOMContentLoaded", function () {
    console.log("Amazon Affiliate Website Loaded!");

    const buyButtons = document.querySelectorAll(".buy-button");

    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("You are being redirected to Amazon.");
        });
    });
});
