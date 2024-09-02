const fs = require("fs");
const fsp = require("fs").promises;

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File content:", data);
  }
});

// Promise version
fsp
  .readFile("example.txt", "utf8")
  .then((data) => console.log("File content:", data))
  .catch((err) => console.error("Error reading file:", err));

// Async/Await version
async function readFileAsync() {
  try {
    const data = await fsp.readFile("example.txt", "utf8");
    console.log("File content:", data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

readFileAsync();
