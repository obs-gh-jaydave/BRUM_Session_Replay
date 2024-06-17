const observeEndpoint = 'https://{OBSERVE_TENAS}.collect.observeinc.com/v1/http'; // Replace with your Observe endpoint
const observeApiKey = '{OBSERVE_TOKEN}'; // Replace with your Observe API key

export async function sendEventsToObserve(events) {
  const requestBody = JSON.stringify(events);
  console.log('Request payload:', requestBody);

  try {
    const response = await fetch(observeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${observeApiKey}`,
      },
      body: requestBody,
    });

    if (response.ok) {
      console.log('Events sent successfully');
    } else {
      const errorText = await response.text();
      console.error('Failed to send events:', response.status, response.statusText, errorText);
    }
  } catch (error) {
    console.error('Error sending events:', error);
  }
}

