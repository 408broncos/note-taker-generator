const fs = require('fs');
const path = require('path');

app.get('/api/notes', (req, res) => res.json(notes));

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    notes.push(newNote);
    updateDb();
    console.log(`New note: ${newNote.title}`);
  return res.json(newNote);
});