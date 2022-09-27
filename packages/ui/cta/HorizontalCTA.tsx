import { Box, BoxProps } from "@chakra-ui/react";
import { Container } from "../Containers";

type HorizatonalCTAProps = {
  icon?: React.ReactElement;
  cta?: React.ReactElement;
} & BoxProps;

const defaultValues: BoxProps = {
  display: "flex",
  gridGap: "4",
  alignItems: "center",
  bgColor: "slate.400",
	borderRadius: "lg"
};

export const HorizatonalCTA: React.FC<HorizatonalCTAProps> = ({ icon, children, cta, ...rest }) => {
  return (
    <Container {...defaultValues} {...rest}>
      {icon}
      {children}
			<Box ml="auto">
				{cta}
			</Box>
    </Container>
  );
};
