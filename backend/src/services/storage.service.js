import imagekit from "../config/imagekit.js";
import { toFile } from '@imagekit/nodejs';


const uploadFile = async (buffer) => {
    const response = await imagekit.files.upload({
        file: buffer.toString("base64"),
        // file: await toFile(buffer.toString("base64"), "file"),
        // file: await toFile(Buffer.from(buffer), "file"),
        fileName: `image_${Date.now()}.jpg`
    });

    return response;
};

export default uploadFile;