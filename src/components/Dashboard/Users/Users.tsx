import React from "react";
import GetCustomers from "../Services/Customers";
import { Headings } from "../Services/Headings";
import Table from "../Table/Table";
import useSort from "../../../hooks/useSort";

const secStyle = {
  padding: "10px 5rem",
  marginTop: "2rem",
};

const Users = () => {
  const [allCustomers, handleSort, setAllCustomers] = useSort(GetCustomers);

  //  Handling delete
  const handleButton = (data: any) => {
    const User = allCustomers.filter((u: { id: number }) => u.id !== data.id);
    setAllCustomers(User);
  };

  //  Sorting data

  const availableCustomers = allCustomers.length;

  if (availableCustomers === 0) {
    return (
      <div style={secStyle}>
        <h3>No user found 🤦‍♂️</h3>
      </div>
    );
  }

  return (
    <section style={secStyle}>
      <h2>Customers Information</h2>
      <p>Hey Mykie, you have {availableCustomers} customers</p>
      <Table
        Content={allCustomers}
        Headings={Headings}
        handleButton={handleButton}
        onSort={handleSort}
      />
    </section>
  );
};

export default Users;
