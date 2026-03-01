// Convert a Strigng to TimeSpan
// timeString: HH:MM:SS.MS
function ld_stringToTimespan(timeString) {
	if ( !timeString || timeString === "00:00:00" ) { return "0:00.000" };
    let hours, minutes, rest, seconds, milliseconds;
    [hours, minutes, rest] = timeString.split(':');
    if (rest && rest.includes('.')) {
        [seconds, milliseconds] = rest.split('.');
    } else {
        seconds = rest;
        milliseconds = "0";
    }
    div = Math.pow(10, milliseconds.length);
    let totalSeconds = (parseInt(hours) * 3600) + (parseInt(minutes) * 60) + (parseInt(seconds) ) + (parseInt(milliseconds) / div );
    if (isNaN(totalSeconds) || !isFinite(totalSeconds)) { totalSeconds = 0; }
	return secondstotimespan( totalSeconds );
}

// /////////////////////////
// Player

//
//
// Replaces getplayerleaderboardposition()
// Returns the leaderboard position of the current player.
function ld_getplayerleaderboardposition() {
    return $prop('LovelyPlugin.ld_Telemetry.Session.Position');
}

//
//
// Replaces currentlapgetsectortime(sector, includePreviousSectorsTime)
// Returns the time of the given sector (sector starting from 1). When `includePreviousSectorTime` is `true` the value cumulates the previous sectors.
function ld_currentlapgetsectortime(sector, includePreviousSectorsTime = true) {
	let position = ld_getplayerleaderboardposition();
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.SectorsCurrentLap');
	let driver_data = JSON.parse(drivers);
	let sectorTime = 0;
	if (includePreviousSectorsTime || sector == 1 ) {
		sectorTime = driver_data[ position - 1 ]?.['Data']?.[sector]?.['SectorTimeMS'] / 1000;
		return sectorTime ? secondstotimespan( sectorTime ) : null
	} else {
		sectorTime = ( driver_data[ position - 1 ]?.['Data']?.[sector]?.['SectorTimeMS'] - driver_data[ position - 1 ]?.['Data']?.[sector-1]?.['SectorTimeMS'] ) / 1000;
		return sectorTime ? secondstotimespan( sectorTime ) : null
	}
}

//
//
// Replaces lastlapgetsectortime(sector, includePreviousSectorsTime)
// Returns the time of the given sector for the last completed lap (sector starting from 1). When `includePreviousSectorTime` is `true` the value cumulates the previous sectors.
function ld_lastlapgetsectortime(sector, includePreviousSectorsTime = true) {
	let position = ld_getplayerleaderboardposition();
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.SectorsLastLap');
	let driver_data = JSON.parse(drivers);
	let sectorTime = 0;
	if (includePreviousSectorsTime || sector == 1 ) {
		sectorTime = driver_data[ position - 1 ]?.['Data']?.[sector]?.['SectorTimeMS'] / 1000;
		return sectorTime ? secondstotimespan( sectorTime ) : null
	} else {
		sectorTime = ( driver_data[ position - 1 ]?.['Data']?.[sector]?.['SectorTimeMS'] - driver_data[ position - 1 ]?.['Data']?.[sector-1]?.['SectorTimeMS'] ) / 1000;
		return sectorTime ? secondstotimespan( sectorTime ) : null
	}
}

//
//
// Replaces sessionbestlapgetsectortime(sector, includePreviousSectorsTime)
// Returns the time of the given sector for the session best completed lap (sector starting from 1). When `includePreviousSectorTime` is `true` the value cumulates the previous sectors.
function ld_sessionbestlapgetsectortime(sector, includePreviousSectorsTime = true) {
	let position = ld_getplayerleaderboardposition();
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.SectorsBestLap');
	let driver_data = JSON.parse(drivers);
	let sectorTime = 0;
	if (includePreviousSectorsTime || sector == 1 ) {
		sectorTime = driver_data[ position - 1 ]?.['Data']?.[sector]?.['SectorTimeMS'] / 1000;
		return sectorTime ? secondstotimespan( sectorTime ) : null
	} else {
		sectorTime = ( driver_data[ position - 1 ]?.['Data']?.[sector]?.['SectorTimeMS'] - driver_data[ position - 1 ]?.['Data']?.[sector-1]?.['SectorTimeMS'] ) / 1000;
		return sectorTime ? secondstotimespan( sectorTime ) : null
	}
}
                
