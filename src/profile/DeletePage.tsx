import Header from '@/profile/components/Header';
import Button from '@/tutorials/components/Button';
import { useNavigate } from 'react-router';

const DeletePage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F9F9F9] h-full flex flex-col">
      <Header>Delete Account</Header>
      <main className="px-4 flex flex-col flex-1 gap-5">
        <p>
          Thank you for using INGLE.Please take a moment to let us know why you are
          leaving.
        </p>
        <div className="flex flex-col gap-5">
          <label className="flex items-center gap-2">
            <input type="radio" name="reason" value="not-using" />
            No longer using the service
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="reason" value="alternative" />
            Found a better alternative
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="reason" value="privacy" />
            Privacy concerns
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="reason" value="difficulty" />
            Difficulty navigating the platform
          </label>
        </div>
      </main>
      <div
        onClick={() => {
          navigate(-1);
        }}
        className="px-4 py-4"
      >
        <Button>Send</Button>
      </div>
    </div>
  );
};

export default DeletePage;
