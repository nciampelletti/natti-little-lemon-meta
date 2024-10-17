import { Link } from 'react-router-dom'

const PageLink = ({ link, itemClass }) => {
  return (
    <li key={link.id}>
      {link.href.endsWith('.pdf') ? (
        <a
          href={require('../../src/menu.pdf')}
          target="_blank"
          rel="noreferrer"
          className={itemClass}
        >
          {link.text}
        </a>
      ) : (
        <Link to={link.href} className={itemClass}>
          {link.text}
        </Link>
      )}
    </li>
  )
}
export default PageLink
