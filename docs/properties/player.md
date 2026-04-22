---
title: Player
layout: default
parent: Properties
nav_order: 30
---

# Player
Always use the full property name, as demonstrated below:

**LovelyPlugin.TeamLINQ.** + `Property Name`
{: .note }

## Session

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :---- |
| `Session.PlayerName` | `string` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Session.Position` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Session.TrackPositionPercent` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Session.TrackPositionDistance` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Session.CarId` | `string` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Session.CarModel` | `string` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Session.CarClass` | `string` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Session.CurrentLap` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Session.CompletedLaps` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Session.RemainingLaps` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Session.LapInvalidated` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Session.CurrentSector` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

## Info

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :---- |
| `Info.Gear` | `string` | R, N, 0 ... n | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.GearMax` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.Speed` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.Throttle` | `double` | 0-100 | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.Brake` | `double` | 0-100 | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.Clutch` | `double` | 0-100 | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.Handbrake` | `double` | 0-100 | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `Info.TurnIndicatorLeft` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.TurnIndicatorRight` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `Info.Rpms` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.RpmsMax` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.RpmsRedLine` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.RpmsRedLineSetting` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.RpmsCurrentGearRedLine` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.RpmsRedLineReached` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.RpmsPercent` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `Info.PitLimiterSpeed` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.PitLimiterOn` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.IgnitionOn` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.EngineStarted` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.WaterTemp` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.OilPressure` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.OilTemp` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.Battery` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.OilLevel` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `Info.AccelerationHeave` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.AccelerationSurge` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Info.AccelerationSway` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

## Spotter

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Spotter.Left` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Spotter.LeftAngle` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Spotter.LeftDistance` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Spotter.Right` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Spotter.RightAngle` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Spotter.RightDistance` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

## Status

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Status.IsInPit` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Status.IsInPitLane` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

## Damage

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Damage.Front` | `double` | 0-100 Damage Front | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Damage.Rear` | `double` | 0-100 Damage Rear | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Damage.Left` | `double` | 0-100 Damage Left | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Damage.Right` | `double` | 0-100 Damage Right | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Damage.Overall` | `double` | 0-100 Damage Overall | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

## Fuel

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Fuel.Current` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Fuel.Max` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Fuel.PerLap` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Fuel.RemainingTime` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Fuel.EstimatedLaps` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Fuel.Percent` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Fuel.LastLapConsumption` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Fuel.CurrentLapConsumption` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Fuel.InstantConsumption` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

## Tyres

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Tyres.PressureFL` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.PressureFLAvg` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.TempFL` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.TempFLAvg` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.TempFLInner` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.TempFLMiddle` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.TempFLOuter` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.WearFL` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `Tyres.PressureFR` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.PressureFRAvg` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.TempFR` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.TempFRAvg` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.TempFRInner` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.TempFRMiddle` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.TempFROuter` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.WearFR` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `Tyres.PressureRL` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.PressureRFLAvg` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.TempRL` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.TempRLAvg` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.TempRLInner` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.TempRLMiddle` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.TempRLOuter` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.WearRL` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `Tyres.PressureRR` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.PressureRRAvg` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.TempRR` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.TempRRAvg` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.TempRRInner` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.TempRRMiddle` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.TempRROuter` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Tyres.WearRR` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |


## Brakes

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Brakes.TempFL` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Brakes.TempFLAvg` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Brakes.TempFR` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Brakes.TempFRAvg` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Brakes.TempRL` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Brakes.TempRLAvg` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Brakes.TempRR` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Brakes.TempRRAvg` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

## Vehicle Settings

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Vehicle.TC` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.TCActive` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.TCCut` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.ABS` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.ABSActive` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.Bias` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.EngineMap` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.ERS` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.TurboPercent` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.Turbo` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.MGUK` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.ERSDeployment` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Vehicle.KERS` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

## Lap Times

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `LapTime.Current` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapTime.Last` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapTime.Best` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapTime.AllTimeBest` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapTime.EstimatedSessionBestBased` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapTime.EstimatedSessionBestBasedSimhub` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapTime.EstimatedLapTime_AllTimeBestBased` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

## Sector Times

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Session.S1Time` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Session.S1LastTime` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Session.S1BestTime` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Session.S1BestLapTime` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `Session.S2Time` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Session.S2LastTime` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Session.S2BestTime` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Session.S2BestLapTime` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `Session.S3LastTime` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Session.S3BestTime` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `Session.S3BestLapTime` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

## Lap History

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `LapHistory.00` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_00_DeltaToAllTimeBest` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_00_DeltaToSessionBest` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_00_IsCurrentSession` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `LapHistory.01` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_01_DeltaToAllTimeBest` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_01_DeltaToSessionBest` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_01_IsCurrentSession` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `LapHistory.02` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_02_DeltaToAllTimeBest` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_02_DeltaToSessionBest` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_02_IsCurrentSession` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `LapHistory.03` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_03_DeltaToAllTimeBest` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_03_DeltaToSessionBest` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_03_IsCurrentSession` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `LapHistory.04` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_04_DeltaToAllTimeBest` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_04_DeltaToSessionBest` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_04_IsCurrentSession` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `LapHistory.05` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_05_DeltaToAllTimeBest` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_05_DeltaToSessionBest` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_05_IsCurrentSession` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `LapHistory.06` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_06_DeltaToAllTimeBest` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_06_DeltaToSessionBest` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_06_IsCurrentSession` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `LapHistory.07` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_07_DeltaToAllTimeBest` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_07_DeltaToSessionBest` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_07_IsCurrentSession` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |

| `LapHistory.08` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_08_DeltaToAllTimeBest` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_08_DeltaToSessionBest` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_08_IsCurrentSession` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |


| `LapHistory.09` | `TimeSpan` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_09_DeltaToAllTimeBest` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_09_DeltaToSessionBest` | `double` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_09_IsCurrentSession` | `int` |  | **PRO**{: .label .label-pro .mx-0 } **STARTER**{: .label .label-starter .mx-0 } |
