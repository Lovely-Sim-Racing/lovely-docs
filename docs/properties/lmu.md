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
| `Session.Time` | `DateTime` |   |
| `Session.lapInvalidated` **NEW**{: .label .label-green .mx-0 } | `int` |   |
| `Session.Wetness` **NEW**{: .label .label-green } | `double` | 0 (Dry) ... 1 (Flooded) |

## Info

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Info.ElectricBoostMotorState` | `int` |   |
| `Info.HeadLights` | `int` |   |
| `Info.Wiper` **NEW**{: .label .label-green .mx-0 } | `int` |   |

## Fuel

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `VE.Current` | `double` |   |

## Tyres

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Tyres.CompoundFront` | `int` |   |
| `Tyres.CompoundRear` | `int` |   |
| `Tyres.SlipSpeed01` | `double` |   |
| `Tyres.SlipSpeed02` | `double` |   |
| `Tyres.SlipSpeed03` | `double` |   |
| `Tyres.SlipSpeed04` | `double` |   |

## Vehicle

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Vehicle.SoC` | `double` |   |
| `Vehicle.LiCo` | `int` |   |

## Neored Plugin **UPDATED**{: .label .label-blue }

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

| `VE.Max` | `double` |   |
| `VE.LastLapConsumption` | `double` |   |


## LMU Electronic Bridge Plugin **UPDATED**{: .label .label-blue }

LMU Electronic Bridge properties override NeoRed propeties when used together. Read more about the [LMU Electronic Bridge Plugin](https://lsr.gg/lmubridge)

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Status.Damage1` | `double` | 0-1 Front Left Suspension |
| `Status.Damage2` | `double` | 0-1 Front Right Suspension  |
| `Status.Damage3` | `double` | 0-1 Rear Left Suspension |
| `Status.Damage4` | `double` | 0-1 Rear Right Suspension |
| `Status.Damage5` | `double` | 0-1 Damage Aero |


