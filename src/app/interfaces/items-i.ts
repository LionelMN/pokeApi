export interface ItemsI {
  'name' : string,
  'url' : string,
  'attributes' : atributes,
  'baby_ trigger_ for' : string,
  'category' : item_category,
  'cost' : number,
  'effect_entries' : effect[],
  'flavor_text_entries' : flavor_text[],
  'fling_effect' : fling_effect,
  'fling_power' : number,
  'held_by_pokemon' : held_by_pokemon[],
  'id' : number,
  'machines' : machine[]
  'sprites' : string
}

interface atributes {
  'name' :string,
  'url' : string
}

interface effect {
  'effect' : string,
  'language' : language,
  'short_effect' : string
}

interface flavor_text {
  'language' : language,
  'text' : string,
  'version_group' : version_group
}

interface language {
  'name' :string,
  'url' : string
}

interface version_group {
  'name' :string,
  'url' : string
}

interface fling_effect {
  'name' :string,
  'url' : string
}

interface held_by_pokemon {
  'pokemon' : {
    'name' : string,
    'url' : string
  },
  'version_details' : {
    'rarity' : number,
    'version' : {
      'name' : string,
      'url' : string
    }
  }[]
}

interface machine {
  'machine' : {
    'url' : string
  }
  'version_group' : version_group
}


export interface item_category {
  'name' :string,
  'url' : string
}
