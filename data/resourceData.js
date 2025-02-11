Game.resourceCategoryData = (function () {

    var instance = {};

    instance.energy = {
        title: 'Energy',
        category: 'energy'
    };

    instance.earth = {
        class: 'collapseEarth',
        title: '地球资源',
        category: 'earth'
    };

    instance.innerSol = {
        class: 'collapseInnerPlanetary',
        title: '近地行星资源',
        category: 'innerSol'
    };

    instance.outerSol = {
        class: 'collapseOuterPlanetary',
        title: '远地行星资源',
        category: 'outerSol'
    };

    return instance;

}());

Game.resourceData = (function () {

    var instance = {};


    /*********************
     * Energy Resources  *
     *********************/

    instance.energy = {
        name: '能量',
        desc: '能量可通过蒸汽引擎、太阳能乃至聚变等核能途径产出。初始的最大储能值为 100,000，但后续可通过解锁电池来扩展。',
        icon: 'energyIcon',
        category: 'energy',
        baseCapacity: 50000,
        unlocked: false
    };

    instance.plasma = {
        name: '等离子体',
        desc: '等离子体是物质的第四种形态，也是应用于公司中各类四级机器和大型太空结构的极限能量来源。初始的最大等离子体储量为 100,000，但后续可通过解锁等离子体存储单元来扩展。',
        icon: 'plasmaIcon',
        category: 'energy',
        baseCapacity: 50,
        unlocked: false
    };

    instance.uranium = {
        name: 'Uranium',
        desc: 'Metal is one of the primary resources. It is used for many things, including storage upgrades, machinery and most things in space.',
        icon: 'uraniumIcon',
        category: 'energy',
        baseCapacity: 50,
        unlocked: false
    };

    instance.lava = {
        name: 'Lava',
        desc: 'Hard to handle and only found in volcanoes, Lava is one of the hardest resources to get.',
        icon: 'lavaIcon',
        category: 'energy',
        baseCapacity: 50,
        unlocked: false
    };

    /********************
     * Earth Resources  *
     ********************/

    instance.oil = {
        name: '石油',
        desc: '从地底钻取的石油是 2 级资源获取设备的必要材料。',
        icon: 'oilIcon',
        category: 'earth',
        baseCapacity: 50,
        unlocked: false
    };

    instance.metal = {
        name: 'Metal',
        desc: 'Metal is one of the primary resources. It is used for many things, including storage upgrades, machinery and most things in space.',
        icon: 'metalIcon',
        category: 'earth',
        baseCapacity: 50,
        unlocked: true
    };

    instance.gem = {
        name: 'Gem',
        desc: 'Gems are one of the primary resources. They are used for advanced machines and for powerful tools and components. They are more useful in later game.',
        icon: 'gemIcon',
        category: 'earth',
        baseCapacity: 50,
        unlocked: true
    };

    instance.charcoal = {
        name: 'Charcoal',
        desc: 'Charcoal is a secondary tier resource and is used by Engines to produce power for your company. 1 Charcoal is created by burning wood',
        icon: 'charcoalIcon',
        category: 'earth',
        baseCapacity: 50,
        unlocked: false
    };

    instance.wood = {
        name: 'Wood',
        desc: 'Wood is one of the primary resources. It is used more often in early game for tools and buildings.',
        icon: 'woodIcon',
        category: 'earth',
        baseCapacity: 50,
        unlocked: true
    };

    instance.silicon = {
        name: 'Silicon',
        desc: 'Silicon is useful for automatic mining systems of the third tier. These will be very useful in building your first wonder. Despite being a high tier resource, it is found mainly on Earth by heating sand.',
        icon: 'siliconIcon',
        category: 'earth',
        baseCapacity: 50,
        unlocked: false
    };


    /******************************
     * Inner Planetary Resources  *
     ******************************/

    instance.lunarite = {
        name: '月岩',
        desc: '顾名思义，月岩是一种产自月球的稀有资源。其强度远大于普通的金属材料，但在地球上无处可寻，因而获取难度也不可同日而语。',
        icon: 'lunariteIcon',
        category: 'innerSol',
        baseCapacity: 50,
        unlocked: false
    };

    instance.methane = {
        name: 'Methane',
        desc: 'Methane is a gas found in abundance on Venus. It can be used to power your company much more effectively than solid fuel.',
        icon: 'methaneIcon',
        category: 'innerSol',
        baseCapacity: 50,
        unlocked: false
    };

    instance.titanium = {
        name: 'Titanium',
        desc: 'Titanium is a metal found mostly on Mars. It is used for building strong machines and methane power plants.',
        icon: 'titaniumIcon',
        category: 'innerSol',
        baseCapacity: 50,
        unlocked: false
    };

    instance.gold = {
        name: 'Gold',
        desc: 'Gold is a metal found inside asteroids. It is used to build some Wonders and for complex machinery.',
        icon: 'goldIcon',
        category: 'innerSol',
        baseCapacity: 50,
        unlocked: false
    };

    instance.silver = {
        name: '银',
        desc: '富集于小行星带之中的一种金属材料。',
        icon: 'silverIcon',
        category: 'innerSol',
        baseCapacity: 50,
        unlocked: false
    };

    /******************************
     * Outer Planetary Resources  *
     ******************************/

    instance.hydrogen = {
        name: '氢',
        desc: '氢大量存在于木星和土星等气体巨行星之上。',
        icon: 'hydrogenIcon',
        category: 'outerSol',
        baseCapacity: 50,
        unlocked: false
    };

    instance.helium = {
        name: 'Helium',
        desc: 'Helium is the second most common element on gas giants such as Jupiter and Saturn.',
        icon: 'heliumIcon',
        category: 'outerSol',
        baseCapacity: 50,
        unlocked: false
    };

    instance.ice = {
        name: 'Ice',
        desc: 'Ice, although it can be collected on Earth, is not nearly as profitable as flying to Pluto and back with space craft full of the stuff. It is mainly used for super-cooling technology necessary for Tier 4 machines.',
        icon: 'iceIcon',
        category: 'outerSol',
        baseCapacity: 50,
        unlocked: false
    };

    instance.meteorite = {
        name: 'Meteorite',
        desc: 'Creating Meteorite is only possible from purer forms of energy than those created with earth technology. Therefore, Plasma is necessary to make the strong resource.',
        icon: 'meteoriteIcon',
        category: 'outerSol',
        baseCapacity: 50,
        unlocked: false
    };

    instance.science = {
        name: '科学点产出',
        desc: '新型科技的研究和游戏进程的发展均需要消耗科学点来执行。',
        icon: 'scienceIcon',
        baseCapacity: 1000000,
        unlocked: false
    };

    return instance;
}());

