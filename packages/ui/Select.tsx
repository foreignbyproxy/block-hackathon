import { Select as SelectChakra, SelectProps } from '@chakra-ui/react';

export const Select: React.FC<SelectProps> = ({ children, ...rest }) => {
  return <SelectChakra {...rest}>{children}</SelectChakra>;
};

/*
type IconButtonProps = {
  icon?: React.ReactElement;
} & SelectProps;

export const IconButton: React.FC<IconButtonProps> = ({ children, icon, ...rest }) => {
  return (
    <ButtonChakra leftIcon={icon} {...rest}>
      {children}
    </ButtonChakra>
  );
};
*/