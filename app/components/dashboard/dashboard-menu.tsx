import DashboardMenuCard from "./dashboard-menu-card";

const DashboardMenu = () => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      <DashboardMenuCard />
    </div>
  );
};

export default DashboardMenu;
