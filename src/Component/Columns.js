import React from "react";

function Columns() {
  const items = [
    {
      id: 1,
      title: "Weoto",
    },
    {
      id: 2,
      title: "Weoto",
    },
  ];
  return (
    <>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <h1>Title</h1>
          <p>{item.title}</p>
        </React.Fragment>
      ))}
      <td>Name</td>
      <td>Sagar</td>
    </>
  );
}

export default Columns;
