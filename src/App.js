import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "screens/Home/Home";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Pokemon from "screens/Pokemon/Pokemon";

const theme = extendTheme({
  textStyles: {
    paragraph: {
      fontFamily: "sans-serif",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokemon/:id",
    element: <Pokemon />,
  },
  {
    path: "*",
    element: <p>404</p>,
  },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
