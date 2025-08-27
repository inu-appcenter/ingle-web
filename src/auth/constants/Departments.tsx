// [ ] 유담 님께 확인 받고 다시.

const UndergraduateCollege = [
  { label: 'Humanities', value: 'HUMANITIES' },
  { label: 'Natural Sciences', value: 'NATURAL_SCIENCES' },
  { label: 'Social Sciences', value: 'SOCIAL_SCIENCES' },
  { label: 'Commerce & Public Affairs', value: 'COMMERCE_PUBLIC_AFFAIRS' },
  { label: 'Engineering', value: 'ENGINEERING' },
  { label: 'Information Technology', value: 'INFORMATION_TECHNOLOGY' },
  { label: 'Business Administration', value: 'BUSINESS' },
  { label: 'Arts and Physical Education', value: 'ARTS_PHYSICAL_EDUCATION' },
  { label: 'Urban Science', value: 'URBAN_SCIENCE' },
  { label: 'Life Sciences and Bioengineering', value: 'LIFE_SCIENCES_BIOENGINEERING' },
  { label: 'School of Northeast Asian Studies', value: 'NORTHEAST_ASIAN_STUDIES' },
  { label: 'School of Law', value: 'LAW' },
];

const UndergraduateDepartment: Record<string, { label: string; value: string }[]> = {
  HUMANITIES: [
    { label: 'Korean Language & Literature', value: 'KOREAN_LITERATURE' },
    { label: 'English Language & Literature', value: 'ENGLISH_LITERATURE' },
    { label: 'German Language & Literature', value: 'GERMAN_STUDIES' },
    { label: 'French Language & Literature', value: 'FRENCH_STUDIES' },
    { label: 'Japanese Regional Culture', value: 'JAPANESE_LITERATURE' },
    { label: 'Chinese Language & Cultural Studies', value: 'CHINESE_STUDIES' },
  ],
  NATURAL_SCIENCES: [
    { label: 'Mathematics', value: 'MATHEMATICS' },
    { label: 'Physics', value: 'PHYSICS' },
    { label: 'Chemistry', value: 'CHEMISTRY' },
    { label: 'Fashion & Industry', value: 'FASHION_INDUSTRY' },
    { label: 'Marine Science', value: 'MARINE_SCIENCE' },
  ],
  SOCIAL_SCIENCES: [
    { label: 'Social Welfare', value: 'SOCIAL_WELFARE' },
    { label: 'Media and Communication', value: 'MEDIA_COMMUNICATION' },
    { label: 'Library and Information Science', value: 'LIBRARY_INFO' },
    {
      label: 'Creative Human Resource Development',
      value: 'CREATIVE_HRD',
    },
  ],
  COMMERCE_PUBLIC_AFFAIRS: [
    { label: 'Public Administration', value: 'PUBLIC_ADMINISTRATION' },
    {
      label: "Political Science & Int'l Relations",
      value: 'POLITICS_DIPLOMACY',
    },
    { label: 'Economics', value: 'ECONOMICS' },
    { label: 'Division International Trade', value: 'TRADE' },
    { label: 'Consumer Science', value: 'CONSUMER_SCIENCE' },
  ],
  ENGINEERING: [
    { label: 'Mechanical Engineering', value: 'MECHANICAL_ENGINEERING' },
    { label: 'Electrical Engineering', value: 'ELECTRICAL_ENGINEERING' },
    { label: 'Electronics Engineering', value: 'ELECTRONICS_ENGINEERING' },
    {
      label: 'Industrial and Management Engineering',
      value: 'INDUSTRIAL_MANAGEMENT',
    },
    { label: 'Materials Science and Engineering', value: 'MATERIAL_SCIENCE' },
    { label: 'Safety Engineering', value: 'SAFETY_ENGINEERING' },
    { label: 'Energy and Chemical Engineering', value: 'ENERGY_CHEMICAL' },
    { label: 'Bio-medical and Robotics Engineering', value: 'BIO_ROBOTICS_ENGINEERING' },
  ],
  INFORMATION_TECHNOLOGY: [
    { label: 'Computer Science and Engineering', value: 'COMPUTER_ENGINEERING' },
    {
      label: 'Information  and Telecommunication Engineering',
      value: 'INFORMATION_COMMUNICATION_ENGINEERING',
    },
    { label: 'Embedded-Systems Engineering', value: 'EMBEDDED_SYSTEM' },
  ],
  BUSINESS: [
    { label: 'Business Administration', value: 'BUSINESS_ADMINISTRATION' },
    { label: 'Data Science', value: 'DATA_SCIENCE' },
    { label: 'Tax & Accounting', value: 'TAX_ACCOUNTING' },
  ],
  ARTS_PHYSICAL_EDUCATION: [
    { label: 'Rine Arts - Korean Painting', value: 'FINE_ARTS' },
    { label: 'Rine Arts - Western Painting', value: 'FINE_ARTS' },
    { label: 'Division of Design', value: 'DESIGN' },
    { label: 'Performing Arts', value: 'PERFORMING_ART' },
    { label: 'Sport Science', value: 'SPORTS_SCIENCE' },
    { label: 'Health and Exercise Science', value: 'HEALTH_EXERCISE' },
  ],
  URBAN_SCIENCE: [
    { label: 'Urban Policy and Administration', value: 'URBAN_ADMINISTRATION' },
    {
      label: 'Construction Environmental Engineering',
      value: 'CIVIL_ENVIRONMENT_ENGINEERING',
    },
    {
      label: 'Environmental Engineering	',
      value: 'CIVIL_ENVIRONMENT_ENGINEERING',
    },
    { label: 'Urban Engineering	', value: 'URBAN_ENGINEERING' },
    { label: 'Architecture and Urban Design', value: 'URBAN_ARCHITECTURE' },
    { label: 'Architectural Engineering', value: 'URBAN_ARCHITECTURE' },
  ],

  LIFE_SCIENCES_BIOENGINEERING: [
    { label: 'Biological Sciences', value: 'LIFE_SCIENCE' },
    { label: 'Molecular and Medical Science', value: 'LIFE_SCIENCE' },
    { label: 'Bioengineering', value: 'BIOENGINEERING' },
    { label: 'Nano-Bioengineering', value: 'BIOENGINEERING' },
  ],
  NORTHEAST_ASIAN_STUDIES: [
    { label: 'Northeast Asian Trade', value: 'NORTHEAST_ASIAN_TRADE' },
    { label: 'Smart Logistics Engineering', value: 'SMART_LOGISTICS_ENGINEERING' },
    { label: 'International Business Economics', value: 'IBE' },
  ],
  LAW: [{ label: 'Law', value: 'LAW' }],
};

