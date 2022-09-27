import { Link, LinkProps } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const defaultValues: LinkProps = {
  display: "flex",
	flexDirection: "row",
	flexWrap: "nowrap",
  alignItems: "center",
	justifyContent: "space-between",
  gap: "4",
};

export const LinkArrow: React.FC<LinkProps> = ({ children, ...rest }) => {
  return (
    <Link {...defaultValues} {...rest}>
      {children}
      <ArrowForwardIcon ml="auto" />
    </Link>
  );
};
