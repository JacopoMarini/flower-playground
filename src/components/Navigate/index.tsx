import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../utils/appRoutes";
import { NavigateProps } from "./types";

export const Navigate = ({ path, replace }: NavigateProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(APP_ROUTES[path], { replace });
  }, [navigate, path, replace]);

  return null;
};
