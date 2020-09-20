export default class SlackRequest {
  constructor(
    public channelName: string,
    public responseUrl: string,
    public text: string,
    public userName: string,
  ) {}
}
