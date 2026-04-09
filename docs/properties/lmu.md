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
| `Session.lapInvalidated` | `int` |   |
| `Session.Wetness` | `double` | 0 (Dry) ... 1 (Flooded) |

## Info

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Info.ElectricBoostMotorState` | `int` |   |
| `Info.HeadLights` | `int` |   |
| `Info.Wiper` | `int` |   |

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

## Damage **NEW**{: .label .label-green }

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Damage.Front` | `double` | 0-100 |
| `Damage.FrontLeft` | `double` | 0-100 |
| `Damage.Left` | `double` | 0-100 |
| `Damage.RearLeft` | `double` | 0-100 |
| `Damage.Rear` | `double` | 0-100 |
| `Damage.RearRight` | `double` | 0-100 |
| `Damage.Right` | `double` | 0-100 |
| `Damage.FrontRight` | `double` | 0-100 |

## Neored Plugin

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

| `Vehicle.FuelMix` | `string` |   |

| `Damage.SuspensionFL` | `double` | 0-1 Front Left Suspension |
| `Damage.SuspensionFR` | `double` | 0-1 Front Right Suspension  |
| `Damage.SuspensionRL` | `double` | 0-1 Rear Left Suspension |
| `Damage.SuspensionRR` | `double` | 0-1 Rear Right Suspension |
| `Damage.Aero` | `double` | 0-1 Damage Aero |
