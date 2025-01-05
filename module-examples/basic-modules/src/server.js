import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const app = express();

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

app.use('/static', express.static(path.resolve(__dirname, '../')));

app.get('/', function(req, res) {
    const pathToHtmlFile = path.resolve(__dirname, '../index.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
});

app.listen(3000, function() {
    console.log('Application is running on localhost:3000');
});
