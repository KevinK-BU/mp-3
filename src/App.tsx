
import {createBrowserRouter, RouterProvider} from "react-router";
import Root from "./Root.tsx";
import styled from "styled-components";

const PageWrapper = styled.div`
    width: 80vw;
    background-color: #806443;
    margin: 0 auto; /* the zero says have no margin in the top and bottom*/
`

const router = createBrowserRouter(
    [{path:'*',Component: Root}]
)

function App() {


  return (
    <PageWrapper>
      <RouterProvider router={router}/>
    </PageWrapper>
  )
}

export default App
