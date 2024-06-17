# Session Replay Project

This project captures session replay data using `rrweb` and sends it to Observe for analysis.

## Setup

### Prerequisites

1. [Node.js](https://nodejs.org/) (v14 or later)
2. [npm](https://www.npmjs.com/) (v6 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/session-replay-project.git
   cd session-replay-project```

2. Install dependencies:
    ```
    npm install
    ```
    
### Configuration
1. Update the Observe API configuration in `src/utils/observe.js`:
    ```
    const observeEndpoint = 'https://{OBSERVE_TENANT_ID}.collect.observeinc.com/v1/http'; // Replace with your Observe endpoint
    const observeApiKey = 'OBSERVE_TOKEN'; // Replace with your Observe Token key
    ```
### Running the Project
1. Start the project:
    ```
    npm start
    ```
2. Open your browser and navigate to the provided URL (usually http://localhost:1234).

### Usage
1. Click "Start Recording" to begin capturing session replay data.
2. Interact with the webpage as needed.
3. Click "Stop Recording" to stop capturing and send the events to Observe.