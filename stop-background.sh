#!/bin/bash

# Obsidian Day Tracker Background Stop Script
# Stops the background server process

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PID_FILE="$PROJECT_DIR/server.pid"

echo "Stopping Obsidian Day Tracker server..."

# Check if PID file exists
if [ ! -f "$PID_FILE" ]; then
    echo "No PID file found. Server may not be running in background."
    # Try to find and kill any running processes anyway
    PIDS=$(pgrep -f "pnpm start")
    if [ -n "$PIDS" ]; then
        echo "Found running pnpm processes, attempting to stop..."
        kill $PIDS
        echo "Stopped pnpm processes"
    else
        echo "No running server processes found"
    fi
    exit 0
fi

# Read PID from file
PID=$(cat "$PID_FILE")

# Check if process is running
if ps -p $PID > /dev/null 2>&1; then
    # Kill the process
    kill $PID
    
    # Wait a moment and check if it's really dead
    sleep 2
    if ps -p $PID > /dev/null 2>&1; then
        echo "Process still running, force killing..."
        kill -9 $PID
    fi
    
    echo "Obsidian Day Tracker server stopped (PID $PID)"
else
    echo "Process with PID $PID is not running"
fi

# Remove PID file
rm "$PID_FILE"
echo "Cleaned up PID file"