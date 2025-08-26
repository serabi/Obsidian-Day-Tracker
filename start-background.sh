#!/bin/bash

# Obsidian Day Tracker Background Start Script
# Starts the server in background using nohup

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG_FILE="$PROJECT_DIR/server.log"
PID_FILE="$PROJECT_DIR/server.pid"

echo "Starting Obsidian Day Tracker server in background..."

# Check if server is already running
if [ -f "$PID_FILE" ]; then
    PID=$(cat "$PID_FILE")
    if ps -p $PID > /dev/null 2>&1; then
        echo "Server is already running with PID $PID"
        exit 1
    else
        # PID file exists but process is not running, remove stale PID file
        rm "$PID_FILE"
    fi
fi

# Start server in background
cd "$PROJECT_DIR"
nohup pnpm start > "$LOG_FILE" 2>&1 &
SERVER_PID=$!

# Save PID to file
echo $SERVER_PID > "$PID_FILE"

echo "Obsidian Day Tracker server started in background with PID $SERVER_PID"
echo "Logs are being written to: $LOG_FILE"
echo "Use './stop-background.sh' to stop the server"