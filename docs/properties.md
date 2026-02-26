---
title: Properties
layout: default
has_toc: true
nav_order: 30
---

# Properties

TeamLINQ acts as a proxy between Simhub properties and your Dashboard or Application.


## Syntax
All TeamLINQ properties can be directly accessed within Dash Editor. You must always use the full property name, as demonstrated below:

**LovelyPlugin.ld_Telemetry.** + `Property Name`
{: .note }


## Data Types

| `string` | **"Lovely Sim Racing"** |
| `int` | **4356** |
| `double` | **4.686948** |
| `TimeSpan` | **00:01:44.6050000** |
| `DateTime` | **2/25/2026 1:17:32 PM** |


## Example Usage

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