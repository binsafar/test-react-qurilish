import profilePhoto from "../assets/img/default.png";
import "./css/table.css";
import { EditIcon, DeleteIcon } from "../assets/icons/icons";

function TableList(members = [{}, {}]) {
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
          {/* {members &&
            members.map((item, index) => {
              return ( */}
          <tr>
            <th scope="row">
              <img className="table_photo" src={profilePhoto} alt="" />
            </th>
            <td>name</td>
            <td>mobile</td>
            <td>email</td>
            <td>status</td>
            <td>operation</td>
            <td>
              <button className="btn">
                <EditIcon />
              </button>
              <button className="btn">
                <DeleteIcon />
              </button>
            </td>
          </tr>
          {/* );
            })} */}
        </tbody>
      </table>
    </>
  );
}

export default TableList;
