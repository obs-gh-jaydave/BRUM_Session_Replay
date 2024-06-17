import { record } from 'rrweb'; // Ensure correct import from rrweb
import { sendEventsToObserve } from './utils/observe.js';

let events = [];

document.getElementById('startRecording').addEventListener('click', () => {
  events = []; // Reset events array
  const stopFn = record({
    emit(event) {
      events.push(event);
    },
  });
  console.log('Recording started...');

  // Attach stopFn to a global variable or a button if needed to stop manually
  window.stopRecording = stopFn;
});

document.getElementById('stopRecording').addEventListener('click', () => {
  console.log('Recording stopped.');
  console.log('Captured events:', events);
  if (events.length > 0) {
    console.log('Sending events:', events);
    sendEventsToObserve(events);
    // Render the recorded session
    const replayContainer = document.getElementById('replayContainer');
    replayContainer.innerHTML = ''; // Clear previous replay if any

    new rrwebPlayer({
      target: replayContainer, // The container element
      props: {
        events: events,
        width: 800,
        height: 600,
      },
    });
  } else {
    console.log('No events to send.');
  }

  // Optionally, call stopFn to stop recording if not done elsewhere
  if (window.stopRecording) {
    window.stopRecording();
  }
});
