import { Button, colors } from '@zopauk/react-components';
import styled from 'styled-components';

const SButton = styled(Button)`
  color: ${colors.base.primary}
  border: 1px solid ${colors.base.primary}
  border-color: ${colors.base.primary}
  min-width: 200px
  &:enabled {
    box-shadow: inset 0 0 0 2px ${colors.base.primary}
  }

  &:hover:enabled {
    background-color: ${colors.base.primary};
    color: ${colors.neutral.white};
  }
  margin-right: 12px
  margin-bottom: 12px
`;

export default SButton;
