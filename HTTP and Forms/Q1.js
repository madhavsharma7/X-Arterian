const url = 'https://eloquentjavascript.net/author';

// Function to fetch a resource with a specified Accept header
async function fetchResource(acceptHeader) {
  try {
    const response = await fetch(url, {
      headers: {
        'Accept': acceptHeader
      }
    });

    if (response.ok) {
      const contentType = response.headers.get('Content-Type');
      console.log(`Content-Type: ${contentType}`);
      const data = await response.text();  // Use response.json() for JSON responses
      console.log('Response:', data);
    } else {
      console.log(`HTTP Error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

// Fetching different formats
fetchResource('text/plain');
fetchResource('text/html');
fetchResource('application/json');

// Fetching an unknown media type
fetchResource('application/rainbows+unicorns');
