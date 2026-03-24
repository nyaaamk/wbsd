const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist    : "Bon Jovi",
    tracks    : ["Let It Rock", "You Give Love a Bad Name"]
  },
  2468: {
    albumTitle: "1999",
    artist    : "Prince",
    tracks    : ["1999", "Little Red Corvette"]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: []
  },
  5439: {
    albumTitle: "ABBA Gold"
  }
};

const updateRecords = (records, id, prop, value) => {
  // If value is empty → delete property
  if (value === "") {
    delete records[id][prop];
  }
  // If prop is not "tracks"
  else if (prop !== "tracks") {
    records[id][prop] = value;
  }
  // If prop is "tracks"
  else {
    // If tracks does not exist → create array
    if (!records[id].hasOwnProperty("tracks")) {
      records[id].tracks = [];
    }
    // Push value into tracks
    records[id].tracks.push(value);
  }

  return records;
};