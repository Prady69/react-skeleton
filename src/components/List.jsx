var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [{"id":1, "text":"ham"}, {"id":2, "text":"potatoes"}, {"id":4, "text":"Cheese"} ];

var  List = React.createClass({
	render: function(){
		var ListItems = ingredients.map(function(item){
			return <ListItem key={item.id} ingredient = {item.text} />;
		});

		return (<div>{ListItems}</div>);
	}
});

module.exports = List;