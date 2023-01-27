import { createSlice } from "@reduxjs/toolkit";
import { trips } from "../constants/trips";

type Tytrips = {
  theImage: string;
  unitName: string;
  unitStyleName: string;
  checkInDate: string;
  id: number;
  locationName: string;
};
interface InTrips {
  trips: {
    theImage: string;
    unitName: string;
    unitStyleName: string;
    checkInDate: string;
    id: number;
    locationName: string;
  }[];
  filterOptions: string[];
}

const initialState: InTrips = {
  trips: trips.tripSet,
  filterOptions: []
};

export const tripsSlice = createSlice({
  name: "tripsList",

  initialState,

  reducers: {
    getListAscOnLoad: (state) => {
      return {
        ...state,
        trips: [...trips.tripSet].sort(
          (a: Tytrips, b: Tytrips) =>
            new Date(a.checkInDate).getTime() -
            new Date(b.checkInDate).getTime()
        )
      };
    },

    getListAsc: (state) => {
      return {
        ...state,
        trips: [...state.trips].sort(
          (a: Tytrips, b: Tytrips) =>
            new Date(a.checkInDate).getTime() -
            new Date(b.checkInDate).getTime()
        )
      };
    },
    getListDes: (state) => {
      return {
        ...state,
        trips: [...state.trips].sort(
          (a: Tytrips, b: Tytrips) =>
            new Date(b.checkInDate).getTime() -
            new Date(a.checkInDate).getTime()
        )
      };
    },

    getFilterOption: (state) => {
      let units = [...trips.tripSet].map((i) => i.unitStyleName);
      let options = units.filter((val, index) => units.indexOf(val) === index);

      return {
        ...state,
        filterOptions: options
      };
    },

    getFilter: (state, action) => {
      return {
        ...state,
        trips:
          action.payload !== "Clear Filter"
            ? trips.tripSet.filter((i) => i.unitStyleName === action.payload)
            : [...trips.tripSet].sort(
                (a: Tytrips, b: Tytrips) =>
                  new Date(a.checkInDate).getTime() -
                  new Date(b.checkInDate).getTime()
              )
      };
    }
  }
});

export const {
  getListAsc,
  getListDes,
  getFilterOption,
  getListAscOnLoad,
  getFilter
} = tripsSlice.actions;

export default tripsSlice.reducer;
