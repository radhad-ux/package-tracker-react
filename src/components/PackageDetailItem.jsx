import StatusIcon from "./StatusIcon";
export default function PackageDetailItem({ packageDetails }) {
  const {
    status,
    sender,
    location_name,
    location_id,
    notes,
    verification_required,
  } = packageDetails;
  return (
    <div className="package_detailitem">
      <p>Location: {location_name}</p>
      <p>Location_ID: {location_id}</p>
      <p className="sender">Sender: {sender}</p>
      <div className="status_item">
        <p>Status:</p>
        <StatusIcon status={status} />
      </div>
      <p>Verification needed: {verification_required ? "Yes" : "No"}</p>
      <p className="notes">
        Notes: {notes === null ? "No notes provided" : `${notes}`}{" "}
      </p>
    </div>
  );
}
