import { Body, Controller, Post } from '@nestjs/common';
import EODService from './eod.service';
import SlackRequest from './slack_request.dto';

@Controller('eod')
class EODController {
  constructor(private readonly eodService: EODService) {}

  @Post()
  postEOD(@Body() slackRequest: SlackRequest): void {
    this.eodService.postEOD(slackRequest);
  }
}

export default EODController;
