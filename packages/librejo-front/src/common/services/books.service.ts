import axios, { AxiosRequestConfig } from 'axios';
import { VolumesResponse } from '../interfaces/volume/volume.interface';

const client = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
});

export const searchBook = (searchTerms: string, startIndex = 0, config: AxiosRequestConfig = {}) =>
  client.get<VolumesResponse>(`/volumes?q=${searchTerms}&startIndex=${startIndex}&printType=books`, config);
