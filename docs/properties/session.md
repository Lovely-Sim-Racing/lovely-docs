---
title: Session
layout: default
parent: Properties
nav_order: 20
---

# Session
The full inventory of session related properties.

**P**{: .label .label-pro .mx-0 .mb-1 } Available in **Team Pro**{: .mr-6 }
**S**{: .label .label-starter .mx-0 .mb-1 } Available in **Team Starter**

## Properties

| Property Name | Type | Definition | Tier|
| :--- | :---- | :---- | :---- |
| `Session.GameId` | `string` | SimHub's id of the running game (`IRacing`, `LMU`, `AssettoCorsaCompetizione`...) | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.Type` | `string` | Session name as the game reports it | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.TypeNormalised` | `string` | `P`, `Q`, `R` or `[NULL]` | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.AirTemp` | `double` | Air temperature, in `Unit.Temp` | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.TrackTemp` | `double` | Track surface temperature, in `Unit.Temp` | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.TrackId` | `string` | The game's id of the track | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.TrackLength` | `double` | Track length, in meters | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.TrackName` | `string` | Track name, from the Lovely track data | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.TrackSegment` | `string` | Name of the turn or straight the player is on, from the Lovely track data; empty when the track has no data | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.TrackTurn` | `int` | Number of the turn the player is in, from the Lovely track data; empty on a straight or when the track has no data | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.TimeLeft` | `TimeSpan` | Time left in the session | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.TotalLaps` | `int` | Total laps in a lap-limited session | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.SectorsCount` | `int` | Number of sectors on the track | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Session.MultiClass` | `string` | `True` when the session has more than one car class | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Units

| Property Name | Type | Definition | Tier |
| :--- | :---- | :---- | :---- |
| `Unit.Speed` | `string` | Unit used for speeds, as set in SimHub | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Unit.Fuel` | `string` | Unit used for fuel, as set in SimHub | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Unit.Pressure` | `string` | Unit used for tyre pressures, as set in SimHub | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Unit.Temp` | `string` | Unit used for temperatures, as set in SimHub | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Unit.OilPressure` | `string` | Unit used for oil pressure, as set in SimHub | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |


## Flags

Each flag is `1` while it's shown to the player, `0` otherwise.

| Property Name | Type | Definition | Tier |
| :--- | :---- | :---- | :---- |
| `Flag.Black` | `int` | Black flag | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Flag.Blue` | `int` | Blue flag | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Flag.Checkered` | `int` | Chequered flag | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Flag.Green` | `int` | Green flag | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Flag.Orange` | `int` | Orange (meatball) flag | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Flag.White` | `int` | White flag | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `Flag.Yellow` | `int` | Yellow flag | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |

## Pit Loss

What a pit stop costs the player's class at the current track, learned by the plugin from every pit lane visit of the cars in the player's class (in any session, kept on the PC and used again in later sessions). The time spent in the pit lane is learned from the visits; the time the same stretch of track takes on a normal lap is timed live in the current session, so the values follow rain, a drying track and pace. Times are text in seconds, in invariant format (`33.4`), and stay empty until the class has at least 3 pit visits at the track.

| Property Name | Type | Definition | Tier |
| :--- | :--- | :--- | :--- |
| `PitLoss.DriveThrough` | `string` | Time lost by driving through the pit lane without stopping, compared with staying on track. From the class's drive-throughs, or estimated from its stops until it has 3 | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `PitLoss.Stop` | `string` | Time lost by a typical pit stop of the class (the pit lane plus the usual time standing in the box), compared with staying on track | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `PitLoss.Standing` | `string` | The usual time the class stands still in the box (refuelling, tyres, driver change); included in `PitLoss.Stop` | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `PitLoss.Stretch` | `string` | Time the class takes to drive the stretch of track the pit lane bypasses, from pit entry to pit exit: timed live in the session, or as learned before until 3 cars of the class have driven it | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `PitLoss.Samples` | `int` | Pit visits (stops and drive-throughs) the values are based on | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `PitLoss.Spent` | `string` | While the player is in the pit lane: the time the visit has cost so far, compared with staying on track. It grows by a second a second while standing in the box and more slowly at the pit speed limit, and reaches the visit's whole loss at the pit exit; subtract it from `PitLoss.Stop` or `PitLoss.DriveThrough` for the time still to come. Empty outside the pit lane | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
| `PitLoss.Stood` | `string` | While the player is in the pit lane: how long they've stood still in the visit so far. Once they drive out of the box, it's what this stop's standing actually took: use it in place of `PitLoss.Standing` (`PitLoss.Stop - PitLoss.Standing + PitLoss.Stood`) for what this stop costs. Empty outside the pit lane | **P**{: .label .label-pro .mx-0 } **S**{: .label .label-starter .mx-0 } |
