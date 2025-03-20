import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddCoffee = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = { name, supplier, category, chef, taste, details, photo };
    console.log(newCoffee);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="my-10">
        <div className="w-11/12 mx-auto bg-[#F4F3F0] p-16 relative">
          <Link to='/'>
            <button className="flex gap-2 items-center relative -top-24 -left-12">
              <FaArrowLeft />
              Back to Home
            </button>
          </Link>
          <h3 className="text-center font-bold text-4xl">Add New Coffee</h3>
          <p className="text-[#1B1A1A] opacity-70 text-sm text-center my-3">
            In some cases, coffee may be good for health, as it may offer
            benefits such as lowering the risk of type 2 diabetes and helping
            people lose weight.
          </p>
          <div className="flex justify-around items-center gap-3 w-full">
            <div className="flex flex-col space-y-1 w-5/12">
              <span>Name</span>
              <input
                className="input w-full"
                type="text"
                name="coffee"
                placeholder="Enter Coffee Name"
              />
              <span>Supplier</span>
              <input
                className="input w-full"
                type="text"
                name="supplier"
                placeholder="Enter Supplier Name"
              />
              <span>Category</span>
              <input
                className="input w-full"
                type="text"
                name="category"
                placeholder="Enter Category Name"
              />
            </div>
            <div className="flex flex-col space-y-1 w-5/12">
              <span>Chef</span>
              <input
                className="input w-full"
                type="text"
                name="chef"
                placeholder="Enter Coffee Chef"
              />
              <span>Taste</span>
              <input
                className="input w-full"
                type="text"
                name="taste"
                placeholder="Enter Coffee Taste"
              />
              <span>Details</span>
              <input
                className="input w-full"
                type="text"
                name="details"
                placeholder="Enter Coffee Details"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 w-11/12 mx-auto justify-around items-center">
            <div className="flex flex-col w-full space-y-1">
              <span className="text-start">Photo</span>
              <input
                className="input w-full mx-auto"
                type="url"
                name="photo"
                placeholder="Enter Photo URL"
              />
            </div>
            <input
              className="w-full bg-[#D2B48C] p-3 rounded-lg"
              type="submit"
              value="Add Coffee"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
