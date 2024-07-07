async function main() {
    let a = await fetch("http://127.0.0.1:5500/songs/"); // Await the fetch promise to get the response
    let response = await a.text(); // Await the text method on the response object
    console.log(response); // Log the response text
    let element = document.createElement("div"); // Create a new div element
    element.innerHTML = response; // Set the innerHTML of the new div element
    let tds = element.getElementsByTagName("td"); // Get all td elements within the div
    console.log(tds); // Log the td elements
}
main();
