import { SearchResult } from '@/map/types/Types';

export default function Buildings({ buildingList }: { buildingList: SearchResult[] }) {
  if (!buildingList || buildingList.length === 0) return null;
  console.log('컴포넌트 안', buildingList);

  return (
    <>
      {buildingList.map(building => (
        <div key={building.buildingId} className="p-2 border-b">
          <div className="font-bold">{building.buildingName}</div>
          <div className="text-sm text-gray-500">
            {building.latitude}, {building.longitude}
          </div>
          <div className="text-sm">{building.buildingCategory}</div>
        </div>
      ))}
    </>
  );
}
