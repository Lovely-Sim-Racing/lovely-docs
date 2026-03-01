---
title: Player
layout: default
parent: Properties
nav_order: 30
last_modified_date: Feb 26, 2026, 19:13
---

# Player
Always use the full property name, as demonstrated below:

**LovelyPlugin.ld_Telemetry.** + `Property Name`
{: .note }

## Session

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Session.PlayerName` | `string` | Firstname Lastname |
| `Session.Position` | `int` | 1 |
| `Session.TrackPositionPercent` | `double` | 0.820544838905334 |
| `Session.TrackPositionDistance` | `double` | 4069.08185613155 |
| `Session.CarId` | `string` | ferrari_296_gt3 |
| `Session.CarModel` | `string` | Ferrari 296 GT3 2023 |
| `Session.CarClass` | `string` | GT3 |
| `Session.CurrentLap` | `int` | 5 |
| `Session.CompletedLaps` | `int` | 4 |
| `Session.RemainingLaps` | `int` | 12 |
| `Session.LapInvalidated` | `int` | 1 |
| `Session.CurrentSector` | `int` | 3 |

## Info

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Info.Gear` | `int` | 5 |
| `Info.GearMax` | `int` | 6 |
| `Info.Speed` | `double` | 222.4 |
| `Info.Throttle` | `double` | 5.7750016450882 |
| `Info.Brake` | `double` | 0 |
| `Info.Clutch` | `double` | 0 |
| `Info.Handbrake` | `double` | 0 |
| `Info.TurnIndicatorLeft` | `int` | 0 |
| `Info.TurnIndicatorRight` | `int` | 0 |
| `Info.Rpms` | `double` | 4266.76 |
| `Info.RpmsMax` | `int` | 8000 |
| `Info.RpmsRedLine` | `int` | 7100 |
| `Info.RpmsRedLineSetting` | `int` | 7100 |
| `Info.RpmsCurrentGearRedLine` | `int` | 7100 |
| `Info.RpmsRedLineReached` | `int` | 0 |
| `Info.RpmsPercent` | `double` | 53.325 |
| `Info.PitLimiterSpeed` | `int` | 60 |
| `Info.PitLimiterOn` | `int` | 0 |
| `Info.IgnitionOn` | `int` | 1 |
| `Info.EngineStarted` | `int` | 1 |
| `Info.WaterTemp` | `double` | 85.23 |
| `Info.OilPressure` | `double` |  |
| `Info.OilTemp` | `double` |  |
| `Info.Battery` | `double` |  |
| `Info.OilLevel` | `double` |  |

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
| `Status.Damage1` | `double` |  |
| `Status.Damage2` | `double` |  |
| `Status.Damage3` | `double` |  |
| `Status.Damage4` | `double` |  |
| `Status.Damage5` | `double` |  |

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
