import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
    constructor(private configService: ConfigService) { }
    getHello(): string {
        const e = this.configService.get('NODE_ENV');
        return 'Hello World! ' + e;
    }
}
