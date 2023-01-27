const dates = (val: string) => {
  let date = new Date(val.toString());
  let yy: number | string = date.getFullYear();
  let mm: number | string = date.getMonth() + 1;
  let dd: number | string = date.getDate();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  return mm + "/" + dd + "/" + yy;
};

interface InTripItem {
  theImage: string;
  unitName: string;
  unitStyleName: string;
  checkInDate: string;
  locationName: string;
}
const TripItem = ({
  theImage,
  unitName,
  unitStyleName,
  checkInDate,
  locationName
}: InTripItem) => {
  return (
    <div className="trip-item" tabIndex={0}>
      <img
        width="600"
        height="300"
        className="picture"
        alt={locationName}
        //  src={`https://domain.com/${theImage}?width=100&height=100/`}
        src={`https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/${theImage}`}
      />

      <div className="info">
        <h4 aria-label={`unit name ${unitName}`}>{unitName}</h4>
        <div>Style:{unitStyleName} </div>
        <time>Check In:{dates(checkInDate)}</time>
      </div>
    </div>
  );
};
export default TripItem;
