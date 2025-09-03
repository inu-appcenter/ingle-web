import Header from '@/profile/components/Header';
import Button from '@/tutorials/components/Button';
import { useNavigate } from 'react-router';

const SupportPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F9F9F9] h-full flex flex-col">
      <Header>Support</Header>
      <main className="px-4 flex flex-col flex-1 gap-5">
        <h2 className="text-2xl font-bold">We value your feedback</h2>
        <p>
          Share what features or improvements you’d like to see, and we’ll work to make
          the app even better for you.
        </p>
        <textarea
          className="border border-[#9EA1A8] rounded-xl h-40 px-4 py-5 outline-none"
          placeholder="e.g., Add more 00000 information"
        />
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

export default SupportPage;
