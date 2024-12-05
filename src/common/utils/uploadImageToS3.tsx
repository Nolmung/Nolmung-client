import { DeleteObjectCommand } from '@aws-sdk/client-s3';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

const region = import.meta.env.VITE_S3_REGION;
const accessKeyId = import.meta.env.VITE_S3_ACCESS_KEY;
const secretAccessKey = import.meta.env.VITE_S3_SECRET_ACCESS_KEY;
const bucketName = import.meta.env.VITE_S3_BUCKET;

const s3 = new S3Client({
  region: region,
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  },
});

export const uploadFileToS3 = async (
  files: File[],
  addMedia: (media: any) => void,
) => {
  try {
    for (const file of files) {
      const command = new PutObjectCommand({
        Bucket: bucketName,
        Key: file.name,
        Body: file,
        ContentType: file.type,
        ACL: 'public-read', // 객체를 공개적으로 설정
      });

      await s3.send(command);

      const encodedFileName = encodeURI(file.name);
      const url = `https://${bucketName}.s3.${region}.amazonaws.com/${encodedFileName}`;

      const media = {
        mediaId: Date.now() + Math.random(),
        mediaType: file.type,
        mediaUrl: url,
      };

      addMedia(media);
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteFileFromS3 = async (
  fileUrl: string,
  mediaId: number,
  deleteMedia: (media: any) => void,
) => {
  const key = fileUrl.split('/').slice(3).join('/');

  try {
    const command = new DeleteObjectCommand({
      Bucket: bucketName,
      Key: key,
    });

    await s3.send(command);

    deleteMedia(mediaId);
  } catch (error) {
    console.error('Error deleting file:', error);
  }
};
