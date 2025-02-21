import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import router from "@/routes";
import { ThemeProvider } from "@contexts/ThemeProvider";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
