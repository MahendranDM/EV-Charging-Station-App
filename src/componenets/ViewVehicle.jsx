import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewVehicle = () => {
  const [data, changeData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);

    axios
      .get("http://localhost:3000/api/view-bookings")
      .then((response) => {
        changeData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>

      <div className="container mt-4">
        <h2 className="text-center mb-4">View All Bookings</h2>

        {loading ? (
          <h4 className="text-center text-primary">Loading...</h4>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover text-center align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Booking ID</th>
                  <th>Owner Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Registration No</th>
                  <th>Brand</th>
                  <th>Model</th>
                  <th>Battery (kWh)</th>
                  <th>Connector</th>
                  <th>Charging Date</th>
                  <th>Time Slot</th>
                  <th>Estimated Units</th>
                  <th>Charging Bay</th>
                </tr>
              </thead>

              <tbody>
                {data.map((value, index) => (
                  <tr key={index}>
                    <td>{value.booking_id}</td>
                    <td>{value.owner_name}</td>
                    <td>{value.email}</td>
                    <td>{value.phone}</td>
                    <td>{value.vehicle_registration_number}</td>
                    <td>{value.vehicle_brand}</td>
                    <td>{value.vehicle_model}</td>
                    <td>{value.battery_capacity_kwh}</td>
                    <td>{value.connector_type}</td>
                    <td>{value.charging_date}</td>
                    <td>{value.time_slot}</td>
                    <td>{value.estimated_units_kwh}</td>
                    <td>{value.charging_bay_number}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewVehicle;