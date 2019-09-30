import React from 'react';

import { Card } from '../Card/Card';

import './CardList.styles.css';

export const CardList = props => {
    const {monsters} = props;
    return (
      <div className="card-list">
          {monsters.map(monster => (
              <Card key={monster.id} monster={monster}/>
          ))}
      </div>
  )
};