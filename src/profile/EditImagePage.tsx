import Header from '@/profile/components/Header';
import { useEffect, useState } from 'react';
import instance from '@/shared/api/intercepter';
import { LazyImage } from '@/shared/components/LazyImage';

type ProfileImage = {
  id: string;
  url: string;
};

const EditImagePage = () => {
  const [images, setImages] = useState<ProfileImage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const getImageList = async () => {
      try {
        // TODO: 실제 API 엔드포인트로 교체
        const res = await instance.get('/api/v1/profile/images');
        const list: ProfileImage[] = res?.data?.images ?? [];
        setImages(list.slice(0, 9));
      } catch (err) {
        // 실패 시 임시 플레이스홀더 9개
        const fallback: ProfileImage[] = Array.from({ length: 9 }).map((_, i) => ({
          id: String(i + 1),
          url: '/images/inu.png',
        }));
        setImages(fallback);
      } finally {
        setIsLoading(false);
      }
    };

    getImageList();
  }, []);

  return (
    <main
      className="flex flex-col h-screen bg-[#F9F9F9]"
      style={{ height: 'calc(100vh - 64px)' }}
    >
      <Header>Your picture</Header>

      {/* 선택한 이미지 프리뷰 */}
      <div className="flex justify-center items-center py-6">
        {selectedId ? (
          <img
            src={images.find(img => img.id === selectedId)?.url}
            alt="selected"
            className="w-40 h-40 rounded-full object-cover"
          />
        ) : (
          <div className="w-40 h-40 rounded-full bg-[#d9d9d9]" />
        )}
      </div>

      <section className="mt-auto px-4 rounded-t-[30px] bg-[#ffffff] pt-6 pb-8">
        {/* 3x3 그리드, 좌우 여백 16px(=px-4) 유지, 반응형 */}
        <div className="grid grid-cols-3 gap-2">
          {(isLoading ? Array.from({ length: 9 }) : images).map(
            (item: any, idx: number) => {
              const id = isLoading ? String(idx) : (item as ProfileImage).id;
              const url = isLoading ? '' : (item as ProfileImage).url;
              const isSelected = selectedId === id;

              return (
                <button
                  key={id}
                  type="button"
                  className={`relative w-full aspect-square rounded-full overflow-hidden border ${
                    isSelected
                      ? 'border-[#7A00E6] border-2'
                      : 'border-[rgba(84,76,76,0.14)]'
                  }`}
                  onClick={() => setSelectedId(id)}
                >
                  {isLoading ? (
                    <div className="w-full h-full bg-gray-200 animate-pulse" />
                  ) : (
                    <LazyImage
                      src={url}
                      alt={`profile-${id}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </button>
              );
            },
          )}
        </div>

        {/* 선택 이후 수정 액션 예시 버튼 (후속 기능 연결용) */}
        <div className="mt-4">
          <button
            type="button"
            disabled={!selectedId}
            className={`w-full h-12 rounded-2xl text-white font-semibold ${
              selectedId ? 'bg-[#7A00E6]' : 'bg-gray-300'
            }`}
          >
            Save
          </button>
        </div>
      </section>
    </main>
  );
};

export default EditImagePage;
