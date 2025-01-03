import { notFound } from 'next/navigation';
import connectDB from '../../lib/mongodb';
import URL from '../../models/URL';

export default async function ShortIdPage({ params }) {
  const { shortId } = params;

  await connectDB();

  const url = await URL.findOne({ shortId });

  if (!url) {
    notFound(); // Show a 404 page if no matching URL is found
  }

  // Redirect to the original URL
  if (typeof window !== 'undefined') {
    window.location.href = url;
  }

  return null; // This ensures no content is rendered server-side
}
