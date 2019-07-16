import React from "react"
import { Link } from "gatsby"
//import logo from '../images/logo.png';

class Header extends React.Component {
  render(props) {
  const data = this.props.nav.contentfulNavigation.menuItem

  return (
    <header>
      <ul id="navigation">
        {data.map((item, i) =>
          <li key={i}><Link activeClassName="active" to={item.slug}>{item.title}</Link></li>
        )}
      </ul>
    </header>
    )
  }
}

export default Header
