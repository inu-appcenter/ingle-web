import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/router/routes';

const PrivacyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full bg-white p-6 overflow-y-auto">
      {/* 헤더 */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="mr-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-gray-900">개인정보처리방침</h1>
      </div>

      {/* 내용 */}
      <div className="space-y-6 text-gray-700">
        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-900">
            1. 개인정보의 처리목적
          </h2>
          <p className="text-sm leading-relaxed">
            INGLE 앱은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는
            개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는
            경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를
            이행할 예정입니다.
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>• 서비스 제공 및 계약 이행</li>
            <li>• 회원 식별 및 인증</li>
            <li>• 고객 문의 및 불만 처리</li>
            <li>• 서비스 개선 및 신규 서비스 개발</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-900">
            2. 처리하는 개인정보의 항목
          </h2>
          <p className="text-sm leading-relaxed mb-3">
            INGLE 앱은 다음의 개인정보 항목을 처리하고 있습니다.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">필수항목</h3>
            <ul className="text-sm space-y-1">
              <li>• 이메일 주소</li>
              <li>• 닉네임</li>
              <li>• 프로필 이미지</li>
            </ul>
            <h3 className="font-medium mb-2 mt-4">자동 수집 항목</h3>
            <ul className="text-sm space-y-1">
              <li>• 서비스 이용 기록</li>
              <li>• 접속 로그</li>
              <li>• 쿠키</li>
              <li>• 접속 IP 정보</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-900">
            3. 개인정보의 처리 및 보유기간
          </h2>
          <p className="text-sm leading-relaxed">
            INGLE 앱은 정보주체로부터 개인정보를 수집할 때 동의받은 개인정보 보유·이용기간
            또는 법령에 따른 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>• 회원 정보: 회원 탈퇴 시까지</li>
            <li>• 서비스 이용 기록: 3년</li>
            <li>• 접속 로그: 1년</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-900">
            4. 개인정보의 제3자 제공
          </h2>
          <p className="text-sm leading-relaxed">
            INGLE 앱은 개인정보를 제1조(개인정보의 처리목적)에서 명시한 범위 내에서만
            처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보보호법 제17조에
            해당하는 경우에만 개인정보를 제3자에게 제공합니다.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-900">
            5. 개인정보처리의 위탁
          </h2>
          <p className="text-sm leading-relaxed">
            INGLE 앱은 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를
            위탁하고 있습니다.
          </p>
          <div className="mt-3 bg-gray-50 p-4 rounded-lg">
            <p className="text-sm">
              <strong>위탁받는 자:</strong> Google Cloud Platform
              <br />
              <strong>위탁하는 업무의 내용:</strong> 서버 운영 및 데이터 저장
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-900">
            6. 정보주체의 권리·의무 및 행사방법
          </h2>
          <p className="text-sm leading-relaxed mb-3">
            정보주체는 INGLE 앱에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를
            행사할 수 있습니다.
          </p>
          <ul className="space-y-2 text-sm">
            <li>• 개인정보 처리현황 통지요구</li>
            <li>• 개인정보 열람요구</li>
            <li>• 개인정보 정정·삭제요구</li>
            <li>• 개인정보 처리정지요구</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-900">
            7. 개인정보의 안전성 확보조치
          </h2>
          <p className="text-sm leading-relaxed">
            INGLE 앱은 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>• 관리적 조치: 내부관리계획 수립, 전담조직 운영</li>
            <li>
              • 기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치
            </li>
            <li>• 물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-900">
            8. 개인정보 보호책임자
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm">
              <strong>개인정보 보호책임자:</strong> 인천대학교 앱센터 Ingle 개발팀
              <br />
              <strong>연락처:</strong>
              inuappcenter@gmail.com
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-900">
            9. 개인정보처리방침의 변경
          </h2>
          <p className="text-sm leading-relaxed">
            이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의
            추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을
            통하여 고지할 것입니다.
          </p>
        </div>

        <div className="pt-4 border-t">
          <p className="text-sm text-gray-500">
            <strong>시행일자:</strong> 2025년 1월 1일
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
