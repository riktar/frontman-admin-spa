import React, { useEffect } from "react";
import { pageNameState, activeUserState } from "store/atoms";
import { useSetRecoilState, useRecoilValue } from "recoil";
import PageName from "../../components/PageName";
import classes from "./styles.module.css";
import { useHistory } from "react-router-dom";
import Button from "@material-tailwind/react/Button";

const Home = (props) => {
  const setPageName = useSetRecoilState(pageNameState);
  const activeUser = useRecoilValue(activeUserState);
  const history = useHistory();
  useEffect(() => {
    setPageName("Home");
  }, []);

  return (
    <>
      <div className={classes.main}>
        <div className="w-full text-center">
          <h1 className={classes.title}>Ready to Code!</h1>
          <h2 className={classes.subtitle}>
            Powered by <strong className="text-green-600">Frontman</strong>
          </h2>
          <PageName />
          <div className="flex justify-center mt-10">
            <Button
              color="indigo"
              ripple="light"
              onClick={() => history.push("/settings")}
            >
              Settings
            </Button>
          </div>
          <p className="mt-10">
            <strong>User Recoil:</strong> {activeUser.name} {activeUser.surname}
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
