ServerEvents.recipes(event => {
  event.remove({ output: 'create_sa:copper_jetpack_chestplate' })
  event.remove({ output: 'create_sa:andesite_jetpack_chestplate' })
  event.remove({ output: 'create_sa:brass_jetpack_chestplate' })

  event.recipes.create.mechanical_crafting('create_sa:brass_jetpack_chestplate', [
    'ABABA',
    'CBDBC',
    ' BEB '
  ], {
    A: 'create:cogwheel',
    B: 'create:brass_block',
    C: 'create:encased_fan',
    D: 'create_sa:steam_engine',
    E: 'minecraft:elytra'
  })

  // Diamond Backpack
  event.remove({ output: 'sophisticatedbackpacks:diamond_backpack' })
  event.shaped('sophisticatedbackpacks:diamond_backpack', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'minecraft:diamond_block',
    B: 'minecraft:shulker_shell',
    C: 'sophisticatedbackpacks:gold_backpack'
  })

  // Netherite Backpack
  event.remove({ output: 'sophisticatedbackpacks:netherite_backpack' })
  event.smithing('sophisticatedbackpacks:netherite_backpack', 
    'minecraft:netherite_upgrade_smithing_template',
    'sophisticatedbackpacks:diamond_backpack',
    'minecraft:netherite_block'
  )
})
