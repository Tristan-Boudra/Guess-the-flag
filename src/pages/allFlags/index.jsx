import { useState } from "react";
import Flags from "../../components/flags";
import data from "../../data/data.json";

const AllFlags = () => {
  const [sortBy, setSortBy] = useState("all");
  const flags = data;

  const sortFlags = (a, b) => {
    if (sortBy === "Alphabetical") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "Population +") {
      return b.population - a.population;
    } else if (sortBy === "Population -") {
      return a.population - b.population;
    }
    return 0;
  };

  const sortedFlags = [...flags].sort(sortFlags);

  return (
    <div className="py-10">
      <section className="max-w-screen-xl mx-auto">
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="all">Filter by</option>
          <option value="Alphabetical">Alphabetical</option>
          <option value="Population +">Population +</option>
          <option value="Population -">Population -</option>
        </select>
        <ul className="flex flex-row flex-wrap gap-10 mt-10">
          {sortedFlags.map((flag) => (
            <Flags key={flag.name} data={flag} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AllFlags;
