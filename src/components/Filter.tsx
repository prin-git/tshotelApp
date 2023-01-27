import { useEffect } from "react";

import { getFilterOption, getFilter } from "../containers/tripsSlice";
import { useAppSelector, useAppDispatch } from "../hooks";

const FilterList = () => {
  const dispatch = useAppDispatch();
  const options = useAppSelector((state) => state.tripsList.filterOptions);
  const state = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getFilterOption());
  }, [dispatch]);

  return (
    <div className="dropdown">
      <label>Filter</label>
      <select
        id="year"
        onChange={(e) => dispatch(getFilter(e.target.value))}
        aria-label="option list to filter the destination"
      >
        <option disabled hidden>
          Select destinations
        </option>
        {options && options.length > 0
          ? options.map((item) => (
              <option tabIndex={0} key={item}>
                {item}
              </option>
            ))
          : null}

        <option tabIndex={0} className="redtext">
          Clear Filter
        </option>
      </select>
    </div>
  );
};
export default FilterList;
