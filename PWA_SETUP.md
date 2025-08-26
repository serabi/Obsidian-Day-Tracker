# Obsidian Day Tracker PWA Setup Guide

## Quick Setup Overview
1. **Start your server**: `pnpm start` (runs on localhost:5555)
2. **Install as PWA**: Open in Chrome/Edge → Install app
3. **Set global hotkey**: macOS System Preferences → Keyboard → Shortcuts

---

## Detailed Setup Instructions

### 1. Start the Backend Server
```bash
cd /Users/sarahwolffmilligan/Development/comet
pnpm start
```
✅ Server will run on `http://localhost:5555`

### 2. Install as Progressive Web App

**Option A: Chrome/Chromium Browsers**
1. Open `http://localhost:5555/file_manager_tool.html` in Chrome
2. Look for **install icon** in address bar (usually a ⊕ or download icon)
3. Click the icon → "Install Obsidian Day Tracker"
4. PWA will be installed as a native-like app

**Option B: Edge Browser**
1. Open `http://localhost:5555/file_manager_tool.html` in Edge
2. Click the **three dots menu** (⋯) → "Apps" 
3. Select "Install this site as an app"
4. Choose app name and click "Install"

**Option C: Safari** 
1. Open the URL in Safari
2. Share button → "Add to Dock" (if available)
3. *Note: Safari has limited PWA support*

### 3. Set Up Global Hotkey (macOS)

**Method 1: System Preferences (Recommended)**
1. **System Preferences** → **Keyboard** → **Shortcuts**
2. Select **"App Shortcuts"** in left sidebar
3. Click the **"+"** button
4. **Application**: Select "Obsidian Day Tracker" (your installed PWA)
5. **Menu Title**: Type exactly "Obsidian Day Tracker" or the app name
6. **Keyboard Shortcut**: Press your desired combo (e.g., `⌘⇧D`)
7. Click **"Add"**

**Method 2: Using Spotlight Alternative**
1. Open **System Preferences** → **Keyboard** → **Shortcuts**
2. Select **"Spotlight"** in left sidebar  
3. Uncheck current Spotlight shortcut (if desired)
4. The PWA will be searchable via Spotlight as "Obsidian Day Tracker"

**Method 3: Alfred/Raycast (If Available)**
- The installed PWA will appear in app launchers
- Can be triggered by typing "Obsidian Day Tracker"

### 4. Test Your Setup

**Test the Hotkey:**
1. Press your assigned hotkey from any application
2. Obsidian Day Tracker PWA should open instantly
3. If server is running: form loads normally
4. If server is down: shows offline version with notification

**Test the Workflow:**
1. Press hotkey → PWA opens
2. Fill out the form (title, type, date, etc.)
3. Click "Create Note"
4. Note saves to your Obsidian vault
5. Success message appears

---

## Troubleshooting

### PWA Install Option Not Showing
- **Chrome**: Try refreshing the page, ensure HTTPS or localhost
- **Check browser**: PWA install requires Chrome 67+, Edge 79+, or similar
- **Manifest errors**: Check browser console for manifest.json issues

### Hotkey Not Working
1. **Check App Name**: Must match exactly in System Preferences
2. **Try Different Shortcut**: Some combinations may be taken
3. **Restart**: Sometimes requires logout/login to take effect
4. **Alternative**: Use Spotlight search for "Obsidian Day Tracker"

### Server Connection Issues
- **Server running**: Check `pnpm start` is active on localhost:5555
- **Firewall**: Ensure localhost isn't blocked
- **Browser**: Clear cache and reload PWA

### Notes Not Saving
- **Path**: Check Settings tab for correct Obsidian vault path
- **Permissions**: Ensure server can write to the directory
- **Server logs**: Check console for error messages

---

## Workflow Summary

🚀 **Daily Usage:**
1. `⌘⇧D` (or your chosen hotkey)
2. Obsidian Day Tracker PWA opens instantly
3. Fill form and save
4. Note appears in Obsidian

✨ **Benefits:**
- Works offline (basic form functionality)
- Native app experience
- Fast global access
- No complex dependencies
- Uses your existing server setup