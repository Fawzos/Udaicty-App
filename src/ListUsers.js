import React from "react";
import PropTypes from "prop-types";
import User from "./User";

class ListUsers extends React.Component {
  state = {
  	showGamesPlayed: true,
  }
  
  toggleButton = () => {
  	this.setState(currentState => ({
    	showGamesPlayed: !currentState.showGamesPlayed,
    }));
  };
render() {
  const { users } = this.props;
  const { showGamesPlayed } = this.state;
  const gamesPlayedButton = (
  	<div>
    	<button className="smallButton" onClick={this.toggleButton}>
		{showGamesPlayed ? 'Hide' : 'Show'}
    		The Number of Games Played
    	</button>
    </div>
  )
return(
  <div>
	<h2>Users</h2>
  	{users && users.length > 0 ? gamesPlayedButton : ''}
	<ol>
		{users.map((user) => (
        <User key={user.userName} user={user} showGamesPlayed={showGamesPlayed} />
        ))}
	</ol>
  </div>
);
}
}
ListUsers.propTypes = {
	users: PropTypes.array.isRequired,
};
export default ListUsers;