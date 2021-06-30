const router = require('express').Router();
const { getNotes, saveNote, deleteNote } = require('../../public/assets/js/index');
const { notes } = require('../../db/db.json');

router.get('api/notes', (req, res) => {
    let newNote = notes;
    if (req.query) {
        newNote = getNotes(req.query, newNote);
    }
    res.json(newNote);
});

router.post('api/notes', (req, res) => {
    const keepNote = saveNote(req.body, notes);
    res.json(keepNote);
});

module.exports = router;