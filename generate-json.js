import fs from 'fs';
import path from 'path';

['resume', 'react-typescript'].forEach(async (fileName) => {
  const outputPath = path.join(path.resolve(), `json/${fileName}.json`);

  const data = await import(`./src/${fileName}.js`)
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf-8');

  console.log(`${fileName}.json has been generated`);
})

