# Expo Camera Initialization Race Condition

This repository demonstrates a common yet subtle bug when using the Expo Camera API.  The issue stems from a race condition where attempts to access camera features occur before the camera has fully initialized. This leads to a silent failure – no errors are thrown, but the camera preview remains blank, and methods like `takePictureAsync` fail without explanation.

The provided `cameraBug.js` file showcases the problematic code.  The solution, detailed in `cameraBugSolution.js`, uses async/await and proper error handling to address the race condition.

## Reproduction

1. Clone this repository.
2. Install dependencies: `npm install` or `yarn install`
3. Run the app: `expo start`

Observe the behavior in `cameraBug.js` and then compare it to the corrected version in `cameraBugSolution.js`.