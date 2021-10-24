export interface PokemonI {
    "abilities" : {
        "ability" : {
            "name" : string,
            "url" : string
        },
        "is_hidden" : boolean,
        "slot" : number
    }[],
    "base_experience" : number,
    "height" : number,
    "id" : number,
    "name" : string,
    "sprites" : {
        "back_default" : string,
        "back_female" : string,
        "back_shiny" : string,
        "back_shiny_female" : string,
        "front_default" : string,
        "front_female" : string,
        "front_shiny" : string,
        "front_shiny_female" : string,
        "other" : {
            "dream_world": {
                "front_default" : string
                "front_female" : string
            },
            "official-artwork": {
                "front_default" : string
            }
        },
        "versions" : {
          "generation-i" : {
            "red-blue" : {
              "back_default" : string,
              "back_gray" : string,
              "front_default" : string,
              "front_gray" : string,
            }
            "yellow" : {
              "back_default" : string,
              "back_gray" : string,
              "front_default" : string,
              "front_gray" : string,
            }
          },
          "generation-ii" : {
            "crystal" : {
              "back_default" : string,
              "back_shiny" : string,
              "front_default" : string,
              "front_shiny" : string,
            },
            "gold" : {
              "back_default" : string,
              "back_shiny" : string,
              "front_default" : string,
              "front_shiny" : string,
            },
            "silver" : {
              "back_default" : string,
              "back_shiny" : string,
              "front_default" : string,
              "front_shiny" : string,
            },
          },
          "generation-iii" : {
            "emerald" : {
              "front_default" : string,
              "front_shiny" : string,
            },
            "firered-leafgreen" : {
              "back_default" : string,
              "back_shiny" : string,
              "front_default" : string,
              "front_shiny" : string,
            },
            "ruby-sapphire" : {
              "back_default" : string,
              "back_shiny" : string,
              "front_default" : string,
              "front_shiny" : string,
            },
          },
          "generation-iv" : {
            "diamond-pearl" : {
              "back_default" : string,
              "back_female" : string,
              "back_shiny" : string,
              "back_shiny_female" : string,
              "front_default" : string,
              "front_female" : string,
              "front_shiny" : string,
              "front_shiny_female" : string,
            },
            "platinum" : {
              "back_default" : string,
              "back_female" : string,
              "back_shiny" : string,
              "back_shiny_female" : string,
              "front_default" : string,
              "front_female" : string,
              "front_shiny" : string,
              "front_shiny_female" : string,
            },
            "heartgold-soulsilver" : {
              "back_default" : string,
              "back_female" : string,
              "back_shiny" : string,
              "back_shiny_female" : string,
              "front_default" : string,
              "front_female" : string,
              "front_shiny" : string,
              "front_shiny_female" : string,
            },
          },
          "generation-v" : {
            "black-white" : {
              "back_default" : string,
              "back_female" : string,
              "back_shiny" : string,
              "back_shiny_female" : string,
              "front_default" : string,
              "front_female" : string,
              "front_shiny" : string,
              "front_shiny_female" : string,
              "animated" : {
                "back_default" : string,
                "back_female" : string,
                "back_shiny" : string,
                "back_shiny_female" : string,
                "front_default" : string,
                "front_female" : string,
                "front_shiny" : string,
                "front_shiny_female" : string,
              }
            }
          },
          "generation-vi" : {
            "x-y": {
              "front_default": string,
              "front_female": string,
              "front_shiny": string,
              "front_shiny_female": string
            },
            "omegaruby-alphasapphire": {
              "front_default": string,
              "front_female": string,
              "front_shiny": string,
              "front_shiny_female": string
            },
          },
          "generation-vii" : {
            "icons" : {
              "front_default" : string,
              "front_female" : string,
            },
            "ultra-sun-ultra-moon": {
              "front_default": string,
              "front_female": string,
              "front_shiny": string,
              "front_shiny_female": string
            },
          },
          "generation-viii" : {
            "icons" : {
              "front_default" : string,
              "front_female" : string,
            },
          },
        }
    },
    "stats" : {
        "base_stat" : number,
        "effort" : number,
        "stat" : {
            "name" : string,
            "url" : string
        }
    }[],
    "types" : {
        "slot" : number,
        "type" : {
            "name" : string,
            "url" : string
        }
    }[],
    "weight" : number,
    "moves" : { move : Move, version_group_details : Version_group_details}[],
    "species" : species,
    "evolution_chain" : evolutionChain
};

interface Move {
  name : string,
  url : string,
}

interface Version_group_details {
  "level_learned_at" : number,
  "move_learn_method" : { "name" : string, "url" : string},
  "version_group" : { "name" : string, "url" : string}
}[]

interface species{
  evolution_chain: {
    "url": string
  },
}

interface evolutionChain {
  chain : {
    evolution_details : {
      "gender" : string,
      "held_item" : string,
      "item": string,
      "known_move": string,
      "known_move_type": string,
      "location": string,
      "min_affection": Number,
      "min_beauty": Number,
      "min_happiness": Number,
      "min_level": number,
      "needs_overworld_rain": boolean,
      "party_species": string,
      "party_type": string,
      "relative_physical_stats": number,
      "time_of_day": string,
      "trade_species": string,
      "turn_upside_down": boolean,
      "trigger": {
        "name": string,
        "url": string
      },
    }[],
    species : {
      "name" : string,
      "url" : string
    },
    evolves_to : evolutionChain;
    stage1Id : string;
  }
}
