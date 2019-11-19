import React, { useEffect } from "react";
import { setCurContest } from "../../store/contests";
import { useSelector, useDispatch } from "react-redux";
import { withRouter, useParams } from "react-router-dom";
import Contest from "../../components/contest/Contest";
import "./Contest.scss";
import axios from "axios";

function ContestPage() {
  const url = useSelector(state => state.root.url);
  const contest = useSelector(state => state.contests.curContest);
  const token = useSelector(state => state.auth.token);

  let { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const options = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        };
    
        const res = await axios.get(`${url}contests/${id}`,options);
        dispatch(setCurContest(res.data));
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [id,url,dispatch]);

  return (
    <div className="contestPage">
      <div className="contestPage__background"></div>
      {contest ? <Contest contestId={id}></Contest> : null}
    </div>
  );
}

export default withRouter(ContestPage);
