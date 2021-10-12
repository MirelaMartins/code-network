// import { retrieveVideoService, uploadVideoService } from '@/services/Video';
import { Request, Response } from 'express';
import mongoose, { isValidObjectId } from 'mongoose';
import { createReadStream } from 'fs';
import File from '@/models/File';

const retrieveVideo = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const gridFSBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db);

  const downloadStream = gridFSBucket.openDownloadStreamByName(id);

  downloadStream.pipe(res);
};

const uploadVideo = (req: Request, res: Response): void => {
  const { filename, mimetype, path } = req.files[0];

  const gridFSBucket = new mongoose.mongo.GridFSBucket(File.db.db);
  const upload = gridFSBucket.openUploadStream(filename as string,
    {
      metadata: {
        mimetype,
      },
    });

  createReadStream(path).pipe(upload);
  res.sendStatus(201);
};

export { retrieveVideo, uploadVideo };
