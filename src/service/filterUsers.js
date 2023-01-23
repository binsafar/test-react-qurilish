const filterUsers = (name, email, phone, status, users) => {
  let filter = users.filter(
    (user) =>
      user.name.startsWith(name) &&
      user.email.startsWith(email) &&
      user.phone.startsWith(phone)
  );

  console.log(filter);
  console.log(status);

  if (status == "All") {
    return filter;
  } else if (status == "Active") {
    filter.filter((user) => user.status == true);
    return filter;
  } else if (status == "Inactive") {
    filter.filter((user) => user.status == false);
    return filter;
  } else {
  }
};
export default filterUsers;
