import styled from 'styled-components';
import { theme } from 'components/baseStyles/Variables.styled';
import { IconBtn } from '../UserData/UserData.styled';
import { ShowPassword } from 'components/baseStyles/Form.styled';

const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LabelName = styled.span`
  margin-bottom: 8px;
  color: ${theme.colors.brown1};
  font-family: ${theme.fonts[0]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 30px 8px 20px;

  font-family: ${theme.fonts[1]};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  color: ${props => props.theme.black_text};
  border: 1px solid #c6cdd3;
  border-color: transparent;
  border-radius: 10px;
  background: ${props => props.theme.white_fon};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 12px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    /* width: 580px; */
    padding: 12px 30px 12px 20px;
    font-size: 16px;
  }

  &:focus-visible {
    border: 0.5px solid ${theme.colors.green};
    outline: none;
  }

  &::placeholder {
    color: ${theme.colors.green};
    font-family: ${theme.fonts[1]};
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.32px;

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      font-size: 14px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      font-size: 16px;
    }
  }
`;

const EditBtn = styled(IconBtn)`
  top: 1px;
  bottom: 1px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    top: 5px;
    bottom: 0;
  }
`;

const ShowIcon = styled(ShowPassword)`
  right: 10px;
  top: 50px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    right: 15px;
    top: 61px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    right: 20px;
    top: 63px;
  }

  & > svg {
    width: 14px;
    height: 14px;
  }
`;

export { Label, LabelName, Input, EditBtn, ShowIcon };
