const Link = ({ children, ...props }: React.HTMLProps<HTMLAnchorElement>) => {
  return <a {...props}>{children}</a>;
};

export default Link;
