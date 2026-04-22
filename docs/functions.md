---
title: JavaScript Extensions
layout: default
nav_order: 40
---

# JavaScript Extensions

The TeamLINQ JavaScript Extensions are a series of functions that replace the native SimHub JavaScript functions in the dash editor, while taking advantage of all of TeamLINQ's features.

## Download & Usage
To use these functions, copy the file into your dashboard's `JavascriptExtensions` folder.

[**Download JS Extensions**](https://docs.lsr.gg/downloads/teamlinq-extensions.zip){: .btn .mr-4  }

## Helper

{: .mt-6 }
### Convert String to TimeSpan
```js
ld_stringToTimespan()
```
Converts a TimeSpan string to a TimeSpan Object.
{: .mb-8 }


## Player

{: .mt-6 }
### Get Player Leaderboard Position
```js
ld_getplayerleaderboardposition()
```
Returns the leaderboard position of the current player.
{: .mb-8 }

{: .mt-6 }
### Get Current Lap Sector Time
```js
ld_currentlapgetsectortime(sector, includePreviousSectorsTime = true)
```
Returns the time of the given sector (sector starting from 1). When `includePreviousSectorsTime` is `true` the value cumulates the previous sectors.
{: .mb-8 }

{: .mt-6 }
### Get Last Lap Sector Time
```js
ld_lastlapgetsectortime(sector, includePreviousSectorsTime = true)
```
Returns the time of the given sector for the last completed lap (sector starting from 1). When `includePreviousSectorsTime` is `true` the value cumulates the previous sectors.
{: .mb-8 }

{: .mt-6 }
### Get Session Best Lap Sector Time
```js
ld_sessionbestlapgetsectortime(sector, includePreviousSectorsTime = true)
```
Returns the time of the given sector for the session best completed lap (sector starting from 1). When `includePreviousSectorsTime` is `true` the value cumulates the previous sectors.
{: .mb-8 }

{: .mt-6 }
### Get Best Split Time
```js
ld_getbestsplittime(sector)
```
Returns the best sector split time of the session (sector starting from 1).
{: .mb-8 }

{: .mt-6 }
### Get Best Sector Time
```js
ld_bestsectortime(sector, includePreviousSectorsTime = true)
```
Returns the best sector time of the given sector (sector starting from 1). When `includePreviousSectorsTime` is `true` the value cumulates the previous sectors.
{: .mb-8 }


## Session

{: .mt-6 }
### Get Leaderboard Car Class Count
```js
ld_getleaderboardcarclasscount()
```
Returns how many car classes are available on the leaderboard.
{: .mb-8 }


## Opponents

{: .mt-6 }
### Check Driver Available
```js
ld_driveravailable(position)
```
Returns true for the race position if a driver is available (when available).
{: .mb-8 }

{: .mt-6 }
### Check If Driver Is Player
```js
ld_driverisplayer(position)
```
Returns true for the race position if the driver is the actual player (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver Name
```js
ld_drivername(position)
```
Returns for the race position the driver's name (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver ID
```js
ld_driverid(position)
```
Returns for the race position the driver's unique id (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver Car Number
```js
ld_drivercarnumber(position)
```
Returns for the race position the driver's car number (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver Car Name
```js
ld_drivercarname(position)
```
Returns for the race position the driver's car name (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver Current Lap
```js
ld_drivercurrentlap(position)
```
Returns for the race position the driver's current lap (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver Current Lap High Precision
```js
ld_drivercurrentlaphighprecision(position)
```
Returns for the race position the driver's guessed lap in the race including the actual lap percent (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver Best Lap
```js
ld_driverbestlap(position)
```
Returns for the race position the driver's best lap time (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver Last Lap
```js
ld_driverlastlap(position)
```
Returns for the race position the driver's last lap time (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver Current Sector
```js
ld_drivercurrentsector(position)
```
Returns for the race position the driver's current sector (starting from 1) (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver Sector Current Lap
```js
ld_driversectorcurrentlap(position, sector, includePreviousSectorsTime = true)
```
Returns for the race position and the sector (starting from 1) the driver's current lap sector time. When `includePreviousSectorsTime` is `true` the value cumulates the previous sectors.
{: .mb-8 }

{: .mt-6 }
### Get Driver Sector Last Lap
```js
ld_driversectorlastlap(position, sector, includePreviousSectorsTime = true)
```
Returns for the race position and the sector (starting from 1) the driver's last completed lap sector time. When `includePreviousSectorsTime` is `true` the value cumulates the previous sectors.
{: .mb-8 }

{: .mt-6 }
### Get Driver Sector Best
```js
ld_driversectorbest(position, sector, includePreviousSectorsTime = true)
```
Returns for the race position and the sector (starting from 1) the driver's session best sector time. When `includePreviousSectorsTime` is `true` the value cumulates the previous sectors.
{: .mb-8 }

{: .mt-6 }
### Get Driver Sector Best Lap
```js
ld_driversectorbestlap(position, sector, includePreviousSectorsTime = true)
```
Returns for the race position and the sector (starting from 1) the driver's best lap sector time. When `includePreviousSectorsTime` is `true` the value cumulates the previous sectors.
{: .mb-8 }

{: .mt-6 }
### Get Driver Class Position
```js
ld_driverclassposition(position)
```
Returns for the race position the driver's position in his own class (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver Car Class
```js
ld_drivercarclass(position)
```
Returns for the race position the driver's car class (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver Car Class Color
```js
ld_drivercarclasscolor(position)
```
Returns for the race position the driver's car class color, provided by iRacing, autoassigned otherwise (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver Car Class Text Color
```js
ld_drivercarclasstextcolor(position)
```
Returns for the race position the driver's car class text color, white or black to be readable over car class color (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver Category (ACC ONLY)
```js
ld_drivercategory(position)
```
Returns for the race position the driver's category, ACC only (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver iRating (iRacing ONLY)
```js
ld_driveriracingirating(position)
```
Returns for the race position the driver's iRating (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver License String (iRacing ONLY)
```js
ld_driverlicencestring(position)
```
Returns for the race position the driver's license string (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver Position Gain
```js
ld_driverpositiongain(position)
```
Returns for the race position the driver's position gain since the start of the race/connection (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver Class Position Gain
```js
ld_driverpositiongainclass(position)
```
Returns for the race position the driver's position gain in his own class since the start of the race/connection (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver Track Position Percent
```js
ld_drivertrackpositionpercent(position)
```
Returns for the race position the driver's track position, 0.0-1.0 (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver Delta To Player
```js
ld_driverdeltatoplayer(position)
```
Returns for the race position the driver's delta to the current player best lap (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver Delta To Best
```js
ld_driverdeltatobest(position)
```
Returns for the race position the driver's delta to the opponent's best lap (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver Gap To Player
```js
ld_drivergaptoplayer(position)
```
Returns for the race position the driver's gap to the player (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver Gap To Leader
```js
ld_drivergaptoleader(position)
```
Returns for the race position the driver's gap to the leader (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver Gap To Class Leader
```js
ld_drivergaptoclassleader(position)
```
Returns for the race position the driver's gap to his own class leader (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver Relative Gap To Player
```js
ld_driverrelativegaptoplayer(position)
```
Returns for the race position the driver's relative gap to player (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver Relative Distance To Player
```js
ld_driverrelativedistancetoplayer(position)
```
Returns for the race position the driver's relative distance to player (when available).
{: .mb-8 }

{: .mt-6 }
### Check If Driver Car Is In Pit
```js
ld_driveriscarinpit(position)
```
Returns for the race position if the driver's car is in the pit (when available).
{: .mb-8 }

{: .mt-6 }
### Check If Driver Car Is In Pit Lane
```js
ld_driveriscarinpitlane(position)
```
Returns for the race position if the driver's car is in the pit lane (when available).
{: .mb-8 }

{: .mt-6 }
### Check If Driver Car Is In Garage
```js
ld_driveriscaringarage(position)
```
Returns for the race position if the driver's car is in the garage (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver Pit Count
```js
ld_driverpitcount(position)
```
Returns for the race position how many times the driver went to the pits (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver Laps Since Last Pit Out
```js
ld_driverlapsdonesincelastpitout(position)
```
Returns for the race position how many laps the driver drove since the last pit exit, 0.0 to X.0 - guessed (when available).
{: .mb-8 }

{: .mt-6 }
### Get Driver Last Pit Duration
```js
ld_driverpitlastduration(position)
```
Returns for the race position how long the last pit stop took (when available).
{: .mb-8 }

{: .mt-6 }
### Get Opponent Leaderboard Position Ahead/Behind
```js
ld_getopponentleaderboardposition_aheadbehind(relativePos)
```
Returns the leaderboard position of the player's ahead/behind on track opponents (0 = player, -1 = the first ahead, 1 the first behind).
{: .mb-8 }

{: .mt-6 }
### Get Opponent Leaderboard Position Ahead/Behind Class Only
```js
ld_getopponentleaderboardposition_aheadbehind_playerclassonly(relativePos)
```
Returns the leaderboard position of the player's ahead/behind on track opponents for the player class (0 = player, -1 = the first ahead, 1 the first behind)
{: .mb-8 }

{: .mt-6 }
### Get Opponent Leaderboard Position Player Class Only
```js
ld_getopponentleaderboardposition_playerclassonly(position)
```
Returns the leaderboard position of the opponents of the same class as player (1 = first opponent of the class).
{: .mb-8 }









