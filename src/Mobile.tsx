import React, { useEffect, useState } from 'react';
import { Column } from './component/Column';
import { Row } from './component/Row';
import './App.scss';
function Mobile() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    var timeoutId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timeoutId);
    };
  }, []);

  function getFormattedTime() {
    let noon = 'AM';
    let hour = currentTime.getHours();
    const min = currentTime.getMinutes();
    if (hour >= 12) {
      noon = 'PM';
    }
    if (hour > 12) {
      hour -= 12;
    }

    return `${addZeroIfLowThen10(hour)}:${addZeroIfLowThen10(min)} ${noon}`;
  }

  function addZeroIfLowThen10(number: number) {
    if (number < 10) {
      return `0${number}`;
    }

    return `${number}`;
  }
  return (
    <Row>
      <Column size={8}>
        <div className={'mobile'}>
          <Row>
            <div className={'status'}>{getFormattedTime()}</div>
            <h5>{'선택된 아이 이름'}</h5>
            <Row>
              <Column size={4}>1</Column>
              <Column size={4}>2</Column>
              <Column size={4}>3</Column>
            </Row>
            <Row>
              <Column size={4}>4</Column>
              <Column size={4}>5</Column>
              <Column size={4}>6</Column>
            </Row>
            <Row>
              <Column size={4}>7</Column>
              <Column size={4}>8</Column>
              <Column size={4}>9</Column>
            </Row>
          </Row>
        </div>
      </Column>
    </Row>
  );
}

export default Mobile;
