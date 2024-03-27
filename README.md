# Stream Glass overlay template

This project is a template to create an overlay extension for StreamGlass using web technology (HTML/CSS/WebSocket)

## Project architecture

`overlay.json`: File used by StreamGlass to know where the overlay files are and what is the index file.
(You can put this file only in overlay/ and chenge the root to the path of your repository on your disk to ease development)
`template.css`: CSS example
`template.js`: JavaScript example that will use the StreamGlass JavaScript to create a module. You can check the Chat overlay module to see more about the possibility of a module
`template.html`: HTML example that will load the JavaScript module