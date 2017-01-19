var CONTACTS = [
    {
        id: 1,
        name: 'Darth Vader',
        phoneNumber: '+250966666666',
        image: 'http://cs7.pikabu.ru/images/big_size_comm_an/2014-03_7/13962622876915.gif'
    }, {
        id: 2,
        name: 'Princess Leia',
        phoneNumber: '+250966344466',
        image: 'http://images6.fanpop.com/image/photos/33100000/CARRIE-FISHER-anakin-vader-and-princess-leia-33186069-190-149.gif'
    }, {
        id: 3,
        name: 'Luke Skywalker',
        phoneNumber: '+250976654433',
        image: 'http://i.giphy.com/X1Ga5a4wVW396.gif'
    }, {
        id: 4,
        name: 'Chewbacca',
        phoneNumber: '+250456784935',
        image: 'https://media.giphy.com/media/RUUdVZqwpfTRS/giphy.gif'
    }
];


var Contact = React.createClass({
    render: function () {
        return (
            <li className="contact">
                <img src={this.props.image} alt={"avatar " + this.props.name} />
                <div className="contact-info">
                    <div className="contact-name">{this.props.name}</div>
                    <div>{this.props.phoneNumber}</div>
                </div>
            </li>
        )
    }
});

var ContactList = React.createClass({
    handleSearch: function (event) {
        console.log(event.target.value);
    },

    render: function () {
        return (
            <div>
                <input type="text" className="search-field" onChange={this.handleSearch} />
                <ul>
                    {
                        CONTACTS.map(function (el) {
                            return <Contact
                                key={el.id}
                                name={el.name}
                                phoneNumber={el.phoneNumber}
                                image={el.image} />
                        })
                    }
                </ul>
            </div>
        );
    }
});

ReactDOM.render(
    <ContactList />
    , document.getElementById('root')
);