import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktail",
        info:
          "We are offering free cocktails for our customers. sit relax and have your free nice cocktail deliver to you at easy"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "We are offering free cocktails for our customers. sit relax and have your free nice cocktail deliver to you at easy"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "We are offering free cocktails for our customers. sit relax and have your free nice cocktail deliver to you at easy"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Bear",
        info:
          "We are offering free cocktails for our customers. sit relax and have your free nice cocktail deliver to you at easy"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
