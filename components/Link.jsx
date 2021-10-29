const Link = ({ children, href, isBlank }) => <a href={href} target={ isBlank ? '_blank' : '_self'}>{children}</a>

export default Link
