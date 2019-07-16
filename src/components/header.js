import React from "react"
import { Link } from "gatsby"
import logo from '../logo.png';

class Header extends React.Component {
  render(props) {
  const data = this.props.nav.contentfulNavigation.menuItem

  return (
    <header>
      <nav>
      <ul>
        {data.slice(0, 3).map((item, i) =>
          <li key={i}><Link activeClassName="active" to={item.slug}>{item.title}</Link></li>
        )}
      </ul>
        <div className="logo"><img src={logo} alt="Logo"/></div>
      <ul>
        {data.slice(3, 6).map((item, i) =>
          <li key={i}><Link activeClassName="active" to={item.slug}>{item.title}</Link></li>
        )}
      </ul>
      </nav>
    </header>
    )
  }
}

export default Header
