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
  { label: 'Liberal and Interdisciplinary Studies', value: 'LIBERAL_ARTS_COLLEGE' },
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
    { label: 'International Trade', value: 'TRADE' },
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
    { label: 'Division of Sport Science', value: 'SPORTS_SCIENCE' },
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
  LIBERAL_ARTS_COLLEGE: [
    {
      label: 'Undeclared Majors of International Students',
      value: 'INTERNATIONAL_LIBERAL_ARTS',
    },
  ],
  NORTHEAST_ASIAN_STUDIES: [
    { label: 'Smart Logistics Engineering', value: 'SMART_LOGISTICS_ENGINEERING' },
    { label: 'IBE (International Business Economics)', value: 'IBE' },
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
  { label: 'Graduate School of Education', value: 'GRADUATE_EDUCATION' },
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
  HUMANITIES_SOCIAL_SCIENCES: [
    { label: 'Korean Language and Literature', value: 'KOREAN_LITERATURE' },
    {
      label: 'Korean Language Education for Foreigners',
      value: 'KOREAN_EDUCATION_STUDIES',
    },
    { label: 'English Language and Literature', value: 'ENGLISH_LITERATURE' },
    { label: 'German Language and Literature', value: 'GERMAN_STUDIES' },
    { label: 'French Language and Literature', value: 'FRENCH_STUDIES' },
    { label: 'Japanese Regional Culture', value: 'JAPANESE_LITERATURE' },
    { label: 'Chinese Cultural Studies', value: 'CHINESE_STUDIES' },
    { label: 'Education', value: 'EDUCATION' },
    { label: 'Social Welfare', value: 'SOCIAL_WELFARE' },
    { label: 'Ethics', value: 'ETHICS' },
    { label: 'Public Administration', value: 'PUBLIC_ADMINISTRATION' },
    { label: 'Urban Policy and Administration', value: 'URBAN_ADMINISTRATION' },
    { label: 'Politics and International Relations', value: 'POLITICS_DIPLOMACY' },
    { label: 'Mass Communication', value: 'MEDIA_COMMUNICATION' },
    { label: 'Library and Information Science', value: 'LIBRARY_INFO' },
    { label: 'Law', value: 'LAW' },
    { label: 'Business Administration', value: 'BUSINESS_ADMINISTRATION' },
    { label: 'International Trade', value: 'TRADE' },
    { label: 'Economics', value: 'ECONOMICS' },
    { label: 'Northeast Asian Studies', value: 'NORTHEAST_ASIAN_TRADE' },
    { label: 'Consumer Science', value: 'CONSUMER_SCIENCE' },
    {
      label: 'Urban Planning and Policy Studies (Cooperative Process)',
      value: 'URBAN_POLICY_PLANNING',
    },
    {
      label: 'Early Childhood Nature-friendly Education',
      value: 'NATURE_EARLY_EDUCATION',
    },
  ],

  NATURAL_SCIENCES: [
    { label: 'Mathematics', value: 'MATHEMATICS' },
    { label: 'Physics', value: 'PHYSICS' },
    { label: 'Chemistry', value: 'CHEMISTRY' },
    { label: 'Life Sciences', value: 'LIFE_SCIENCE' },
    { label: 'Marine Science', value: 'MARINE_SCIENCE' },
    { label: 'Clothing & Textiles', value: 'CLOTHING_TEXTILES' },
    { label: 'Cosmetic Science & Management', value: 'BEAUTY_INDUSTRY' },
  ],
  ENGINEERING: [
    { label: 'Mechanical Engineering', value: 'MECHANICAL_ENGINEERING' },
    { label: 'Mechatronics Engineering', value: 'MECHATRONICS_ENGINEERING' },
    { label: 'Electrical Engineering', value: 'ELECTRICAL_ENGINEERING' },
    { label: 'Electronics Engineering', value: 'ELECTRONICS_ENGINEERING' },
    { label: 'Industrial & Management Engineering', value: 'INDUSTRIAL_MANAGEMENT' },
    { label: 'Materials Science and Engineering', value: 'MATERIAL_SCIENCE' },
    { label: 'Safety Engineering', value: 'SAFETY_ENGINEERING' },
    { label: 'Energy and Chemical Engineering', value: 'ENERGY_CHEMICAL' },
    { label: 'Computer Science and Engineering', value: 'COMPUTER_ENGINEERING' },
    {
      label: 'Information and Telecommunication Engineering',
      value: 'INFORMATION_COMMUNICATION_ENGINEERING',
    },
    { label: 'Embedded Systems Engineering', value: 'EMBEDDED_SYSTEM' },
    {
      label: 'Civil & Environmental Engineering',
      value: 'CIVIL_ENVIRONMENT_ENGINEERING',
    },
    {
      label: 'Environmental and Energy Engineering',
      value: 'ENVIRONMENTAL_ENERGY_ENGINEERING',
    },
    { label: 'Urban Construction Engineering', value: 'URBAN_CONSTRUCTION_ENGINEERING' },
    { label: 'Architectural Design and Engineering', value: 'ARCHITECTURE' },
    { label: 'Bioengineering and Nano-Bioengineering', value: 'BIO_NANO_ENGINEERING' },
    {
      label: 'International Climate Cooperation (interdisciplinary program)',
      value: 'CLIMATE_INTERNATIONAL_COOPERATION',
    },
    {
      label: 'Urban Convergence Engineering (interdisciplinary program)',
      value: 'URBAN_CONVERGENCE',
    },
    {
      label: 'Intelligent Semiconductor Engineering',
      value: 'INTELLIGENT_SEMICONDUCTOR',
    },
    { label: 'Artificial Intelligence', value: 'ARTIFICIAL_INTELLIGENCE' },
  ],
  ARTS_PHYSICAL_EDUCATION: [
    { label: 'Human Movement Science', value: 'PHYSICAL' },
    { label: 'Arts', value: 'FINE_ART' },
    { label: 'Design', value: 'DESIGN_ART' },
    { label: 'Performing Arts', value: 'PERFORMING_ART' },
  ],

  // ----------------------------------------
  GRADUATE_LOGISTICS: [
    { label: 'Logistics Management', value: 'LOGISTICS_MANAGEMENT' },
    { label: 'Convergence Logistics Systems', value: 'LOGISTICS_SYSTEM' },
  ],
  GRADUATE_EDUCATION: [
    {
      label: 'Educational Administration & Leadership',
      value: 'EDUCATION_ADMINISTRATION_LEADERSHIP',
    },
    { label: 'Lifelong & Vocational Education', value: 'LIFELONG_VOCATIONAL_EDUCATION' },
    { label: 'History Education', value: 'HISTORY_EDUCATION' },
    { label: 'Sports & Cultural Administration', value: 'SPORTS_CULTURE_ADMINISTRATION' },
    { label: 'English Education', value: 'HISTORY_EDUCATION' },
    { label: 'Mathematics Education', value: 'MATH_EDUCATION' },
    { label: 'Media Education', value: 'MEDIA_EDUCATION' },
    { label: 'Art Education', value: 'ART_EDUCATION' },
    { label: 'Early Childhood Education', value: 'EARLY_CHILDHOOD_EDUCATION' },
    {
      label: 'Curriculum Design & Instructional Consulting',
      value: 'INSTRUCTIONAL_DESIGN_CONSULTING',
    },
    { label: 'Creativity & Gifted Education', value: 'CREATIVITY_GIFTED_EDUCATION' },
    { label: 'Child Art Psychotherapy', value: 'CHILD_ART_THERAPY' },
    { label: 'Korean Language Education', value: 'KOREAN_EDUCATION' },
    { label: 'Japanese Language Education', value: 'JAPANESE_EDUCATION' },
    { label: 'Ethics Education', value: 'ETHICS_EDUCATION' },
    { label: 'Counseling Psychology', value: 'COUNSELING_PSYCHOLOGY' },
    { label: 'Physical Education', value: 'PHYSICAL_EDUCATION' },
  ],
  GRADUATE_PUBLIC_ADMINISTRATION: [
    {
      label: 'General Public Administration: Public Administration Major',
      value: 'GENERAL_PUBLIC_ADMINISTRATION',
    },
    {
      label: 'Law and Public Administration: Law Major',
      value: 'JUDICIAL_ADMINISTRATION',
    },
    {
      label:
        'Politics and International Relations: Legislative Politics and International Security Major',
      value: 'LEGISLATIVE_SECURITY_STUDIES',
    },
    { label: 'Social Welfare Studies: Social Welfare Major', value: 'SOCIAL_WELFARE' },
    {
      label: 'Social Welfare Studies: Counseling & Social Welfare Major',
      value: 'COUNSELING_PSYCHOLOGY',
    },
  ],
  GRADUATE_INFORMATION_TECHNOLOGY: [
    { label: 'Major of Computer', value: 'COMPUTER_ENGINEERING' },
    {
      label: 'Major of Information and Telecommunications',
      value: 'INFORMATION_COMMUNICATION_ENGINEERING',
    },
    { label: 'Major of Embedded Systems Engineering', value: 'EMBEDDED_SYSTEM' },
  ],
  GRADUATE_BUSINESS: [
    { label: 'Major of Business Administration', value: 'BUSINESS_ADMINISTRATION' },
  ],
  GRADUATE_ENGINEERING: [
    { label: 'Mechanical Engineering', value: 'MECHANICAL_ENGINEERING' },
    { label: 'Electrical Engineering', value: 'ELECTRICAL_ENGINEERING' },
    { label: 'Urban Engineering', value: 'URBAN_ENGINEERING' },
    { label: 'Industrial & Management Engineering', value: 'INDUSTRIAL_MANAGEMENT' },
    { label: 'Safety and Environmental System Engineering', value: 'SAFETY_ENGINEERING' },
    { label: 'Convergence Design', value: 'CONVERGENCE_DESIGN' },
    {
      label: 'Civil and Environmental Engineering',
      value: 'CIVIL_ENVIRONMENT_ENGINEERING',
    },
    { label: 'Architectural Design and Engineering', value: 'ARCHITECTURE' },
    { label: 'Advanced Materials Engineering', value: 'MATERIAL_SCIENCE' },
    { label: 'Electronic Engineering', value: 'ELECTRONICS_ENGINEERING' },
  ],
  GRADUATE_CULTURE: [{ label: 'Dept. of Local Culture', value: 'LOCAL_CULTURE' }],
};

export {
  GraduateCollage,
  GraduateDepartment,
  UndergraduateCollege,
  UndergraduateDepartment,
};
