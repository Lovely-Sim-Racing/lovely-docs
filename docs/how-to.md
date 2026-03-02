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
**LovelyPlugin.ld_Telemetry.** + `Property Name`

## Data Types

| `string` | **"Lovely Sim Racing"** |
| `int` | **4356** |
| `double` | **4.686948** |
| `TimeSpan` | **00:01:44.6050000** |
| `DateTime` | **2/25/2026 1:17:32 PM** |


## SimHub Dash Studio
In SimHub's Dash Studio, TeamLINQ properties work just like any other property—you can access and use them exactly as you're used to. Just ensure the Lovly Plugin is installed and enabled, and you'll be ready to go.

### Javascript
```js
return $prop('LovelyPlugin.ld_Telemetry.Time');
```

### NCalc
```js
[LovelyPlugin.ld_Telemetry.Time]
```

### Dual mode
Use this option if you do not want to enforce the TeamLINQ usage.
```js
let TeamLINQ = {bool - A setting in your Plugin or Dashboard}
if ( TeamLINQ ) {
  return $prop('LovelyPlugin.ld_Telemetry.Time');
} else {
  return $prop('DataCorePlugin.CurrentDateTime');
}
```

## SimHub Plugins

```c#
plugin.Manager.GetPropertyValue("LovelyPlugin.ld_Telemetry.Time");
```