const PageLink = ({ link, itemClass }) => {
  return (
    <li key={link.id}>
      <a href={link.href} className={itemClass}>
        {link.text}
      </a>

      {/* <a
        href={link.href}
        className={itemClass}
        target={link.href.endsWith('.pdf') ? '_blank' : '_self'}
        rel="noopener noreferrer"
      >
        {link.text}
      </a> */}
    </li>
  )
}
export default PageLink
