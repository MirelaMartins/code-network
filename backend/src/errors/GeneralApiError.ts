export default class ApiError {
  public readonly message: Record<string, any>;

  public readonly httpStatusCode: number;

  constructor(message: Record<string, any> | any, httpStatusCode: number) {
    this.httpStatusCode = httpStatusCode;
    this.message = message;
  }
}
