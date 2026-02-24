#!/bin/bash
# Ralph Wiggum Loop for boe.ventures
# One task per iteration, fresh context each time

MAX_ITERATIONS=${1:-15}
PROMPT_FILE="PROMPT_build.md"
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
DONE_SIGNAL="RALPH_DONE"

cd "$PROJECT_DIR"

echo "🔄 Ralph Loop starting (max $MAX_ITERATIONS iterations)"
echo "   Project: $PROJECT_DIR"
echo "   Prompt: $PROMPT_FILE"
echo ""

for i in $(seq 1 $MAX_ITERATIONS); do
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "🔁 Iteration $i / $MAX_ITERATIONS"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    
    PROMPT=$(cat "$PROMPT_FILE")
    
    OUTPUT=$(claude -p --dangerously-skip-permissions --model claude-sonnet-4-6 "$PROMPT" 2>&1)
    EXIT_CODE=$?
    
    echo "$OUTPUT" | tail -20
    echo ""
    
    if echo "$OUTPUT" | grep -q "$DONE_SIGNAL"; then
        echo "✅ Task completed. Checking for more..."
        
        # Check if all tasks are done
        REMAINING=$(grep -c "⬜" IMPLEMENTATION_PLAN.md 2>/dev/null || echo "0")
        if [ "$REMAINING" -eq 0 ]; then
            echo "🎉 All tasks complete! Exiting loop."
            break
        fi
        echo "📋 $REMAINING tasks remaining. Continuing..."
    fi
    
    if [ $EXIT_CODE -ne 0 ]; then
        echo "⚠️ Claude exited with code $EXIT_CODE"
    fi
    
    # Push after each iteration
    git push origin main 2>/dev/null
    
    echo ""
    sleep 5
done

echo ""
echo "🏁 Ralph Loop finished after $i iterations"
echo "📊 Git log:"
git log --oneline -15
