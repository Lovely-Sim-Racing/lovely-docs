---
title: LeMans Ultimate
layout: default
parent: Game Specific
nav_order: 120
---

# LeMans Ultimate
Always use the full property name, as demonstrated below:

**LovelyPlugin.TeamLINQ.** + `Property Name`
{: .note }

## Session

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Session.Wetness` **NEW**{: .label .label-green } | `double` | 0 (Dry) ... 1 (Flooded) |

## Info

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Info.ElectricBoostMotorState` | `int` |   |
| `Info.HeadLights` | `int` |   |

## Tyres

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Tyres.CompoundFront` | `int` |   |
| `Tyres.CompoundRear` | `int` |   |
| `Tyres.SlipSpeed01` | `double` |   |
| `Tyres.SlipSpeed02` | `double` |   |
| `Tyres.SlipSpeed03` | `double` |   |
| `Tyres.SlipSpeed04` | `double` |   |

## Neored Plugin **NEW**{: .label .label-green }

Read more about the [NeoRed Plugin](https://lsr.gg/neored)

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Tyres.OptimalTempSoft` | `double` |   |
| `Tyres.OptimalTempMedium` | `double` |   |
| `Tyres.OptimalTempHard` | `double` |   |
| `Tyres.OptimalTempWet` | `double` |   |

| `Tyres.CompoundFL` | `string` |   |
| `Tyres.CompoundFR` | `string` |   |
| `Tyres.CompoundRL` | `string` |   |
| `Tyres.CompoundRR` | `string` |   |

| `VE.Current` | `double` |   |
| `VE.Max` | `double` |   |
| `VE.LastLapConsumption` | `double` |   |

| `Vehicle.TCSlip` | `int` |   |
| `Vehicle.FARB` | `int` |   |
| `Vehicle.RARB` | `int` |   |
| `Vehicle.FuelMix` | `int` |   |
| `Vehicle.Regen` | `int` |   |
| `Vehicle.BrakeMIG` | `int` |   |

## LMU Electronic Bridge Plugin **NEW**{: .label .label-green }

LMU Electronic Bridge properties override NeoRed propeties when used together. Read more about the [LMU Electronic Bridge Plugin](https://lsr.gg/lmubridge)

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Vehicle.TCSlip` | `int` |   |
| `Vehicle.FARB` | `int` |   |
| `Vehicle.RARB` | `int` |   |
| `Vehicle.FuelMix` | `int` |   |
| `Vehicle.Regen` | `int` |   |
| `Vehicle.BrakeMIG` | `int` |   |

| `Status.Damage1` | `double` | 0-1 Front Left Suspension |
| `Status.Damage2` | `double` | 0-1 Front Right Suspension  |
| `Status.Damage3` | `double` | 0-1 Rear Left Suspension |
| `Status.Damage4` | `double` | 0-1 Rear Right Suspension |
| `Status.Damage5` | `double` | 0-1 Damage Aero |


