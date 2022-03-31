import * as React from "react";
import { Link } from "react-router-dom";

export default function Xperience() {
  return (
    <div>
      <Link to="/activities/category/daytour">daytour</Link> <br />
      <Link to="/activities/vietnam/product">Product</Link> <br />
      <Link to="/booking">Booking</Link>
    </div>
  );
}
