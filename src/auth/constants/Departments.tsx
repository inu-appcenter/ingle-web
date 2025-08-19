//아직 아니세요...

const collegeOptions = [
  { label: 'Humanities', value: 'HUMANITIES' },
  { label: 'Natural Sciences', value: 'NATURAL_SCIENCES' },
  { label: 'Social Sciences', value: 'SOCIAL_SCIENCES' },
  { label: 'Commerce & Public Affairs', value: 'COMMERCE_PUBLIC_AFFAIRS' },
  { label: 'Engineering', value: 'ENGINEERING' },
  { label: 'Information Technology', value: 'INFORMATION_TECHNOLOGY' },
  { label: 'Business', value: 'BUSINESS' },
  { label: 'Arts and Physical Education', value: 'ARTS_PHYSICAL_EDUCATION' },
  { label: 'Education', value: 'EDUCATION' },
  { label: 'Urban Science', value: 'URBAN_SCIENCE' },
  { label: 'Life Sciences and Bioengineering', value: 'LIFE_SCIENCES_BIOENGINEERING' },
  { label: 'School of Northeast Asian Studies', value: 'NORTHEAST_ASIAN_STUDIES' },
  { label: 'School of Law', value: 'LAW' },
];

const departmentOptions: Record<string, { label: string; value: string }[]> = {
  HUMANITIES: [
    { label: 'Korean Language & Literature', value: 'KOREAN_LITERATURE' },
    { label: 'French Language & Literature', value: 'FRENCH_STUDIES' },
    { label: 'English Language & Literature', value: 'ENGLISH_LITERATURE' },
    { label: 'Japanese Language & Literature', value: 'JAPANESE_LITERATURE' },
    { label: 'German Language & Literature', value: 'GERMAN_STUDIES' },
    { label: 'Chinese Language & Cultural Studies', value: 'CHINESE_STUDIES' },
  ],
  NATURAL_SCIENCES: [
    { label: 'Physics', value: 'PHYSICS' },
    { label: 'Chemistry', value: 'CHEMISTRY' },
    { label: 'Mathematics', value: 'MATHEMATICS' },
    { label: 'Fashion industry', value: 'FASHION_INDUSTRY' },
    { label: 'Marine Science', value: 'MARINE_SCIENCE' },
  ],
  SOCIAL_SCIENCES: [
    { label: 'Social Welfare', value: 'SOCIAL_WELFARE' },
    { label: 'Mass Communication', value: 'MEDIA_COMMUNICATION' },
    { label: 'Library and Information Science', value: 'LIBRARY_INFO' },
    {
      label: 'Creative Human Resource Development',
      value: 'CREATIVE_HRD',
    },
  ],
  COMMERCE_PUBLIC_AFFAIRS: [
    { label: 'Public Administration', value: 'PUBLIC_ADMINISTRATION' },
    {
      label: 'Political Science & International Studies',
      value: 'POLITICS_DIPLOMACY',
    },
    { label: 'Economics', value: 'ECONOMICS' },
    { label: 'International Trade', value: 'TRADE' },
    { label: 'Consumer Science', value: 'CONSUMER_SCIENCE' },
  ],
  ENGINEERING: [
    { label: 'Energy and Chemical Engineering', value: 'ENERGY_CHEMICAL' },
    { label: 'Electrical Engineering', value: 'ELECTRICAL_ENGINEERING' },
    { label: 'Electronics Engineering', value: 'ELECTRONICS_ENGINEERING' },
    {
      label: 'Industrial and Management Engineering',
      value: 'INDUSTRIAL_MANAGEMENT',
    },
    { label: 'Materials Science and Engineering', value: 'MATERIAL_SCIENCE' },
    { label: 'Vehicle Engineering', value: 'VEHICLE_ENGINEERING' },
    { label: 'Mechanical Engineering and Robotics', value: 'MECHANICAL_ENGINEERING' },
    { label: 'Biomedical & Robotics Engineering', value: 'BIO_ROBOTICS_ENGINEERING' },
    { label: 'Safety Engineering', value: 'SAFETY_ENGINEERING' },
  ],
  INFORMATION_TECHNOLOGY: [
    { label: 'Computer Science & Engineering', value: 'COMPUTER_ENGINEERING' },
    {
      label: 'Information Telecommunication Engineering',
      value: 'INFORMATION_COMMUNICATION_ENGINEERING',
    },
    { label: 'Embedded-Systems Engineering', value: 'EMBEDDED_SYSTEM' },
  ],
  BUSINESS: [
    { label: 'Business Administration', value: 'BUSINESS_ADMINISTRATION' },
    { label: 'Tax & Accounting', value: 'TAX_ACCOUNTING' },
    { label: 'Technology Management', value: 'TECHNO_MANAGEMENT' },
    { label: 'Data Science', value: 'DATA_SCIENCE' },
  ],
  ARTS_PHYSICAL_EDUCATION: [
    { label: 'Korean Painting Major', value: 'FINE_ARTS' },
    { label: 'Western Painting Major', value: 'FINE_ARTS' },
    { label: 'Division of Design', value: 'DESIGN' },
    { label: 'Performing Arts', value: 'PERFORMING_ART' },
    { label: 'Sport Science', value: 'SPORTS_SCIENCE' },
    { label: 'Health & Kinesiology', value: 'HEALTH_EXERCISE' },
  ],
  EDUCATION: [
    { label: 'Korean Language Education', value: 'KOREAN_EDUCATION' },
    { label: 'English Language Education', value: 'ENGLISH_EDUCATION' },
    { label: 'Japanese Language Education', value: 'JAPANESE_EDUCATION' },
    { label: 'Mathematics Education', value: 'MATH_EDUCATION' },
    { label: 'Physical Education', value: 'PHYSICAL_EDUCATION' },
    { label: 'Early Childhood Education', value: 'EARLY_CHILDHOOD_EDUCATION' },
    { label: 'History Education', value: 'HISTORY_EDUCATION' },
    { label: 'Ethics Education', value: 'ETHICS_EDUCATION' },
  ],
  URBAN_SCIENCE: [
    {
      label: 'Civil and Environmental Engineering	',
      value: 'CIVIL_ENVIRONMENT_ENGINEERING',
    },
    { label: 'Environmental Engineering	', value: 'ENVIRONMENTAL_ENGINEERING' },
    { label: 'Urban Engineering	', value: 'URBAN_ENGINEERING' },
    { label: 'Urban Policy and Administration', value: 'URBAN_ADMINISTRATION' },
    { label: 'Architecture & Urban Design', value: 'URBAN_ARCHITECTURE' },
  ],
  LIFE_SCIENCES_BIOENGINEERING: [
    { label: 'Biological Sciences', value: 'LIFE_SCIENCE' },
    { label: 'Bioengineering', value: 'BIOENGINEERING' },
    { label: 'Molecular & Medical Science', value: 'MOLECULAR_MEDICAL_SCIENCE' },
    { label: 'Nano-Bioengineering', value: 'NANO_BIOENGINNEERING' },
  ],
  NORTHEAST_ASIAN_STUDIES: [
    { label: 'Northeast Asian Trade', value: 'NORTHEAST_ASIAN_TRADE' },
    { label: 'Smart Logistics Engineering', value: 'SMART_LOGISTICS_ENGINEERING' },
    { label: 'International Business Economics', value: 'IBE' },
  ],
  LAW: [{ label: 'Law', value: 'LAW' }],
};

export { collegeOptions, departmentOptions };
