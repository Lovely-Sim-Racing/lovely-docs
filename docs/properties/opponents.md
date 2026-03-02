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
| `Opponents.Id` | `Array` of `string ` |   |
| `Opponents.TeamName` | `Array` of `string` |   |
| `Opponents.Class` | `Array` of `string` |   |
| `Opponents.ClassId` | `Array` of `string` |   |
| `Opponents.ClassColor` | `Array` of `string` |   |
| `Opponents.ClassColorText` | `Array` of `string` |   |
| `Opponents.CarName` | `Array` of `string` |   |
| `Opponents.Number` | `Array` of `string ` |   |
| `Opponents.isPlayer` | `Array` of `string ` |   |
| `Opponents.License` | `Array` of `string` |   |
| `Opponents.iRating` | `Array` of `string` |   |
| `Opponents.Category` | `Array` of `string` |   |

| `Opponents.Position` | `Array` of `string ` |   |
| `Opponents.PositionGain` | `Array` of `string ` |   |
| `Opponents.ClassPosition` | `Array` of `string ` |   |
| `Opponents.ClassPositionGain` | `Array` of `string ` |   |

| `Opponents.BestLapTime` | `Array` of `string ` |   |
| `Opponents.LastLapTime` | `Array` of `string ` |   |

| `Opponents.CurrentLap` | `Array` of `string ` |   |
| `Opponents.CurrentLapPrecise` | `Array` of `string ` |   |
| `Opponents.TrackPosition` | `Array` of `string ` |   |
| `Opponents.Coordinates` | `Array` of `string ` |   |

| `Opponents.SectorIndex` | `Array` of `string ` |   |
| `Opponents.SectorsCurrentLap` | `Array` of `string ` |   |
| `Opponents.SectorsLastLap` | `Array` of `string ` |   |
| `Opponents.SectorsBestLap` | `Array` of `string ` |   |
| `Opponents.SectorsBestSplits` | `Array` of `string` |   |

| `Opponents.PitCount` | `Array` of `string ` |   |
| `Opponents.PitLapsSince` | `Array` of `string ` |   |
| `Opponents.PitLastDuration` | `Array` of `string ` |   |
| `Opponents.IsOutLap` | `Array` of `string ` |   |
| `Opponents.IsInPit` | `Array` of `string ` |   |
| `Opponents.IsInPitLane` | `Array` of `string ` |   |
| `Opponents.IsInGarage` | `Array` of `string ` |   |

| `Opponents.DeltaToPlayer` | `Array` of `string ` |   |
| `Opponents.DeltaToBest` | `Array` of `string ` |   |
| `Opponents.GapToLeader` | `Array` of `string ` |   |
| `Opponents.GapToClassLeader` | `Array` of `string ` |   |
| `Opponents.GapToPlayer` | `Array` of `string ` |   |
| `Opponents.GapToPlayerRelative` | `Array` of `string ` |   |
| `Opponents.DistanceToPlayerRelative` | `Array` of `string ` |   |

