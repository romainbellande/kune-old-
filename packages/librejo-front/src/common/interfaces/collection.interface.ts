export default interface Collection<T> {
  data: T[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}
