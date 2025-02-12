import { RouterProvider } from "react-router-dom";

import router from "@/routes";
import { ThemeProvider } from "@contexts/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </ThemeProvider>
  );
}

export default App;
