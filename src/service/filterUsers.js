const filterUsers = (name, email, phone, status, users) => {
  let filter = users.filter(
    (user) =>
      user.name.startsWith(name) &&
      user.email.startsWith(email) &&
      user.phone.toString().startsWith(phone)
  );
  console.log(filter);
  console.log(status);
  if (status === "All") {
    return filter;
  } else if (status === "Active") {
    return filter.filter((user) => user.status === true);
  } else if (status === "Inactive") {
    return filter.filter((user) => user.status === false);
  } else return;
};
export default filterUsers;