//
//
// Replaces getbestsplittime()
// Returns the best sector split time of the session (sector starting from 1).
function ld_getbestsplittime(sector) {
	let position = ld_getplayerleaderboardposition();
	position ??= 1;
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.SectorsBestSplits');
	let driver_data = JSON.parse(drivers);
	sectorTime = driver_data[ position - 1 ]?.['Data']?.[sector]?.['SplitTimeMS'] / 1000;
	return sectorTime ? secondstotimespan( sectorTime ) : null
}

//
//
// Replaces bestsectortime(sector, includePreviousSectorsTime)
// Returns the best sector time of the given sector (sector starting from 1). When `includePreviousSectorTime` is `true` the value cumulates the previous sectors.
function ld_bestsectortime(sector, includePreviousSectorsTime = true) {
	let position = ld_getplayerleaderboardposition();
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.SectorsBestSplits');
	let driver_data = JSON.parse(drivers);
	let sectorTime = 0;
	if (includePreviousSectorsTime && sector > 1 ) {
		for (let i = 1; i <= sector; i++) {
			let sectorTime = driver_data[ position - 1 ]?.['Data']?.[i]?.['SplitTimeMS'] / 1000;
			if (sectorTime) {
				totalTime += sectorTime;
			} else {
				return null;
			}
		}
		return secondstotimespan(totalTime);
	} else {
		sectorTime = driver_data[ position - 1 ]?.['Data']?.[sector]?.['SplitTimeMS'] / 1000;
		return sectorTime ? secondstotimespan( sectorTime ) : null
	}
}



// /////////////////////////
// Session

//
//
// Replaces getleaderboardcarclasscount()
// Returns how many car classes are available on the leaderboard.
function ld_getleaderboardcarclasscount() {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.Class');
	let driver_data = JSON.parse(drivers);
	const classCount = new Set(driver_data).size;
	return classCount;
}



// /////////////////////////
// Opponents

//
//
// Replaces driveravailable()
// Returns true for the race position if a driver is avaialble (when avaialble).
function ld_driveravailable(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.Position');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ] !== undefined ? true : false; // Zero array correction
}

//
//
// Replaces driverisplayer()
// Returns true for the race position if the driver is the actual player (when available).
function ld_driverisplayer(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.isPlayer');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ] ? true : false; // Zero array correction
}

//
//
// Replaces drivername()
// Returns for the race position the driver's name (when available).
function ld_drivername(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.DriverName');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ]; // Zero array correction
}

//
//
// Replaces driverid()
// Returns for the race position the driver's unique id (when available).
function ld_driverid(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.Id');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ]; // Zero array correction
}

//
//
// Replaces drivercarnumber()
// Returns for the race position the driver's car number (when available).
function ld_drivercarnumber(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.Number');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ]; // Zero array correction
}

//
//
// Replaces drivercarname()
// Returns for the race position the driver's car name (when available).
function ld_drivercarname(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.CarName');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ]; // Zero array correction
}

//
//
// Replaces drivercurrentlap()
// Returns for the race position the driver's current lap (when available).
function ld_drivercurrentlap(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.CurrentLap');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ]; // Zero array correction
}

//
//
// Replaces drivercurrentlaphighprecision()
// Returns for the race position the driver's guessed lap in the race including the actual lap percent (when available).
function ld_drivercurrentlaphighprecision(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.CurrentLapPrecise');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ]; // Zero array correction
}

//
//
// Replaces driverbestlap()
// Returns for the race position the driver's best lap time (when available).
function ld_driverbestlap(position) {
	position ??= 1;
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.BestLapTime');
	let driver_data = JSON.parse(drivers);	
	return ld_stringToTimespan( driver_data[ position - 1 ] ); // Zero array correction
}
                
