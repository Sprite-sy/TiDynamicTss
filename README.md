TiDynamicTss
============

a hack to do dynamic tss in titanium alloy

    1 function L is An alias for Titanium.Locale.getString. and it is allowed to be used in alloy tss file
    2 some hack can be applied to do real dymanic tss by replace the L implementation.
    3 check the code and enjoy it !


Usage

    1 add hacktss module to you project
    2 add the following tow lines to your alloy.js
        Alloy.Globals.L = L;
        var L = require('hacktss').hackL;
    3 now your can use tss like following in your tss code
        ".test": {
            text: L("hello", "hello"), //original implement
            top: L(null, "1+1"), //caculation
            width: L(null, "myFunc(100)"),   //your own funciton
            height: L(null, "Titanium.Platform.displayCaps.platformWidth"),  //system value
            bottom: L(null, "Titanium.Platform.displayCaps.platformWidth/2")  //system value
        }
