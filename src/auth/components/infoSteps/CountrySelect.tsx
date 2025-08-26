import LolosArrow from '@/auth/images/depart-select/arrow-lolos.svg?react';
import Checked from '@/auth/images/depart-select/checked.svg?react';
import Empty from '@/auth/images/depart-select/empty.svg?react';

import { useAuthStore } from '@/shared/stores/authStore';
import { useEffect, useRef, useState } from 'react';

import { Countries } from '@/auth/constants/Countries';

type DropdownOption = {
  label: string;
  value: string;
};

type DropdownProps = {
  label: string;
  options: DropdownOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  isOpen: boolean;
  onToggle: () => void;
};

export default function DepartmentSelect() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const { country, setStudentInfo } = useAuthStore();
  const [openDropdown, setOpenDropdown] = useState<null | 'country'>(null);

  useEffect(() => {
    if (country) {
      // 선택된 country 세팅
      const foundCountry = Countries.find(obt => obt.value === country);
      if (foundCountry) {
        setSelectedCountry(foundCountry.label);
      }
    }
  }, [country]);

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col w-[100%] gap-y-8">
        <Dropdown
          label="Country"
          options={Countries}
          selectedValue={country}
          onChange={value => setStudentInfo({ country: value })}
          isOpen={openDropdown === 'country'}
          onToggle={() =>
            setOpenDropdown(prev => (prev === 'country' ? null : 'country'))
          }
        />
      </div>
    </div>
  );
}

function Dropdown({
  label,
  options,
  selectedValue,
  onChange,
  isOpen,
  onToggle,
}: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null); //
  const selectedLabel = options.find(opt => opt.value === selectedValue)?.label;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        onToggle(); // 외부 클릭 시 닫기
      }
    };
  }, [onToggle]);

  return (
    <>
      <div className="relative mb-2" ref={dropdownRef}>
        <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>

        <button
          onClick={onToggle}
          className="flex justify-between items-center w-full p-3 border border-[#9EA1A8] rounded-xl text-left focus:outline-none focus:ring-1 focus:ring-purple-500"
        >
          <span className={selectedLabel ? 'text-[#6C757D]  ' : 'text-[#C1C9D2]'}>
            {selectedLabel || `Select ${label}`}
          </span>
          <span className="ml-2 text-gray-500">
            {isOpen ? <LolosArrow className="rotate-180" /> : <LolosArrow />}
          </span>
        </button>

        {isOpen && (
          <ul
            className="scroll absolute w-full mt-1 py-2 bg-white border border-[#DEE2E6] rounded-xl shadow-lg z-10
          max-h-56 overflow-y-auto"
          >
            {options.map(option => (
              <li
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  onToggle();
                }}
                className={`flex items-center py-[14px] h-12 text-base/4 pl-6 ${selectedValue === option.value ? 'text-[#7949FF]' : 'text-[#6C757D]'}`}
              >
                {selectedValue === option.value ? (
                  <Checked className="w-5 h-5 mr-2" />
                ) : (
                  <Empty className="w-5 h-5 mr-2" />
                )}
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