//
//
// Replaces driverlastlap()
// Returns for the race position the driver's last lap time (when available).
function ld_driverlastlap(position) {
	position ??= 1;
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.LastLapTime');
	let driver_data = JSON.parse(drivers);
	return ld_stringToTimespan( driver_data[ position - 1 ] ); // Zero array correction
}
                
//
//
// Replaces drivercurrentsector()
// Returns for the race position the driver's current sector (starting from 1) (when available).
function ld_drivercurrentsector(position) {
	position ??= 1;
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.SectorIndex');
	let driver_data = JSON.parse(drivers);
	return driver_data[ position - 1 ]; // Zero array correction
}
                
//
//
// Replaces driversectorcurrentlap()
// Returns for the race position and the sector (starting from 1) the driver's current lap sector time. When `includePreviousSectorTime` is `true` the value cumulates the previous sectors.
function ld_driversectorcurrentlap(position, sector, includePreviousSectorsTime = true) {
	position ??= 1;
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.SectorsCurrentLap');
	let driver_data = JSON.parse(drivers);
	let sectorTime = 0;
	if (includePreviousSectorsTime || sector == 1 ) {
		sectorTime = driver_data[ position - 1 ]?.['Data']?.[sector]?.['SectorTimeMS'] / 1000;
		return sectorTime ? secondstotimespan( sectorTime ) : null
	} else {
		sectorTime = ( driver_data[ position - 1 ]?.['Data']?.[sector]?.['SectorTimeMS'] - driver_data[ position - 1 ]?.['Data']?.[sector-1]?.['SectorTimeMS'] ) / 1000;
		return sectorTime ? secondstotimespan( sectorTime ) : null
	}
}
                
//
//
// Replaces driversectorlastlap()
// Returns for the race position and the sector (starting from 1) the driver's last completed lap sector time. When `includePreviousSectorTime` is `true` the value cumulates the previous sectors.
function ld_driversectorlastlap(position, sector, includePreviousSectorsTime = true) {
	position ??= 1;
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.SectorsLastLap');
	let driver_data = JSON.parse(drivers);
	let sectorTime = 0;
	if (includePreviousSectorsTime || sector == 1 ) {
		sectorTime = driver_data[ position - 1 ]?.['Data']?.[sector]?.['SectorTimeMS'] / 1000;
		return sectorTime ? secondstotimespan( sectorTime ) : null
	} else {
		sectorTime = ( driver_data[ position - 1 ]?.['Data']?.[sector]?.['SectorTimeMS'] - driver_data[ position - 1 ]?.['Data']?.[sector-1]?.['SectorTimeMS'] ) / 1000;
		return sectorTime ? secondstotimespan( sectorTime ) : null
	}
}
                
//
//
// Replaces driversectorbest()
// Returns for the race position and the sector (starting from 1) the driver's session best sector time. When `includePreviousSectorTime` is `true` the value cumulates the previous sectors.
function ld_driversectorbest(position, sector, includePreviousSectorsTime = true) {
	position ??= 1;
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.SectorsBestSplits');
	let driver_data = JSON.parse(drivers);
	let sectorTime = 0;
	let totalTime = 0;
	if (includePreviousSectorsTime || sector == 1 ) {
		for (let i = 1; i <= sector; i++) {
			sectorTime = driver_data[ position - 1 ]?.['Data']?.[i]?.['SplitTimeMS'] / 1000;
			if (sectorTime) {
				totalTime += sectorTime;
			} else {
				return null;
			}
		}
		return secondstotimespan(totalTime);
	} else {
		sectorTime = driver_data[ position - 1 ]?.['Data']?.[sector]?.['SplitTimeMS'] / 1000;
		return sectorTime ? secondstotimespan( sectorTime ) : null
	}
}
                
