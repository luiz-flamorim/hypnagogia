# Hypnagogia

Hypnagogia is a live performance and interactive system where audience-submitted nightmares are transformed into real-time AI-generated visuals through dance and machine vision. At the centre of the piece is a dancer whose movements are tracked using computer vision and machine learning. Her arms become brushes, painting the screen with motion. The audience, invited to contribute their own one-line nightmare prompts via a tablet interface, triggers a generative process that blends their text with the dancer’s gesture. Using a custom-built system involving TouchDesigner, MediaPipe, WebSocket communication, and a locally run StableDiffusion model, the performance becomes a collaborative hallucination — somewhere between choreography and computation.

[Check out the video documentation](https://vimeo.com/1078143159?share=copy)

## WebSocket Interface

This lightweight web client sends audience-submitted prompts (nightmares) to a WebSocket server for use in the *Hypnagogia* performance. The prompts are received and interpreted live by a system running TouchDesigner and Stable Diffusion.

### How it works

- Users input a single-line prompt into a text box.
- The prompt is immediately sent to the WebSocket server in real time.
- The server then routes this input to a local system for visual rendering during the performance.

### Code Notes

The connection to the WebSocket server is initiated here:

```javascript
const ws = new WebSocket(WEBSOCKET_URL);
```

## TouchDesigner

Download the files, and run on touchdesigner. You will need extra files:
- /media/ - add here the audio files
- /toxes/MediaPipe.tox - available [here](https://github.com/torinmb/mediapipe-touchdesigner)
- /toxes/StreamDiffusionTD.tox - available [here](https://www.youtube.com/watch?v=X4rlC6y1ahw)