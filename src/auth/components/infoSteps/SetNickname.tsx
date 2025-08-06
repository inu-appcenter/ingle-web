import { useAuthStore } from '@/auth/stores/authStore';
import { useState } from 'react';
import imgCorrect from '../../images/correct-circle.svg';
import imgWrong from '../../images/wrong-circle.svg';

function SetNickname() {
  //const nickname = useAuthStore(state => state.nickname);

  const setStudentInfo = useAuthStore(state => state.setStudentInfo);

  const [studentId, setStudentId] = useState('');
  const [nickname, setNickname] = useState('');
  const [studentIdStatus, setStudentIdStatus] = useState<
    'default' | 'valid' | 'invalid'
  >('default');
  const [nicknameStatus, setNicknameStatus] = useState<
    'default' | 'valid' | 'invalid'
  >('default');
  //onChange는 타자 하나 입력할 때마다 랜더링한다.
  //react form hook 사용해서 사용자가 모두 입력했을 경우에만 랜더링하도록 하기.

  return (
    <div>
      {/* Student ID */}
      <div className="mb-4">
        <label
          htmlFor="studentId"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Student ID
        </label>
        <input
          id="studentId"
          type="text"
          value={studentId}
          onChange={e => setStudentId(e.target.value)}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none transition
                ${
                  studentIdStatus === 'valid'
                    ? 'border-green-500'
                    : studentIdStatus === 'invalid'
                      ? 'border-red-500'
                      : 'border-gray-300'
                }`}
          placeholder="20xxxxxxx"
        />
        {studentIdStatus === 'valid' && (
          <p className="text-green-600 text-sm mt-1">
            <img src={imgCorrect} alt="imgcorrect" /> Correct!
          </p>
        )}
        {studentIdStatus === 'invalid' && (
          <p className="text-red-600 text-sm mt-1">
            <img src={imgWrong} alt="imgwrong" /> Doesn't match
          </p>
        )}
      </div>

      {/* Nickname */}
      <div>
        <label
          htmlFor="nickname"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Nickname
        </label>
        <input
          id="nickname"
          type="text"
          value={nickname}
          onChange={e => setNickname(e.target.value)}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none transition 
                ${
                  nicknameStatus === 'valid'
                    ? 'border-green-500'
                    : nicknameStatus === 'invalid'
                      ? 'border-red-500'
                      : 'border-gray-300'
                }`}
          placeholder="Enter your Nickname"
        />
        {nicknameStatus === 'valid' && (
          <p className="text-green-600 text-sm mt-1">
            <img src={imgCorrect} alt="imgcorrect" /> Available!
          </p>
        )}
        {nicknameStatus === 'invalid' && (
          <p className="text-red-600 text-sm mt-1">
            <img src={imgWrong} alt="imgwrong" />
            Already taken.
          </p>
        )}
      </div>
    </div>
  );
}

export default SetNickname;
