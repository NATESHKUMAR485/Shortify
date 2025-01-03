import connectDB from '../../../../lib/mongodb';
import URL from '../../../../models/URL';

export async function GET(req, { params }) {
  const { shortId } = params;

  await connectDB();

  const url = await URL.findOne({ shortId });

  if (!url) {
    return new Response('URL not found', { status: 404 });
  }

  console.log('Redirecting to original URL', url.originalUrl);

  return new Response(null, {
    status: 301,
    headers: { Location: url.originalUrl },
    },
    console.log('URL not found redirecting to original URL')

);
}
