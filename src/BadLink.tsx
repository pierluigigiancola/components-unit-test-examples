const BadLink = ({
  href,
  children,
  ...props
}: React.HTMLProps<HTMLAnchorElement>) => {
  return (
    <span onClick={() => window.history.pushState({}, "", href)} {...props}>
      {children}
    </span>
  );
};

export default BadLink;
