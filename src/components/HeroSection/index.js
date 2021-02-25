import React from 'react';
import { HeroContainer, Trip, TripContent, HeroBtns, Button } from './HeroSection';

const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <Trip>Viaje mais!</Trip>
        <TripContent>Planeje sua próxima viagem hoje</TripContent>

        <HeroBtns>
          <Button fontBig big primary>Vamos nessa</Button>
        </HeroBtns>
      </HeroContainer>
    </>
  )
}

export default HeroSection;