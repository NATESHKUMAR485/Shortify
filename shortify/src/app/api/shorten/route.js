// import connectDB from '../../../lib/mongodb';
// import URL from '../../../models/URL';

// export async function POST(req) {
//   const { originalUrl } = await req.json();
  
//   await connectDB();

//   if (!originalUrl) {
//     return new Response(JSON.stringify({ error: 'URL is required' }), { status: 400 });
//   }

//   try {
//     const existingUrl = await URL.findOne({ originalUrl });

//     if (existingUrl) {
//       return new Response(JSON.stringify({ shortUrl: `${process.env.HOST_URL}/${existingUrl.shortId}` }), { status: 200 });
//     }

//     const newUrl = new URL({ originalUrl });
//     await newUrl.save();

//     return new Response(JSON.stringify({ shortUrl: `${process.env.HOST_URL}/${newUrl.shortId}` }), { status: 201 });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
//   }
// }



import connectDB from '../../../lib/mongodb';
import URL from '../../../models/URL';

export async function POST(req) {
  const { originalUrl } = await req.json();
  
  await connectDB();

  if (!originalUrl) {
    return new Response(JSON.stringify({ error: 'URL is required' }), { status: 400 });
  }

  try {
    const existingUrl = await URL.findOne({ originalUrl });

    if (existingUrl) {
      return new Response(JSON.stringify({ shortUrl: `https://shortify.nateshkumar.live/${existingUrl.shortId}` }), { status: 200 });
    }

    const newUrl = new URL({ originalUrl });
    await newUrl.save();

    return new Response(JSON.stringify({ shortUrl: `https://shortify.nateshkumar.live/${newUrl.shortId}` }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}