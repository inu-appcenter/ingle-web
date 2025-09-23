interface SearchResult {
  buildingId: number;
  buildingName: string;
  latitude: number;
  longitude: number;
  buildingCategory: string;
}

interface BuildingDetails {
  buildingId: number;
  buildingName: string;
  buildingImages: string[];
  latitude: number;
  longitude: number;
  buildingCategory: string;
  buildingNumber: number;
  buildingCode: string;
  location: string;
  floor: number;
  address: string;
  openTime: string; // "00:00" 형식 (시간)
  closeTime: string; // "24:00" 형식 (시간)
  phoneNumber: string;
  inglePick: string;
  closedDays: string[];
  buildingUrl: string;
}

interface Times {
  hour: number;
  minute: number;
}

export { BuildingDetails, SearchResult, Times };
