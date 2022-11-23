import React from "react";
import "./styles.css";
import arrowdown from "../../../public/images/icons/download.png";
import arrowup from "../../../public/images/icons/upload.png";
import drop from "../../../public/images/icons/raindrop.png";
import umbrella from "../../../public/images/icons/Sombrinha.png";

export default function Card(props) {
  return (
    <div className="Card">
      <div className="Content">
        <p className="Date">{props.date}</p>
        <div className="Data">
          <table>
            <tbody>
              <tr className="TxtData">
                <td>
                  <img className="Icon" src={arrowup} alt="" />
                  <span className="Degree1">
                    {props.temMax}
                  </span>
                </td>
                <td>
                  <img className="Icon" src={arrowdown} alt="" />
                  <span className="Degree2">
                    {props.temMin}
                  </span>
                </td>
              </tr>
              <tr className="TxtData">
                <td>
                  <img className="Icon" src={drop} alt="" />
                  <span>
                  {props.precipitation}
                  </span>
                </td>
                <td>
                  <img className="Icon" src={umbrella} alt="" />
                  <span>{props.probability}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="Content2">
        <p>{props.txt}</p>
      </div>
    </div>
  );
}
