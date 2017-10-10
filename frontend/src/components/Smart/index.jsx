import React from 'react';
import PropTypes from 'prop-types';

import Deck from '../Deck';

const Smart = ({fetchCards, annotateCard, passCard, popCard, cards, message }) => (
    <Deck 
        fetchCards={fetchCards}
        annotateCard={annotateCard}
        passCard={passCard}
        popCard={popCard}
        cards={cards}
        message={message}
    />
);

Smart.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object),
    message: PropTypes.string
};

export default Smart;