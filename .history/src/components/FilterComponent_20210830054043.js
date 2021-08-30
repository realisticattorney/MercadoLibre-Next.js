const FilterComponent = ({ availableFilters, itemNumber }) => {

  if(availableFilters.length === 0) {
    return null;
  }
  
  return (
    <div>
      <ul>
        {availableFilters[itemNumber]?.values.slice(0, 8).map((filter) => (
          <li className="my-2">
            <a href="#" className="text-gray-700">
              {filter.name}
              <span className="text-gray-500 font-light text-sm">
                {' '}
                ({Math.floor(filter.results / 100)})
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterComponent;
