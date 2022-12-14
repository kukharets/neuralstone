import druidIcon from '../media/druidHero.png';
import druidHeroPower from '../media/druidHeroPower.png';
import hunterIcon from '../media/hunterHero.png';
import hunterHeroPower from '../media/hunterHeroPower.png';
import warlockIcon from '../media/warlockHero.png';
import warlockHeroPower from '../media/warlockHeroPower.png';

export interface IDummyClassData {
  classTitle?: string;
  heroIcon?: string;
  heroPowerIcon?: string;
  heroPowerCost?: number;
}
export const dummyClassesData: Record<string, IDummyClassData> = {
  druid: {
    classTitle: 'druid',
    heroIcon: druidIcon,
    heroPowerCost: 2,
    heroPowerIcon: druidHeroPower,
  },
  hunter: {
    classTitle: 'hunter',
    heroIcon: hunterIcon,
    heroPowerCost: 2,
    heroPowerIcon: hunterHeroPower,
  },
  warlock: {
    classTitle: 'warlock',
    heroIcon: warlockIcon,
    heroPowerCost: 2,
    heroPowerIcon: warlockHeroPower,
  },
};
