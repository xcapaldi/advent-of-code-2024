function readFile(event) {
    const file = event.target.files[0],
        reader = new FileReader();

    reader.onload = (event) => {
        console.log(event.target.result);
        return event.target.result;
    }

    reader.onerror = (event) => {
        console.error("Error reading file:", event.target.error);
        return event.target.error;
    }

    reader.readAsText(file)
}


window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dayOnePartOneInput")?.addEventListener("change", (event) => {
        dayOnePartOne(event)
    }, false);
});

function dayOnePartOne(event) {
    const content = readFile(event);
    console.log("hi");
}
