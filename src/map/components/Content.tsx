export default function Content() {
  return (
    <>
      <h1>음식점/편의점/담배부스/카페/버스정류장 이름</h1>
      <h3>한줄 부가 설명</h3>
      <div className="flex flex-row gap-4 my-5">
        <div className="w-40 h-25 bg-gray-500" />
        <div className="w-40 h-25 bg-gray-500" />
      </div>
      <div>운영 시간 + 현재 상태(open/closed)</div>
      <div>추가 정보</div>
      <button>관리자에게 신고</button>
      <button>더 많은 디테일 : 링크 연결</button>
    </>
  );
}
