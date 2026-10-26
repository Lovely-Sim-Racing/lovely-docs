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
| `Session.PlayerName` | `string` | The player's driver name | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.Position` | `int` | The player's overall position on the leaderboard | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.TrackPositionPercent` | `double` | How far around the lap the player is, `0.0` (start/finish line) to `1.0` | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.TrackPositionDistance` | `double` | How far around the lap the player is, in meters | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.CarId` | `string` | The game's id of the player's car | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.CarModel` | `string` | The player's car name | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.CarClass` | `string` | The player's car class | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.CurrentLap` | `int` | The lap the player is on | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.CompletedLaps` | `int` | Laps the player has completed this session | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.RemainingLaps` | `int` | Laps left in a lap-limited session | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.LapInvalidated` | `int` | `1` when the current lap has been invalidated, `0` otherwise | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.CurrentSector` | `int` | The sector the player is in, starting from `1` | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Info

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :---- |
| `Info.Gear` | `string` | R, N, 0 ... n | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.GearMax` | `int` | Number of forward gears the car has | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.Speed` | `double` | Car speed, in `Unit.Speed` | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.Throttle` | `double` | 0-100 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.Brake` | `double` | 0-100 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.Clutch` | `double` | 0-100 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.Handbrake` | `double` | 0-100 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Info.TurnIndicatorLeft` | `int` | `1` while the left indicator is on | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.TurnIndicatorRight` | `int` | `1` while the right indicator is on | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Info.Rpms` | `double` | Engine RPM | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.RpmsMax` | `int` | Maximum engine RPM | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.RpmsRedLine` | `int` | Redline RPM from the SimHub car settings | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.RpmsRedLineSetting` | `int` | Redline threshold set in the SimHub car settings | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.RpmsCurrentGearRedLine` | `int` | Redline RPM for the current gear, from the SimHub car settings | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.RpmsRedLineReached` | `int` | `1` when the RPM has reached the redline | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.RpmsPercent` | `double` | RPM as a percentage of the displayed range, 0-100 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Info.PitLimiterSpeed` | `int` | Pit lane speed limit | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.PitLimiterOn` | `int` | `1` while the pit limiter is on | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.IgnitionOn` | `int` | `1` while the ignition is on | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.EngineStarted` | `int` | `1` while the engine is running | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.WaterTemp` | `double` | Water temperature, in `Unit.Temp` | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.OilPressure` | `double` | Oil pressure, in `Unit.OilPressure` | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.OilTemp` | `double` | Oil temperature, in `Unit.Temp` | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.Battery` | `double` | Battery voltage (iRacing only) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.OilLevel` | `double` | Oil level (iRacing only) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.Turbo` | `double` | Turbo boost pressure | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Info.AccelerationHeave` | `double` | Vertical acceleration (up and down) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.AccelerationSurge` | `double` | Longitudinal acceleration (forward and back) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Info.AccelerationSway` | `double` | Lateral acceleration (side to side) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Spotter

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Spotter.Left` | `int` | `1` while a car is alongside on the left | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Spotter.LeftAngle` | `double` | Angle to the car alongside on the left | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Spotter.LeftDistance` | `double` | Distance to the car alongside on the left | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Spotter.Right` | `int` | `1` while a car is alongside on the right | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Spotter.RightAngle` | `double` | Angle to the car alongside on the right | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Spotter.RightDistance` | `double` | Distance to the car alongside on the right | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Status

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Status.IsInPit` | `int` | `1` while the car is stopped in its pit box | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Status.IsInPitLane` | `int` | `1` while the car is in the pit lane | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

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
| `Fuel.Current` | `double` | Fuel in the tank, in `Unit.Fuel` | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Fuel.Max` | `double` | Tank capacity, in `Unit.Fuel` | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Fuel.PerLap` | `double` | Average fuel used per lap, as computed by SimHub | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Fuel.Average5` | `double` | Average fuel per lap over the last 5 clean laps (no pit lane, no refuel), `0` until 5 laps are completed | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Fuel.RemainingTime` | `TimeSpan` | Estimated driving time the fuel left lasts | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Fuel.EstimatedLaps` | `double` | Estimated laps the fuel left lasts | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Fuel.Percent` | `double` | Fuel in the tank as a percentage of capacity, 0-100 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Fuel.LastLapConsumption` | `double` | Fuel used on the last completed lap | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Fuel.CurrentLapConsumption` | `double` | Fuel used so far on the current lap | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Fuel.InstantConsumption` | `double` | Instant fuel consumption, in L/100km | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Tyres

