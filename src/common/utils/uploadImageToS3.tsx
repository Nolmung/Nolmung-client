import { MediasType } from '@/pages/todaymungDetail/types/DiaryType';
import { Media } from '@/service/apis/diary/index.type';
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

export const uploadFileToS3 = async (files: File[]) => {
  const uploadedFiles = [];
  try {
    for (const file of files) {
      const command = new PutObjectCommand({
        Bucket: bucketName,
        Key: file.name,
        Body: file,
        ContentType: file.type,
        ACL: 'public-read',
      });

      await s3.send(command);

      const encodedFileName = encodeURI(file.name);
      const s3Url = `https://${bucketName}.s3.${region}.amazonaws.com/${encodedFileName}`;

      const fileType = file.type.split('/')[0].toUpperCase();

      uploadedFiles.push({ s3Url, fileType });
    }

    return uploadedFiles;
  } catch (error) {
    alert('이미지 업로드에 실패했습니다.');
  }
};

export const deleteFileFromS3 = async (fileUrl: string) => {
  const key = fileUrl.split('/').slice(3).join('/');

  try {
    const command = new DeleteObjectCommand({
      Bucket: bucketName,
      Key: key,
    });

    await s3.send(command);
    return true;
  } catch (error) {
    alert('이미지 삭제에 실패했습니다.');
  }
};
