// import BackIcon from '@/shared/assets/icons/back-icon.svg?react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LazyImage } from '@/shared/components/LazyImage';
import { useImagePreload } from '@/shared/hooks/useImagePreload';

interface HeaderProps {
  images: string[];
}

const Header = ({ images }: HeaderProps) => {
  const navigate = useNavigate();
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  // Header의 이미지들은 중요하므로 우선 로드
  useImagePreload(images, { priority: true });

  const handleBackClick = (): void => {
    navigate(-1);
  };

  return (
    <header className="relative mb-8">
      {/* 이미지 슬라이더 */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={8}
        slidesPerView={1}
        className="w-full aspect-[4/5] overflow-hidden"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <LazyImage
              src={src}
              alt={`Header image ${idx + 1}`}
              className="w-full h-full object-cover object-center select-none cursor-zoom-in"
              onLoad={() => console.log(`Header image ${idx + 1} loaded`)}
              onClick={() => setZoomImage(src)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 뒤로가기 버튼 */}
      <div
        onClick={handleBackClick}
        className="absolute top-2 left-2 cursor-pointer z-10"
        role="button"
      >
        <img src="/icons/back-icon.svg" alt="Back" className="w-6 h-6" />
      </div>

      {/* 확대 모달 */}
      {zoomImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setZoomImage(null)}
        >
          <img
            src={zoomImage}
            className="max-w-full max-h-full object-contain cursor-zoom-out"
            alt="zoomed"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
