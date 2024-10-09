// Function to trigger download
function downloadFile(fileName) {
    const link = document.createElement('a');
    link.href = `/downloads/${fileName}`;  // This is the backend directory where the files are stored
    link.download = fileName;  // Setting the download attribute forces the browser to download the file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
