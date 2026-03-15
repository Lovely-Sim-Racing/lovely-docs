---
title: How to
layout: default
nav_order: 20
---

# How to use

TeamLINQ acts as a proxy between Simhub properties and your Dashboard or Application.

## Syntax
You must always use the full property name, as demonstrated below:

{: .note }
**LovelyPlugin.TeamLINQ.** + `Property Name`

## Data Types

| `string` | **"Lovely Sim Racing"** |
| `int` | **4356** |
| `double` | **4.686948** |
| `TimeSpan` | **00:01:44.6050000** |
| `DateTime` | **2/25/2026 1:17:32 PM** |


## SimHub Dash Studio
In SimHub's Dash Studio, TeamLINQ properties work just like any other property—you can access and use them exactly as you're used to. Just ensure the Lovly Plugin is installed and enabled, and you'll be ready to go.

### Pre-flight checks 
Before you start using the TeamLINQ properties, it is advised that you first check a few things:

```js
// Lovely Plugin is installed & enabled and
// Local and Remote Plugin versions are the same
// Returns 'bool'
return $prop('LovelyPlugin.Version') === $prop('LovelyPlugin.TeamLINQ.PluginVersion')

// Local user is streaming data from remote 
// Returns 'bool'
return $prop('LovelyPlugin.TeamLINQ.IsStreaming')
``` 

### Javascript
```js
return $prop('LovelyPlugin.TeamLINQ.Session.GameId');
```

### NCalc
```js
[LovelyPlugin.TeamLINQ.Session.GameId]
```

### Dual mode
Use this option if you do not want to enforce the TeamLINQ usage.
```js
let TeamLINQ = {bool - A setting in your Plugin or Dashboard}
if ( TeamLINQ ) {
  return $prop('LovelyPlugin.TeamLINQ.Session.GameId');
} else {
  return $prop('DataCorePlugin.CurrentGame');
}
```

## SimHub Plugin Development
Similarily, when developing your plguin, you can access TeamLINQ properties as you would access any other property in SImHub.


```c#
plugin.Manager.GetPropertyValue("LovelyPlugin.TeamLINQ.Time");
```