---
title: Opponents
layout: default
parent: Properties
nav_order: 40
---

# Opponents
Always use the full property name, as demonstrated below:

**LovelyPlugin.ld_Telemetry.** + `Property Name`
{: .note }

## Properties 

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Opponents.Count` | `int` |  |
| `Opponents.ClassCount` | `int` |  |
| `Session.BestLapOpponentPosition` | `int` |  |
| `Session.BestLapOpponentSameClassPosition ` | `int` |  |


## Leaderboard
The Opponent Leaderboard properties return an array, representing each driver on the leaderboard. Accessing the data is made easy with the [TeamLINQ JS Functions](../functions.html)

| Property Name | Type | Definition |
| :--- | :--- | :--- |
| `Opponents.DriverName` | `Array` of `string` |   |
| `Opponents.Id` | `Array` of `int` |   |
| `Opponents.TeamName` | `Array` of `string` |   |
| `Opponents.Class` | `Array` of `string` |   |
| `Opponents.ClassId` | `Array` of `string` |   |
| `Opponents.ClassColor` | `Array` of `string` |   |
| `Opponents.ClassColorText` | `Array` of `string` |   |
| `Opponents.CarName` | `Array` of `string` |   |
| `Opponents.Number` | `Array` of `int` |   |
| `Opponents.isPlayer` | `Array` of `int` |   |
| `Opponents.License` | `Array` of `string` |   |
| `Opponents.iRating` | `Array` of `string` |   |
| `Opponents.Category` | `Array` of `string` |   |

| `Opponents.Position` | `Array` of `int` |   |
| `Opponents.PositionGain` | `Array` of `int` |   |
| `Opponents.ClassPosition` | `Array` of `int` |   |
| `Opponents.ClassPositionGain` | `Array` of `int` |   |

| `Opponents.BestLapTime` | `Array` of `TimeSpan` |   |
| `Opponents.LastLapTime` | `Array` of `TimeSpan` |   |

| `Opponents.CurrentLap` | `Array` of `int` |   |
| `Opponents.CurrentLapPrecise` | `Array` of `double` |   |
| `Opponents.TrackPosition` | `Array` of `double` |   |
| `Opponents.Coordinates` | `Array` of `double` |   |

| `Opponents.SectorIndex` | `Array` of `int` |   |
| `Opponents.SectorsCurrentLap` | `Array` of `string` |   |
| `Opponents.SectorsLastLap` | `Array` of `string` |   |
| `Opponents.SectorsBestLap` | `Array` of `string` |   |
| `Opponents.SectorsBestSplits` | `Array` of `string` |   |

| `Opponents.PitCount` | `Array` of `int` |   |
| `Opponents.PitLapsSince` | `Array` of `int` |   |
| `Opponents.PitLastDuration` | `Array` of `TimeSpan` |   |
| `Opponents.IsOutLap` | `Array` of `int` |   |
| `Opponents.IsInPit` | `Array` of `int` |   |
| `Opponents.IsInPitLane` | `Array` of `int` |   |
| `Opponents.IsInGarage` | `Array` of `int` |   |

| `Opponents.DeltaToPlayer` | `Array` of `TimeSpan` |   |
| `Opponents.DeltaToBest` | `Array` of `TimeSpan` |   |
| `Opponents.GapToLeader` | `Array` of `TimeSpan` |   |
| `Opponents.GapToClassLeader` | `Array` of `TimeSpan` |   |
| `Opponents.GapToPlayer` | `Array` of `TimeSpan` |   |
| `Opponents.GapToPlayerRelative` | `Array` of `TimeSpan` |   |
| `Opponents.DistanceToPlayerRelative` | `Array` of `double` |   |

