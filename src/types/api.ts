export type TFilter = "viewed" | "shared" | "emailed";

export interface IResponseApi<T> {
  status: string;
  data: T;
  error?: string;
}
