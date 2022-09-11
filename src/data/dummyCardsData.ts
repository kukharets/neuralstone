import { AllowedTargets, CardTypesByAction } from '../helpers/enums';

export const dummyCardsData = {
  coin: {
    additionalType: CardTypesByAction.NonTargetSpell,
    cardId: 'CORE_COIN',
    cardSet: 'Core',
    collectible: false,
    cost: 0,
    dbfId: 'custom01',
    howToGetGold: 'Unlocked after 500 total wins.',
    img: 'https://cards.hearthpwn.com/enUS/GAME_005.png',
    locale: 'enUS',
    mechanics: [{ name: 'Spell' }],
    name: 'Coin',
    playerClass: 'Neutral',
    text: 'Give a 1 Mana Crystal.',
    type: 'Spell',
  },
};

export const additionalCardsInfo = {
  // Druid
  AV_137: {
    additionalType: CardTypesByAction.Minion,
    allowedTargets: [AllowedTargets.SelfBattleField],
    cardId: 'AV_137',
    name: 'Irondeep Trogg',
    playerClass: 'Neutral',
    text: '[x]After your opponent\\ncasts a spell, summon\\n_another Irondeep Trogg.',
    type: 'Minion',
  },
  AV_294: {
    additionalType: CardTypesByAction.Minion,
    allowedTargets: [AllowedTargets.SelfBattleField],
    cardId: 'AV_294',
    mechanics: [
      {
        name: 'Battlecry',
      },
    ],
    name: 'Clawfury Adept',
    playerClass: 'Druid',
    text: '<b>Battlecry:</b> Give all other friendly characters +1 Attack this turn.',
    type: 'Minion',
  },
  BAR_533: {
    additionalType: CardTypesByAction.NonTargetSpell,
    cardId: 'BAR_533',
    mechanics: [
      {
        name: 'Taunt',
      },
    ],
    name: 'Thorngrowth Sentries',
    playerClass: 'Druid',
    spellSchool: 'Nature',
    text: 'Summon two 1/2 Turtles with <b>Taunt</b>.',
    type: 'Spell',
  },
  BAR_534: {
    additionalType: CardTypesByAction.NonTargetSpell,
    cardId: 'BAR_534',
    name: "Pride's Fury",
    playerClass: 'Druid',
    text: 'Give your minions +1/+3.',
    type: 'Spell',
  },
  BAR_910: {
    additionalType: CardTypesByAction.TargetSpell,
    allowedTargets: [AllowedTargets.SelfArmyCard],
    cardId: 'BAR_910',
    name: 'Grimoire of Sacrifice',
    playerClass: 'Warlock',
    spellSchool: 'Shadow',
    text: 'Destroy a friendly minion. Deal $2 damage to all enemy minions.',
    type: 'Spell',
  },
  BAR_914: {
    additionalType: CardTypesByAction.NonTargetSpell,
    cardId: 'BAR_914',
    name: 'Imp Swarm (Rank 1)',
    playerClass: 'Warlock',
    spellSchool: 'Fel',
    text: 'Summon a 3/2 Imp. <i>(Upgrades when you have 5 Mana.)</i>',
    type: 'Spell',
  },
  CORE_AT_037: {
    additionalType: CardTypesByAction.NonTargetSpell,
    cardId: 'CORE_AT_037',
    name: 'Living Roots',
    playerClass: 'Druid',
    spellSchool: 'Nature',
    text: '<b>Choose One -</b> Deal $2 damage; or Summon two 1/1 Saplings.',
    type: 'Spell',
  },
  CORE_BRM_006: {
    additionalType: CardTypesByAction.Minion,
    allowedTargets: [AllowedTargets.SelfBattleField],
    cardId: 'CORE_BRM_006',
    name: 'Imp Gang Boss',
    playerClass: 'Warlock',
    text: 'Whenever this minion takes damage, summon a 1/1 Imp.',
    type: 'Minion',
  },
  CORE_CS2_009: {
    additionalType: CardTypesByAction.TargetSpell,
    allowedTargets: [AllowedTargets.SelfArmyCard, AllowedTargets.EnemyArmyCard],
    cardId: 'CORE_CS2_009',
    mechanics: [
      {
        name: 'Taunt',
      },
    ],
    name: 'Mark of the Wild',
    playerClass: 'Druid',
    spellSchool: 'Nature',
    text: 'Give a minion <b>Taunt</b> and +2/+3.<i>\\n(+2 Attack/+3 Health)</i>',
    type: 'Spell',
  },
  CORE_CS2_065: {
    additionalType: CardTypesByAction.Minion,
    allowedTargets: [AllowedTargets.SelfBattleField],
    cardId: 'CORE_CS2_065',
    mechanics: [
      {
        name: 'Taunt',
      },
    ],
    name: 'Voidwalker',
    playerClass: 'Warlock',
    text: '<b>Taunt</b>',
    type: 'Minion',
  },
  CORE_EX1_586: {
    additionalType: CardTypesByAction.Minion,
    allowedTargets: [AllowedTargets.SelfBattleField],
    cardId: 'CORE_EX1_586',
    name: 'Sea Giant',
    playerClass: 'Neutral',
    text: 'Costs (1) less for each other minion on the battlefield.',
    type: 'Minion',
  },
  CORE_ULD_191: {
    additionalType: CardTypesByAction.Minion,
    allowedTargets: [AllowedTargets.SelfBattleField],
    cardId: 'CORE_ULD_191',
    mechanics: [
      {
        name: 'Battlecry',
      },
    ],
    name: 'Beaming Sidekick',
    playerClass: 'Neutral',
    text: '<b>Battlecry:</b> Give a friendly minion +2 Health.',
    type: 'Minion',
  },
  DED_001: {
    additionalType: CardTypesByAction.Minion,
    allowedTargets: [AllowedTargets.SelfBattleField],
    cardId: 'DED_001',
    mechanics: [
      {
        name: 'Rush',
      },
      {
        name: 'Taunt',
      },
    ],
    name: 'Druid of the Reef',
    playerClass: 'Druid',
    text: '[x]<b>Choose One - </b>Transform into\\na 3/1 Shark with <b>Rush</b>; or\\na 1/3 Turtle with <b>Taunt</b>.',
    type: 'Minion',
  },
  DED_003: {
    additionalType: CardTypesByAction.Minion,
    allowedTargets: [AllowedTargets.SelfBattleField],
    cardId: 'DED_003',
    mechanics: [
      {
        name: 'Battlecry',
      },
    ],
    name: 'Jerry Rig Carpenter',
    playerClass: 'Druid',
    text: '<b>Battlecry:</b> Draw a <b>Choose One</b> spell and split it.',
    type: 'Minion',
  },
  DED_504: {
    additionalType: CardTypesByAction.NonTargetSpell,
    cardId: 'DED_504',
    mechanics: [
      {
        name: 'Tradeable',
      },
    ],
    name: 'Wicked Shipment',
    playerClass: 'Warlock',
    text: '[x]<b>Tradeable</b>\\nSummon @ 1/1 |4(Imp, Imps).\\n<i>(Upgrades by 2\\nwhen <b>Traded</b>!)</i>',
    type: 'Spell',
  },
  GIL_191: {
    additionalType: CardTypesByAction.NonTargetSpell,
    cardId: 'GIL_191',
    name: 'Fiendish Circle',
    playerClass: 'Warlock',
    spellSchool: 'Fel',
    text: '[x]Summon four 1/1 Imps.',
    type: 'Spell',
  },

  REV_242: {
    additionalType: CardTypesByAction.Minion,
    allowedTargets: [AllowedTargets.SelfBattleField],
    cardId: 'REV_242',
    name: 'Flustered Librarian',
    playerClass: 'Warlock',
    text: 'Has +1 Attack for each\\nImp you control.',
    type: 'Minion',
  },

  REV_244: {
    additionalType: CardTypesByAction.Minion,
    allowedTargets: [AllowedTargets.SelfBattleField],
    cardId: 'REV_244',
    mechanics: [
      {
        name: 'Battlecry',
      },
      {
        name: 'Infuse',
      },
    ],
    name: 'Mischievous Imp',
    playerClass: 'Warlock',
    text: '<b>Battlecry:</b> Summon a copy of this. <b>Infuse (@):</b> Summon two copies instead.',
    type: 'Minion',
  },

  REV_245: {
    additionalType: CardTypesByAction.NonTargetSpell,
    cardId: 'REV_245',
    name: 'Impending Catastrophe',
    playerClass: 'Warlock',
    spellSchool: 'Shadow',
    text: 'Draw a card. Repeat for each Imp you control.',
    type: 'Spell',
  },

  REV_313: {
    additionalType: CardTypesByAction.NonTargetSpell,
    cardId: 'REV_313',
    mechanics: [
      {
        name: 'Discover',
      },
    ],
    name: 'Planted Evidence',
    playerClass: 'Druid',
    spellSchool: 'Nature',
    text: '<b>Discover</b> a spell. It costs (2) less this turn.',
    type: 'Spell',
  },

  REV_371: {
    additionalType: CardTypesByAction.Minion,
    allowedTargets: [AllowedTargets.SelfBattleField],
    cardId: 'REV_371',
    name: 'Vile Library',
    playerClass: 'Warlock',
    text: 'Give a friendly minion +1/+1 for each Imp you control.',
    type: 'Location',
  },

  REV_835: {
    additionalType: CardTypesByAction.Minion,
    allowedTargets: [AllowedTargets.SelfBattleField],
    cardId: 'REV_835',
    mechanics: [
      {
        name: 'Battlecry',
      },
      {
        name: 'Infuse',
      },
    ],
    name: 'Imp King Rafaam',
    playerClass: 'Warlock',
    text: '<b>Battlecry:</b> Resurrect\\nfour friendly Imps.\\n<b>Infuse (@):</b> Give your\\nImps +2/+2.',
    type: 'Minion',
  },

  SW_084: {
    additionalType: CardTypesByAction.Minion,
    allowedTargets: [AllowedTargets.SelfBattleField],
    cardId: 'SW_084',
    name: 'Bloodbound Imp',
    playerClass: 'Warlock',
    text: 'Whenever this attacks, deal 2 damage to your_hero.',
    type: 'Minion',
  },

  SW_086: {
    additionalType: CardTypesByAction.Minion,
    allowedTargets: [AllowedTargets.SelfBattleField],
    cardId: 'SW_086',
    mechanics: [
      {
        name: 'Battlecry',
      },
      {
        name: 'Tradeable',
      },
    ],
    name: 'Shady Bartender',
    playerClass: 'Warlock',
    text: '<b>Tradeable</b>\\n<b>Battlecry:</b> Give your Demons +2/+2.',
    type: 'Minion',
  },

  SW_319: {
    additionalType: CardTypesByAction.Minion,
    allowedTargets: [AllowedTargets.SelfBattleField],
    cardId: 'SW_319',
    name: 'Peasant',
    playerClass: 'Neutral',
    text: 'At the start of your turn, draw a card.',
    type: 'Minion',
  },

  SW_422: {
    additionalType: CardTypesByAction.NonTargetSpell,
    cardId: 'SW_422',
    name: 'Sow the Soil',
    playerClass: 'Druid',
    spellSchool: 'Nature',
    text: '<b>Choose One</b> - Give your minions +1 Attack; or_ Summon a 2/2 Treant.',
    type: 'Spell',
  },

  TID_002: {
    additionalType: CardTypesByAction.Minion,
    allowedTargets: [AllowedTargets.SelfBattleField],
    cardId: 'TID_002',
    mechanics: [
      {
        name: 'Battlecry',
      },
    ],
    name: 'Herald of Nature',
    playerClass: 'Druid',
    text: "<b>Battlecry:</b> If you've cast a Nature spell while holding this, give your other minions +1/+2.",
    type: 'Minion',
  },

  TSC_654: {
    additionalType: CardTypesByAction.NonTargetSpell,
    cardId: 'TSC_654',
    mechanics: [
      {
        name: 'Dredge',
      },
    ],
    name: 'Aquatic Form',
    playerClass: 'Druid',
    text: '<b>Dredge</b>. If you have the Mana to play the card this turn, draw it.',
    type: 'Spell',
  },

  TSC_827: {
    additionalType: CardTypesByAction.Minion,
    allowedTargets: [AllowedTargets.SelfBattleField],
    cardId: 'TSC_827',
    name: 'Vicious Slitherspear',
    playerClass: 'Neutral',
    text: '[x]After you cast a spell,\\ngain +1 Attack until\\nyour next turn.',
    type: 'Minion',
  },

  TSC_926: {
    additionalType: CardTypesByAction.Minion,
    allowedTargets: [AllowedTargets.SelfBattleField],
    cardId: 'TSC_926',
    mechanics: [
      {
        name: 'Battlecry',
      },
      {
        name: 'Silence',
      },
    ],
    name: 'Smothering Starfish',
    playerClass: 'Neutral',
    text: '<b>Battlecry:</b> <b>Silence</b> ALL other minions.',
    type: 'Minion',
  },
  // Warlock
  VAN_EX1_319: {
    additionalType: CardTypesByAction.Minion,
    allowedTargets: [AllowedTargets.SelfBattleField],
    cardId: 'VAN_EX1_319',
    mechanics: [
      {
        name: 'Battlecry',
      },
    ],
    name: 'Flame Imp',
    playerClass: 'Warlock',
    text: '<b>Battlecry:</b> Deal 3 damage to your hero.',
    type: 'Minion',
  },
};
