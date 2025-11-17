// http, fs, path modules import kiye
const http = require('http'); // HTTP server banane ke liye
const fs = require('fs'); // File read/write karne ke liye
const path = require('path'); // File path manage karne ke liye

const port = 3030; // Server port number

// ✅ Server create kiya
const server = http.createServer((req, res) => {

    // ✅ Request URL ke base pe file ka path banaya
    // Agar '/' hai toh index.html lo, warna user ka diya hua file path lo
    const filePath = path.join(__dirname, req.url === '/' ? "index.html" : req.url);

    // ✅ File ka extension nikala (ex: .html, .css)
    const extName = String(path.extname(filePath)).toLowerCase();

    // ✅ Extension ke base pe content type set kiya (MIME types)
    const mimeType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.png': 'image/png'
    };

    // ✅ Agar extension supported nahi hai toh default content type set kiya
    const contentType = mimeType[extName] || 'application/octet-stream';

    // ✅ File ko read kiya
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // ✅ File nahi mili toh 404 error bheja
                res.writeHead(404, { 'Content-Type': "text/html" });
                res.end("404: File Not Found!");
            } else {
                // ✅ Server error aaya toh 500 error bheja
                res.writeHead(500);
                res.end("Server Error!");
            }
        } else {
            // ✅ File mil gayi, content bhej diya client ko
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, "utf-8");
        }
    });
});

// ✅ Server ko listen karwaya
server.listen(port, () => {
    console.log(`🚀 Server is listening on port ${port}`);
});



/*
📝 Summary - Is code se kya seekha:

1. Node.js me HTTP server kaise banate hain.
2. URL ke basis pe dynamic file serve karna.
3. MIME type set karna based on file extension.
4. File read karna using fs module.
5. Proper error handling karna - 404 & 500.
6. `path.join()` and `__dirname` ka use file path banane me kaise hota hai.

Yeh basic static file server hai jo HTML, CSS, JS, PNG jaise files serve karta hai browser pe.

🔥 Ab mai bina kisi web server ke apne local project ko serve kar sakta hoon!
*/
