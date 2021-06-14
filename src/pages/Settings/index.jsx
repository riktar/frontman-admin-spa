import React, { useEffect } from "react";
import { pageNameState } from "store/atoms";
import { useRecoilState } from "recoil";
import classes from "./styles.module.css";
import Button from "@material-tailwind/react/Button";
import { useHistory } from "react-router-dom";

const Settings = (props) => {
  const [pageName, setPageName] = useRecoilState(pageNameState);
  const history = useHistory();
  useEffect(() => {
    setPageName("Settings");
  }, []);
  return (
    <>
      <div className={classes.main}>
        <div className="w-full text-center">
          <h1 className={classes.title}>Settings Page</h1>
          <h2 className={classes.subtitle}>
            Powered by <strong className="text-green-600">Frontman</strong>
          </h2>
          <div className="flex justify-center mt-10">
            <Button
              color="indigo"
              ripple="light"
              onClick={() => history.push("/")}
            >
              Dashboard
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
