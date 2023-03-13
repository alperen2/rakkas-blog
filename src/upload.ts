import fs from 'fs';
import fileType from 'fs';


export const convertBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

export const saveBase64AsFile = (encoded: string, fileName: string) => {
  const buffer = Buffer.from(encoded.replace(/^data:image\/\w+;base64,/, ""), "base64");
  const extension = encoded.split(';')[0].split('/')[1]
  fs.writeFileSync(`public/images/uploads/${fileName}.${extension}`, buffer);

  return `${fileName}.${extension}`;

}


  