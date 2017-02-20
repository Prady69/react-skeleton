var React = require('react');

var ListItem = React.createClass({
	render: function(){
		return (
			<ul>
				<li>
					<h4>{this.props.ingredient}</h4>
				</li>
			</ul>
		);
	}
});

module.exports = ListItem;