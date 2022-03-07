import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
    constructor(private configService: ConfigService) { }
    getHello(): string {
        const e = this.configService.get('NODE_ENV');
        const p = this.configService.get('PORT');
        return 'Hello World! ' + e + p;
    }
}
