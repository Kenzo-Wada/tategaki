// import cloudinary from 'cloudinary';
// import multer from 'multer';
// import type { NextApiRequest, NextApiResponse } from 'next';
// import { getSession } from 'next-auth/react';

// import prisma from '~/lib/prisma';

// interface MulterFile {
//   fieldname: string;
//   originalname: string;
//   encoding: string;
//   mimetype: string;
//   size: number;
//   destination: string;
//   filename: string;
//   path: string;
//   buffer: Buffer;
// }
// export interface NextApiRequestWithFile extends NextApiRequest {
//   file: MulterFile;
// }

// cloudinary.v2.config({
//   cloud_name: 'your-cloudinary-cloud-name',
//   api_key: 'your-cloudinary-api-key',
//   api_secret: 'your-cloudinary-api-secret',
// });

// const upload = multer({ storage: multer.memoryStorage() });

// const uploadImage = async (req: NextApiRequestWithFile, res: NextApiResponse) => {
//   const session = await getSession({ req });

//   if (!session) {
//     res.status(401).json({ error: 'Unauthorized' });
//     return;
//   }

//   if (req.method === 'POST') {
//     try {
//       if (!req.file) {
//         res.status(400).send('No file uploaded.');
//         return;
//       }

//       const response = await new Promise<cloudinary.UploadApiResponse>((resolve, reject) => {
//         const streamLoad = cloudinary.v2.uploader.upload_stream(
//           { resource_type: 'image', public_id: req.file.originalname },
//           (error, result) => {
//             if (error) {
//               reject(error);
//             } else if (result) {
//               resolve(result);
//             } else {
//               reject(new Error('No result returned from Cloudinary'));
//             }
//           }
//         );

//         streamLoad.end(req.file.buffer);
//       });

//       res.status(200).json({ url: response.secure_url });
//     } catch (error) {
//       res.status(500).json({ error: 'Error uploading the image', details: error });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// };

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default upload.single('file')(uploadImage);