//
//
// Replaces driversectorbestlap()
// Returns for the race position and the sector (starting from 1) the driver's best lap sector time. When `includePreviousSectorTime` is `true` the value cumulates the previous sectors.
function ld_driversectorbestlap(position, sector, includePreviousSectorsTime) {
	position ??= 1;
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.SectorsBestLap');
	let driver_data = JSON.parse(drivers);
	let sectorTime = 0;
	if (includePreviousSectorsTime || sector == 1 ) {
		sectorTime = driver_data[ position - 1 ]?.['Data']?.[sector]?.['SectorTimeMS'] / 1000;
		return sectorTime ? secondstotimespan( sectorTime ) : null
	} else {
		sectorTime = ( driver_data[ position - 1 ]?.['Data']?.[sector]?.['SectorTimeMS'] - driver_data[ position - 1 ]?.['Data']?.[sector-1]?.['SectorTimeMS'] ) / 1000;
		return sectorTime ? secondstotimespan( sectorTime ) : null
	}
}

//
//
// Replaces driverclassposition()
// Returns for the race position the driver's position in his own class (when available).]
function ld_driverclassposition(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.ClassPosition');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ]; // Zero array correction
}

//
//
// Replaces drivercarclass()
// Returns for the race position the driver's car class (when available).
function ld_drivercarclass(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.Class');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ]; // Zero array correction
}

//
//
// Replaces drivercarclasscolor()
// Returns for the race position the driver's car class color, provided by iRacing, autoassigned otherwise (when available).
function ld_drivercarclasscolor(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.ClassColor');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ]; // Zero array correction
}

//
//
// Replaces drivercarclasstextcolor()
// Returns for the race position the driver's car class text color, white or black to be readable over car class color (when available).
function ld_drivercarclasstextcolor(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.ClassColorText');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ]; // Zero array correction
}

//
//
// Driver Category (ACC ONLY)
// Returns for the race position the driver's category, ACC only (when available).
function ld_drivercategory(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.Category');
	let driver_data = JSON.parse(drivers).split(",");
    return driver_data[ position - 1 ]; // Zero array correction
}

//
//
// Driver iRating (iRacing ONLY)
// Replaces driveriracingirating()
// Returns for the race position the driver's iRating (when available).
function ld_driveriracingirating(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.iRating');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ]; // Zero array correction
}

//
//
// Driver License (iRacing ONLY)
// Replaces driverlicencestring()
// Returns for the race position the driver's license string (when available).
function ld_driverlicencestring(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.License');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ]; // Zero array correction
}

//
//
// Replaces driverpositiongain()
// Returns for the race position the driver's position gain since the start of the race/connection (when available).
function ld_driverpositiongain(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.PositionGain');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ]; // Zero array correction
}

//
//
// Replaces driverpositiongainclass()
// Returns for the race position the driver's position gain in his own class since the start of the race/connection (when available).
function ld_driverpositiongainclass(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.ClassPositionGain');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ]; // Zero array correction
}

//
//
// Replaces drivertrackpositionpercent()
// Returns for the race position the driver's track position, 0.0-1.0 (when available).
function ld_drivertrackpositionpercent(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.TrackPosition');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ] ?? 0; // Zero array correction
}

//
//
// Replaces driverdeltatoplayer()
// Returns for the race position the driver's delta to the opponent's best lap (when available).
function ld_driverdeltatoplayer(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.DeltaToPlayer');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ]; // Zero array correction
}

//
//
// Replaces drivergaptoplayer()
// Returns for the race position the driver's gap to the player (when available).
function ld_drivergaptoplayer(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.GapToPlayer');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ]; // Zero array correction
}

//
//
// Replaces drivergaptoleader()
// Returns for the race position the driver's gap to the leader (when available).
function ld_drivergaptoleader(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.GapToLeader');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ]; // Zero array correction
}

//
//
// Replaces drivergaptoclassleader()
// Returns for the race position the driver's gap to his own class leader (when available).
function ld_drivergaptoclassleader(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.GapToClassLeader');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ]; // Zero array correction
}

//
//
// Replaces driverrelativegaptoplayer()
// Returns for the race position the driver's relative gap to player (when available).
function ld_driverrelativegaptoplayer(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.GapToPlayerRelative');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ]; // Zero array correction
}

