export enum ChoicesTypes {
  Mulligan = 'MULLIGAN',
  Spell = 'SPELL',
  MoveToDeck = 'MOVE_TO_DECK',
}

export enum CardTypesByAction {
  TargetSpell = 'TargetSpell',
  NonTargetSpell = 'NonTargetSpell',
  Minion = 'Minion',
}

export enum CommonTypes {
  SelfBattleField = 'SelfBattleField',
  SelfHero = 'SelfHero',
  EnemyHero = 'EnemyHero',
}

export enum AllowedTargets {
  SelfArmyCard = 'SelfArmyCard',
  EnemyArmyCard = 'EnemyArmyCard',
  SelfHero = 'SelfHero',
  EnemyHero = 'EnemyHero',
  SelfBattleField = 'SelfBattleField',
}
