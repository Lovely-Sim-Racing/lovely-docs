---
title: Player
layout: default
parent: Properties
nav_order: 30
---

# Player
The full inventory of player related properties.

**P**{: .label .label-pro .mx-0 .mb-1 } Available in **Team Pro**{: .mr-6 }
**S**{: .label .label-starter .mx-0 .mb-1 } Available in **Team Starter**

## Session

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :---- |
| `Session.PlayerName` | `string` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.Position` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.TrackPositionPercent` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.TrackPositionDistance` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.CarId` | `string` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.CarModel` | `string` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.CarClass` | `string` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.CurrentLap` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.CompletedLaps` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.RemainingLaps` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.LapInvalidated` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.CurrentSector` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Info

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :---- |
| `Info.Gear` | `string` | R, N, 0 ... n | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.GearMax` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.Speed` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.Throttle` | `double` | 0-100 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.Brake` | `double` | 0-100 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.Clutch` | `double` | 0-100 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.Handbrake` | `double` | 0-100 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Info.TurnIndicatorLeft` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.TurnIndicatorRight` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Info.Rpms` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.RpmsMax` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.RpmsRedLine` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.RpmsRedLineSetting` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.RpmsCurrentGearRedLine` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.RpmsRedLineReached` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.RpmsPercent` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Info.PitLimiterSpeed` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.PitLimiterOn` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.IgnitionOn` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.EngineStarted` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.WaterTemp` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.OilPressure` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.OilTemp` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.Battery` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.OilLevel` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Info.AccelerationHeave` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.AccelerationSurge` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.AccelerationSway` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Spotter

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Spotter.Left` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Spotter.LeftAngle` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Spotter.LeftDistance` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Spotter.Right` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Spotter.RightAngle` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Spotter.RightDistance` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Status

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Status.IsInPit` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Status.IsInPitLane` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Damage

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Damage.Front` | `double` | 0-100 Damage Front | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.Rear` | `double` | 0-100 Damage Rear | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.Left` | `double` | 0-100 Damage Left | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.Right` | `double` | 0-100 Damage Right | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Damage.Overall` | `double` | 0-100 Damage Overall | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Fuel

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Fuel.Current` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Fuel.Max` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Fuel.PerLap` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Fuel.Average5` | `double` | Average fuel per lap over the last 5 clean laps (no pit lane, no refuel), `0` until 5 laps are completed | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Fuel.RemainingTime` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Fuel.EstimatedLaps` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Fuel.Percent` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Fuel.LastLapConsumption` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Fuel.CurrentLapConsumption` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Fuel.InstantConsumption` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Tyres

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Tyres.PressureFL` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.PressureFLAvg` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempFL` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempFLAvg` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempFLInner` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempFLMiddle` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempFLOuter` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.WearFL` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Tyres.PressureFR` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.PressureFRAvg` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempFR` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempFRAvg` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempFRInner` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempFRMiddle` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempFROuter` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.WearFR` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Tyres.PressureRL` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.PressureRFLAvg` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempRL` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempRLAvg` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempRLInner` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempRLMiddle` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempRLOuter` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.WearRL` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Tyres.PressureRR` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.PressureRRAvg` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempRR` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempRRAvg` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempRRInner` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempRRMiddle` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempRROuter` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.WearRR` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |


## Brakes

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Brakes.TempFL` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Brakes.TempFLAvg` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Brakes.TempFR` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Brakes.TempFRAvg` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Brakes.TempRL` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Brakes.TempRLAvg` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Brakes.TempRR` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Brakes.TempRRAvg` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Vehicle Settings

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Vehicle.TC` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.TCActive` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.TCCut` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.ABS` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.ABSActive` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.Bias` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.EngineMap` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.ERS` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.TurboPercent` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.Turbo` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.MGUK` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.ERSDeployment` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.KERS` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Lap Times

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `LapTime.Current` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapTime.Last` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapTime.Best` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapTime.AllTimeBest` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapTime.Average5` | `TimeSpan` | Average of the last 5 laps this session, `00:00:00` until 5 laps are completed | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapTime.Average10` | `TimeSpan` | Average of the last 10 laps this session, `00:00:00` until 10 laps are completed | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapTime.EstimatedSessionBestBased` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapTime.EstimatedSessionBestBasedSimhub` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapTime.EstimatedLapTime_AllTimeBestBased` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Sector Times

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Session.S1Time` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.S1LastTime` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.S1BestTime` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.S1BestLapTime` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Session.S2Time` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.S2LastTime` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.S2BestTime` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.S2BestLapTime` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Session.S3LastTime` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.S3BestTime` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.S3BestLapTime` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Lap History

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `LapHistory.00` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_00_DeltaToAllTimeBest` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_00_DeltaToSessionBest` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_00_IsCurrentSession` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `LapHistory.01` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_01_DeltaToAllTimeBest` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_01_DeltaToSessionBest` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_01_IsCurrentSession` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `LapHistory.02` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_02_DeltaToAllTimeBest` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_02_DeltaToSessionBest` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_02_IsCurrentSession` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `LapHistory.03` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_03_DeltaToAllTimeBest` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_03_DeltaToSessionBest` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_03_IsCurrentSession` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `LapHistory.04` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_04_DeltaToAllTimeBest` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_04_DeltaToSessionBest` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_04_IsCurrentSession` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `LapHistory.05` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_05_DeltaToAllTimeBest` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_05_DeltaToSessionBest` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_05_IsCurrentSession` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `LapHistory.06` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_06_DeltaToAllTimeBest` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_06_DeltaToSessionBest` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_06_IsCurrentSession` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `LapHistory.07` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_07_DeltaToAllTimeBest` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_07_DeltaToSessionBest` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_07_IsCurrentSession` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `LapHistory.08` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_08_DeltaToAllTimeBest` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_08_DeltaToSessionBest` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_08_IsCurrentSession` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |


