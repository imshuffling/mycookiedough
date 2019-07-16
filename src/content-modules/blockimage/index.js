import React from 'react'
import Img from "gatsby-image";

export default function BlockImage({ image }) {
  return (
    <section className="blockImage">
          <Img fluid={image.fluid} />
    </section>
  );
}
