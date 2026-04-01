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

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Session.PlayerName` | `string` |  |
| `Session.Position` | `int` |  |
| `Session.TrackPositionPercent` | `double` |  |
| `Session.TrackPositionDistance` | `double` |  |
| `Session.CarId` | `string` |  |
| `Session.CarModel` | `string` |  |
| `Session.CarClass` | `string` |  |
| `Session.CurrentLap` | `int` |  |
| `Session.CompletedLaps` | `int` |  |
| `Session.RemainingLaps` | `int` |  |
| `Session.LapInvalidated` | `int` |  |
| `Session.CurrentSector` | `int` |  |

## Info

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Info.Gear` | `string` | R, N, 0 ... n |
| `Info.GearMax` | `int` |  |
| `Info.Speed` | `double` |  |
| `Info.Throttle` | `double` | 0-100 |
| `Info.Brake` | `double` | 0-100 |
| `Info.Clutch` | `double` | 0-100 |
| `Info.Handbrake` | `double` | 0-100 |

| `Info.TurnIndicatorLeft` | `int` |  |
| `Info.TurnIndicatorRight` | `int` |  |

| `Info.Rpms` | `double` |  |
| `Info.RpmsMax` | `int` |  |
| `Info.RpmsRedLine` | `int` |  |
| `Info.RpmsRedLineSetting` | `int` |  |
| `Info.RpmsCurrentGearRedLine` | `int` |  |
| `Info.RpmsRedLineReached` | `int` |  |
| `Info.RpmsPercent` | `double` |  |

| `Info.PitLimiterSpeed` | `int` |  |
| `Info.PitLimiterOn` | `int` |  |
| `Info.IgnitionOn` | `int` |  |
| `Info.EngineStarted` | `int` |  |
| `Info.WaterTemp` | `double` |  |
| `Info.OilPressure` | `double` |  |
| `Info.OilTemp` | `double` |  |
| `Info.Battery` | `double` |  |
| `Info.OilLevel` | `double` |  |

| `Info.AccelerationHeave` **NEW**{: .label .label-green } | `double` |  |
| `Info.AccelerationSurge` **NEW**{: .label .label-green } | `double` |  |
| `Info.AccelerationSway` **NEW**{: .label .label-green } | `double` |  |

## Spotter

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Spotter.Left` | `int` |  |
| `Spotter.LeftAngle` | `double` |  |
| `Spotter.LeftDistance` | `double` |  |
| `Spotter.Right` | `int` |  |
| `Spotter.RightAngle` | `double` |  |
| `Spotter.RightDistance` | `double` |  |

## Status

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Status.IsInPit` | `int` |  |
| `Status.IsInPitLane` | `int` |  |
| `Status.Damage1` | `double` | 0-100 Damage Front |
| `Status.Damage2` | `double` | 0-100 Damage Rear |
| `Status.Damage3` | `double` | 0-100 Damage Left |
| `Status.Damage4` | `double` | 0-100 Damage Right |
| `Status.Damage5` | `double` | 0-100 Damage Overall |

## Fuel

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Fuel.Current` | `double` |  |
| `Fuel.Max` | `double` |  |
| `Fuel.PerLap` | `double` |  |
| `Fuel.RemainingTime` | `TimeSpan` |  |
| `Fuel.EstimatedLaps` | `double` |  |
| `Fuel.Percent` | `double` |  |
| `Fuel.LastLapConsumption` | `double` |  |
| `Fuel.CurrentLapConsumption` | `double` |  |
| `Fuel.InstantConsumption` | `double` |  |

## Tyres

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Tyres.PressureFL` | `double` |  |
| `Tyres.PressureFLAvg` | `double` |  |
| `Tyres.TempFL` | `double` |  |
| `Tyres.TempFLAvg` | `double` |  |
| `Tyres.TempFLInner` | `double` |  |
| `Tyres.TempFLMiddle` | `double` |  |
| `Tyres.TempFLOuter` | `double` |  |
| `Tyres.WearFL` | `double` |  |

| `Tyres.PressureFR` | `double` |  |
| `Tyres.PressureFRAvg` | `double` |  |
| `Tyres.TempFR` | `double` |  |
| `Tyres.TempFRAvg` | `double` |  |
| `Tyres.TempFRInner` | `double` |  |
| `Tyres.TempFRMiddle` | `double` |  |
| `Tyres.TempFROuter` | `double` |  |
| `Tyres.WearFR` | `double` |  |

| `Tyres.PressureRL` | `double` |  |
| `Tyres.PressureRFLAvg` | `double` |  |
| `Tyres.TempRL` | `double` |  |
| `Tyres.TempRLAvg` | `double` |  |
| `Tyres.TempRLInner` | `double` |  |
| `Tyres.TempRLMiddle` | `double` |  |
| `Tyres.TempRLOuter` | `double` |  |
| `Tyres.WearRL` | `double` |  |

| `Tyres.PressureRR` | `double` |  |
| `Tyres.PressureRRAvg` | `double` |  |
| `Tyres.TempRR` | `double` |  |
| `Tyres.TempRRAvg` | `double` |  |
| `Tyres.TempRRInner` | `double` |  |
| `Tyres.TempRRMiddle` | `double` |  |
| `Tyres.TempRROuter` | `double` |  |
| `Tyres.WearRR` | `double` |  |


