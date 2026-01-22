import { AppSidebar } from "@/components/AppSidebar";
import Budget from "@/components/Budget";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useEffect, useState } from "react";
import { AppRadarChart } from "@/components/AppRadarChart";
import { AppPieChart } from "@/components/AppPieChart";
import Transactions from "./Transactions";

const Dashboard = () => {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    console.log("Making a call for the budgets to load");
  }, []);

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <div className="container px-[30px] pt-5">
          <div className="breadcrumbs my-5">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage href="/app/dashboard">
                    Dashboard
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          {/* <SidebarTrigger/> */}
          <div className="dashboard-top flex justify-center">
            <div className="budgets flex-2 flex items-center justify-center flex-col rounded-xl py-6 bg-[#111318] ">
              <div className="budget-items flex justify-center items-center min-h-[280px] ">
                {budgets.length === 0 ? (
                  <p className="text-white/25">No Budgets yet!</p>
                ) : (
                  budgets.map((budget) => (
                    <Budget
                      title={budget.title}
                      startDate={budget.startDate}
                      endDate={budget.endDate}
                      limit={budget.limit}
                    />
                  ))
                )}
              </div>
              <div className="createBudget">
                <Button size="lg" className="btn-primary w-full">
                  Create Budget
                </Button>
              </div>
            </div>
            <div className="transactions flex-1 min-h-[280px] ml-4 rounded-xl py-6  bg-[#111318]">
              <Transactions />
            </div>
          </div>
          <div className="analytics flex gap-5">
            <AppRadarChart />
            <AppPieChart />
            <div className="flex-1"></div>
          </div>
        </div>
      </SidebarProvider>
    </>
  );
};

export default Dashboard;
