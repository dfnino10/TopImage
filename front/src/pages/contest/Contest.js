import React from "react";
import PropTypes from "prop-types";

import { withRouter,useParams } from "react-router-dom";

function Contest() {
     let { id } = useParams();

  return (
    <div>
        Contest {id}
    </div>
  );
}

export default withRouter(Contest);