//
//
// Replaces driverrelativedistancetoplayer()
// Returns for the race position the driver's relative distance to player (when available).
function ld_driverrelativedistancetoplayer(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.DistanceToPlayerRelative');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ]; // Zero array correction
}

//
//
// Replaces driveriscarinpit()
// Returns for the race position if the driver's car is in the pit (when available).
function ld_driveriscarinpit(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.IsInPit');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ]; // Zero array correction
}

//
//
// Replaces driveriscarinpitlane()
// Returns for the race position if the driver's car is in the pit lane (when available).
function ld_driveriscarinpitlane(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.IsInPitLane');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ]; // Zero array correction
}

//
//
// Replaces driveriscaringarage()\
// Returns for the race position if the driver's car is in the garage (when available).
function ld_driveriscaringarage(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.IsInGarage');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ]; // Zero array correction
}

//
//
// Replaces driverpitcount()
// Returns for the race position how many times the driver went to the pits (when available).
function ld_driverpitcount(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.PitCount');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ]; // Zero array correction
}

//
//
// Replaces driverlapsdonesincelastpitout()
// Returns for the race position how many laps the driver drove since the last pit exit, 0.0 to X.0 - guessed (when available).
function ld_driverlapsdonesincelastpitout(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.PitLapsSince');
	let driver_data = JSON.parse(drivers);
    return driver_data[ position - 1 ]; // Zero array correction
}

//
//
// Replaces driverpitlastduration()
// Returns for the race position how long the last pit stop took (when available).
function ld_driverpitlastduration(position) {
	let drivers = $prop('LovelyPlugin.ld_Telemetry.Opponents.PitLastDuration');
	let driver_data = JSON.parse(drivers);
	return ld_stringToTimespan( driver_data[ position - 1 ] ); // Zero array correction
}

//
//
// Replaces getopponentleaderboardposition_aheadbehind()
// Returns the leaderboard position of the player's ahead/behind oin track opponents (0 = player, -1 = the first ahead, 1 the first behind)
function ld_getopponentleaderboardposition_aheadbehind(relativePos) {
	let relativeDistance = JSON.parse($prop('LovelyPlugin.ld_Telemetry.Opponents.DistanceToPlayerRelative'));
	let driversPosition = JSON.parse($prop('LovelyPlugin.ld_Telemetry.Opponents.Position'));
	const isAllZeros = driversPosition.every(pos => pos === 0);
	if (isAllZeros) {
		driversPosition = Array.from({ length: driversPosition.length }, (_, i) => i + 1);
	}
	const myIndex = relativeDistance.indexOf(null);
	let targetIndex = (myIndex + relativePos) % relativeDistance.length;
	if (targetIndex < 0) {
		targetIndex += relativeDistance.length;
	}
	return driversPosition[targetIndex];
}

// 
//
// Replaces getopponentleaderboardposition_playerclassonly()
// Returns the leaderboard position of the opponents of the same class as player (1 = first opponent of the class)
function ld_getopponentleaderboardposition_playerclassonly(position) {
	if ( ld_getleaderboardcarclasscount() === 1 ) { return position };
	let playerClass = $prop('LovelyPlugin.ld_Telemetry.Session.CarClass');
	let driversClass = JSON.parse($prop('LovelyPlugin.ld_Telemetry.Opponents.Class'));
	let driversPosition = JSON.parse($prop('LovelyPlugin.ld_Telemetry.Opponents.Position'));
	let driversClassPosition = JSON.parse($prop('LovelyPlugin.ld_Telemetry.Opponents.ClassPosition'));
	const isAllZeros = driversPosition.every(pos => pos === 0);
	if (isAllZeros) {
		driversPosition = Array.from({ length: driversPosition.length }, (_, i) => i + 1);
	}
	const driverPosition = driversClassPosition.findIndex((pos, index) => 
		pos === position && driversClass[index] === playerClass
	);
	return driverPosition !== -1 ? driversPosition[driverPosition] : null;
}