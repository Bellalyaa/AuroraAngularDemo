export interface HttpMessage<T> {
    msg: string;
    status: number;
    success: boolean;
    response: T;
}
  