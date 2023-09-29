import { Link } from "react-router-dom";
import useSelectedClass from "../../../../hooks/useSelectedClass";
import SectionTitle from "../../../Shared/SectionTitle";
import { Helmet } from "react-helmet-async";

const SelectedClass = () => {
  const [selectedClass] = useSelectedClass();

  return (
    <div>
      <Helmet>
        <title>Selected Class | Epic Tutors</title>
      </Helmet>
      <SectionTitle title="Selected Class" />
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
        <h3 className="text-2xl">Total Courses: {selectedClass?.length}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-info text-white"></thead>
          <tbody>
            {selectedClass?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.className}</td>
                <td>{item.classPrice}</td>
                <td>{item.instructor}</td>
                <td>
                  <Link state={item} to="/dashboard/payment">
                    <button className="btn btn-sm btn-success">
                      START COURSE
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClass;
