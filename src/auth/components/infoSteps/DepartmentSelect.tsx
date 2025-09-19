import LolosArrow from '@/auth/images/depart-select/arrow-lolos.svg?react';
import Checked from '@/auth/images/depart-select/checked.svg?react';
import Empty from '@/auth/images/depart-select/empty.svg?react';

import { useAuthStore } from '@/shared/stores/authStore';
import { useEffect, useRef, useState } from 'react';

import {
  GraduateCollage,
  GraduateDepartment,
  UndergraduateCollege,
  UndergraduateDepartment,
} from '@/auth/constants/Departments';

export type DropdownOption = {
  label: string;
  value: string;
};

export type DropdownProps = {
  label: string;
  options: DropdownOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  isOpen: boolean;
  onToggle: () => void;
};

export default function DepartmentSelect() {
  const [selectedCollege, setSelectedCollege] = useState('');
  const { department, setStudentInfo, studentType } = useAuthStore();
  const [openDropdown, setOpenDropdown] = useState<null | 'college' | 'department'>(null);

  useEffect(() => {
    let foundCollege;
    if (department) {
      // department에 맞는 college 찾아서 세팅
      if (department === 'GRADUATE') {
        foundCollege = Object.keys(GraduateDepartment).find(college =>
          GraduateDepartment[college].some(opt => opt.value === department),
        );
      } else {
        foundCollege = Object.keys(UndergraduateDepartment).find(college =>
          UndergraduateDepartment[college].some(opt => opt.value === department),
        );
      }
      if (foundCollege) {
        setSelectedCollege(foundCollege);
      }
    }
  }, [department]);

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col w-[100%] gap-y-8">
        <Dropdown
          label={studentType === 'GRADUATE' ? 'Graduate School of College' : 'College'}
          options={studentType === 'GRADUATE' ? GraduateCollage : UndergraduateCollege}
          selectedValue={selectedCollege}
          onChange={value => {
            setSelectedCollege(value);
            setStudentInfo({ department: '' }); // 학과 초기화
          }}
          isOpen={openDropdown === 'college'}
          onToggle={() =>
            setOpenDropdown(prev => (prev === 'college' ? null : 'college'))
          }
        />
        <Dropdown
          label="Department"
          options={
            studentType === 'GRADUATE'
              ? GraduateDepartment[selectedCollege] || []
              : UndergraduateDepartment[selectedCollege] || []
          }
          selectedValue={department}
          onChange={value => setStudentInfo({ department: value })}
          isOpen={openDropdown === 'department'}
          onToggle={() =>
            setOpenDropdown(prev => (prev === 'department' ? null : 'department'))
          }
        />
      </div>
    </div>
  );
}

export function Dropdown({
  label,
  options,
  selectedValue,
  onChange,
  isOpen,
  onToggle,
}: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null); //
  const safeOptions = (options ?? []).filter(
    (opt): opt is DropdownOption =>
      !!opt && typeof opt.value === 'string' && typeof opt.label === 'string',
  );
  const selectedLabel = safeOptions.find(opt => opt.value === selectedValue)?.label;

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
            {safeOptions.map(option => (
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
