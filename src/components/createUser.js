import React, { useState } from "react";

function CreateUser() {
  const [showModal, setshowModal] = useState(false);
  const [value, setvalue] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    bio: "",
    id: "",
  });
  const [editForm, setEditForm] = useState({
    ...value,
  });
  const [list, setList] = useState([]);

  const openModal = () => {
    setshowModal(true);
  };

  const closeModal = () => {
    setshowModal(false);
    setvalue({});
  };

  const handleChange = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };
  const { firstName, lastName, designation, bio } = value;

  const handleSubmitForm = () => {
    const finalVal = {
      ...value,
      id: Math.floor(Math.random() * 10),
    };

    setList([...list, finalVal]);
    closeModal();
  };

  const removeList = (id) => {
    const removeBtn = list.filter((user) => user.id !== id);
    // TODO - will use find index for delete item
    setList(removeBtn);
  };

  const editBtn = (e) => {
    openModal();
    // setEditForm({ ...value, });
  };

  return (
    <div className="py-4">
      <div className="container">
        <div className="row gx-2 mb-5">
          <div className="col-6">
            <h4 className="m-0">Title</h4>
          </div>
          <div className="col-6 text-end">
            <button className="btn btn-primary" onClick={() => openModal()}>
              + Add User
            </button>
          </div>
          {!list.length && (
            <div className="col-12 mt-5 pt-5">
              <div
                className="p-5 border rounded text-center mx-auto"
                style={{ maxWidth: "800px" }}
              >
                <img
                  src="./list.png"
                  alt="empty list"
                  width={60}
                  height={60}
                  className="mb-3"
                />
                <p>
                  Click on the <strong>+ Add User</strong> button in the top
                  right to create a list.
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="row g-2 pt-5">
          {list.map((user) => (
            <div className="col-6" key={user.id}>
              <div className="d-flex align-items-center gap-3 border rounded p-3">
                <img
                  src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"
                  alt=""
                  className="rounded-circle flex-shrink-0"
                  width={50}
                  height={50}
                />
                <div className="user-img flex-1">
                  <h5>
                    {user.firstName} {user.lastName}
                  </h5>
                  <h6>{user.designation}</h6>
                  <p>{user.bio}</p>
                </div>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-primary"
                    onClick={() => removeList(user.id)}
                  >
                    Remove
                  </button>
                  <button className="btn btn-primary" onClick={editBtn}>
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <>
          <div className="my-modal-bg" onClick={closeModal} />
          <div className="my-modal p-3">
            <div className="text-end">
              <button className="btn btn-primary" onClick={closeModal}>
                X
              </button>
            </div>
            <form className="form" onSubmit={(e) => e?.preventDefault()}>
              <h4 className="mb-4">Create User</h4>
              <div className="form-group mb-3">
                <label htmlFor="fName" className="mb-1">
                  First Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={firstName}
                  id="fName"
                  onChange={handleChange}
                  name="firstName"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="lName" className="mb-1">
                  Last Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={lastName}
                  id="lName"
                  onChange={handleChange}
                  name="lastName"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="desig" className="mb-1">
                  Designation
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={designation}
                  id="desig"
                  onChange={handleChange}
                  name="designation"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="bio" className="mb-1">
                  Bio
                </label>
                <textarea
                  className="form-control"
                  rows={5}
                  value={bio}
                  id="bio"
                  name="bio"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-group d-flex gap-2 pt-2">
                <button className="btn btn-primary" onClick={closeModal}>
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={handleSubmitForm}>
                  Create
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default CreateUser;
