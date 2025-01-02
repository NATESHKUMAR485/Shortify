'use client'; // To indicate client-side rendering for hooks

import { useState } from 'react';

export default function Home() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ originalUrl }),
    });

    const data = await res.json();

    if (res.ok) {
      setShortenedUrl(data.shortUrl);
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="Enter your URL"
          required
        />
        <button type="submit">Shorten</button>
      </form>

      {shortenedUrl && (
        <div>
          <p>Shortened URL: </p>
          <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
            {shortenedUrl}
          </a>
        </div>
      )}
    </div>
  );
}
