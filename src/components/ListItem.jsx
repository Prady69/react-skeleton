var React = require('react');

var ListItem = React.createClass({
	render: function(){
		return (
				<div>
					<i>{this.props.id+1}) {this.props.text}</i>
				</div>
		);
	}
});

module.exports = ListItem;