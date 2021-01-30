import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const LessonDetails = ({ setHideSidebar, lessons, isLoading, error }) => {
  const { topics, subtopics } = useParams();
  const [lessonDetails, setLessonDetails] = useState({
    chapterTitle: "",
    subChapterTitle: "",
    explanation: "",
    problem: "",
    solution: "",
  });
  useEffect(() => {
    setHideSidebar(false);
    if (lessons !== null) {
      const filteredLessons = lessons.filter(
        (lesson) => lesson.topic === `${topics}`
      );
      filteredLessons.forEach((filteredLesson) => {
        if (filteredLesson.topic === `${topics}`) {
          var chapterTitle = filteredLesson.topic;
        }
        filteredLesson.subtopic.forEach((subtopic) => {
          if (subtopic.title === `${subtopics}`) {
            setLessonDetails({
              chapterTitle: chapterTitle,
              subChapterTitle: subtopic.title,
              explanation: subtopic.explanation,
              problem: subtopic.problem,
              solution: subtopic.solution,
            });
          }
        });
      });
    }
  }, [setHideSidebar, lessons, topics, subtopics]);

  return (
    <div className="pl-64">
      {isLoading ?? <h1 className="pl-64">Loading...</h1>}
      <h1>Topic : {lessonDetails.chapterTitle}</h1>
      <h1>subtopic : {lessonDetails.subChapterTitle}</h1>
      <h1>explanation : {lessonDetails.explanation}</h1>
      <h1>problem : {lessonDetails.problem}</h1>
      <h1>Solution : {lessonDetails.solution}</h1>
    </div>
  );
};

export default LessonDetails;
