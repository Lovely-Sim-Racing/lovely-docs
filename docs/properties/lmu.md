---
title: LeMans Ultimate
layout: default
parent: Game Specific
nav_order: 55
---

# LeMans Ultimate
The full inventory of LeMans Ultimate related properties.

**P**{: .label .label-pro .mx-0 .mb-1 } Available in **Team Pro**{: .mr-6 }
**S**{: .label .label-starter .mx-0 .mb-1 } Available in **Team Starter**

## Session

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Session.Time` | `DateTime` | In-game time of day | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.LapInvalidated` | `int` | `1` when the current lap has been invalidated | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.Penalty` | `int` | Penalties the player still has to serve (`0` none); the game doesn't say which kind | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.Wetness` | `double` | 0 (Dry) ... 1 (Flooded) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Weather

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Weather.Raining` | `double` | Rain severity now, 0 (none) ... 1 (heaviest) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Weather.DarkCloud` | `double` | Cloud darkness now, 0 (clear) ... 1 (darkest) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Flags 

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Flag.Yellow1` | `int` | `1` while sector 1 is under yellow | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Flag.Yellow2` | `int` | `1` while sector 2 is under yellow | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Flag.Yellow3` | `int` | `1` while sector 3 is under yellow | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Info

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Info.HeadLights` | `int` | `1` while the headlights are on | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.Wiper` | `int` | Wiper setting | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.Overheating` | `int` | `1` while the engine is overheating | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.Torque` | `double` | Engine torque | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.ElectricBoostMotorState` | `int` | Hybrid motor state: `0` unavailable, `1` inactive, `2` deploying, `3` regenerating | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.ElectricMotorTemp` | `double` | Hybrid motor temperature | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.ElectricWaterTemp` | `double` | Hybrid motor cooling water temperature | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.ElectricMotorTorque` | `double` | Hybrid motor torque | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Fuel

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `VE.Current` | `double` | Virtual Energy left, percentage | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `VE.LastLapConsumption` | `double` | Virtual Energy % used on the last completed lap, `0` until a lap is completed | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `VE.EstimatedLaps` | `double` | Laps the Virtual Energy left lasts, at `VE.Average5` (`VE.LastLapConsumption` until 5 laps are completed), `0` when unknown | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `VE.Average5` | `double` | Average Virtual Energy % per lap over the last 5 clean laps (no pit lane, no refuel), `0` until 5 laps are completed | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Tyres

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Tyres.CompoundFront` | `int` | Front tyre compound index | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.CompoundRear` | `int` | Rear tyre compound index | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.CompoundFL` | `string` | Front left tyre compound name (Soft, Medium, Hard, Wet), same as front right | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.CompoundFR` | `string` | Front right tyre compound name, same as front left | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.CompoundRL` | `string` | Rear left tyre compound name, same as rear right | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.CompoundRR` | `string` | Rear right tyre compound name, same as rear left | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.SlipSpeed01` | `double` | Front left tyre slip speed | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.SlipSpeed02` | `double` | Front right tyre slip speed | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.SlipSpeed03` | `double` | Rear left tyre slip speed | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.SlipSpeed04` | `double` | Rear right tyre slip speed | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Vehicle

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Vehicle.SoC` | `double` | Hybrid battery state of charge | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.LiCo` | `int` | Lift and coast progress, 0-255 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.EngineMapMax` | `int` | Highest engine (motor) map setting available | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.Regen` | `double` | Regeneration level setting | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.TCSlip` | `int` | Traction control slip setting | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Damage

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Damage.Front` | `double` | 0-100 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.FrontLeft` | `double` | 0-100 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.Left` | `double` | 0-100 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.RearLeft` | `double` | 0-100 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.Rear` | `double` | 0-100 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.RearRight` | `double` | 0-100 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.Right` | `double` | 0-100 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.FrontRight` | `double` | 0-100 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Neored Plugin

Read more about the [NeoRed Plugin](https://lsr.gg/neored)

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Tyres.OptimalTempSoft` | `double` | Optimal temperature of the soft compound | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.OptimalTempMedium` | `double` | Optimal temperature of the medium compound | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.OptimalTempHard` | `double` | Optimal temperature of the hard compound | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.OptimalTempWet` | `double` | Optimal temperature of the wet compound | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Vehicle.FuelMix` | `string` | Engine mixture setting | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Damage.SuspensionFL` | `double` | 0-1 Front Left Suspension | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.SuspensionFR` | `double` | 0-1 Front Right Suspension  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.SuspensionRL` | `double` | 0-1 Rear Left Suspension | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.SuspensionRR` | `double` | 0-1 Rear Right Suspension | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.Aero` | `double` | 0-1 Damage Aero | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
