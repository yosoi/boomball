import Col from 'react-bootstrap/Col'
import React from 'react';
import Row from 'react-bootstrap/Row'

export default function({
  bestStreak,
  currentStreak,
  score,
  alignRight = false
}) {
  return (
    <Row>
      <Col className={"col-auto order-" + (alignRight ? 2 : 0)}>
        <span className="text-muted">
          {bestStreak}
        </span>
      </Col>
      <Col className={"col-auto order-" + (alignRight ? 1 : 1)}>
        <span>
          {currentStreak}
        </span>
      </Col>
      <Col className={"order-" + (alignRight ? 0 : 2)}>
        <div className={alignRight ? "" : "text-right"}>
          <span className="font-weight-bold">
            {score}
          </span>
        </div>
      </Col>
    </Row>
  );
}
