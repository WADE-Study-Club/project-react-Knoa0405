import React from 'react';

import Fog from './svg/Fog';
import Clear from './svg/Clear';
import Cloud from './svg/Cloud';
import Rain from './svg/Rain';
import Storm from './svg/Storm';
import Snow from './svg/Snow';

function WeatherComponent({ weather }) {
  if (weather === 'Clear') {
    return <Clear size="150" />;
  }

  if (weather === 'Clouds') {
    return <Cloud size="150" />;
  }

  if (weather === 'Haze' || weather === 'Fog' || weather === 'Mist') {
    return <Fog size="150" />;
  }

  if (weather === 'Rain' || weather === 'Drizzle') {
    return <Rain size="150" />;
  }

  if (weather === 'Thunderstorm') {
    return <Storm size="150" />;
  }

  if (weather === 'Snow') {
    return <Snow size="150" />;
  }
  return null;
}

export default WeatherComponent;
