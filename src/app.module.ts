import { HttpModule, Module } from '@nestjs/common';
import AppController from './app.controller';
import AppService from './app.service';
import EODController from './eod.controller';
import EODService from './eod.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, EODController],
  providers: [AppService, EODService],
})
class AppModule {}

export default AppModule;
