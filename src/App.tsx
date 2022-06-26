import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Router } from "react-router-dom";

import { client } from "./lib/apollo";
import { Routers } from "./Routers";




export function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </ApolloProvider>
      
    </div>
  )
}


