import { Injectable, StreamableFile } from '@nestjs/common';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { Readable } from 'stream';
import { Response } from 'Express';
import { createReadStream } from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getPDF(res: any): Promise<void> {
    const namePDF = 'pdf-test';

    const fileBase64 = await readFile(
        join(process.cwd(), `assets/${namePDF}.pdf`),
        'base64',
    );

    const fileBuffer = Buffer.from(fileBase64, 'base64');
    const fileStream = Readable.from(fileBuffer);

    res.set({
      'Content-type': 'application/pdf',
      'Content-Disposition': `attachment; filename=${namePDF}.pdf`,
    });

    console.warn('Estou enviando arquivo');
    fileStream.pipe(res);

    // OUTRA ALTERANATIVA

    // const file = createReadStream(
    //     join(process.cwd(), `assets/${namePDF}.pdf`)
    // );
    //
    // return new StreamableFile(file);
  }
}
