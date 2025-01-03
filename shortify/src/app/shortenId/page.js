// import { notFound } from 'next/navigation';
// import connectDB from '../../lib/mongodb';
// import URL from '../../models/URL';

// export const dynamic = 'force-dynamic'; // Prevents static prerendering

// export default async function ShortIdPage({ params }) {
//   const { shortId } = params;

//   await connectDB();

//   const url = await URL.findOne({ shortId });

//   if (!url) {
//     notFound(); // Show a 404 page if no URL is found
//   }

//   return {
//     redirect: {
//       destination: url.originalUrl,
//       permanent: false,
//     },
//   };
// }
