// Array of messages
const messages: string[] = [
    "Processing complete",
    "Data loaded successfully",
    "Operation finished",
    "All done!"
];

let currentIndex = 0;

$("#actionButton").on("click", function () {
    const $button = $(this);

    // Disable button and change text
    $button.prop("disabled", true).text("Loading...");
    $("#displayText").text("Please wait...");

    setTimeout(() => {
        // Update text from array
        $("#displayText").text(messages[currentIndex]);

        currentIndex = (currentIndex + 1) % messages.length;

        // Restore button
        $button.prop("disabled", false).text("Click Me");
    }, 2000);
});
