import { rawSiteData } from '../data/data.js';
import { encryptData } from '../src/utils/crypto.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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