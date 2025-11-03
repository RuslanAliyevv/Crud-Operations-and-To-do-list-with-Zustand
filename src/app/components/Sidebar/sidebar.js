// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const Sidebar = () => {
//   const pathname = usePathname(); // hazırkı yol

//   const links = [
//     { name: "Dashboard", path: "/dashboard" },
//     { name: "Products", path: "/dashboard/products" },
//     { name: "Orders", path: "/dashboard/orders" },
//     { name: "Users", path: "/dashboard/users" },
//   ];

//   return (
//     <div className="w-64 h-full h-screen bg-gray-800 text-white flex flex-col p-4 absolute top-0 left-0">
//       <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
//       <nav className="flex flex-col gap-2">
//         {links.map((link) => (
//           <Link
//             key={link.path}
//             href={link.path}
//             className={`px-4 py-2 rounded-lg hover:bg-gray-700 transition-all ${
//               pathname === link.path ? "bg-gray-700 font-semibold" : ""
//             }`}
//           >
//             {link.name}
//           </Link>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;