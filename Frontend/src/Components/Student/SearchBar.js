import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../Actions/credentialActions';
import { search } from '../../Actions/studentActions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      search: '',
      type: 'job'
    };
  }

  handleClick = () => {
    const { search, type } = this.state;
    this.props.search(search);
    this.props.history.push(`/student/${type}SearchResults`);
  }

  searchChangeHandler = (e) => {
    this.setState({
      search: e.target.value
    });
  }

  typeChangeHandler = (e) => {
    this.setState({
      type: e.target.value
    });
  }

  render() {
    const { search } = this.state;
    return (
      <nav id="navbar">
        <a href={`/${this.props.role}`} alt="" target="_top" rel="nofollow" data-test="header-glassdoor-logo" aria-label="Glassdoor Logo">
          <span className="SVGInline d-flex align-items-center memberHeader__HeaderStyles__brandLogo">
            <svg style={{ marginLeft: '3vw' }} width="202" height="94" viewBox="0 0 163 32">
              <g fill="#0CAA41" fillRule="evenodd">
                <path id="prefix__icon-logo-glassdoor-1" d="M163 7.366a.55.55 0 00-.285-.447c-.37-.182-.908-.307-2.005-.307-2.475 0-4.664 1.211-5.619 3.237V7.374a.39.39 0 00-.393-.388h-3.706a.39.39 0 00-.393.388v16.684a.39.39 0 00.393.388h3.882a.391.391 0 00.394-.388v-7.505c0-3.352 2.366-5.018 5.442-5.018a6.37 6.37 0 011.794.274c.246.08.496-.12.496-.376V7.366zm-24.807 12.986c-2.653 0-4.705-1.85-4.705-4.644s2.053-4.645 4.705-4.645c2.653 0 4.704 1.852 4.704 4.645 0 2.794-2.051 4.644-4.704 4.644zm0-13.794c-5.447 0-9.515 3.702-9.515 9.15s4.068 9.15 9.515 9.15c5.446 0 9.514-3.702 9.514-9.15s-4.068-9.15-9.514-9.15zm-21.6 13.794c-2.653 0-4.705-1.85-4.705-4.644 0-2.793 2.052-4.644 4.705-4.644s4.704 1.85 4.704 4.644-2.051 4.644-4.704 4.644zm0-13.794c-5.447 0-9.515 3.702-9.515 9.15s4.068 9.15 9.515 9.15c5.446 0 9.514-3.702 9.514-9.15s-4.068-9.15-9.514-9.15zm-21.57 13.837c-2.652 0-4.633-1.85-4.633-4.68 0-2.828 1.981-4.68 4.634-4.68 2.618 0 4.633 1.782 4.633 4.68 0 2.864-2.015 4.68-4.633 4.68zM103.792.001H99.91a.39.39 0 00-.392.388V9.5c-1.203-1.676-3.184-2.969-5.943-2.969-4.315 0-7.994 3.284-7.994 9.186 0 5.901 3.68 9.183 8.064 9.183 2.583 0 4.6-1.117 5.872-2.898v2.057a.39.39 0 00.393.388h3.882a.39.39 0 00.393-.388V.39a.39.39 0 00-.393-.389zM83.01 19.161c0 3.981-2.936 5.693-7.64 5.693-3.249 0-6.044-.864-7.643-2.651a.395.395 0 01-.01-.504l2.244-2.877a.39.39 0 01.589-.022c1.187 1.199 3.01 1.932 5.28 1.932 1.309 0 2.37-.348 2.37-1.326 0-.944-.955-1.152-3.926-1.781-2.618-.525-5.872-1.711-5.872-5.518 0-3.527 2.83-5.553 7.464-5.553 3.047 0 5.238.908 6.783 2.338a.39.39 0 01.037.526l-2.13 2.73a.386.386 0 01-.558.06c-1.045-.92-2.78-1.498-4.486-1.498-1.45 0-2.264.455-2.264 1.223 0 .873.956 1.083 4.104 1.746 3.076.663 5.658 1.816 5.658 5.482zm-17.952.01c0 3.981-2.936 5.693-7.64 5.693-3.249 0-6.044-.864-7.643-2.651a.395.395 0 01-.01-.503l2.244-2.878a.391.391 0 01.589-.022c1.187 1.2 3.01 1.933 5.28 1.933 1.309 0 2.37-.349 2.37-1.327 0-.944-.955-1.152-3.926-1.781-2.618-.524-5.872-1.711-5.872-5.518 0-3.527 2.83-5.552 7.464-5.552 3.046 0 5.237.908 6.782 2.337a.39.39 0 01.037.526l-2.13 2.73a.386.386 0 01-.557.061c-1.045-.92-2.78-1.5-4.487-1.5-1.45 0-2.264.456-2.264 1.224 0 .873.957 1.083 4.104 1.746 3.076.663 5.659 1.816 5.659 5.482zm-23.268-1.78c0 1.92-1.59 3.597-4.067 3.597-1.627 0-2.512-.734-2.512-1.851 0-.978.744-1.712 2.194-1.922l4.385-.523v.699zM38.713 6.6c-3.704 0-6.495 1.224-7.742 3.643a.392.392 0 00.129.495l2.83 1.996c.178.125.428.084.535-.105.786-1.397 2.547-1.874 4.248-1.874 2.087 0 3.076.732 3.076 1.746v.279c0 .42-.247.63-.919.699l-4.846.419c-3.254.313-5.658 2.304-5.658 5.482 0 3.213 2.475 5.448 5.977 5.448 2.759 0 4.527-1.327 5.446-2.724v1.987a.39.39 0 00.393.388h3.883a.39.39 0 00.393-.388V13.689c0-4.854-2.582-7.089-7.745-7.089zM27.163.387v23.668a.39.39 0 01-.393.389h-3.918a.39.39 0 01-.393-.389V.38c0-.21.173-.38.385-.38h3.926a.39.39 0 01.393.388zm-17.72 19.99c-2.652 0-4.633-1.851-4.633-4.68 0-2.829 1.98-4.68 4.633-4.68s4.598 1.782 4.598 4.68c0 2.863-1.945 4.68-4.598 4.68zm8.768-13.41h-3.878a.396.396 0 00-.398.393v2.052c-.99-1.572-3.042-2.864-5.765-2.864-4.386 0-8.17 3.248-8.17 9.08C0 21.424 3.607 24.6 8.311 24.6c2.547 0 4.527-1.047 5.695-2.688v1.117c0 2.514-1.239 4.505-5.2 4.505-1.991 0-3.59-.654-4.992-1.88a.388.388 0 00-.59.082l-1.759 2.91c-.227.376-.196.587-.052.711 1.806 1.55 4.155 2.507 7.57 2.507 7.428 0 9.621-4.085 9.621-8.59V7.355a.39.39 0 00-.393-.388z" />
              </g>
            </svg>
          </span>
        </a>
        <input value={search} onChange={this.searchChangeHandler} id="searchBox" type="text" placeholder="Job Title, Keywords, or Company" name="search" style={{ position: 'relative', left: '40px', top: '25px', height: '40px', width: '400px' }} />
        <select onChange={this.typeChangeHandler} id="options" style={{ position: 'relative', left: '55px', top: '25px' }}>
          <option value="job">Jobs</option>
          <option value="company">Companies</option>
          <option value="salary">Salaries</option>
          <option value="interview">Interviews</option>
        </select>
        <div><button onClick={this.handleClick} className="btn btn-lg btn-success btn-block" style={{ position: 'relative', top: '22px', left: '75px' }}>Search</button></div>
        {/* <div><Link to="/student/searchresults" onClick={this.handleClick} className="btn btn-lg btn-success btn-block" style={{ position: 'relative', top: '22px', left: '75px' }}>Search</Link></div> */}
        {this.props.isAuth ? (
          <Link style={{ marginLeft: 'auto' }} to="/" onClick={this.props.logout} style={{ marginLeft: 'auto', marginRight: '10px', fontSize: '20px', position: 'relative', top: '35px' }}>
            <span className="glyphicon glyphicon-user" />
            Logout
          </Link>
        ) : null}
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.credentials.isAuth,
    role: state.credentials.role,
  };
};

const mapDisptachToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    search: (searchQuery) => dispatch(search(searchQuery))
  };
};
export default connect(mapStateToProps, mapDisptachToProps)(SearchBar);
