import React, { useState } from "react";
import axios from "axios";

const AddVehicle = () => {
  const [input, changeInput] = useState({
    booking_id: "",
    owner_name: "",
    email: "",
    phone: "",
    vehicle_registration_number: "",
    vehicle_brand: "",
    vehicle_model: "",
    battery_capacity_kwh: "",
    connector_type: "",
    charging_date: "",
    time_slot: "",
    estimated_units_kwh: "",
    charging_bay_number: ""
  });

  const inputHandler = (event) => {
    changeInput({
      ...input,
      [event.target.name]: event.target.value
    });
  };

  const readValue = () => {
    console.log(input);

    axios
      .post("https://example.com/api/add-vehicle", input)
      .then((response) => {
        console.log(response.data);
        alert("Vehicle Booking Added Successfully");
      })
      .catch((error) => {
        console.log(error);

        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Something went wrong");
        }
      });
  };

  return (
    <div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-12">

            <h3 className="text-center mb-4">
              Add Vehicle Charging Booking
            </h3>

            <div className="row g-3">

              <div className="col-md-4">
                <label className="form-label">Booking ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="booking_id"
                  value={input.booking_id}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Owner Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="owner_name"
                  value={input.owner_name}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={input.email}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={input.phone}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Vehicle Registration Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="vehicle_registration_number"
                  value={input.vehicle_registration_number}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Vehicle Brand</label>
                <input
                  type="text"
                  className="form-control"
                  name="vehicle_brand"
                  value={input.vehicle_brand}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Vehicle Model</label>
                <input
                  type="text"
                  className="form-control"
                  name="vehicle_model"
                  value={input.vehicle_model}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Battery Capacity (kWh)</label>
                <input
                  type="number"
                  className="form-control"
                  name="battery_capacity_kwh"
                  value={input.battery_capacity_kwh}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Connector Type</label>
                <select
                  className="form-select"
                  name="connector_type"
                  value={input.connector_type}
                  onChange={inputHandler}
                >
                  <option value="">Select Connector</option>
                  <option value="Type 1">Type 1</option>
                  <option value="Type 2">Type 2</option>
                  <option value="CCS">CCS</option>
                  <option value="CHAdeMO">CHAdeMO</option>
                  <option value="GB/T">GB/T</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label">Charging Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="charging_date"
                  value={input.charging_date}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Time Slot</label>
                <input
                  type="text"
                  className="form-control"
                  name="time_slot"
                  placeholder="10:00 AM - 11:00 AM"
                  value={input.time_slot}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Estimated Units (kWh)</label>
                <input
                  type="number"
                  className="form-control"
                  name="estimated_units_kwh"
                  value={input.estimated_units_kwh}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Charging Bay Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="charging_bay_number"
                  value={input.charging_bay_number}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-12 text-center mt-3">
                <button
                  className="btn btn-primary px-5"
                  onClick={readValue}
                >
                  Add Booking
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVehicle;