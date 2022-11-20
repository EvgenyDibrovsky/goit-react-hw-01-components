import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-bottom: 15px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #e4e4e4;
  cursor: pointer;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 10%) 0px 5px 15px;
  transition: transform 250ms linear, box-shadow 250ms linear;

  &:hover,
  &:focus {
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  }
`;

export const Description = styled.div`
  padding: 20px 10px;
`;

export const Avatar = styled.img`
  margin: auto;
  margin-bottom: 15px;
  width: 150px;
  border-radius: 50%;
  border: 1px solid #e4e4e4;
  padding: 10px;
  transition: transform 250ms linear, box-shadow 250ms linear;

  ${ProfileCard}:hover &,
    ${ProfileCard}:focus & {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 10%) 0px 5px 15px;
    transition: transform 250ms linear, box-shadow 250ms linear;
  }
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Lacation = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  margin: 0;
  background-color: #f4f6f9;
  border-top: 1px solid #c9c9c9;
`;

export const StatsItem = styled.li`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 15px;
  &:not(:last-child) {
    border-right: 1px solid #c9c9c9;
  }
`;

export const StatsLabel = styled.span`
  color: #838383;
`;

export const StatsQuantity = styled.span`
  font-weight: bold;
`;