Values ending in `Avg` are rolling averages over the last laps (set by the plugin's tyre average laps option, 2 by default), sampled only while on track. Pressures are in `Unit.Pressure`, temperatures in `Unit.Temp`.

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Tyres.PressureFL` | `double` | Front left tyre pressure | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.PressureFLAvg` | `double` | Front left tyre pressure, averaged | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempFL` | `double` | Front left tyre temperature | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempFLAvg` | `double` | Front left tyre temperature, averaged | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempFLInner` | `double` | Front left tyre temperature, inner edge | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempFLMiddle` | `double` | Front left tyre temperature, middle | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempFLOuter` | `double` | Front left tyre temperature, outer edge | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.WearFL` | `double` | Front left tyre wear | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Tyres.PressureFR` | `double` | Front right tyre pressure | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.PressureFRAvg` | `double` | Front right tyre pressure, averaged | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempFR` | `double` | Front right tyre temperature | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempFRAvg` | `double` | Front right tyre temperature, averaged | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempFRInner` | `double` | Front right tyre temperature, inner edge | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempFRMiddle` | `double` | Front right tyre temperature, middle | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempFROuter` | `double` | Front right tyre temperature, outer edge | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.WearFR` | `double` | Front right tyre wear | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Tyres.PressureRL` | `double` | Rear left tyre pressure | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.PressureRLAvg` | `double` | Rear left tyre pressure, averaged | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempRL` | `double` | Rear left tyre temperature | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempRLAvg` | `double` | Rear left tyre temperature, averaged | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempRLInner` | `double` | Rear left tyre temperature, inner edge | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempRLMiddle` | `double` | Rear left tyre temperature, middle | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempRLOuter` | `double` | Rear left tyre temperature, outer edge | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.WearRL` | `double` | Rear left tyre wear | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Tyres.PressureRR` | `double` | Rear right tyre pressure | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.PressureRRAvg` | `double` | Rear right tyre pressure, averaged | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempRR` | `double` | Rear right tyre temperature | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempRRAvg` | `double` | Rear right tyre temperature, averaged | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempRRInner` | `double` | Rear right tyre temperature, inner edge | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempRRMiddle` | `double` | Rear right tyre temperature, middle | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.TempRROuter` | `double` | Rear right tyre temperature, outer edge | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Tyres.WearRR` | `double` | Rear right tyre wear | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |


## Brakes

Values ending in `Avg` are rolling averages, like the tyre averages. Temperatures are in `Unit.Temp`.

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Brakes.TempFL` | `double` | Front left brake temperature | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Brakes.TempFLAvg` | `double` | Front left brake temperature, averaged | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Brakes.TempFR` | `double` | Front right brake temperature | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Brakes.TempFRAvg` | `double` | Front right brake temperature, averaged | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Brakes.TempRL` | `double` | Rear left brake temperature | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Brakes.TempRLAvg` | `double` | Rear left brake temperature, averaged | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Brakes.TempRR` | `double` | Rear right brake temperature | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Brakes.TempRRAvg` | `double` | Rear right brake temperature, averaged | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Vehicle Settings

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Vehicle.TC` | `double` | Traction control level | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.TCActive` | `int` | `1` while traction control is intervening | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.TCCut` | `double` | Traction control cut (TC2) level | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.ABS` | `double` | ABS level | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.ABSActive` | `int` | `1` while ABS is intervening | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.Bias` | `double` | Brake bias, percentage to the front | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.EngineMap` | `double` | Engine map setting | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.ERS` | `double` | ERS battery charge, percentage | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.TurboPercent` | `double` | Turbo boost as a percentage of the maximum | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.MGUK` | `double` | MGU-K recovery level | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.ERSDeployMode` | `double` | ERS deployment (power) level | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Vehicle.KERS` | `double` | KERS charge | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Lap Times

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `LapTime.Current` | `TimeSpan` | Time of the lap in progress | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapTime.Last` | `TimeSpan` | Time of the last completed lap | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapTime.Best` | `TimeSpan` | The player's best lap this session | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapTime.AllTimeBest` | `TimeSpan` | The player's all-time best lap for this car and track, as recorded by SimHub | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapTime.Average5` | `TimeSpan` | Average of the last 5 laps this session, `00:00:00` until 5 laps are completed | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapTime.Average10` | `TimeSpan` | Average of the last 10 laps this session, `00:00:00` until 10 laps are completed | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapTime.EstimatedSessionBestBased` | `TimeSpan` | Predicted time of the current lap, from the live delta to the session best | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapTime.EstimatedSessionBestBasedSimhub` | `TimeSpan` | Predicted time of the current lap, from SimHub's own session best estimate | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapTime.EstimatedAllTimeBestBased` | `TimeSpan` | Predicted time of the current lap, from the live delta to the all-time best | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Sector Times

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `Session.S1Time` | `TimeSpan` | Sector 1 time on the current lap | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.S1LastTime` | `TimeSpan` | Sector 1 time on the last completed lap | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.S1BestTime` | `TimeSpan` | The player's best sector 1 time this session, from any lap | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.S1BestLapTime` | `TimeSpan` | Sector 1 time on the player's best lap | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Session.S2Time` | `TimeSpan` | Sector 2 time on the current lap | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.S2LastTime` | `TimeSpan` | Sector 2 time on the last completed lap | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.S2BestTime` | `TimeSpan` | The player's best sector 2 time this session, from any lap | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.S2BestLapTime` | `TimeSpan` | Sector 2 time on the player's best lap | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `Session.S3LastTime` | `TimeSpan` | Sector 3 time on the last completed lap | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.S3BestTime` | `TimeSpan` | The player's best sector 3 time this session, from any lap | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.S3BestLapTime` | `TimeSpan` | Sector 3 time on the player's best lap | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Lap History

The last 10 laps recorded by SimHub, `00` being the most recent. Deltas are in seconds, negative when faster than the reference.

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `LapHistory.00` | `TimeSpan` | Lap time of the most recent lap | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.00_DeltaToAllTimeBest` | `double` | That lap's delta to the all-time best | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.00_DeltaToSessionBest` | `double` | That lap's delta to the session best | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.00_IsCurrentSession` | `int` | `1` when that lap was driven in the current session | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `LapHistory.01` | `TimeSpan` | Lap time, 2nd most recent lap | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.01_DeltaToAllTimeBest` | `double` | That lap's delta to the all-time best | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.01_DeltaToSessionBest` | `double` | That lap's delta to the session best | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.01_IsCurrentSession` | `int` | `1` when that lap was driven in the current session | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `LapHistory.02` | `TimeSpan` | Lap time, 3rd most recent lap | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.02_DeltaToAllTimeBest` | `double` | That lap's delta to the all-time best | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.02_DeltaToSessionBest` | `double` | That lap's delta to the session best | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.02_IsCurrentSession` | `int` | `1` when that lap was driven in the current session | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `LapHistory.03` | `TimeSpan` | Lap time, 4th most recent lap | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.03_DeltaToAllTimeBest` | `double` | That lap's delta to the all-time best | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.03_DeltaToSessionBest` | `double` | That lap's delta to the session best | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.03_IsCurrentSession` | `int` | `1` when that lap was driven in the current session | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `LapHistory.04` | `TimeSpan` | Lap time, 5th most recent lap | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.04_DeltaToAllTimeBest` | `double` | That lap's delta to the all-time best | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.04_DeltaToSessionBest` | `double` | That lap's delta to the session best | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.04_IsCurrentSession` | `int` | `1` when that lap was driven in the current session | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `LapHistory.05` | `TimeSpan` | Lap time, 6th most recent lap | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.05_DeltaToAllTimeBest` | `double` | That lap's delta to the all-time best | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.05_DeltaToSessionBest` | `double` | That lap's delta to the session best | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.05_IsCurrentSession` | `int` | `1` when that lap was driven in the current session | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `LapHistory.06` | `TimeSpan` | Lap time, 7th most recent lap | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.06_DeltaToAllTimeBest` | `double` | That lap's delta to the all-time best | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.06_DeltaToSessionBest` | `double` | That lap's delta to the session best | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.06_IsCurrentSession` | `int` | `1` when that lap was driven in the current session | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `LapHistory.07` | `TimeSpan` | Lap time, 8th most recent lap | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.07_DeltaToAllTimeBest` | `double` | That lap's delta to the all-time best | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.07_DeltaToSessionBest` | `double` | That lap's delta to the session best | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.07_IsCurrentSession` | `int` | `1` when that lap was driven in the current session | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

| `LapHistory.08` | `TimeSpan` | Lap time, 9th most recent lap | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.08_DeltaToAllTimeBest` | `double` | That lap's delta to the all-time best | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.08_DeltaToSessionBest` | `double` | That lap's delta to the session best | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.08_IsCurrentSession` | `int` | `1` when that lap was driven in the current session | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |


| `LapHistory.09` | `TimeSpan` | Lap time, 10th most recent lap | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.09_DeltaToAllTimeBest` | `double` | That lap's delta to the all-time best | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.09_DeltaToSessionBest` | `double` | That lap's delta to the session best | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `LapHistory.09_IsCurrentSession` | `int` | `1` when that lap was driven in the current session | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

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
