import BackIcon from '@/shared/assets/icons/back-icon.svg?react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface HeaderProps {
  images: string[];
}

const Header = ({ images }: HeaderProps) => {
  const navigate = useNavigate();
  const [zoomImage, setZoomImage] = useState<string | null>(null);

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
            <img
              src={src}
              className="w-full h-full object-cover object-center select-none cursor-zoom-in"
              alt={`dormitory-${idx}`}
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
        <BackIcon />
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
