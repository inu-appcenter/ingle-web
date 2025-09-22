// src/router

export const ROUTES = {
  AUTH: '/',
  TUTORIAL: '/tutorial',

  // 튜토리얼 상세페이지 라우트
  TRANSIT: '/tutorial/transit',
  DORMITORY: '/tutorial/dormitory',
  LIBRARY: '/tutorial/library',
  CLUBS: '/tutorial/clubs',
  FESTIVAL: '/tutorial/festival',
  TUITION: '/tutorial/tuition',
  COURSES: '/tutorial/courses',
  CURRICULUM: '/tutorial/curriculum',
  GRADES: '/tutorial/grades',
  HOSPITAL: '/tutorial/hospital',
  INSURANCE: '/tutorial/insurance',
  JOBS: '/tutorial/jobs',
  K_CULTURE: '/tutorial/k-culture',

  STAMP: '/stamp',
  MAP: '/map',
  PROFILE: '/profile',
  PROFILE_EDIT_IMAGE: '/profile/edit/image',
  ADMIN: '/admin',
  NOTFOUND: '*',
} as const;
