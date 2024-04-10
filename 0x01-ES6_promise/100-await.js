import { uploadPhoto, createUser } from './utils';

export default async function asyncUploaduser() {
  try {
    const photoResp = await uploadPhoto();
    const userResp = await createUser();
    return { photo: photoResp, user: userResp };
  } catch (error) {
    return { photo: null, user: null };
  }
}
