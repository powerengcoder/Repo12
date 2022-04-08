var collection ={
2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
    ]
},
2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
        "1999",
        "Little Red Corvette"
    ]
},
1245: {
    artist: "Robert Palmer",
    tracks: [ ]

},
5439: {
    album: "ABBA Gold"
}
};

var oldCollection = JSON.parse(JSON.stringify(collection));

function updateRecords(object, id, prop, value){
if (prop = "tracks"){
    if(object[id][prop] == undefined){
        object[id]["tracks"] = new Array();
        var arr = object[id][prop];
        arr.push(value);
    } else {
        var arr = object[id][prop];
        arr.push(value);
    }
}

return object;
}
//console.log(updateRecords(collection, 5439, "artist", "ABBA"));
//console.log(updateRecords(collection, 2548, "tracks", "Tryyy"));
//console.log(updateRecords(collection, 1245, "tracks", "Addicted to Love"));
//console.log(updateRecords(collection, 5439, "tracks", "Addicted to Love"));
//console.log(updateRecords(collection, 5439, "tracks", "Addicted to Love"));
console.log(updateRecords(collection, 5439, "tracks", "Tryyyy" ));
module.exports = updateRecords;