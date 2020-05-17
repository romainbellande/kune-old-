export interface IndustryIdentifier {
  type: string;
  identifier: string;
}

export interface ReadingModes {
  text: boolean;
  image: boolean;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface VolumeInfo {
  subtitle: string[];
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: IndustryIdentifier[];
  readingModes: ReadingModes;
  pageCount: number;
  printType: 'BOOK' | 'MAGAZINE';
  maturityRating: 'MATURE' | 'NOT_MATURE';
  allowAnonLogging: boolean;
  contentVersion: string;
  imageLinks: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}

export interface SaleInfo {
  country: string;
  saleability: 'FOR_SALE' | 'FOR_RENTAL_ONLY' | 'FOR_SALE_AND_RENTAL' | 'FREE' | 'NOT_FOR_SALE' | 'FOR_PREORDER';
  isEbook: boolean;
}

export interface Epub {
  isAvailable: boolean;
}

export interface Pdf {
  isAvailable: boolean;
}

export interface AccessInfo {
  country: string;
  viewability: 'PARTIAL' | 'ALL_PAGES' | 'NO_PAGES' | 'UNKNOWN';
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: 'ALLOWED' | 'ALLOWED_FOR_ACCESSIBILITY' | 'NOT_ALLOWED';
  epub: Epub;
  pdf: Pdf;
  webReaderLink: string;
  accessViewStatus: 'FULL_PURCHASED' | 'FULL_PUBLIC_DOMAIN' | 'SAMPLE' | 'NONE';
  quoteSharingAllowed: boolean;
}

export interface SearchInfo {
  textSnippet: string;
}

export interface Volume {
  kind: 'books#volume';
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo: SearchInfo;
}

export interface VolumesResponse {
  kind: 'books#volume';
  totalItems: number;
  items: Volume[];
}
