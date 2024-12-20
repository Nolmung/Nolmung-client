import { DeleteObjectCommand } from '@aws-sdk/client-s3';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { toast } from 'react-toastify';

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

/** input에서 받은 file을 그대로 넣으면 S3 url과 fileType을 리턴합니다 */
export const uploadFileToS3 = async (files: File[], folder: string) => {
  const uploadedFiles = [];
  try {
    for (const file of files) {
      const fileKey = `${folder}/${Date.now()}_${file.name}`;
      const command = new PutObjectCommand({
        Bucket: bucketName,
        Key: fileKey,
        Body: file,
        ContentType: file.type,
        ACL: 'public-read',
      });

      await s3.send(command);

      const encodedFileKey = encodeURI(fileKey);
      const s3Url = `https://${bucketName}.s3.${region}.amazonaws.com/${encodedFileKey}`;

      const fileType = file.type.split('/')[0].toUpperCase();

      uploadedFiles.push({ s3Url, fileType });
    }

    return uploadedFiles;
  } catch (error) {
    toast.error('이미지 업로드에 실패했습니다.');
  }
};

/** 백엔드로 보내는 수정 or 삭제 API 성공시 실행, 삭제할 fileUrl을 넣으면 삭제가 실행되고, 성공시 true를 반환합니다. */
export const deleteFileFromS3 = async (fileUrl: string) => {
  const key = decodeURIComponent(fileUrl.split('/').slice(3).join('/')).replace(
    /\+/g,
    ' ',
  );

  try {
    const command = new DeleteObjectCommand({
      Bucket: bucketName,
      Key: key,
    });
    await s3.send(command);
    return true;
  } catch (error) {
    console.error('S3 삭제 요청 실패:', error);
    return false;
  }
};
