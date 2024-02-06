import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <h3>Header</h3>
      <Outlet />
      <h3>Footer</h3>
    </>
  );
}
