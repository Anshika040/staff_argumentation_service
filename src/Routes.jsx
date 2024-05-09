import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Website from "pages/Website";
import FormFieldEmpty from "pages/FormFieldEmpty";
import FormFieldErrorFilled from "pages/FormFieldErrorFilled";
import Success from "pages/Success";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Website /> },
    { path: "*", element: <NotFound /> },
    {
      path: "website",
      element: <Website />,
    },
    {
      path: "formfieldempty",
      element: <FormFieldEmpty />,
    },
    {
      path: "formfielderrorfilled",
      element: <FormFieldErrorFilled />,
    },
    {
      path: "success",
      element: <Success />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
