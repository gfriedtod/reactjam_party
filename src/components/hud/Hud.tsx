import { useSelector } from '@xstate/react';
import { useGameMachineProvider } from '../../hooks/use';
import { Advisor } from './Advisor/Advisor';
import { Clock } from './Clock/Clock';
import { HotSpots } from './Hotspots/HotSpots';
import { Audio } from './Audio/Audio';
import { Menu } from './Menu/Menu';
import { HypeGauge } from './HypeGauge/HypeGauge';
import { METERS_CONFIG } from '../../machines/game.machine';

import './hud.css';

export const Hud = () => {
  const gameService = useGameMachineProvider();
  const state = useSelector(gameService, (state) => state.value);
  const absoluteTimer = useSelector(
    gameService,
    (state) => state.context.clock,
  );
  const hype = useSelector(gameService, (state) => state.context.meters.hype);
  const guideText = useSelector(
    gameService,
    (state) => state.context.guideText,
  );

  const timerPercent = (absoluteTimer / METERS_CONFIG.clock.maxValue) * 100;
  return (
    <>
      {state !== 'playing' && <div className="hud__faded" />}
      <Audio />
      <HotSpots />
      <Clock elapsedPercent={timerPercent} />
      <HypeGauge hype={hype} />
      <Advisor
        text={guideText}
        onSkipText={() => {
          console.log('skip text');
        }}
      />
      {state !== 'playing' && <Menu />}
    </>
  );
};
