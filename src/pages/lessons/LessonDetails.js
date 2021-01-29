import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const LessonDetails = ({ setHideSidebar }) => {
  const [lessonDetails, setLessonDetails] = useState([]);
  const { topics, subtopics } = useParams();
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/lessons/?topic=${topics}`
  );

  useEffect(() => {
    setHideSidebar(false);
    if (data !== null) {
      setLessonDetails(data[0]);
    }
  }, [setHideSidebar, data]);

  return (
    <div className="pl-64">
      {error ?? <div>{error}</div>}
      {isLoading ?? <div>loading...</div>}
      {lessonDetails.topic ?? <div>{lessonDetails.topic}</div>}
    </div>
  );
};

export default LessonDetails;
