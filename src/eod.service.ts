import { HttpService, Injectable } from '@nestjs/common';
import SlackRequest from './slack_request.dto';
import SlackResponse from './slack_response.dto';

@Injectable()
class EODService {
  constructor(private httpService: HttpService) {}

  postEOD(slackRequest: SlackRequest): void {
    const eodDatetime: Date = new Date();
    const eodDateString: string = eodDatetime.toLocaleDateString();
    const slackResponse: SlackResponse = new SlackResponse(
      'in_channel',
      `EOD was submitted by *${slackRequest.userName}* on ${eodDateString}`,
      [
        {
          text: slackRequest.text,
        },
      ],
    );

    this.httpService.post(slackRequest.responseUrl, slackResponse);
  }
}

export default EODService;
