require('dotenv').config();
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5555;

let NOTES_DIR = process.env.NOTES_DIR || '/Users/sarahwolffmilligan/Obsidian/Sarah\'s Vault/a8c/!a8c Notes';

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

function generateFrontmatter(type, date, tldr, tags) {
    let frontmatter = '---\n';
    frontmatter += `type: ${type}\n`;
    frontmatter += `date: ${date}\n`;
    frontmatter += `tldr: ${tldr}\n`;
    
    if (tags && tags.length > 0) {
        frontmatter += 'tags:\n';
        tags.forEach(tag => {
            frontmatter += `  - ${tag}\n`;
        });
    } else {
        frontmatter += 'tags:\n  - \n';
    }
    
    frontmatter += '---';
    return frontmatter;
}

app.post('/api/settings', async (req, res) => {
    try {
        const { notesPath } = req.body;

        if (!notesPath) {
            return res.status(400).json({ 
                error: 'Notes path is required' 
            });
        }

        NOTES_DIR = notesPath;
        
        res.json({ 
            success: true, 
            message: 'Settings updated successfully',
            notesPath: NOTES_DIR 
        });

    } catch (error) {
        console.error('Error updating settings:', error);
        res.status(500).json({ 
            error: `Failed to update settings: ${error.message}` 
        });
    }
});

app.get('/api/settings', (req, res) => {
    res.json({
        notesPath: NOTES_DIR
    });
});

app.post('/api/notes', async (req, res) => {
    try {
        const { title, type, date, tldr, content, tags, notesPath } = req.body;

        if (!title || !type || !date || !tldr) {
            return res.status(400).json({ 
                error: 'Missing required fields: title, type, date, tldr' 
            });
        }

        const targetDir = notesPath || NOTES_DIR;
        const frontmatter = generateFrontmatter(type, date, tldr, tags);
        const noteContent = frontmatter + (content ? '\n\n' + content : '');
        
        const filename = `${date} - ${title}.md`;
        const filepath = path.join(targetDir, filename);

        await fs.mkdir(targetDir, { recursive: true });
        await fs.writeFile(filepath, noteContent);

        res.json({ 
            success: true, 
            filename, 
            filepath: filepath 
        });

    } catch (error) {
        console.error('Error creating note:', error);
        res.status(500).json({ 
            error: `Failed to create note: ${error.message}` 
        });
    }
});

app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server running at http://localhost:${PORT}`);
});