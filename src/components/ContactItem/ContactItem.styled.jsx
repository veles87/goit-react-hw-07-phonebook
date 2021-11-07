import styled from '@emotion/styled';

export const Contact = styled.li`
 display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: normal;
  font-size: 24px;
  line-height: 1.167;
  letter-spacing: 0.01em;
  color: #272727;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Text = styled.span`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

export const DeleteButton = styled.button`
  padding: 8px 10px;
  background: #e5e3e9;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.03em;

  &:hover {
    background: #e96161;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    color: #fff;
  }
`;

export const DataWrap = styled.span`
  padding: 10px;
`;
export const PhoneLink = styled.a`

  padding: 10px;
  text-decoration: none;
  color: #272727
`;




