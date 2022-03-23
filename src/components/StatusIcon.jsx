import React from "react";
import packIcon from "../assets/parcel.png";
import onthewayIcon from "../assets/truck.png";
import deliveryIcon from "../assets/deliveryone.png";
import noteIcon from "../assets/invoiceone.png";

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
