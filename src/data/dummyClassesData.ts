import warlockIcon from '../media/warlock.png';

export interface IDummyClassData {
  icon: string;
}
export const dummyClassesData: Record<string, IDummyClassData> = {
  warlock: {
    icon: warlockIcon,
  },
};
