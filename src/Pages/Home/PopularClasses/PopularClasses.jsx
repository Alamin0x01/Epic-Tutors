import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../../Shared/SectionTitle";

const PopularClasses = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["popularClasses"],
    queryFn: async () => {
      const res = await fetch(
        "https://epic-tutors-server-side-cxea340sv-alamin0x01.vercel.app/popularClasses"
      );
      return res.json();
    },
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="mb-3">
      <SectionTitle title="Popular Classes" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
        {data?.map((item, index) => (
          <motion.div
            key={item._id}
            className="card w-96 h-96 bg-sky-200 shadow-xl"
            ref={index === 0 ? ref : null}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <figure>
              <img src={item.image} alt="" />
            </figure>
            <div className="card-body">
              <motion.h2
                className="card-title"
                initial={{ opacity: 0, y: -10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {item.instructor}
              </motion.h2>
              <motion.p
                className="text-2xl font-semibold"
                initial={{ opacity: 0, y: -10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {item.name}
              </motion.p>
              <div className="flex justify-evenly">
                <p>Total Enrolled: {item.enrolled}</p>
                <p>Cost: $ Free</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-3">
        <Link to="/classes">
          <motion.button
            className="btn btn-info btn-outline"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            See All Classes
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default PopularClasses;
