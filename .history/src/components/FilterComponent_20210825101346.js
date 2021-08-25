const FilterComponent = ({availableFilters, itemNumber}) => {
   return (
      <div>
      <ul>
        {availableFilters[0].values.map((filter) => (
          <li className="my-2">
            <a href="#" className="text-gray-700">
              {filter.name}<span className="text-gray-500 font-light text-sm">({Math.floor(filter.results / 100)})</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
   )
}

export default FilterComponent
