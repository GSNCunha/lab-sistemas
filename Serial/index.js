const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3005;

app.use(express.json());
app.use(cors());


app.post('/writefile', (req, res) => {
  const { filename, data } = req.body;
  fs.writeFile(filename, data, err => {
    if (err) {
      console.error(err);
      res.status(500).send('Error writing file');
    } else {
      console.log('File written successfully');
      res.status(200).send('File written successfully');
    }
  });
});

app.get('/readfile', (req, res) => {
    fs.readFile('Arduino.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error reading file');
      } else {
        console.log('File read successfully');
        res.status(200).send(data.trim()); // trim the data to remove any leading/trailing whitespace
      }
    });
  });

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
