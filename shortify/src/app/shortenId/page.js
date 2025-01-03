import { notFound } from 'next/navigation';
import connectDB from '../../lib/mongodb';
import URL from '../../models/URL';

export default async function ShortIdPage({ params }) {
  const { shortId } = params;

  await connectDB();

  const url = await URL.findOne({ shortId });

  if (!url) {
    return notFound(); // Show 404 if shortId is not found
  }

  // Redirect to the original URL
//   if (typeof window !== 'undefined') {
//     window.location.href = url.originalUrl;
//     console.log('URL not found  to original URL');
//   }

  // Redirect to the original URL
  return {
    redirect: {
      destination: url.originalUrl,
      permanent: false,
    },
  };
}


