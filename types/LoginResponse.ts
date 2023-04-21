export interface LoginSuccessResponse {
  token: string;
}

export interface LoginFailedResponse {
  data: {
    statusCode: number;
    message: string;
  }
}