| `LapHistory.09` | `TimeSpan` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_09_DeltaToAllTimeBest` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_09_DeltaToSessionBest` | `double` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.PreviousLap_09_IsCurrentSession` | `int` |  | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Lap Review

Everything about the last completed lap, measured by the plugin lap by lap (used by the Dash Pro Lap Review). Every value is text, with numbers in invariant format (`3.71`): a value that couldn't be measured is empty, for example when the lap was joined part way, after a reset or in a new session. The values stay the same until the next lap is completed.

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `LapReview.Lap` | `string` | The last completed lap measured by the plugin (the completed laps count at the line), `0` until one is completed in the session. Changes with every completed lap | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapReview.LapTime` | `string` | Last lap time in seconds (`123.355`) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapReview.Delta` | `string` | Last lap time minus the session best from before the lap (the all-time best when there's no session best yet), in seconds; negative for a new best | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapReview.DeltaReference` | `string` | What `LapReview.Delta` compares with: `session` or `alltime` | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapReview.Valid` | `string` | `true`, or `false` when the lap was invalidated at any point | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapReview.Incidents` | `string` | Incidents added during the lap (games with an incident count) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapReview.Sectors` | `string` | JSON list of the lap's sectors (any number), each `{ "Time": 41.102, "Delta": -0.084, "State": "faster" }`: the sector time in seconds, the delta to the player's best sector from before the lap, and `fastest` (the session's best sector by anyone), `faster` (the player's best) or `slower` | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapReview.FuelUsed` | `string` | Fuel used during the lap; empty when the lap touched the pit lane or was refuelled | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapReview.TopSpeed` | `string` | Top speed during the lap, in the game's speed unit | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapReview.TyreWearFL` | `string` | Tyre wear added during the lap, front left; empty when the lap touched the pit lane | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapReview.TyreWearFR` | `string` | Tyre wear added during the lap, front right | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapReview.TyreWearRL` | `string` | Tyre wear added during the lap, rear left | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapReview.TyreWearRR` | `string` | Tyre wear added during the lap, rear right | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapReview.Position` | `string` | Position at the line | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapReview.PositionGain` | `string` | Positions gained during the lap (negative when lost) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapReview.ClassPosition` | `string` | Class position at the line | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapReview.ClassPositionGain` | `string` | Class positions gained during the lap (negative when lost) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapReview.GapAhead` | `string` | Gap in seconds to the car directly ahead in the class, at the line | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapReview.GapAheadChange` | `string` | How much `LapReview.GapAhead` changed during the lap (negative: closer); empty when it's a different car | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapReview.GapBehind` | `string` | Gap in seconds to the car directly behind in the class, at the line | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapReview.GapBehindChange` | `string` | How much `LapReview.GapBehind` changed during the lap (positive: further away); empty when it's a different car | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
