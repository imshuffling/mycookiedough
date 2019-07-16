import React from 'react'
import Img from "gatsby-image";

export default function BlockImage({ image }) {
  return (
    <section className="blockImage">
      <div className="container"><Img fluid={image.fluid} /></div>
    </section>
  );
}
