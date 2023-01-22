import profilePhoto from "../assets/img/default.png";
import EditData from "./EditData";
import DeleteData from "./DeleteData";
import "./css/table.css";

function TableList({ users }) {
  const editData = () => {};
  const deleteData = () => {};

  return (
    <>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">Member name</th>
            <th scope="col">Mobile</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
            <th scope="col">Operation</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((item, index) => {
              return (
                <tr className="table_content" key={item.id}>
                  <th scope="row">
                    <img className="table_photo" src={profilePhoto} alt="" />
                  </th>
                  <td>{item.name}</td>
                  <td>{item.mobile}</td>
                  <td>{item.email}</td>
                  <td>
                    <p
                      className={`${
                        item.status === "true"
                          ? "table_active text-success"
                          : "table_inactive text-danger"
                      } table_td`}
                    >
                      {item.status === "true" ? "Active" : "Inactive"}
                    </p>
                  </td>
                  <td>{item.operation}</td>
                  <td>
                    <EditData data={item} />
                    <DeleteData id={item.id} name={item.name} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default TableList;
