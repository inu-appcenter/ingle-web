import { useAuthStore } from '@/auth/stores/authStore';
import { useEffect, useRef, useState } from 'react';
// option은 박스 모양을 바꿀 수 없음 => custom select box를 만들어야 함
import {
  collegeOptions,
  departmentOptions,
} from '@/auth/constants/departments';

type DropdownOption = {
  label: string;
  value: string;
};

type DropdownProps = {
  label: string;
  options: DropdownOption[];
  selectedValue: string;
  onChange: (value: string) => void;
};

function Dropdown({ label, options, selectedValue, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); //

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false); // 드롭다운 외부 클릭 시 닫기
      }
    };
  });

  const selectedLabel = options.find(opt => opt.value === selectedValue)?.label;

  return (
    <>
      <div className="relative mb-2" ref={dropdownRef}>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>

        <button
          onClick={() => setIsOpen(prev => !prev)}
          className="flex justify-between items-center w-full p-2 border border-gray-300 rounded-lg text-left focus:outline-none focus:ring-1 focus:ring-purple-500"
        >
          <span>{selectedLabel || `Select ${label}`}</span>
          <span className="ml-2 text-gray-500">{isOpen ? '▲' : '▼'}</span>
        </button>

        {isOpen && (
          <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            {options.map(option => (
              <li
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`p-2 ${selectedValue === option.value ? 'text-[#7949FF]' : ''}`}
              >
                <input
                  type="checkbox"
                  checked={selectedValue === option.value}
                  readOnly
                  className="mr-2 accent-purple-500"
                />
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default function DepartmentSelect() {
  const [selectedCollege, setSelectedCollege] = useState('');
  //const [selectedDepartment, setSelectedDepartment] = useState('');
  const department = useAuthStore(state => state.department);
  const setStudentInfo = useAuthStore(state => state.setStudentInfo);

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col w-[100%] gap-y-8">
        <Dropdown
          label="College"
          options={collegeOptions}
          selectedValue={selectedCollege}
          onChange={value => {
            setSelectedCollege(value);
            setStudentInfo({ department: '' }); // 학과 초기화
          }}
        />
        <Dropdown
          label="Department"
          options={departmentOptions[selectedCollege] || []}
          selectedValue={department}
          onChange={value => setStudentInfo({ department: value })}
        />
      </div>
    </div>
  );
}
