import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/pdf')
  getPDF(@Res() res: Response): Promise<void> {
    return this.appService.getPDF(res);
  }
}

