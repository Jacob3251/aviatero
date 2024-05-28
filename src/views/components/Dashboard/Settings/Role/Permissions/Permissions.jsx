import Permission from "./Permission";

function Permissions({ permissions }) {
  //   console.log(permissions);
  return (
    <div>
      {permissions.map((permission, index) => (
        <Permission key={index} permissionId={permission}></Permission>
      ))}
    </div>
  );
}

export default Permissions;
