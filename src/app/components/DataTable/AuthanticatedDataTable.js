import withPrivilege from "@/app/withAuth";
import DataTable from "./table";

const AuthenticatedReplaceDataTable = withPrivilege(DataTable);
export default AuthenticatedReplaceDataTable;