export default class SlackResponse {
  constructor(
    public responseType: string,
    public text: string,
    public attachments?: Array<unknown>,
  ) {}
}
