import { useQuery } from "@tanstack/react-query";
import useStudent from "../../../hooks/useStudent";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import SectionTitle from "../../Shared/SectionTitle";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const { user } = useAuth();

  const { data, isLoading } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch(
        "https://epic-tutors-server-side-cxea340sv-alamin0x01.vercel.app/classes"
      );
      return res.json();
    },
  });

  const handleAddToDb = async (item) => {
    if (user && user.email) {
      const selectedClass = {
        classId: item._id,
        className: item.name,
        instructor: item.instructor,
        name: user.name,
        email: user.email,
      };
      fetch(
        "https://epic-tutors-server-side-cxea340sv-alamin0x01.vercel.app/selectClass",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(selectedClass),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class Has been added",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  const [isStudent] = useStudent();

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="mb-3">
      <Helmet>
        <title>Classes | Epic Tutors</title>
      </Helmet>
      <SectionTitle title="All Classes" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
        {data?.map((item) => (
          <div
            key={item._id}
            className={`card  w-96 h-96 bg-sky-200 shadow-xl mt-2 ${
              item.available_seats === 0 ? "bg-red-500" : "bg-base-100"
            }`}
          >
            <figure>
              <img src={item.image} alt="" />
            </figure>
            <div className="card-body bg-cyan-100 ">
              <h2 className="card-title">{item.instructor}</h2>
              <p className="text-2xl font-semibold">{item.name}</p>
              <div className="flex justify-evenly">
                <p>Total Enrolled: {item.enrolled}</p>
                <p>Cost: $ Free</p>
              </div>
              <div className="card-actions justify-center">
                <button
                  onClick={() => {
                    handleAddToDb(item);
                  }}
                  className="btn btn-outline btn-info"
                  disabled={item.available_seats === 0 || !isStudent}
                >
                  Enroll now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
