// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from 'path';
import { promises as fs } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //Find the absolute path of the json directory
  const publicDirectory = path.join(process.cwd(), 'public');
  //Read the json data file data.json
  const fileContents = await fs.readFile(publicDirectory + '/content.json', 'utf8');
  //Return the content of the data file in json format
  res.status(200).json(fileContents);
}

