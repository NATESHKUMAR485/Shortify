// import connectDB from '../../../lib/mongodb';
// import URL from '../../../models/URL';

// export async function GET({ params }) {
//   const { shortId } = params;

//   await connectDB();

//   const url = await URL.findOne({ shortId });

//   if (!url) {
//     return new Response(JSON.stringify({ error: 'URL not found' }), { status: 404 });
//   }

//   return new Response(null, {
//     status: 301,
//     headers: {
//       Location: url.originalUrl,
//     },
//   });
// }


import connectDB from '../../../lib/mongodb';
import URL from '../../../models/URL';

export async function GET({ params }) {
  const { shortId } = params;  // Capture the shortId from the URL

  await connectDB();

  // Find the URL based on the shortId
  const url = await URL.findOne({ shortId });

  // If no URL is found for the shortId, return a 404 error
  if (!url) {
    return new Response(JSON.stringify({ error: 'URL not found' }), { status: 404 });
  }

  // Redirect to the original URL
  return new Response(null, {
    status: 301,  // 301 is a permanent redirect
    headers: {
      Location: url.originalUrl,  // Redirect to the original URL
    },
  });
}
