import React from 'react';
import { connect } from "react-redux";

const GithubData = ({data})=>{
    return(
<div>
      <div>
        Name: { data.name }
      </div>
      <br />
      <div>
        Blog: { data.blog }
      </div>
      <br />
      <div>
        Github Followers: { data.followers }
      </div>
    </div>

    )
}

const mapStateToProps = (state) =>{
    return {
        data: state.data.data
    }
}
export default connect(mapStateToProps)(GithubData)