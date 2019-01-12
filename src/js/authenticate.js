// import React from 'react';
// import ReactDOM from 'react-dom';

class Authenticate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'admin',
      password: 'password',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const username = e.target.querySelector('input[type="text"]').value;
    const password = e.target.querySelector('input[type="password"]').value;
    let auth = false;
    if(username === this.state.username && password === this.state.password) {
      auth = true;
    }
    else {
      auth = false;
    }
    this.setState({
      authorized: auth
    });
    // --------------------------------------------------------------------------
    // This section displays a popup of user credentials and inputted credentials
    // --------------------------------------------------------------------------
    // alert(`Username: ${username}\nPassword: ${password}\nauth: ${auth}\n\nthis.state.username: ${this.state.username}\nthis.state.password: ${this.state.password}`);
  }

  render() {
    let contactInfo = (
      <div>
        <div class="row">
          <div class="container-fluid">
            <div class="jumbotron">
              <h1>Welcome, Jane Doe!</h1>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="row jumbotron">
                <img src="./img/portrait_of_woman.png" />
                <br /><br />
                <strong><p>Professional Model and aspiring philanthropist</p></strong>
                <p>Proin sit amet tempor augue, nec vulputate diam. Donec molestie arcu et metus laoreet sagittis. Nulla sed nisl elit. Vivamus sem velit, vestibulum sit amet quam vel, ultricies facilisis risus. Pellentesque id consequat nunc. Mauris ac posuere turpis. Proin at gravida lorem. Sed consequat justo ut tincidunt mattis.</p>
              </div>
              <br />
              <div class="row">
                <div class="card">
                  <h1>Friends</h1>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="jumbotron">
                <h3>About</h3>
                <br />
                <div class="container">
                  <div class="row">
                    <div class="col-md-3">
                      <h6>First Name:</h6>
                    </div>
                    <div class="col-md-3">
                      <p>Jane</p>
                    </div>
                    <div class="col-md-3">
                      <h6>Last Name:</h6>
                    </div>
                    <div class="col-md-3">
                      <p>Doe</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-3">
                      <h6>Username:</h6>
                    </div>
                    <div class="col-md-3">
                      <p>Janeee06</p>
                    </div>
                    <div class="col-md-3">
                      <h6>Email:</h6>
                    </div>
                    <div class="col-md-3">
                      <p>janeee06@email.com</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-3">
                      <h6>City:</h6>
                    </div>
                    <div class="col-md-3">
                      <p>Sacramento</p>
                    </div>
                    <div class="col-md-3">
                      <h6>Country:</h6>
                    </div>
                    <div class="col-md-3">
                      <p>United States</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-3">
                      <h6>Birthday:</h6>
                    </div>
                    <div class="col-md-3">
                      <p>January 01, 1996</p>
                    </div>
                    <div class="col-md-3">
                      <h6>Interests:</h6>
                    </div>
                    <div class="col-md-3">
                      <p>Web Development</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-3">
                      <h6>Website:</h6>
                    </div>
                    <div class="col-md-3">
                      <p>https://example.com/</p>
                    </div>
                    <div class="col-md-3">
                      <h6>Phone:</h6>
                    </div>
                    <div class="col-md-3">
                      <p>916-555-5555</p>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-md-6">
                    <h3>Experience</h3>
                    <ul list-style-type="disc">
                      <li>CEO at Abc Fashion</li>
                      <li>Fashionista for Vogue Magazine</li>
                      <li>Professional Model for Abercrombie</li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <h3>Education</h3>
                    <ul>
                      <li>American River College</li>
                      <li>Sacramento State University</li>
                      <li>Stanford University</li>
                    </ul>
                  </div>
                </div>
                <hr />
                <div class="container">
                  <div class="row">
                    <h3>Description</h3>
                    <p>Cras aliquet, orci quis facilisis pulvinar, augue mi maximus mauris, et consequat quam ex a dolor. Nullam ultrices, dolor nec scelerisque ullamcorper, nulla nulla congue lacus, sit amet eleifend odio ligula vitae ligula. Mauris et nisi leo. Fusce malesuada eros mauris, non dignissim nibh tempor vitae. Phasellus finibus quam justo, non maximus erat congue at. Aenean porttitor ullamcorper vestibulum. Mauris elit odio, molestie vel tellus id, placerat elementum velit. Nunc vulputate quam odio, at consequat nisl semper et. Aliquam sapien diam, pretium id purus ut, efficitur pharetra lectus.</p>

                    <p>Ut sit amet dictum magna, tincidunt efficitur sapien. Ut sagittis tellus et libero mollis, ut iaculis lorem pharetra. Praesent sed molestie mauris, id sollicitudin sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec a sollicitudin nibh. Etiam convallis lectus non viverra aliquam. Nullam ultricies, sem ultrices luctus maximus, risus urna aliquet nibh, scelerisque iaculis quam neque vel ex. Fusce vestibulum et urna ut porta. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras varius, sapien vestibulum commodo vulputate, purus metus placerat lorem, quis porttitor risus magna eu tortor. Donec tincidunt varius elit ut accumsan. Cras ipsum nulla, viverra vitae est nec, congue aliquet dui.</p>

                    <p>Morbi pulvinar commodo sapien, ut lobortis tortor imperdiet ac. Duis sit amet venenatis leo, vitae facilisis mi. Pellentesque lobortis dignissim velit, eu faucibus dui consequat vel. Donec orci velit, mattis eu metus nec, tempus lacinia ex. Sed dapibus, ligula ut tincidunt auctor, erat nisi luctus lorem, sollicitudin semper neque metus ac orci. Nullam in commodo lacus, nec ultrices arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis bibendum ut tortor in feugiat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    let login = (
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <div class="container">
            <div class="jumbotron form">
              <form action="#" onSubmit={this.authorize}>
                <label>Username</label>
                <br />
                <input class="form-control" type="text" name="user" placeholder="Username" />
                <br />
                <label>Password</label>
                <br />
                <input class="form-control" type="password" name="pass" placeholder="Password" />
                <br />
                <button type="submit" class="btn btn-primary" onClick={this.authorize}>Enter</button>
              </form>
            </div>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>
    );

    return (
      <div>
        <br /><br /><br />
        { !this.state.authorized ? login : contactInfo }
        <br /><br /><br /><br /><br /><br />
      </div>
    );
  }
}

ReactDOM.render(
  <Authenticate name="Eric" />,
  document.getElementById("app")
)
