export interface Product {
  self?: ProductInfo;
  events?: Event;
}

export interface ProductInfo {
  code: string;
  packageType: PackageType;
}

export interface Event {
  event: EventInfo[];
}

export interface EventInfo {
  eventTime: number;
  disposition: string;
  bizStep: string;
  location: any;
  type: string;
}

export interface PackageType {
  name: string,
  type: string,
  material: string
}

export interface Location {
  name: string,
  country: Country,
  coordinates: Coordinates,
  mapLocation: string
}

export interface Country {
  name: string,
  code: string
}

export interface Coordinates {
  latitude: string,
  longitude: string
}

