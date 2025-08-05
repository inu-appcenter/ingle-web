import { useParams } from 'react-router';

const TutorialDetailPage = () => {
  const { params } = useParams();
  return (
    <div>
      {params === 'transportation' && <div></div>}
      {params === 'dormitory' && <div></div>}
      {params === 'library' && <div></div>}
      {params === 'festival' && <div></div>}
      {params === 'club' && <div></div>}
      {params === 'tuition-payment' && <div></div>}
      {params === 'course-registration' && <div></div>}
      {params === 'course-guide' && <div></div>}
      {params === 'grades-transcript' && <div></div>}
      {params === 'hospital' && <div></div>}
      {params === 'health-insurance' && <div></div>}
      {params === 'jobs-parttime' && <div></div>}
      {params === 'cultural-instights' && <div></div>}
    </div>
  );
};

export default TutorialDetailPage;
