# Hypnagogia WebSocket Interface

This lightweight web client sends audience-submitted prompts (nightmares) to a WebSocket server for use in the *Hypnagogia* performance. The prompts are received and interpreted live by a system running TouchDesigner and Stable Diffusion.

## How it works

- Users input a single-line prompt into a text box.
- The prompt is immediately sent to the WebSocket server in real time.
- The server then routes this input to a local system for visual rendering during the performance.

## Code Notes

The connection to the WebSocket server is initiated here:

```javascript
let ws = new WebSocket();
