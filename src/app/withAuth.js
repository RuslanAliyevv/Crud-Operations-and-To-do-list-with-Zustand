export default function withPrivilege(WrappedComponent, requiredPrivilege) {
  return function ProtectedComponent(props) {
    if (typeof window === "undefined") return null;

    const privs = JSON.parse(localStorage.getItem("userPrivileges") || "[]");

    const allowed = privs.includes(requiredPrivilege);

    if (!allowed) {
      return (
        <div className="p-4 bg-red-100 border border-red-300 text-red-700 rounded">
          You do not have permission to view this content.
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
}