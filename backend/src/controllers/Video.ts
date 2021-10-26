import { createReadStream } from 'fs';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import NotCreated from '@/errors/NotCreated';
import NotFound from '@/errors/NotFound';
import File from '@/models/File';

const retrieveVideo = async (req: Request, res: Response): Promise<void> => {
  const { filename } = req.params;
  let { range } = req.headers;

  if (!range) range = '0';

  const file = await File.findById(filename);

  if (!file) throw new NotFound();

  const videoSize = file.length;
  const start = Number(range.replace(/\D/g, ''));
  const end = videoSize - 1;

  const contentLength = end - start + 1;
  const headers = {
    'Content-Range': `bytes ${start}-${end}/${videoSize}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': contentLength,
    'Content-Type': 'video/mp4',
  };

  res.writeHead(206, headers);

  const gridFSBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db);
  const downloadStream = gridFSBucket.openDownloadStreamByName(filename, {
    start, end,
  });

  downloadStream.pipe(res);
};

const uploadVideo = (req: Request, res: Response): void => {
  const gridFSBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db);
  const { filename, mimetype, path } = req.file;

  if (!filename) throw new NotCreated();

  const upload = gridFSBucket.openUploadStream(filename,
    {
      id: filename as any,
      metadata: {
        mimetype,
      },
    });

  createReadStream(path).pipe(upload);
  res.sendStatus(201);
};

export { retrieveVideo, uploadVideo };
