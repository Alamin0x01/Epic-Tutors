import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Shared/SectionTitle";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
  const { data, isLoading } = useQuery(["instructors"], async () => {
    const res = await fetch(
      "https://epic-tutors-server-side-cxea340sv-alamin0x01.vercel.app/instructors"
    );
    return res.json();
  });
  console.log(data);

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <Helmet>
        <title>Instructors | Epic Tutors</title>
      </Helmet>
      <SectionTitle title="Instructors" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
        {data?.map((item) => (
          <div key={item._id} className="card w-96 h-96 bg-teal-200 shadow-xl">
            <figure>
              <img src={item.image} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>Email: {item.email}</p>
              <p>Students: {item.students}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
