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
  buildingCategory: string; // "SCHOOL_BUILDING" 같은 enum으로 바꿀 수도 있음
  buildingNumber: number;
  buildingCode: string;
  location: string;
  floor: number;
  openTime: string; // "00:00" 형식 (시간)
  closeTime: string; // "24:00" 형식 (시간)
  phoneNumber: string;
  closedDays: string;
}

export { BuildingDetails, SearchResult };
