import { rawSiteData } from '../data/data.js';
import CryptoJS from 'crypto-js';

const SECRET_KEY = 'samawong_xiaomi_20250107';

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const encryptData = (data: any): string => {
    const jsonString = JSON.stringify(data);
    return CryptoJS.AES.encrypt(jsonString, SECRET_KEY).toString();
  };
// 加密数据
const encryptedData = encryptData(rawSiteData);

// 生成 sites.ts 文件内容
const fileContent = `// 这个文件是自动生成的，请不要手动修改
import { decryptData } from '../utils/crypto.js';

const encryptedData = "${encryptedData}";

export const getSiteData = () => {
  return decryptData(encryptedData);
};

export default getSiteData;
`;

// 写入文件
const outputPath = path.join(__dirname, '../src/data/sites.ts');
fs.writeFileSync(outputPath, fileContent, 'utf-8');

console.log('Encrypted data has been generated successfully!'); 