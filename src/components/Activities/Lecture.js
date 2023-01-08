import styled from 'styled-components';
import CapacityBox from './CapacityBox';
import dayjs from 'dayjs';
import { useState } from 'react';

function differenceBetweenDatesInHours({ startTime, endTime }) {
  const start = dayjs(startTime);
  const end = dayjs(endTime);
  const difference = end.diff(start, 'hour', true);
  return difference;
}

export default function Lecture({ index, activity, ticket, selectedDate }) {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <Wrapper key={index} quantityOfHours={differenceBetweenDatesInHours(activity)} isRegistered={isRegistered}>
      <div>
        <div>{activity.name}</div>
        <div>
          {activity.startTime.slice(11, 16)} - {activity.endTime.slice(11, 16)}
        </div>
      </div>
      <CapacityBox
        key={index}
        activity={activity}
        selectedDate={selectedDate}
        ticket={ticket}
        isRegistered={isRegistered}
        setIsRegistered={setIsRegistered}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  height: ${(props) => 90 * props.quantityOfHours - 10}px;
  margin: 10px 5%;
  padding: 10px 3%;
  background-color: #f1f1f1;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto';
  background-color: ${(props) => (props.isRegistered ? '#D0FFDB' : '')};
  
  > div:nth-child(1) {
    font-size: 12px;
    line-height: 14px;
    color: #343434;
    > div:nth-child(1) {
      font-weight: 700;
    }
    > div:nth-child(2) {
      margin-top: 5px;
      font-weight: 400;
    }
  }
  > div:nth-child(2) {
    width: 65px;
    min-width: 65px;
    height: ${(props) => 90 * props.quantityOfHours - 30}px;
    border-left: 1px solid #cfcfcf;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
