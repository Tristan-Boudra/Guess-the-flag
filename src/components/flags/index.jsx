const Flags = (props) => {
  const nbrPopulation = props.data.population
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return (
    <li className="flex flex-col border border-primary rounded-lg items-center w-1/4 mx-auto">
      <img src={props.data.flag} alt={props.data.name} className="w-42" />
      <div className="mt-5">
        <h1 className="text-primary font-medium text-lg">
          Name:{" "}
          <strong className="text-black font-normal text-base">
            {props.data.name}
          </strong>
        </h1>
        <p className="text-primary font-medium text-lg">
          Capital:{" "}
          <strong className="text-black font-normal text-base">
            {props.data.capital}
          </strong>
        </p>
        <p className="text-primary font-medium text-lg">
          Residents:{" "}
          <strong className="text-black font-normal text-base">
            {nbrPopulation}
          </strong>
        </p>
      </div>
    </li>
  );
};

export default Flags;
