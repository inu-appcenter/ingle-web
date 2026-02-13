import Header from '@/profile/components/Header';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '@/shared/api/intercepter';
import { LazyImage } from '@/shared/components/LazyImage';

type ProfileImage = {
  id: string; // name
  url: string; // imageUrl + BASE_URL
};

const BASE_URL = import.meta.env.VITE_BASE_URL;

const EditImagePage = () => {
  const [images, setImages] = useState<ProfileImage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getImageList = async () => {
      try {
        const res = await instance.get('/api/v1/members/profile-image');

        const list: ProfileImage[] = (res?.data ?? []).map(
          (item: { name: string; imageUrl: string }) => ({
            id: item.name,
            url: `${BASE_URL}${item.imageUrl}`,
          }),
        );

        setImages(list.slice(0, 9));
      } catch (err) {
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

  const handleSave = async () => {
    if (!selectedId || isSaving) return;

    try {
      setIsSaving(true);

      await instance.put('/api/v1/members/profile-image', null, {
        params: {
          imageName: selectedId, // ✅ 쿼리 파라미터로 전달
        },
      });

      // ✅ 성공 시 뒤로가기
      navigate(-1);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

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

        <div className="mt-4">
          <button
            type="button"
            disabled={!selectedId || isSaving}
            onClick={handleSave}
            className={`w-full h-12 rounded-2xl text-white font-semibold ${
              selectedId && !isSaving ? 'bg-[#7A00E6]' : 'bg-gray-300'
            }`}
          >
            {isSaving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </section>
    </main>
  );
};

export default EditImagePage;