Game.storageData = (function(){

    var instance = {};

    // Storage Upgrades
    var baseUpgradeData = {
        name: 'Storage Upgrade:',
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        resource: undefined,
        displayNeedsUpdate: true,

        buttonText: 'Upgrade Storage',


        apply: function (self) {
            if (typeof self.resource === 'undefined') {
                return;
            }
            var res = Game.resources.getResourceData(self.resource);
            res.capacity *= 2;
            res.displayNeedsUpdate = true;
            self.displayNeedsUpdate = true;
        },
    };

    /*********************
     * Energy Resources  *
     *********************/

    instance.storageUpgradePlasma = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Plasma storage size to ',
        resource: 'plasma',
        cost: {
            'plasma': 50
        }
    });

    instance.storageUpgradeUranium = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Uranium storage size to ',
        resource: 'uranium',
        cost: {
            'uranium': 50,
            'lunarite': 20
        }
    });

    instance.storageUpgradeLava = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Lava storage size to ',
        resource: 'lava',
        cost: {
            'lava': 50,
            'lunarite': 20
        }
    });

    /********************
     * Earth Resources  *
     ********************/

    instance.storageUpgradeOil = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Oil storage size to ',
        resource: 'oil',
        cost: {
            'oil': 50,
            'metal': 20
        }
    });

    instance.storageUpgradeMetal = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Metal storage size to ',
        resource: 'metal',
        cost: {
            'metal': 50
        }
    });

    instance.storageUpgradeGem = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Gem storage size to ',
        resource: 'gem',
        cost: {
            'gem': 50,
            'metal': 20
        }
    });

    instance.storageUpgradeCharcoal = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Charcoal storage size to ',
        resource: 'charcoal',
        cost: {
            'charcoal': 50,
            'metal': 20
        }
    });

    instance.storageUpgradeWood = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Wood storage size to ',
        resource: 'wood',
        cost: {
            'wood': 50,
            'metal': 20
        }
    });

    instance.storageUpgradeSilicon = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Silicon storage size to ',
        resource: 'silicon',
        cost: {
            'silicon': 50,
            'lunarite': 20
        }
    });

    /******************************
     * Inner Planetary Resources  *
     ******************************/

    instance.storageUpgradeLunarite = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Lunarite storage size to ',
        resource: 'lunarite',
        cost: {
            'lunarite': 50,
            'metal': 400
        }
    });

    instance.storageUpgradeMethane = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Methane storage size to ',
        resource: 'methane',
        cost: {
            'methane': 50,
            'lunarite': 20
        }
    });

    instance.storageUpgradeTitanium = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Titanium storage size to ',
        resource: 'titanium',
        cost: {
            'titanium': 50,
            'lunarite': 20
        }
    });

    instance.storageUpgradeGold = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Gold storage size to ',
        resource: 'gold',
        cost: {
            'gold': 50,
            'lunarite': 20
        }
    });

    instance.storageUpgradeSilver = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Silver storage size to ',
        resource: 'silver',
        cost: {
            'silver': 50,
            'lunarite': 20
        }
    });

    /******************************
     * Outer Planetary Resources  *
     ******************************/

    instance.storageUpgradeHydrogen = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Hydrogen storage size to ',
        resource: 'hydrogen',
        cost: {
            'hydrogen': 50,
            'lunarite': 20
        }
    });

    instance.storageUpgradeHelium = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Helium storage size to ',
        resource: 'helium',
        cost: {
            'helium': 50,
            'lunarite': 20
        }
    });

    instance.storageUpgradeIce = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Ice storage size to ',
        resource: 'ice',
        cost: {
            'ice': 50,
            'lunarite': 20
        }
    });

    instance.storageUpgradeMeteorite = $.extend({}, baseUpgradeData, {
        desc: 'Upgrade your Meteorite storage size to ',
        resource: 'meteorite',
        cost: {
            'meteorite': 50,
            'lunarite': 4
        }
    });

    return instance;
}());