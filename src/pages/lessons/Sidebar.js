import { Link } from "react-router-dom";

const Sidebar = ({ lessons, isLoading, error }) => {
  return (
    <div className="fixed flex flex-col w-64 h-screen bg-reallydark shadow-md font-roboto z-10 p-4 text-white overflow-y-auto">
      <Link
        to="/"
        className="w-48 font-mono text-3xl text-center rounded-xl mx-auto pb-3 pt-2 px-2 mt-4 mb-6 block bg-orange shadow-lg"
      >
        dingoding.
      </Link>
      {error && <div>{error}</div>}
      {isLoading && <div>loading...</div>}
      {lessons && lessons.map((lesson) => (
        <>
        <h1 key={lesson.id} className="text-lg font-medium my-2">{lesson.topic}</h1>
        {lesson.subtopic.map((sub, index) =>(
          <h1 key={index} className="py-2 px-4 text-sm rounded-lg transition duration-200 ease-in-out hover:bg-orange hover:shadow-lg">{sub.title}</h1>
        ))}
        </>
      ))}
    </div>
  );
};

export default Sidebar;

