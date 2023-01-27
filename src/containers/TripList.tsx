import { useState, useEffect } from "react";
import TripItem from "../components/TripItem";

import { getListAsc, getListDes, getListAscOnLoad } from "./tripsSlice";
import { useAppSelector, useAppDispatch } from "../hooks";
import FilterList from "../components/Filter";
type TyList = {
  theImage: string;
  unitName: string;
  unitStyleName: string;
  checkInDate: string;
  id: number;
  locationName: string;
}[];

const listDisplay = (list: TyList) => {
  let tripItems;

  if (list) {
    tripItems = list.map((item) => (
      <TripItem
        key={item.id}
        theImage={item.theImage ? item.theImage : "imageLoading"}
        unitName={item.unitName}
        unitStyleName={item.unitStyleName}
        locationName={item.locationName}
        checkInDate={item.checkInDate}
      />
    ));
  } else {
    tripItems = <div>No Trip Items to show</div>;
  }

  return tripItems;
};

const TripList = () => {
  const [sortLabel, getSortLabel] = useState(false);
  const dispatch = useAppDispatch();
  const tripsList = useAppSelector((state) => state.tripsList.trips);
  const state = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getListAscOnLoad());
  }, [dispatch]);
  const toggleSort = () => {
    getSortLabel(!sortLabel);
    if (sortLabel) {
      dispatch(getListAsc());
    } else {
      dispatch(getListDes());
    }
  };

  return (
    <>
      <div className="button-holder">
        <button onClick={() => toggleSort()}>
          {sortLabel ? "Sort from closest date" : "Sort from furthest date"}
        </button>
        <FilterList />
      </div>

      <div className="trips">{listDisplay(tripsList)}</div>
    </>
  );
};
export default TripList;