const GraduateCollage = [
  //일반 대학원
  { label: 'Humanities and Social Sciences', value: 'HUMANITIES_SOCIAL_SCIENCES' },
  { label: 'Natural Sciences', value: 'NATURAL_SCIENCES' },
  { label: 'Engineering', value: 'ENGINEERING' },
  { label: 'Arts & Physical Education', value: 'ARTS_PHYSICAL_EDUCATION' },
  // ???
  { label: 'Graduate School of Logistics', value: 'GRADUATE_LOGISTICS' },
  { label: 'Education', value: 'EDUCATION' },
  {
    label: 'Graduate School of Public Administration',
    value: 'GRADUATE_PUBLIC_ADMINISTRATION',
  },
  {
    label: 'Graduate School of Information Technology',
    value: 'GRADUATE_INFORMATION_TECHNOLOGY',
  },
  { label: 'Graduate School of Business', value: 'GRADUATE_BUSINESS' },
  { label: 'Graduate School of Engineering', value: 'GRADUATE_ENGINEERING' },
  { label: 'Graduate School of Culture	', value: 'GRADUATE_CULTURE' },
];

const GraduateDepartment: Record<string, { label: string; value: string }[]> = {
  HUMANITIES_SOCIAL_SCIENCES: [{ label: '', value: '' }],
  NATURAL_SCIENCES: [{ label: '', value: '' }],
  ENGINEERING: [{ label: '', value: '' }],
  ARTS_PHYSICAL_EDUCATION: [{ label: '', value: '' }],
  GRADUATE_LOGISTICS: [{ label: '', value: '' }],
  EDUCATION: [{ label: '', value: '' }],
  GRADUATE_PUBLIC_ADMINISTRATION: [{ label: '', value: '' }],
  GRADUATE_INFORMATION_TECHNOLOGY: [{ label: '', value: '' }],
  GRADUATE_BUSINESS: [{ label: '', value: '' }],
  GRADUATE_ENGINEERING: [{ label: '', value: '' }],
  GRADUATE_CULTURE: [{ label: '', value: '' }],
};

export {
  GraduateCollage,
  GraduateDepartment,
  UndergraduateCollege,
  UndergraduateDepartment,
};
