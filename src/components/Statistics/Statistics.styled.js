import styled from 'styled-components';

export const StatSection = styled.section`
  width: 300px;
  margin: 15px auto;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: rgb(0 0 0 / 10%) 0px 5px 15px;
`;
export const StatsTitle = styled.h2`
  font-size: 18px;
  text-align: center;
  padding: 20px 0;
  border-bottom: 1px solid #e4e4e4;
  text-transform: uppercase;
  color: #656a6f;
`;

export const StatsList = styled.ul`
  display: flex;
  gap: 1px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  margin-bottom: 15px;
  box-shadow: rgb(0 0 0 / 10%) 0px 5px 15px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 13%;
`;

export const StatsLabel = styled.span`
  font-size: 12px;
  color: #fff;
  text-shadow: 0 0 3px #000;
  margin-bottom: 3px;
`;

export const StatsPercentage = styled.span`
  color: #fff;
  text-shadow: 0 0 3px #000;
  font-size: 16px;
`;
