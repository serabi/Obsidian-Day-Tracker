# Obsidian Day Tracker PWA

A Progressive Web App for quickly creating structured daily notes in your Obsidian vault. 

## Quick Start

### 1. Install & Start
```bash
pnpm install
pnpm start
```
Server runs on `http://localhost:5555`

**Background Service (No Terminal Window):**
```bash
./start-background.sh    # Start server in background
./stop-background.sh     # Stop background server
```

### 2. Install as PWA
1. Open `http://localhost:5555/file_manager_tool.html` in Chrome or Safari
2. **Chrome**: Click the **install icon** in the address bar → "Install Obsidian Day Tracker"
3. **Safari**: Share button → "Add to Dock"

### 3. Set Global Hotkey (Raycast)
1. **Download Raycast** from [raycast.com](https://raycast.com) (free)
2. **Install and launch** Raycast
3. **Search for your PWA**: Press `⌘+Space`, type "Obsidian Day Tracker"
4. **Set custom hotkey**: Raycast Preferences → Extensions → Find your app → Set hotkey (e.g., `⌘⇧D`)
5. **Test**: Press your hotkey from anywhere

### 4. Ready to Use!
Press your hotkey → Obsidian Day Tracker opens → Create notes instantly!

## Usage

1. Press your hotkey from any app
2. Fill the form (title, type, date, summary, tags)
3. Click "Create Note"
4. Note saves to your Obsidian vault

## Configuration

Update the path in `.env` file:
```
NOTES_DIR="/path/to/your/Obsidian/vault/folder"
```

## Troubleshooting

### PWA Won't Install
- Use Chrome or Safari
- Ensure you're on localhost or HTTPS
- Check browser console for manifest errors

### Hotkey Not Working
- **Raycast**: Ensure PWA is installed and searchable in Raycast (`⌘+Space`)
- **Alternative**: Try built-in Spotlight search for "Obsidian Day Tracker"
- **Permissions**: Allow Raycast accessibility permissions in System Preferences
- **Fallback**: Use Alfred or other app launchers if Raycast doesn't work

### Server Issues
- Check `pnpm start` is running on localhost:5555
- For background service: check `server.log` file for errors
- Verify Obsidian vault path in Settings or `.env` file
- Check console for backend errors

### Notes Not Saving
- Check server has write permissions to vault directory
- Verify path in Settings tab or `.env` file
