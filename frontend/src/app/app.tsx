import { LogOut } from "lucide-react";
import { AppSidebar } from "../features/app-sidebar";
import { Button } from "../shared/ui/button";
import { SidebarProvider, SidebarTrigger } from "../shared/ui/sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from "../shared/ui/tooltip";
import { Route, Routes } from "react-router-dom";
import HomePage from "../features/home/home";

export function App() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar />

        <main className="flex flex-1 flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/50 bg-background p-4 shadow-sm">
            <SidebarTrigger />

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <LogOut className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Logout</TooltipContent>
            </Tooltip>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto p-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
