import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { formatter } from "utils/formatter";
import "./index.scss";

export default function TransactionItem({
  handleCancalBooking,
  dataTransaction,
  checkDate,
}) {
  return (
    <div>
      {dataTransaction.map((list) => (
        <details key={list.idBooking}>
          <summary>
            <div>
              <span style={{ "background-color": "#f2dcbb" }}>
                <div style={{ width: "100%", height: "100%" }}>
                  <img
                    src={list.ImageUrl}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </span>
              <h3>
                <strong>{list.ActivityName}</strong>
                <small>
                  TG bắt đầu:
                  <Moment format="DD/MM/YYYY" date={list.handleStartTime} />
                </small>
                <small>
                  TG kết thúc:
                  <Moment format="DD/MM/YYYY" date={list.handleEndTime} />
                </small>
                <small>Số lượng: {list.amountPeople}</small>
              </h3>

              <span>{formatter.format(list.Price)}</span>
            </div>
          </summary>
          <div>
            <dl>
              <div>
                <dt>Thời gian đặt</dt>
                <dd>{list.bookingTime}</dd>
              </div>
              <div>
                <dt>Voucher giảm</dt>
                <dd>{list.voucher}</dd>
              </div>
              <div>
                <dt>Gift</dt>
                <dd>{list.gift}</dd>
              </div>
              <div>
                <dt>Booking ID</dt>
                <dd>{list.idBooking}</dd>
              </div>
              <div>
                <dt>Trạng thái</dt>
                <dd>{list.trangthai}</dd>
              </div>
              <div>
                <dt>Tổng tiền</dt>
                <dd>{formatter.format(list.reduce)}</dd>
              </div>
              <div>
                <dt>Chức năng</dt>
                {list.trangthai == "refund" ? (
                  <Button disabled color="secondary" variant="contained">
                    Hủy
                  </Button>
                ) : (
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={() =>
                      handleCancalBooking({
                        idBooking: list.idBooking,
                        IdSchedule: list.IdSchedule,
                      })
                    }
                  >
                    Hủy
                  </Button>
                )}
              </div>
            </dl>
          </div>
        </details>
      ))}
    </div>
  );
}
