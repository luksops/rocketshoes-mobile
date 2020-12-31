import styled from 'styled-components/native';
import logo from '../../assets/img/logo.png';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 185px;
  height: 24px;
`;

export const Link = styled.Button``;