## Brakes

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Brakes.TempFL` | `double` |  |
| `Brakes.TempFLAvg` | `double` |  |
| `Brakes.TempFR` | `double` |  |
| `Brakes.TempFRAvg` | `double` |  |
| `Brakes.TempRL` | `double` |  |
| `Brakes.TempRLAvg` | `double` |  |
| `Brakes.TempRR` | `double` |  |
| `Brakes.TempRRAvg` | `double` |  |

## Vehicle Settings

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Vehicle.TC` | `double` |  |
| `Vehicle.TCActive` | `int` |  |
| `Vehicle.TCCut` | `double` |  |
| `Vehicle.ABS` | `double` |  |
| `Vehicle.ABSActive` | `int` |  |
| `Vehicle.Bias` | `double` |  |
| `Vehicle.EngineMap` | `double` |  |
| `Vehicle.ERS` | `double` |  |
| `Vehicle.TurboPercent` | `double` |  |
| `Vehicle.Turbo` | `double` |  |
| `Vehicle.MGUK` | `double` |  |
| `Vehicle.ERSDeployment` | `double` |  |
| `Vehicle.KERS` | `double` |  |

## Lap Times

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `LapTime.Current` | `TimeSpan` |  |
| `LapTime.Last` | `TimeSpan` |  |
| `LapTime.Best` | `TimeSpan` |  |
| `LapTime.AllTimeBest` | `TimeSpan` |  |
| `LapTime.EstimatedSessionBestBased` | `TimeSpan` |  |
| `LapTime.EstimatedSessionBestBasedSimhub` | `TimeSpan` |  |
| `LapTime.EstimatedLapTime_AllTimeBestBased` | `TimeSpan` |  |

## Lap History

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `LapHistory.00` | `TimeSpan` |  |
| `LapHistory.PreviousLap_00_DeltaToAllTimeBest` | `double` |  |
| `LapHistory.PreviousLap_00_DeltaToSessionBest` | `double` |  |
| `LapHistory.PreviousLap_00_IsCurrentSession` | `int` |  |

| `LapHistory.01` | `TimeSpan` |  |
| `LapHistory.PreviousLap_01_DeltaToAllTimeBest` | `double` |  |
| `LapHistory.PreviousLap_01_DeltaToSessionBest` | `double` |  |
| `LapHistory.PreviousLap_01_IsCurrentSession` | `int` |  |

| `LapHistory.02` | `TimeSpan` |  |
| `LapHistory.PreviousLap_02_DeltaToAllTimeBest` | `double` |  |
| `LapHistory.PreviousLap_02_DeltaToSessionBest` | `double` |  |
| `LapHistory.PreviousLap_02_IsCurrentSession` | `int` |  |

| `LapHistory.03` | `TimeSpan` |  |
| `LapHistory.PreviousLap_03_DeltaToAllTimeBest` | `double` |  |
| `LapHistory.PreviousLap_03_DeltaToSessionBest` | `double` |  |
| `LapHistory.PreviousLap_03_IsCurrentSession` | `int` |  |

| `LapHistory.04` | `TimeSpan` |  |
| `LapHistory.PreviousLap_04_DeltaToAllTimeBest` | `double` |  |
| `LapHistory.PreviousLap_04_DeltaToSessionBest` | `double` |  |
| `LapHistory.PreviousLap_04_IsCurrentSession` | `int` |  |

| `LapHistory.05` | `TimeSpan` |  |
| `LapHistory.PreviousLap_05_DeltaToAllTimeBest` | `double` |  |
| `LapHistory.PreviousLap_05_DeltaToSessionBest` | `double` |  |
| `LapHistory.PreviousLap_05_IsCurrentSession` | `int` |  |

| `LapHistory.06` | `TimeSpan` |  |
| `LapHistory.PreviousLap_06_DeltaToAllTimeBest` | `double` |  |
| `LapHistory.PreviousLap_06_DeltaToSessionBest` | `double` |  |
| `LapHistory.PreviousLap_06_IsCurrentSession` | `int` |  |

| `LapHistory.07` | `TimeSpan` |  |
| `LapHistory.PreviousLap_07_DeltaToAllTimeBest` | `double` |  |
| `LapHistory.PreviousLap_07_DeltaToSessionBest` | `double` |  |
| `LapHistory.PreviousLap_07_IsCurrentSession` | `int` |  |

| `LapHistory.08` | `TimeSpan` |  |
| `LapHistory.PreviousLap_08_DeltaToAllTimeBest` | `double` |  |
| `LapHistory.PreviousLap_08_DeltaToSessionBest` | `double` |  |
| `LapHistory.PreviousLap_08_IsCurrentSession` | `int` |  |


| `LapHistory.09` | `TimeSpan` |  |
| `LapHistory.PreviousLap_09_DeltaToAllTimeBest` | `double` |  |
| `LapHistory.PreviousLap_09_DeltaToSessionBest` | `double` |  |
| `LapHistory.PreviousLap_09_IsCurrentSession` | `int` |  |
