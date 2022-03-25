import deliveryIcon from "../assets/images/statusIcons/delivery.png";
import noteIcon from "../assets/images/statusIcons/invoice.png";
import packIcon from "../assets/images/statusIcons/parcel.png";
import onthewayIcon from "../assets/images/statusIcons/truck.png";

export default function StatusIcon({ status }) {
  return (
    <div className="status_icon">
      {status === "ready-for-pickup" && <img src={packIcon} alt="package" />}
      {status === "on-the-way" && <img src={onthewayIcon} alt="moving truck" />}
      {status === "delivered" && <img src={deliveryIcon} alt="checkbox" />}
      {status === "order-info-received" && <img src={noteIcon} alt="invoice" />}
      <p>{status.toUpperCase()}</p>
    </div>
  );
}
