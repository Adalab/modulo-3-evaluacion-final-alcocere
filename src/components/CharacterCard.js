import React from "react"
import { Link } from "react-router-dom";
import "../stylesheets/layout/Cards.scss";
import PropTypes from "prop-types";

const CharacterCard = (props) => {

    return (
        <>
            <Link to={`/character/${props.character.id}`}>
                <article className="card">
                    <img
                        src={props.character.image}
                        alt={"Image from " + props.character.name}
                        title={"Image from " + props.character.name}
                        className="card__image"
                    />
                    <h2 className="card__name">{props.character.name}</h2>
                    <p className="card__species">{props.character.species}</p>

                </article>
            </Link>
        </>
    )
};


export default CharacterCard;

CharacterCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    species: PropTypes.string,
    image: PropTypes.string,
};